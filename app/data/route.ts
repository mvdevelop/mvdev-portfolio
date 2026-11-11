
import { NextResponse } from 'next/server';
import { siteConfig } from '@/lib/site-config';

export async function GET() {
    try {
        const username = 'mvdevelop';
        const token = process.env.GITHUB_TOKEN;

        const headers: HeadersInit = {
            'Accept': 'application/vnd.github+json'
        };

        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }

        // Busca dados da API pública do GitHub
        const [commitsResponse, profileResponse] = await Promise.all([
            fetch(`https://api.github.com/search/commits?q=author:${username}`, { headers, next: { revalidate: 3600 } }),
            fetch(`https://api.github.com/users/${username}`, { headers, next: { revalidate: 3600 } })
        ]);

        let totalCommits = siteConfig.stats.githubFallback.totalCommits;
        let publicRepos = siteConfig.stats.githubFallback.publicRepos;

        if (commitsResponse.ok) {
            const commitsData = await commitsResponse.json();
            if (commitsData.total_count !== undefined) {
                totalCommits = commitsData.total_count;
            }
        } else {
            console.error(`Erro commits GitHub Status: ${commitsResponse.status}`);
        }

        if (profileResponse.ok) {
            const profileData = await profileResponse.json();
            if (profileData.public_repos !== undefined) {
                publicRepos = profileData.public_repos;
            }
        } else {
            console.error(`Erro profile GitHub Status: ${profileResponse.status}`);
        }

        return NextResponse.json({ totalCommits, publicRepos, source: "github" });

    } catch (error) {
        console.error("Erro interno no servidor ao buscar dados do GitHub:", error);
        return NextResponse.json(
            {
                totalCommits: siteConfig.stats.githubFallback.totalCommits,
                publicRepos: siteConfig.stats.githubFallback.publicRepos,
                source: "fallback",
            },
            { status: 200 },
        );
    }
}
