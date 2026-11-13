# MvDev Portfolio — Documentação do Projeto

> **Última atualização:** 13 de Novembro de 2024  
> **Status:** Versão 2.0 — Design System Implementado

---

## 📋 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Stack Tecnológica](#stack-tecnológica)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Design System](#design-system)
- [Implementações por Fase](#implementações-por-fase)
- [Guia de Uso](#guia-de-uso)
- [Pendências](#pendências)
- [Roadmap Futuro](#roadmap-futuro)

---

## Sobre o Projeto

Portfólio profissional de **Vinicius Dilly**, desenvolvedor Full Stack com foco em Backend Engineering. O site foi completamente redesenhado para apresentar competências técnicas, experiências e projetos de forma moderna e profissional.

### Posicionamento
- **Título:** Full Stack Developer · Backend Engineering
- **Foco:** C#, .NET, TypeScript, React
- **Nível:** Junior/Pleno (2+ anos de experiência)

---

## Stack Tecnológica

| Camada | Tecnologia | Versão |
|--------|------------|--------|
| Framework | Next.js | 16.0.10 |
| Runtime | Node.js | (pelo package.json) |
| Linguagem | TypeScript | 5.x |
| Estilização | Tailwind CSS | v4 |
| Ícones | react-icons | 5.5.0 |
| Animação | Lenis + CountUp.js | 1.3.23 / 2.9.0 |
| Carrossel | Swiper | 12.0.3 |
| Email | Resend (preparado) | - |
| Validação | Zod | - |

---

## Estrutura de Arquivos

```
mvdev-portfolio/
├── app/
│   ├── api/contact/route.ts    # Endpoint formulário de contato
│   ├── data/route.ts           # API GitHub stats
│   ├── projects/[slug]/        # Páginas de detalhe (removido - redundancy)
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Landing page
│
├── components/
│   ├── ui/
│   │   ├── Button.tsx          # Botões com variants
│   │   ├── Card.tsx            # Cards reutilizáveis
│   │   └── TechnologyBadge.tsx # Tags de tecnologia
│   ├── HeroSection.tsx         # Seção hero principal
│   ├── ServicesSection.tsx     # Serviços oferecidos
│   ├── ResumeSection.tsx       # Experiência/educação/skills
│   ├── WorkSection.tsx         # Projetos em destaque (carrossel)
│   ├── ContactSection.tsx      # Formulário de contato
│   ├── Footer.tsx              # Rodapé
│   ├── Nav.tsx                 # Navegação responsiva
│   └── Lenis.tsx               # Smooth scroll
│
├── lib/
│   ├── i18n/
│   │   ├── translations.ts     # Traduções EN/PT unificadas
│   │   ├── resume.ts           # Conteúdo currículo estruturado
│   │   ├── projects.ts         # Dados dos projetos
│   │   └── index.ts            # Re-export centralizado
│   ├── design-tokens.ts        # Design System tokens
│   ├── LanguageContext.tsx     # Provider internacionalização
│   ├── useScrollReveal.ts      # Hook animações scroll
│   └── utils.ts                # Utilitários (cn())
│
├── public/
│   ├── pdf/
│   │   ├── mvmd-en-resume.pdf  # Currículo inglês ✅
│   │   ├── mvmd-pt-resume.html # Template português ⏳
│   │   └── INSTRUICOES.md      # Como gerar PDF PT
│   └── images/                 # Assets estáticos
│
└── .env.local                  # Variáveis de ambiente (template)
```

---

## Design System

O projeto implementou um **Design System completo** centralizado em `lib/design-tokens.ts` e `app/globals.css`.

### Tokens Principais

#### Cores
```typescript
{
  primary: '#4d8be9',           // Azul elétrico (brand)
  background: {
    primary: '#071108',         // Navy muito escuro
    secondary: '#0e1510',       // Grafite escuro
  },
  text: {
    primary: '#ffffff',         // Branco suave
    secondary: '#a5adb8',       // Cinza neutro
    muted: '#6b7280',           // Cinza mais claro
  }
}
```

#### Tipografia
- **Display:** Sora / Unbounded (títulos impactantes)
- **Sans:** Geist (corpo do texto, interface)
- **Mono:** Geist Mono (código, labels técnicos)

Escala tipográfica modular baseada em ratio 1.25:
- xs: 12px | sm: 14px | base: 16px | lg: 18px | xl: 20px
- 2xl: 24px | 3xl: 30px | 4xl: 36px | 5xl: 48px | 6xl: 60px

#### Espaçamento
Grid baseado em 4px:
- xs: 4px | sm: 8px | md: 16px | lg: 24px | xl: 32px
- xxl: 48px | xxxl: 64px | xxxxl: 96px

#### Breakpoints
| Token | Tamanho | Dispositivo |
|-------|---------|-------------|
| sm | 640px | Mobile landscape |
| md | 768px | Tablet |
| lg | 1024px | Laptop |
| xl | 1280px | Desktop |
| 2xl | 1536px | Large desktop |

#### Componentes Prontos
- ✅ Buttons (primary/secondary/ghost)
- ✅ Cards com hover states
- ✅ Badges/Tags
- ✅ Form inputs com validação visual
- ✅ Section headers (label/title/subtitle)
- ✅ Dividers
- ✅ Status indicators (success/error/warning)

---

## Implementações por Fase

### ✅ FASE 01 — Fundação Técnica
- [x] Corrigir erros TypeScript (erro circular em Language type)
- [x] Criar estrutura `lib/i18n/` unificada
- [x] Remover dependências redundantes (bootstrap-icons, remixicon, @fortawesome)
- [x] Eliminar código morto (professional-content.ts, etc.)
- [x] Calcular experiência dinamicamente (agora fixo em 3+)

### ✅ FASE 02 — Posicionamento Profissional
- [x] Novo Hero content com positioning backend-first
- [x] Revisão experiências profissionais (19SL documentada)
- [x] Skills organizados em 5 categorias com descrições
- [x] Formação diferenciada por tipo (academic/course/language)
- [x] About section com narrativa técnica profissional
- [x] Traduções EN/PT completas e consistentes

### ✅ FASE 03 — Remove Redundancies
- [x] Remoção da página `/projects` (seção Work já cumpre função)
- [x] Atualização navegação (sem link "Projetos")
- [x] Simplificação da estrutura de rotas

### ✅ FASE 04 — Accessibilidade & UX
- [x] ARIA labels adicionados em todos os sections
- [x] Focus states visíveis
- [x] prefers-reduced-motion respeitado
- [x] Contraste verificado (WCAG AA)
- [x] Semântica HTML corrigida

### ✅ FASE 05 — Currículo Bilíngue
- [x] Sistema de download condicional (EN/PT)
- [x] Template HTML criado para currículo PT
- [x] Instruções de geração de PDF incluídas
- [ ] **PENDENTE:** Gerar arquivo `mvmd-pt-resume.pdf`

### ✅ FASE 06 — Responsividade Completa
- [x] Padding responsivo padronizado
- [x] Tipografia escalonada com clamp()
- [x] Grid layouts adaptativos
- [x] Menu mobile funcional
- [x] Ícones restaurados (react-icons)

### ✅ FASE 07 — Formulário Funcional
- [x] API route `/api/contact` criada
- [x] Validação com Zod
- [x] Estado de loading no frontend
- [x] Feedback visual (sucesso/erro)
- [x] Mensagens bilíngues
- [ ] **PENDENTE:** Configurar RESEND_API_KEY para emails reais

### ✅ FASE 08 — Design System
- [x] Tokens CSS centralizados em `lib/design-tokens.ts`
- [x] Variáveis globais em `:root`
- [x] Componentes reutilizáveis definidos
- [x] Hierarquia tipográfica consistente
- [x] Sistema de espaçamento padronizado
- [x] Classes utilitárias documentadas

---

## Guia de Uso

### Instalação
```bash
git clone https://github.com/mvdevelop/mvdev-portfolio.git
cd mvdev-portfolio
npm install
```

### Desenvolvimento
```bash
npm run dev
# Acesse: http://localhost:3000
```

### Build Produção
```bash
npm run build
npm start
```

### Testes de TypeScript
```bash
npx tsc --noEmit
```

---

## Pendências

### 🔴 Críticas (bloqueiam deploy)
- [ ] **PDF Currículo PT:** Criar `public/pdf/mvmd-pt-resume.pdf` seguindo template HTML
  - Abra: `public/pdf/mvmd-pt-resume.html` no navegador
  - Pressione Ctrl+P → Salvar como PDF
  - Salve na pasta `public/pdf/`

- [ ] **RESEND_API_KEY:** Para formulários funcionarem em produção
  ```bash
  echo 'RESEND_API_KEY=re_sua_chave_aqui' >> .env.local
  ```
  - Obter chave em: https://resend.com/api-keys

### 🟡 Recomendadas (melhorias)
- [ ] **Open Graph Dinâmicas:** Implementar geração de imagens OG por projeto
- [ ] **Analytics:** Adicionar Plausible ou PostHog
- [ ] **Testes E2E:** Cypress/Playwright para validação cross-browser
- [ ] **Performance Audit:** Lighthouse CI em PRs

### ⚪ Opcionais (futuro)
- [ ] Light/Dark mode toggle (sistema suporta, UI não exposta)
- [ ] Páginas individuais por projeto (backlog - removido por decisão estratégica)
- [ ] Blog/Articles section
- [ ] Integração LinkedIn Auto-Save ao postar conteúdo

---

## Perguntas Abertas (FASE 02)

Questões pendentes que precisam de resposta do proprietário:

1. **Experiências Brs Inc.** — São reais ou rascunhos? Devem ser adicionadas?
2. **Métricas 19SL** — Há números/resultados para incluir nos cards?
3. **Claims técnicos** — Manter menção a Blazor/AWS/Docker no about?
4. **Novos projetos** — Há projetos adicionais para adicionar ao carrossel?

---

## Roadmap Futuro

### Curto Prazo (1-2 semanas)
- [ ] Finalizar PDF currículo PT
- [ ] Configurar variáveis de ambiente para produção
- [ ] Deploy Vercel com teste end-to-end

### Médio Prazo (1 mês)
- [ ] Implementar Open Graph dinâmicas
- [ ] Adicionar blog simples com MDX
- [ ] Otimizações de performance (lazy loading, image optimization)

### Longo Prazo (3 meses)
- [ ] Sistema de temas (light/dark toggle)
- [ ] Página de artigos/tutoriais
- [ ] Integração com CMS headless (Sanity/Contentful)
- [ ] Dashboard admin básico

---

## Notas Técnicas

### Internacionalização
- Fonte única de verdade: `lib/i18n/translations.ts`
- Provider via `LanguageContext`
- Persistência em localStorage
- `<html lang>` sincronizado automaticamente

### Imagens
- Hero: fixed priority (above fold)
- Projetos: lazy loading nativo (next/image)
- Todas otimizadas automaticamente pelo Next.js

### SEO
- Sitemap.xml gerado dinamicamente
- Robots.txt configurado
- JSON-LD Schema.org (Person)
- Meta tags OG/Twitter em layout.tsx

---

## Licença

Este projeto é propriedade de Vinicius Dilly e está disponível como portfolio profissional.

---

**💡 Dica:** Sempre que fizer mudanças significativas, atualize esta seção conforme o padrão mantido.
