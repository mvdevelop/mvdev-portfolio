
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const username = 'mvdevelop';
        const token = process.env.GITHUB_TOKEN;

        const headers = {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/vnd.github+json'
        };

        // CORREÇÃO: Verifique o uso correto das crases (`) e o formato correto das URLs abaixo
        const [commitsResponse, profileResponse] = await Promise.all([
            fetch(`https://github.com{username}`, { headers, next: { revalidate: 3600 } }),
            fetch(`https://github.com{username}`, { headers, next: { revalidate: 3600 } })
        ]);

        let totalCommits = 845; 
        let publicRepos = 55;   

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

        return NextResponse.json({ totalCommits, publicRepos });
        
    } catch (error) {
        console.error("Erro interno no servidor ao buscar dados do GitHub:", error);
        return NextResponse.json({ totalCommits: 845, publicRepos: 55 }, { status: 500 });
    }
}
