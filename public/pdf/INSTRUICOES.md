# Como Criar o PDF do Currículo em Português

## Passo 1: Gerar o PDF

1. **Abra o arquivo** `public/pdf/mvmd-pt-resume.html` no navegador (Chrome recomendado)
   ```bash
   start public/pdf/mvmd-pt-resume.html
   ```

2. **Pressione Ctrl+P** para imprimir

3. **Selecione "Salvar como PDF"** nas opções de destino

4. **Configurações recomendadas:**
   - Margens: Padrão ou Mínimas
   - Escala: 100%
   - Opções: Desmarque "Cabeçalhos e rodapés"

5. **Salve como:** `mvmd-pt-resume.pdf` na pasta `public/pdf/`

## Passo 2: Configurar Email (Opcional, para Produção)

1. Crie conta em https://resend.com
2. Obtenha sua API Key em https://resend.com/api-keys
3. Adicione ao arquivo `.env.local`:
   ```
   RESEND_API_KEY=re_sua_chave_aqui
   ```
4. Atualize o arquivo `app/api/contact/route.ts` descomentando as linhas do Resend

## Passo 3: Testar Localmente

```bash
npm run dev
# Acesse http://localhost:3000/#contact
```

## Arquivos Criados

| Arquivo | Propósito |
|---------|-----------|
| `public/pdf/mvmd-pt-resume.html` | Template HTML editável |
| `public/pdf/mvmd-pt-resume.pdf` | **(Você deve criar este)** |
| `public/pdf/mvmd-en-resume.pdf` | Currículo em inglês (existente) |
| `.env.local` | Variáveis de ambiente |

## Verificação Final

Antes de fazer deploy, confirme:
- [ ] `mvmd-pt-resume.pdf` existe na pasta `public/pdf/`
- [ ] Formulário de contato funciona (test localmente)
- [ ] Site carrega sem erros no console
- [ ] Responsividade funciona em mobile/tablet/desktop
