# Currículos em PDF

Este diretório deve conter os currículos do portfólio em formato PDF.

## Arquivos necessários:

1. **mvmd-en-resume.pdf** - Currículo em Inglês ( já existe )
2. **mvmd-pt-resume.pdf** - Currículo em Português ( pendente )

## Como criar o currículo em português:

Você pode usar ferramentas como:
- **Canva** (canva.com) - Template profissional
- **LibreOffice Writer** - Gratuito e open source
- **Google Docs** - Exportar como PDF

### Conteúdo sugerido para o currículo PT:

```
VINICIUS DILLY
Desenvolvedor Full Stack · Backend Engineering
Teresópolis, Rio de Janeiro, Brasil
marcosvmdilly@gmail.com | (+55) 21 99050-6596
linkedin.com/in/vinicius-dilly | github.com/mvdevelop

RESUMO PROFISSIONAL
Desenvolvedor Full Stack com foco em engenharia de backend, atualmente cursando 
Ciência da Computação e atuando profissionalmente no ecossistema Microsoft.

EXPERIÊNCIA PROFISSIONAL
Desenvolvedor Full Stack
19SL | Set 2023 — Presente
• Desenvolvimento Full Stack em ambiente profissional
• Construindo aplicações web e integrações usando C#, .NET, TypeScript e React
• Tecnologias: C#, .NET, REST APIs, TypeScript, React, Git

FORMAÇÃO ACADÊMICA
Ciência da Computação (em curso)
Unif | 2022 — 2026

ENGINHARIA DEVOPS
FIAP | 2024 — 2025

IDIOMAS
Inglês Avançado (C1) | IBL | 2021 — 2023

HABILIDADES TÉCNICAS
Backend: C#, .NET Core, ASP.NET, Entity Framework, Node.js, Java/Spring Boot
Frontend: TypeScript, React, Next.js, Tailwind CSS, Blazor
Bancos de Dados: SQL Server, MongoDB
DevOps: Docker, Git/GitHub, AWS, Google Cloud, Linux
Práticas: Clean Architecture, SOLID, REST API Design, Scrum/Agile
```

## Link para download:
O sistema já está configurado para alternar automaticamente entre EN/PT baseado na linguagem selecionada pelo usuário.

## Instruções Rápidas:

### Para criar o PDF em Português:
1. Copie o conteúdo acima
2. Use o Canva (procure por "currículo profissional")
3. Preencha com os dados fornecidos
4. Exporte como PDF
5. Salve como `mvmd-pt-resume.pdf` neste diretório

### Para ativar o envio de emails (produção):
```bash
# Adicione ao .env.local ou variáveis de ambiente da Vercel:
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
```

### Testando localmente:
```bash
npm run dev
# Acesse http://localhost:3000/#contact
# Preencha o formulário e verifique o console
```
