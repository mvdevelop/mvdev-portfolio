
import { NextResponse } from 'next/server';
import { siteConfig } from '@/lib/site-config';

const GITHUB_USERNAME = 'mvdevelop';
const DEFAULT_TIMEOUT = 5000; // 5 seconds timeout
const MAX_RETRIES = 2;

interface GitHubStats {
    totalCommits: number;
    publicRepos: number;
    source: "github" | "fallback";
    cachedAt: string;
    errors?: {
        commits?: string;
        profile?: string;
    };
}

async function fetchWithTimeout(url: string, options: RequestInit, timeoutMs: number): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal,
        });
        return response;
    } finally {
        clearTimeout(timeoutId);
    }
}

interface GitHubApiResponse {
    ok: boolean;
    data: Record<string, unknown> | null;
    error?: string;
}

async function fetchGitHubData(
    url: string,
    headers: HeadersInit,
    retries = MAX_RETRIES
): Promise<GitHubApiResponse> {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await fetchWithTimeout(url, { headers }, DEFAULT_TIMEOUT);

            if (response.ok) {
                const data = await response.json();
                return { ok: true, data };
            }

            if (attempt < retries && response.status === 403) {
                // Rate limit - wait and retry
                await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
                continue;
            }

            return {
                ok: false,
                data: null,
                error: `HTTP ${response.status}: ${response.statusText}`,
            };
        } catch (error) {
            if (attempt < retries) {
                await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
                continue;
            }

            return {
                ok: false,
                data: null,
                error: error instanceof Error ? error.message : 'Unknown error',
            };
        }
    }

    return { ok: false, data: null, error: 'Max retries exceeded' };
}

export async function GET() {
    const now = new Date().toISOString();
    const stats: GitHubStats = {
        totalCommits: siteConfig.stats.githubFallback.totalCommits,
        publicRepos: siteConfig.stats.githubFallback.publicRepos,
        source: "fallback",
        cachedAt: now,
        errors: {},
    };

    try {
        const token = process.env.GITHUB_TOKEN;
        const headers: HeadersInit = {
            'Accept': 'application/vnd.github+json',
        };

        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        // Fetch both endpoints in parallel with individual error handling
        const [commitsResult, profileResult] = await Promise.allSettled([
            fetchGitHubData(
                `https://api.github.com/search/commits?q=author:${GITHUB_USERNAME}`,
                headers
            ),
            fetchGitHubData(
                `https://api.github.com/users/${GITHUB_USERNAME}`,
                headers
            ),
        ]);

        let usesGithubData = false;

        // Process commits data
        if (commitsResult.status === 'fulfilled' && commitsResult.value.ok) {
            const total_count = commitsResult.value.data?.total_count;
            if (typeof total_count === 'number') {
                stats.totalCommits = total_count;
                usesGithubData = true;
            } else {
                stats.errors!.commits = 'Invalid response format';
            }
        } else if (commitsResult.status === 'rejected') {
            stats.errors!.commits = commitsResult.reason?.message || 'Request failed';
        }

        // Process profile data
        if (profileResult.status === 'fulfilled' && profileResult.value.ok) {
            const public_repos = profileResult.value.data?.public_repos;
            if (typeof public_repos === 'number') {
                stats.publicRepos = public_repos;
                usesGithubData = true;
            } else {
                stats.errors!.profile = 'Invalid response format';
            }
        } else if (profileResult.status === 'rejected') {
            stats.errors!.profile = profileResult.reason?.message || 'Request failed';
        }

        // Update source if we got at least one successful response
        if (usesGithubData) {
            stats.source = "github";
            console.log('✓ GitHub stats loaded successfully');
        } else {
            console.warn('⚠️ GitHub API unavailable, using fallback data:', stats.errors);
        }

        return NextResponse.json(stats);

    } catch (error) {
        console.error("Critical error fetching GitHub stats:", error);
        return NextResponse.json(stats);
    }
}
