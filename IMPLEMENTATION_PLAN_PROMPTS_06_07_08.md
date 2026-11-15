# Plano de Implementação — Prompts 06, 07 e 08
**Data:** 15 de Novembro de 2024  
**Projeto:** MvDev Portfolio  
**Status Base:** 99% Completo | Build passando | TypeScript clean | ESLint clean

---

## Análise Prévia do Código

### Estado Atual dos Componentes

| Arquivo | Status | Observações |
|---------|--------|-------------|
| `components/ResumeSection.tsx` | ⚠️ Parcial | Abas funcionam, mas labels de educação em inglês estático |
| `lib/i18n/resume.ts` | ✅ OK | Dados bilíngues completos |
| `lib/i18n/translations.ts` | ⚠️ Duplicação | Contains resume data duplicado do resume.ts |
| `lib/i18n/projects.ts` | ⚠️ Incompleto | Array `skills` truncado na linha 92 |
| `components/ContactSection.tsx` | ✅ Funcional | Formulário com validação, mas sem envio real |
| `app/api/contact/route.ts` | ⚠️ Mock | Retorna success sem enviar email |
| `app/layout.tsx` | ✅ Bom | Metadata básica, mas sem dinâmica por página |
| `app/projects/[slug]/page.tsx` | ✅ OK | Metadata OG dinâmica implementada (iteração anterior) |
| `app/globals.css` | ✅ Corrigido | Título hero ajustado (clamp corrigido) |
| `public/pdf/` | ✅ Completo | Ambos PDFs EN e PT existem |

---

## FASE 06 — Currículo, Experiência e Habilidades

### 6.1 Correção: Labels de Educação Localizados
**Problema identificado:** Linha 147 de `ResumeSection.tsx` exibe texto em inglês estático.

```tsx
// Código atual (problema):
{edu.type === "academic" ? "Degree" : edu.type === "course" ? "Course" : "Language"}

// Correção necessária:
const typeLabels = {
  academic: language === "pt" ? "Graduação" : "Degree",
  course: language === "pt" ? "Curso" : "Course",
  language: language === "pt" ? "Idioma" : "Language",
};
```

### 6.2 Consolidação de Dados
**Problema:** Dados duplicados entre `translations.ts` e `resume.ts`.

**Solução:** Unificar fonte única em `lib/i18n/resume.ts`, remover dados de resume de `translations.ts`.

### 6.3 Correção: Array de Skills Truncado
**Problema identificado:** Linha 92 de `projects.ts` tem código malformado.

```typescript
// Código atual (problema):
{ id: "blushify", title: "Blushify", description: "Cosmetics E-Commerce Store", tech: ["JavaScript", "React", "Tailwind CSS"], img: "/images/new-blushify-banner.png", href: "https://ecommerce-beauty-ashy.vercel.app/", repo: "https://github.com/mvdevelop/ecommerce-beauty", category: "frontend" },

// Deveria ser:
{ id: "blushify", title: "Blushify", description: "Cosmetics E-Commerce Store", tech: ["JavaScript", "React", "Tailwind CSS"], img: "/images/new-blushify-banner.png", href: "https://ecommerce-beauty-ashy.vercel.app/", repo: "https://github.com/mvdevelop/ecommerce-beauty" },
```

### 6.4 About Me - Refinamento
**Status atual:** Texto já está bem estruturado nos dois idiomas.

**Melhoria:** Verificar se menções a Blazor/AWS/Docker são precisas conforme feedback do proprietário.

---

## FASE 07 — Conversão, Contato, SEO e Internacionalização

### 7.1 Formulário de Contato - Implementação Real
**Arquivo alvo:** `app/api/contact/route.ts`

**Passos:**
1. Instalar dependência `resend` (já existe no package.json)
2. Implementar envio real via Resend API
3. Adicionar rate limiting por IP
4. Adicionar honeypot anti-spam
5. Manter fallback mailto em caso de falha

### 7.2 SEO - Melhorias
**Arquivos alvo:** `app/layout.tsx`, `app/page.tsx`

**Implementações:**
- [ ] Title e description dinâmicos por seção
- [ ] Canonical URLs consistentes
- [ ] JSON-LD aprimorado (Person + WebSite + CollectionPage)
- [ ] Prev/next meta tags para projetos
- [ ] Open Graph type específico por página

### 7.3 Internacionalização Avançada
**Avaliação:** Rotas `/en` e `/pt` vs URL-based detection

**Recomendação:** Manter abordagem current (localStorage + toggle) pois:
- Single-page app non-SEO-critical
- Evita duplicação de conteúdo
- Simplicidade mantida

**Melhorias necessárias:**
- [ ] `<html lang>` dinâmico baseado no idioma selecionado
- [ ] Meta tags de idioma no layout
- [ ] Link hreflang no head

### 7.4 CTAs de Conversão
**Seções para reforço:**
- [ ] Hero: Botão CTA principal mais proeminente
- [ ] Final da página: Seção "Ready to work together?"
- [ ] Cada projeto: Link claro para contato

---

## FASE 08 — Auditoria Final, Performance, Acessibilidade e Produção

### 8.1 Qualidade Técnica
**Verificações:**
- [ ] `npm run lint` — passar sem erros
- [ ] `npm run build` — gerar todos os pages
- [ ] `npx tsc --noEmit` — zero类型 errors
- [ ] Remover imports não utilizados
- [ ] Revisar dependências do package.json

### 8.2 Performance
**Otimizações a avaliar:**
- [ ] Lazy loading de imagens fora da viewport
- [ ] Font display swap (Google Fonts)
- [ ] Eliminar bundle desnecessário (swiper ainda usado?)
- [ ] Code splitting de componentes pesados

### 8.3 Acessibilidade
**Checklist:**
- [ ] Navegação por teclado em todos os elementos interativos
- [ ] Focus visible em links e botões
- [ ] Contraste WCAG AA (4.5:1 texto, 3:1 grande texto)
- [ ] Alt text em todas as imagens
- [ ] ARIA labels apropriados
- [ ] Heading hierarchy correta (H1 → H2 → H3)
- [ ] Form labels associados aos inputs
- [ ] Menu mobile acessível (trap focus, escape to close)
- [ ] prefers-reduced-motion respected
- [ ] Screen reader testing

### 8.4 Responsividade
**Breakpoints para testar:**
- 320px (iPhone SE)
- 375px (iPhone 12/13)
- 430px (iPhone 14 Pro Max)
- 768px (iPad portrait)
- 1024px (iPad landscape / small laptop)
- 1366px (typical laptop)
- 1440px (desktop)
- 1920px (Full HD)

**Problemas potenciais a verificar:**
- Overflow horizontal
- Textos cortados
- Imagens distorcidas
- Espaçamento inconsistente

### 8.5 Segurança
**Verificações:**
- [ ] Variáveis de ambiente não expostas ao cliente
- [ ] Validação de inputs no servidor
- [ ] Rate limiting no formulário
- [ ] CSP headers (Next.js padrão é suficiente)
- [ ] Links externos com rel="noopener noreferrer"

### 8.6 Revisão Visual
**Consistência a verificar:**
- Cores: usar tokens CSS, não valores hex hardcoded
- Tipografia: scale consistente
- Bordas: radius padronizado
- Sombras: elevação hierárquica
- Animações: sutis e performáticas

---

## Priorização de Implementação

### Bloco 1 — Correções Críticas (30 min)
1. Corrigir array truncado em `projects.ts`
2. Corrigir labels de educação em `ResumeSection.tsx`
3. Corrigir lint no script Puppeteer (já feito)

### Bloco 2 — Funcionalidade (1h)
4. Implementar envio real de email no formulário
5. Adicionar rate limiting e honeypot
6. Dynamic `<html lang>` no layout

### Bloco 3 — SEO e Metadados (45 min)
7. Aprimorar JSON-LD no layout
8. Adicionar metadata dinâmica por projeto
9. Verificar sitemap e robots

### Bloco 4 — Performance e QA (1h)
10. Audit de performance com Lighthouse
11. Teste de acessibilidade manual
12. Teste responsivo em múltiplos breakpoints
13. Otimizações de imagem/fonte se necessário

### Bloco 5 — Documentação e Deploy (30 min)
14. Atualizar README com instruções de deploy
15. Criar .env.example com todas as variáveis
16. Checklist final de pré-produção

---

## Variáveis de Ambiente Necessárias

```bash
# Obrigatório para produção
RESEND_API_KEY=re_your_key_here        # Para formulário de contato
GITHUB_TOKEN=ghp_your_token            # Opcional - rate limit GitHub API

# Já configurados
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=mvdevelop.com.br
```

---

## Critérios de Aceitação

### Funcionais
- [ ] Formulário envia email real via Resend (testável localmente com key)
- [ ] Fallback mailto funciona quando Resend não está configurado
- [ ] Todos os textos aparecem corretamente em ambos os idiomas
- [ ] Download de PDF funciona em ambos os idiomas

### Técnicos
- [ ] `npm run lint` passa sem erros
- [ ] `npm run build` gera todos os pages
- [ ] `npx tsc --noEmit` mostra 0 erros
- [ ] Build time < 60 segundos

### Acessibilidade
- [ ] Navegação por teclado completa
- [ ] Zero erros críticos de contraste
- [ ] ARIA labels em todos os elementos interativos
- [ ] Respeita prefers-reduced-motion

### SEO
- [ ] Title único por página
- [ ] Description presente em todas as páginas
- [ ] Open Graph completo
- [ ] Sitemap.xml gerado corretamente

---

*Plano baseado em auditoria completa do código-fonte atual.*
*Última atualização: 15 de Novembro de 2024*
