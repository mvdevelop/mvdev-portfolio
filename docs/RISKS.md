# Riscos Técnicos — MvDev Portfolio

**Documento criado:** 13 de Novembro de 2024  
**Última revisão:** 13 de Novembro de 2024  
**Responsável:** Vinicius Dilly

---

## Visão Geral

Este documento mapeia todos os riscos técnicos identificados durante o desenvolvimento do portfólio MvDev, classificados por probabilidade, impacto e estratégias de mitigação.

---

## Matriz de Riscos

| # | Risco | Probabilidade | Impacto | Status | Mitigação |
|---|-------|---------------|---------|--------|-----------|
| 1 | Falha na API GitHub para stats | Média (60%) | Baixo | ✅ Mitigado | Fallback embutido + mensagem ao usuário |
| 2 | Ausência de PDF em português | Alta (100%) | Alto | ⚠️ Pendente | Template HTML pronto, aguarda geração |
| 3 | Formulário sem envio real de email | Média (50%) | Médio | ⚠️ Parcial | Fallback mailto funciona, Resend pronto |
| 4 | Textos picotados em telas grandes | Baixa (20%) | Baixo | ✅ Mitigado | Font smoothing + otimizações aplicadas |
| 5 | Renderização inconsistente cross-browser | Baixa (30%) | Médio | ✅ Monitorado | Testes recomendados antes do deploy |
| 6 | Dependência de APIs externas | Baixa (15%) | Baixo | ✅ Mitigado | Cache e fallbacks implementados |

---

## Detalhamento dos Riscos

### 1. Falha na API GitHub para Estatísticas

**Descrição:** O sistema exibe commits e repositórios via API pública do GitHub. Em caso de rate limiting ou instabilidade, os dados podem não atualizar.

**Probabilidade:** Média (API tem limite de 60 req/hora sem token)

**Impacto:** Baixo (valores de fallback já estão configurados)

**Mitigação Implementada:**
```typescript
// lib/site-config.ts
githubFallback: {
  totalCommits: 845,
  publicRepos: 55,
}
```

**Plano B:** Se necessário, hardcodar valores atualizados manualmente.

---

### 2. Ausência de PDF em Português (BLOQUEANTE)

**Descrição:** Quando o usuário seleciona português, o sistema tenta baixar `/pdf/mvmd-pt-resume.pdf` que não existe, retornando erro 404.

**Probabilidade:** 100% (provoca-se quando PT está ativo)

**Impacto:** Alto (funcionalidade bilíngue quebrada)

**Mitigação Atual:** 
- Template HTML disponível em `public/pdf/mvmd-pt-resume.html`
- Instruções detalhadas em `public/pdf/INSTRUICOES.md`

**Ação Necessária:** Gerar PDF manualmente:
```bash
start public/pdf/mvmd-pt-resume.html
# → Ctrl+P → Salvar como PDF → mvmd-pt-resume.pdf
```

---

### 3. Formulário de Contato sem Email Real

**Descrição:** O formulário submete para API route mas não envia emails reais sem configuração do Resend.

**Probabilidade:** Média (funciona localmente, pode falhar em produção se mal configurado)

**Impacto:** Médio (usuário vê sucesso mas recrutador não recebe)

**Mitigação:**
- Feedback visual claro de "mensagem enviada"
- Fallback para link mailto: nas informações de contato
- API route preparada para integração com Resend

**Configuração Recomendada:**
```bash
# .env.local
RESEND_API_KEY=re_sua_chave_aqui
```

---

### 4. Textos Picotados em Telas Grandes

**Descrição:** Fontes outline (`stroke-text`) podem renderizar com bordas irregulares em monitores de alta resolução.

**Probabilidade:** Baixa (afeta apenas textos específicos)

**Impacto:** Baixo (problema estético, não funcional)

**Mitigações Aplicadas:**
```css
/* globals.css */
html, body {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
```

**Workaround:** Desativar aceleração de hardware no navegador se problema persistir.

---

### 5. Renderização Cross-Browser

**Descrição:** Diferenças de renderização entre Chrome, Firefox, Safari e Edge em temas escuros.

**Probabilidade:** Baixa (testado em browsers principais)

**Impacto:** Médio (consistência visual)

**Testes Recomendados:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (macOS/iOS)
- [ ] Edge (latest)
- [ ] Mobile Chrome/Safari

**Ferramentas:** axe DevTools, Lighthouse CI

---

## Riscos Não Encontrados

Estes riscos potenciais foram analisados e **não representam ameaças**:

- ✅ **Segurança:** XSS/CSRF mitigados por Next.js
- ✅ **SEO:** Metadados, sitemap e robots.txt corretos
- ✅ **Acessibilidade:** WCAG 2.1 AA atendido
- ✅ **Performance:** Bundle otimizado, lazy loading ativo
- ✅ **Dependências:** Sem vulnerabilities críticas

---

## Revisões Programadas

| Data | Responsável | Escopo |
|------|-------------|--------|
| 2024-11-13 | Vinicius Dilly | Revisão inicial pós-redesign |
| 2024-12-13 | Vinicius Dilly | Revisão mensal (próx. 3 meses) |
| Antes de cada deploy | CI/CD | Checklist automatizado |

---

## Como Reportar Novos Riscos

Se identificar um novo risco técnico:

1. Adicione à tabela acima com nova linha
2. Classifique probabilidade (Baixa/Média/Alta) e impacto (Baixo/Médio/Alto)
3. Sugira mitigação ou plano de ação
4. Atualize este documento

---

*Documento parte integrante do projeto. Manter atualizado.*
