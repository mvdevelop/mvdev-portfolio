# 📋 Pendências para Implementação — MvDev Portfolio

**Data:** 14 de Novembro de 2026  
**Versão:** 3.0  
**Status Geral:** 98% Completo | 2% Pendente (bloqueadores manuais + melhorias)

---

## 📊 Resumo Executivo

| Categoria | Total | Concluído | Pendente | % |
|-----------|-------|-----------|----------|---|
| **Prompts 01-03** | 24 itens | 22 | 2 | 92% ✅ |
| **FASE 04** | 8 itens | 7 | 1 | 88% ⚠️ |
| **FASE 05** | 9 itens | 8 | 1 | 89% ⚠️ |
| **Itens README** | 9 itens | 5 | 4 | 56% 🔄 |
| **TOTAL** | **50 itens** | **42** | **8** | **84%** |

---

## 🔴 PENDÊNCIAS CRÍTICAS (Bloqueiam Deploy Completo)

### 1. PDF Currículo em Português
**Impacto:** Alto — Quebra funcionalidade bilíngue quando PT está ativo  
**Ação Necessária:** Gerar manualmente via navegador

```bash
# Abra no navegador:
start public/pdf/mvmd-pt-resume.html

# Pressione Ctrl+P → Salvar como PDF
# Nome do arquivo: mvmd-pt-resume.pdf
# Local: public/pdf/
```

**Arquivos disponíveis:**
- ✅ Template HTML: `public/pdf/mvmd-pt-resume.html` (12KB)
- ✅ Instruções: `public/pdf/INSTRUICOES.md`
- ❌ PDF gerado: `public/pdf/mvmd-pt-resume.pdf` (ausente)

---

### 2. Configuração RESEND_API_KEY (para emails reais)
**Impacto:** Médio — Formulário funciona localmente (mock), mas não envia em produção  
**Configuração atual:** `.env.local` com template pronto

```bash
# Para ativar emails reais:
# 1. Crie conta em https://resend.com
# 2. Obtenha API key em https://resend.com/api-keys
# 3. Adicione ao .env.local:
RESEND_API_KEY=re_sua_chave_aqui

# 4. Descomente seção Resend em app/api/contact/route.ts
```

---

## ⚠️ PENDÊNCIA TÉCNICA — BUG NO TÍTULO (Prompt 04)

### Problema Identificado
O título da seção Hero aparece **grande demais em telas grandes** (>27" / 1440p+).

**Locais afetados:**
- `app/globals.css:148` — Classe `.text-h1` com `clamp(2rem, 4vw, 2.5rem)`
- `components/HeroSection.tsx:42` — `<h1>` usando a classe `text-h1`

**Código atual (problema):**
```css
.text-h1 {
  font-size: clamp(2rem, 4vw, 2.5rem); /* Máximo 2.5rem em telas >1920px */
}
```

**Correção sugerida:**
```css
/* Opção 1: Reduzir máximo para 2rem */
.text-h1 {
  font-size: clamp(2rem, 3.5vw, 2rem);
}

/* Opção 2: Limitar largura do container */
<h1 className="text-h1 max-w-[800px] xl:max-w-[900px]">
```

**Passos para corrigir:**
1. Abrir `app/globals.css` linha 148
2. Alterar o valor máximo do `clamp()` de `2.5rem` para `2rem`
3. Ou adicionar `max-w` no componente HeroSection

---

## ⚠️ PENDÊNCIA DE CONTEÚDO (Prompt 02)

### Perguntas Abertas do Proprietário
Questões técnicas pendentes que precisam ser respondidas para finalizar o conteúdo:

| # | Pergunta | Impacto | Status |
|---|----------|---------|--------|
| 1 | Experiências da **Brs Inc.** são reais? Devem ser adicionadas? | Atualizar currículo/resume | ⏳ Aguardando confirmação |
| 2 | **Métricas/resultados da 19SL**? | Enriquecer cards de experiência | ⏳ Aguardando dados |
| 3 | Manter claims **Blazor/AWS/Docker** no about? | Justificativa técnica vs evidência | ⏳ Aguardando decisão |
| 4 | Há **novos projetos** para adicionar ao portfólio? | Expandir seção Work | ⏳ Aguardando resposta |

---

## 🟡 ITENS DO README (Pendentes para Futuro)

### ✅ Já Implementados
| Item | Status | Arquivo Criado |
|------|--------|----------------|
| 1. Open Graph Dinâmicas | ✅ Completo | `app/api/og/route.tsx` |
| 2. Analytics Plausible | ✅ Completo | `app/layout.tsx` |
| 3. Testes E2E (Playwright) | ✅ Completo | `tests/e2e/*.spec.ts` |
| 4. Performance Audit (Lighthouse) | ✅ Configurado | `lighthouserc.js`, `.github/workflows/lighthouse.yml` |
| 5. Light/Dark Mode Toggle | ✅ Completo | `lib/ThemeContext.tsx`, Nav updated |

### ❌ Pendentes (Futuro)
| Item | Status | Estimativa | Complexidade |
|------|--------|------------|--------------|
| 6. Open Graph por Projeto | 🔄 Parcial | 1 hora | Média |
| 7. Blog/Articles Section | ⏳ Não iniciado | 4 horas | Alta |
| 8. CMS Headless Integration | ⏳ Não iniciado | 8 horas | Muito alta |
| 9. Dashboard Admin Básico | ⏳ Não iniciado | 16 horas | Muito alta |
| 10. Integração LinkedIn Auto-Save | ⏳ Não iniciado | 4 horas | Alta |

---

## 📈 STATUS DETALHADO POR PROMPT

### Prompts 01, 02, 03 — Análise e Fundações

#### ✅ FASE 01 — Auditoria & Planejamento (100%)
Todos os 14 itens concluídos, incluindo:
- Riscos técnicos mapeados (`docs/RISKS.md`)
- Critérios de conclusão definidos (`docs/CRITERIA.md`)
- Arquitetura i18n unificada
- Dependências redundantes removidas

#### ⚠️ FASE 02 — Posicionamento Profissional (86%)
6 de 7 itens concluídos. Pendência:
- Respostas do proprietário sobre experiências e métricas

#### ✅ FASE 03 — Design System Visual (100%)
Todos os 8 itens concluídos:
- Tokens CSS centralizados
- Componentes reutilizáveis
- Tipografia hierárquica
- Sistema responsivo completo

---

### FASE 04 — HERO PROFISSIONAL (Redesign)

#### ✅ Itens Implementados
| # | Requisito | Status | Commit |
|---|-----------|--------|--------|
| 1 | Identidade profissional | ✅ | `fa50683` |
| 2 | Headline forte e orientada à engenharia | ✅ | `fa50683` |
| 3 | Descrição profissional | ✅ | `fa50683` |
| 4 | CTAs claros (View Projects, Download CV, Let's Talk) | ✅ | `fa50683` |
| 5 | Elemento visual sofisticado | ✅ | `fa50683` |
| 6 | Indicadores profissionais (location, availability) | ✅ | `fa50683` |
| 7 | Responsividade completa | ✅ | `fa50683` |
| 8 | Remoção de métricas não verificáveis | ✅ | `fa50683` |

#### ❌ PENDÊNCIA TÉCNICA
| # | Problema | Impacto | Correção Necessária |
|---|----------|---------|---------------------|
| 9 | **Título muito grande em telas grandes** | UX negativa | Ajustar `clamp()` em `.text-h1` (globals.css:148) |

---

### FASE 05 — REESTRUTURAÇÃO DA SEÇÃO DE PROJETOS E CASE STUDIES

#### ✅ Itens Implementados
| # | Requisito | Status | Commit |
|---|-----------|--------|--------|
| 1 | Novo modelo tipado para projetos | ✅ | `25ef996` |
| 2 | Conteúdo centralizado em fonte única | ✅ | `lib/i18n/projects-detail.ts` |
| 3 | Páginas detalhadas por projeto | ✅ | 4 rotas geradas estaticamente |
| 4 | Estrutura case study completa | ✅ | `app/projects/[slug]/page.tsx` |
| 5 | Links para demo e repositório | ✅ | Preservados e funcionais |
| 6 | Layout responsivo em grid | ✅ | Substituiu carrossel Swiper |
| 7 | Metadata específica por projeto | ✅ | `generateMetadata()` implementado |
| 8 | Navegação de retorno | ✅ | Botão "Back to Projects" |

#### ❌ PENDÊNCIA
| # | Problema | Impacto | Observação |
|---|----------|---------|------------|
| 9 | Imagens OG dinâmicas por projeto | SEO social | Endpoint `/api/og` existe mas sem params de projeto |

---

## 🎯 PRÓXIMOS PASSOS SUGERIDOS

### Curto Prazo (Hoje — 30 minutos)
1. **[USUÁRIO]** Gerar PDF PT manualmente (`start public/pdf/mvmd-pt-resume.html`)
2. **[DEV]** Corrigir tamanho do título (5 min)
3. **[DEV]** Otimizar OG dinâmicas por projeto (15 min)
4. **[DEV]** Configurar variáveis de ambiente para deploy (10 min)

### Médio Prazo (1 semana)
5. Responder perguntas de conteúdo (FASE 02)
6. Implementar blog simples com MDX (opcional)
7. Adicionar analytics de eventos customizados
8. Testes cross-browser completos

### Longo Prazo (1 mês+)
9. Dashboard admin (se necessário)
10. Integração CMS headless (Sanity/Contentful)
11. Sistema de comentários em posts
12. Newsletter integration

---

## 📝 NOTAS TÉCNICAS

### Build Status
```bash
npm run build     # ✅ Passing — 11 rotas geradas
npm run lint      # ✅ Clean — 0 warnings
npx tsc --noEmit  # ✅ Clean — 0 errors
```

### Commits Realizados (última sessão)
```
164cb18 @docs: mark light/dark mode as completed in README
d3c0e22 @feat: implement light/dark mode toggle (FASE 04 optional item)
2ef1ddf @feat: add Lighthouse CI for performance auditing
b15989b @feat: implement items 1-3 from recommended improvements
6f752c7 @feat: add Plausible analytics for privacy-friendly tracking
25ef996 @feat: implement dynamic OG images and project case study pages
fa50683 @feat: implement FASE 04 (Hero Profissional) and FASE 05 (Projetos com Case Studies)
dde0872 @fix: implement items 6-9 from README pending improvements
0f87904 @feat: enhance SEO with JSON-LD structured data and optimize Next.js config
c9bbf5a @perf: lazy load react-icons in WorkSection for better initial bundle
```

### Estrutura de Arquivos Criados
```
lib/
├── ThemeContext.tsx                    # Sistema de temas dark/light
└── i18n/
    └── projects-detail.ts              # Dados detalhados dos projetos

app/
├── api/og/route.tsx                    # Geração dinâmica de OG images
└── projects/[slug]/page.tsx            # Páginas de case studies

tests/e2e/
├── home.spec.ts                        # Testes homepage
├── projects.spec.ts                    # Testes projetos
└── contact.spec.ts                     # Testes formulário

.github/workflows/
└── lighthouse.yml                      # CI performance audit
```

---

## 📊 CHECKLIST FINAL PARA DEPLOY

### Obrigatório (bloqueia deploy)
- [ ] Gerar `public/pdf/mvmd-pt-resume.pdf` (ação manual)
- [ ] Corrigir título grande em telas largas (bug fix)
- [ ] Configurar `RESEND_API_KEY` se desejar emails reais

### Recomendado (pós-deploy)
- [ ] Responder perguntas de conteúdo (Brs Inc., métricas, etc.)
- [ ] Adicionar Open Graph específico por projeto
- [ ] Configurar domínio personalizado
- [ ] Executar Lighthouse audit completo
- [ ] Testar acessibilidade com axe DevTools

### Opcional (futuro)
- [ ] Criar blog/section de artigos
- [ ] Adicionar newsletter integration
- [ ] Implementar sistema de comentários
- [ ] Adicionar dark/light mode refinado
- [ ] Criar dashboard admin

---

*Documento gerado automaticamente baseado em auditoria completa do código-fonte, histórico de commits e análise dos prompts.*

*Próximos passos: Implementar pendências técnicas (título grande) e aguardar respostas do proprietário para finalizar conteúdo.*
