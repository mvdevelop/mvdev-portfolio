# MvDev Portfolio — Contexto Completo do Projeto

> Documento de referência para outro GPT analisar o projeto e elaborar um plano de melhorias, redesign e evolução técnica.
>
> **Objetivo deste documento:** registrar a arquitetura atual, funcionalidades existentes, conteúdo, dados, integrações, decisões visuais, pontos de atenção e limitações observadas no código-fonte.

## 1. Visão geral

O projeto é um portfólio pessoal de um desenvolvedor Full Stack, construído como uma página única (single-page portfolio) com Next.js App Router, React, TypeScript e Tailwind CSS v4.

A página apresenta:

- apresentação pessoal e proposta profissional;
- estatísticas de experiência, projetos, tecnologias e commits;
- serviços oferecidos;
- currículo com experiência, formação, habilidades e texto “sobre mim”;
- projetos em destaque com carrossel;
- formulário e informações de contato;
- links para redes sociais, GitHub, LinkedIn, Instagram e e-mail;
- alternância de idioma entre inglês e português;
- animações de entrada ao rolar a página;
- smooth scroll usando Lenis;
- integração com a API pública do GitHub para obter commits e repositórios públicos.

A aplicação atualmente é essencialmente uma única rota pública: `/`.

## 2. Stack e dependências

### Runtime e framework

- Next.js `^16.0.10` com App Router.
- React `19.2.0`.
- React DOM `19.2.0`.
- TypeScript `^5`.
- Node.js necessário para desenvolvimento e produção.

### Estilo e UI

- Tailwind CSS `^4` via `@tailwindcss/postcss`.
- CSS global em `app/globals.css`.
- `tw-animate-css`.
- `tailwind-merge` e `clsx` para composição de classes, embora o utilitário `cn` exista e atualmente tenha pouco uso.
- Bootstrap Icons.
- Remix Icon.
- React Icons.
- Tipografia carregada pelo `next/font/google`: Geist, Geist Mono, Sora e Unbounded.

### Interações e animações

- Lenis para rolagem suave.
- Swiper para o carrossel de projetos.
- CountUp.js para animação dos números das estatísticas.
- IntersectionObserver encapsulado em hooks próprios para revelar conteúdos durante o scroll.

### Scripts disponíveis

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
npm run start    # executa build de produção
npm run lint     # ESLint
```

## 3. Estrutura de arquivos relevante

```text
app/
  data/route.ts          # endpoint interno que consulta dados do GitHub
  globals.css            # estilos globais, tokens, animações e regras customizadas
  layout.tsx             # layout raiz, fontes, metadata, providers e navbar
  page.tsx               # composição da home page

components/
  ContactSection.tsx     # formulário e informações de contato
  Footer.tsx             # rodapé, links rápidos e redes sociais
  HeroSection.tsx        # apresentação, foto, CV, redes e estatísticas
  Lenis.tsx              # inicialização do smooth scroll
  Nav.tsx                # navbar desktop/mobile, navegação e idioma
  ResumeSection.tsx      # experiência, educação, skills e sobre
  SectionTitle.tsx       # título padronizado das seções
  ServicesSection.tsx    # cards de serviços
  WorkSection.tsx        # carrossel de projetos

lib/
  LanguageContext.tsx    # contexto de idioma e persistência no localStorage
  translations.ts        # todo o conteúdo textual em EN/PT
  useScrollReveal.ts     # hooks de IntersectionObserver e classes de animação
  utils.ts               # utilitário cn()

public/
  images/                # fotos, favicon e banners dos projetos
  pdf/mvmd-en-resume.pdf # currículo para download
```

## 4. Fluxo de renderização e composição

`app/layout.tsx` é o layout raiz. Ele:

1. importa o CSS global;
2. configura as fontes Geist, Geist Mono, Sora e Unbounded;
3. define metadata básica e favicon;
4. envolve a aplicação com `LanguageProvider`;
5. inicializa `LenisScroll`;
6. renderiza `Nav` globalmente;
7. renderiza o conteúdo da rota.

`app/page.tsx` monta a página na seguinte ordem:

1. `HeroSection`;
2. `ServicesSection`;
3. `ResumeSection`;
4. `WorkSection`;
5. `ContactSection`;
6. `Footer`.

Todas as seções são âncoras da mesma página: `#hero`, `#services`, `#resume`, `#work` e `#contact`.

## 5. Navegação

Arquivo: `components/Nav.tsx`

### Desktop

- Navbar fixa no topo.
- Fundo transparente no topo da página.
- Ao rolar mais de 50px, aplica fundo escuro semitransparente, blur e sombra.
- Links gerados a partir de `t.nav.links`.
- Seção ativa calculada manualmente através de `window.scrollY`, `offsetTop` e `offsetHeight`.
- Sublinhado e cor azul indicam o link ativo.
- Toggle de idioma com os botões `EN` e `PT`.

### Mobile

- Layout responsivo em breakpoint `lg`.
- Botão de menu abre/fecha um menu vertical.
- Toggle de idioma continua visível.
- Ao clicar em um link, o menu é fechado.

### Observações para redesign

- A navegação usa `scrollIntoView({ behavior: "smooth" })`, enquanto Lenis também controla a rolagem suave; uma futura implementação deve escolher uma estratégia única para evitar conflitos.
- O cálculo de seção ativa é baseado em listeners de scroll e pode ser substituído por IntersectionObserver.
- O menu mobile usa `max-height` fixo (`max-h-96`), o que pode limitar conteúdo caso os links aumentem.
- Acessibilidade pode ser ampliada com `aria-expanded`, `aria-controls`, foco controlado e fechamento via Escape.

## 6. Hero / apresentação

Arquivo: `components/HeroSection.tsx`

Conteúdo atual:

- Cargo: Full Stack Developer / Desenvolvedor Full Stack.
- Nome exibido: Vinicius Dilly.
- Mensagem principal sobre desenvolver soluções para diferentes problemas e pessoas.
- Foto: `/images/mvdevelop.jpeg`.
- Botão de download do currículo: `/pdf/mvmd-en-resume.pdf`.
- Links sociais para GitHub, LinkedIn e Instagram.
- Quatro estatísticas:
  - anos de experiência: valor inicial `3`;
  - projetos concluídos: valor inicial `30`, substituído por `publicRepos` do GitHub;
  - tecnologias dominadas: `12`;
  - commits: valor inicial `797`, substituído por `totalCommits` do GitHub.

### Comportamento

- A seção ocupa no mínimo a altura da viewport.
- Fundo com três blobs radiais animados.
- Conteúdo textual, imagem e estatísticas entram com animações distintas via `useAnimateIn`.
- Estatísticas ficam ocultas em telas abaixo de `lg` (`hidden lg:grid`).
- Números são animados com CountUp.js após o carregamento dos dados.

### Pontos importantes

- O nome exibido nas traduções é “Vinicius Dilly”, mas alguns dados de contato e assets usam “Marcos/Marcos V. Dilly”. Essa consistência de identidade deve ser validada antes do redesign.
- O link do currículo disponível é explicitamente o PDF em inglês; não há PDF em português.
- Os valores de experiência e tecnologias são hardcoded.

## 7. Endpoint de dados do GitHub

Arquivo: `app/data/route.ts`

Endpoint acessado pelo frontend em `/data` através de `fetch("/data")`.

Ele faz duas requisições paralelas à API do GitHub, com revalidação de 1 hora:

- `https://api.github.com/search/commits?q=author:mvdevelop`
- `https://api.github.com/users/mvdevelop`

Retorna:

```json
{
  "totalCommits": 845,
  "publicRepos": 55
}
```

Os valores acima são fallbacks e podem ser substituídos pelos dados reais quando as respostas são válidas.

O token opcional é lido de `process.env.GITHUB_TOKEN` e enviado como Bearer token. A API também deve funcionar sem token, respeitando os limites públicos do GitHub.

### Pontos de atenção

- O endpoint retorna status `500` em erro geral, mas ainda fornece valores fallback.
- O valor inicial no Hero (`797` e `30`) é diferente do fallback do endpoint (`845` e `55`), causando possíveis mudanças visuais antes/depois da resposta.
- A busca de commits do GitHub pode ser paginada, limitada ou não representar todos os commits de forma absoluta.
- Não há validação formal de schema da resposta.
- Não há tratamento visual de loading ou erro no Hero; o estado `loading` apenas controla o início do CountUp.

## 8. Seção de serviços

Arquivo: `components/ServicesSection.tsx`

A seção possui quatro cards, definidos nas traduções:

1. **C# / .NET & Blazor** — APIs, aplicações web, arquitetura limpa e performance.
2. **TypeScript & React** — interfaces com TypeScript, React e Next.js.
3. **Full Stack Integration** — integração entre backends .NET e frontends React via APIs REST.
4. **DevOps & Deployment/Deploy** — CI/CD, Docker, AWS e GCP.

Cada card contém:

- identificador numérico (`01` a `04`);
- ícone de seta diagonal;
- título;
- descrição;
- borda e sombra com hover;
- leve deslocamento vertical no hover;
- atraso progressivo aplicado via inline style.

A seção utiliza `SectionTitle` e animação de entrada baseada em IntersectionObserver.

## 9. Seção de currículo

Arquivo: `components/ResumeSection.tsx`

A seção é dividida em uma coluna lateral e uma área de conteúdo.

### Coluna lateral

- Título “Why hire me?” / “Por que me contratar?”.
- Texto curto de apresentação.
- Quatro abas:
  - Experience / Experiência;
  - Education / Formação;
  - Skills / Habilidades;
  - About me / Sobre mim.

### Experience

Dados atuais:

- 2025 - Present — Full Stack Developer — 19SL Inc.
- 2025 - 2025 — Full Stack Developer — Brs Inc.
- 2024 - 2024 — Frontend Developer — Brs Inc.
- 2023 - 2023 — Frontend Developer — 19SL Inc.

Na versão PT, cargos, datas e textos são traduzidos, mas empresas permanecem iguais.

### Education

Dados atuais:

- 2022 - 2026 — Computer Science / Ciência da Computação — Unif.
- 2024 - 2025 — DevOps Engineering / Engenharia DevOps — Fiap.
- 2021 - 2023 — English Proficiency C1 / Proficiência em Inglês C1 — IBL.
- 2021 - 2022 — CS50's Introduction to Computer Science — HUIT.

### Skills

A lista é definida diretamente no componente e possui ícones para:

- TypeScript;
- React;
- Tailwind;
- Node.js;
- C#;
- .NET;
- MongoDB;
- SQL;
- Docker;
- Linux;
- Cloud;
- Blazor.

As habilidades são exibidas em uma grade de ícones, sem níveis de proficiência ou descrições.

### About me

Texto extenso bilíngue descrevendo:

- especialização em C#, .NET, Blazor, TypeScript e React;
- construção de APIs com .NET Core, Entity Framework e bancos SQL/NoSQL;
- Clean Architecture e injeção de dependência;
- Blazor Server/WASM;
- React, Next.js e Tailwind CSS;
- performance, acessibilidade e TypeScript;
- CI/CD, Docker, AWS, GCP, Git, Linux, containers e infraestrutura como código.

Algumas partes são destacadas em azul por índice fixo do array `aboutHighlights`.

### Pontos de atenção

- `activeTab` é inicializado com a primeira aba da tradução em inglês. Ao alternar idioma depois da montagem, a aba ativa pode permanecer com um texto em inglês e não corresponder mais a `tabs[0]` na versão portuguesa.
- Os títulos das abas são usados como valores de controle, em vez de IDs estáveis.
- Os containers de Experience e Education têm altura fixa de `500px` e scroll interno.
- Os nomes exibidos nos cards de skills não aparecem, apenas os ícones; isso prejudica descoberta e acessibilidade.
- O texto “About me” depende de índices fixos para destacar termos.

## 10. Seção de projetos / Work

Arquivo: `components/WorkSection.tsx`

A seção usa Swiper com loop infinito, navegação customizada e um slide por vez.

Projetos atuais:

### 01 — Macaw English School

- Descrição: English School Platform / Plataforma de Escola de Inglês.
- Tecnologias: TypeScript, React Vite, .NET.
- Imagem: `/images/macaw-landing.png`.
- Demo: `https://macaw-english-course.vercel.app/`.
- Repositório: `https://github.com/mvdevelop/macaw-english-school`.

### 02 — Macaw

- Descrição: Social Media / Rede Social.
- Tecnologias: TypeScript, Next.js, Supabase.
- Imagem: `/images/new-macaw-banner.png`.
- Demo: `https://macaw-social-media.vercel.app/`.
- Repositório: `https://github.com/mvdevelop/macaw-social-media`.

### 03 — Snake's

- Descrição: Snake Mini-Game / Mini-Jogo Snake.
- Tecnologias: JavaScript, React, Tailwind CSS.
- Imagem: `/images/new-snakegame-banner.png`.
- Demo: `https://snake-game-inky-pi.vercel.app/`.
- Repositório: `https://github.com/mvdevelop/snake-game`.

### 04 — Blushify

- Descrição: Cosmetics E-Commerce Store / Loja de Cosméticos.
- Tecnologias: JavaScript, React, Tailwind CSS.
- Imagem: `/images/new-blushify-banner.png`.
- Demo: `https://ecommerce-beauty-ashy.vercel.app/`.
- Repositório: `https://github.com/mvdevelop/ecommerce-beauty`.

### Comportamento visual

- Projeto exibido em layout de duas colunas em telas médias/grandes.
- Número grande com texto vazado.
- Título, descrição, tecnologias e links.
- Ícones de tecnologia resolvidos por um `switch` baseado no nome do texto.
- Link para demo e GitHub.
- Imagem com `next/image`, largura 650 e altura 300.
- CSS global força `.project-img` a `width: 650px !important` e `height: 300px !important`.
- Botões customizados anterior/próximo.
- Animações de entrada sequenciais definidas no CSS global.

### Pontos de atenção

- O carrossel depende de seletores globais `.custom-prev` e `.custom-next`; se houver mais de uma instância, pode haver conflito.
- Os links abertos em nova aba não incluem explicitamente `rel="noopener noreferrer"` neste componente.
- A resolução de ícones por strings é frágil: novas tecnologias podem simplesmente não renderizar ícone.
- O CSS com dimensões fixas pode causar cortes ou overflow em dispositivos menores.
- O texto das tecnologias aparece apenas como `title`, sem rótulo visual.
- O projeto tem imagens antigas e novas no diretório `public/images`; é necessário confirmar quais assets devem permanecer.

## 11. Seção de contato

Arquivo: `components/ContactSection.tsx`

### Formulário

Campos presentes:

- primeiro nome;
- sobrenome;
- e-mail;
- telefone;
- seleção de serviço;
- mensagem;
- botão “Send Message” / “Enviar Mensagem”.

Serviços disponíveis:

- Frontend;
- Backend;
- Mobile;
- DevOps.

### Informações de contato

- Telefone: `(+55) 21 99050-6596`.
- E-mail: `marcosvmdilly@gmail.com`.
- Localização: Rio de Janeiro, RJ - Brazil/Brasil.
- Horário: segunda a sexta 08:00–18:00; sábado e domingo 08:00–14:00.
- WhatsApp com o mesmo telefone.
- Website: `www.mvdevelop.com.br`.

### Limitação funcional importante

O formulário é apenas visual no estado atual. Não possui:

- `onSubmit`;
- estado dos campos;
- validação;
- feedback de sucesso ou erro;
- envio para `/data` ou outra API;
- integração com e-mail, EmailJS, Resend, SMTP ou serviço externo;
- proteção anti-spam;
- labels associados aos inputs.

O botão `type="submit"` pode causar o comportamento padrão de submissão/reload da página.

## 12. Footer

Arquivo: `components/Footer.tsx`

Contém:

- marca `MvDev`;
- descrição profissional;
- links rápidos derivados dos links da navbar;
- GitHub: `https://github.com/mvdevelop`;
- LinkedIn: `https://linkedin.com/in/mvdevelop`;
- Instagram: `https://instagram.com/mvdevelop`;
- e-mail `mailto:marcosvmdilly@gmail.com`;
- ano atual calculado dinamicamente;
- copyright;
- mensagem “Designed & Built with ♥” / versão em português.

## 13. Internacionalização

Arquivos: `lib/translations.ts` e `lib/LanguageContext.tsx`

O projeto possui dois idiomas:

- `en` — inglês, idioma inicial;
- `pt` — português.

Todo o conteúdo principal está concentrado em `translations.ts`, incluindo navegação, Hero, serviços, currículo, projetos, contato e footer.

O `LanguageProvider`:

- inicia com inglês;
- após montar no cliente, tenta recuperar `language` do `localStorage`;
- aceita apenas `en` ou `pt`;
- persiste alterações no `localStorage`;
- fornece `language`, `setLanguage` e `t` pelo hook `useLanguage`.

Durante a montagem inicial, o provider força traduções em inglês para evitar hydration mismatch.

### Pontos de atenção

- O idioma não está refletido na URL, metadata, atributo `lang` do HTML ou SEO.
- `app/layout.tsx` usa `<html lang="en">` permanentemente.
- Não existe sistema de tradução de metadata.
- A troca de idioma é client-side e não é indexável separadamente.
- Alguns valores e dados pessoais devem ser revisados para consistência nos dois idiomas.

## 14. Animações e scroll reveal

Arquivo: `lib/useScrollReveal.ts`

`useScrollReveal` usa `IntersectionObserver` com:

- threshold padrão `0.1`;
- rootMargin padrão `0px`;
- execução única por padrão (`once: true`).

`useAnimateIn` oferece direções `up`, `down`, `left`, `right` e `scale`, retornando `ref`, `isVisible` e `animationClass`.

Na prática, vários componentes usam diretamente `ref` e `isVisible` para montar classes Tailwind.

O CSS global define:

- blobs `pulse-slow` e `pulse-slower`;
- `fade-in`;
- atrasos de 100ms a 800ms;
- animações específicas dos elementos do projeto.

### Acessibilidade e performance a considerar

- Não existe tratamento global para `prefers-reduced-motion`.
- Lenis e múltiplas animações devem ser testados em dispositivos móveis e com acessibilidade ativada.
- Os hooks não possuem fallback explícito para ambientes sem IntersectionObserver.

## 15. Smooth scroll com Lenis

Arquivo: `components/Lenis.tsx`

Ao montar, cria uma instância Lenis com:

- `duration: 1.2`;
- `smoothWheel: true`;
- `syncTouch: true`.

Um loop contínuo de `requestAnimationFrame` chama `lenis.raf(time)`. No unmount, a instância é destruída.

O CSS global inclui regras para as classes `.lenis`, `.lenis-smooth` e `.lenis-stopped`.

Possíveis melhorias:

- cancelar explicitamente o `requestAnimationFrame` no cleanup;
- avaliar a necessidade de `syncTouch` em mobile;
- integrar o scroll da navbar com Lenis;
- respeitar `prefers-reduced-motion`.

## 16. Design system atual

### Paleta principal

- Cor primária: `#4d8be9` — azul.
- Fundo secundário: `#071108` — quase preto esverdeado.
- Texto principal: branco.
- Texto secundário: cinzas do Tailwind.
- Variáveis CSS adicionais para fundo, cards, border, accent, charts e sidebar vieram do template/shadcn e coexistem com as variáveis próprias.

### Tipografia

- Unbounded para logotipo e títulos de maior impacto.
- Sora para determinados textos do Hero.
- Geist como fonte geral.
- Geist Mono disponível, mas não muito explorada.

### Estilo visual

- Dark-first.
- Azul elétrico como accent.
- Bordas finas e cards translúcidos.
- Texto vazado em números de serviços/projetos.
- Blobs luminosos no fundo.
- Hover com elevação, rotação, mudança de borda e sombra.
- Layout com padding horizontal de `8%` e `16%` em telas grandes.

## 17. Assets públicos

### Imagens

- `public/images/icon.ico` — favicon.
- `public/images/mvdevelop.jpeg` — foto usada no Hero.
- `public/images/mvdev-photo.jpeg` — outra foto disponível, não usada na composição atual.
- `public/images/macaw-landing.png` — imagem do Macaw English School.
- `public/images/macaw-social-media-banner.png` — asset disponível, aparentemente não usado atualmente.
- `public/images/new-macaw-banner.png` — imagem atual do projeto Macaw.
- `public/images/snake-game-banner.png` — asset disponível, aparentemente não usado atualmente.
- `public/images/new-snakegame-banner.png` — imagem atual do Snake.
- `public/images/blushify.gif` — asset disponível, aparentemente não usado atualmente.
- `public/images/new-blushify-banner.png` — imagem atual do Blushify.

### PDF

- `public/pdf/mvmd-en-resume.pdf` — currículo em inglês usado no botão do Hero.

## 18. Metadata e SEO atuais

Arquivo: `app/layout.tsx`

Metadata configurada:

- Title: `MvDev | Full Stack Developer Portfolio`.
- Description: `Full Stack Developer specializing in React, Next.js, Node.js, and .NET. Building modern and scalable web applications.`
- favicon, shortcut e apple icon usando `/images/icon.ico`.

Não foram identificados no código lido:

- Open Graph customizado;
- Twitter Cards;
- canonical URL;
- sitemap;
- robots metadata;
- JSON-LD/schema.org;
- metadata localizada em português;
- imagens sociais configuradas.

## 19. Configuração e observações técnicas

- `next.config.ts` existe e deve ser consultado antes de alterar imagens remotas ou opções do Next.
- O projeto usa alias `@/*`, configurado no `tsconfig.json`.
- `eslint.config.mjs`, `postcss.config.mjs` e `components.json` fazem parte da configuração.
- Não há diretório `src`; `app`, `components` e `lib` ficam na raiz.
- O README ainda descreve uma estrutura genérica diferente da estrutura real e menciona tecnologias/arquivos que não correspondem exatamente ao estado atual.
- Dependências como Font Awesome, `swiper`, `countup.js`, Lenis, Bootstrap Icons e Remix Icon estão instaladas; parte das dependências pode estar subutilizada ou redundante.

## 20. Riscos e oportunidades prioritárias para o próximo plano

### Prioridade funcional

1. Implementar o envio real do formulário de contato com validação e feedback.
2. Corrigir e centralizar dados pessoais/identidade para evitar divergência de nome, e-mail, domínio e currículo.
3. Definir fonte única para estatísticas e estados de loading/erro.
4. Melhorar a troca de idioma, incluindo `lang`, SEO e sincronização de estado.

### Prioridade UX e acessibilidade

1. Adicionar labels reais, mensagens de validação, foco visível e estados acessíveis aos formulários.
2. Adicionar `aria-expanded`, `aria-controls` e gerenciamento de foco ao menu mobile.
3. Exibir nomes das tecnologias junto dos ícones.
4. Adicionar suporte a `prefers-reduced-motion`.
5. Garantir contraste, navegação por teclado e semântica dos links/botões.
6. Revisar layouts mobile, especialmente Hero, carrossel, números e dimensões fixas de imagens.

### Prioridade visual/redesign

1. Consolidar tokens CSS/Tailwind e remover variáveis duplicadas ou herdadas do template.
2. Criar um sistema de componentes para cards, buttons, badges, links e estados.
3. Tornar o Hero mais orientado a conversão, com CTA principal e secundário claros.
4. Transformar projetos em estudos de caso mais informativos, com contexto, papel, resultados e stack.
5. Revisar o carrossel: considerar grid/lista filtrável ou interação mais acessível dependendo do objetivo.
6. Melhorar hierarquia tipográfica e reduzir dependência de títulos gigantes em telas pequenas.
7. Definir direção visual consistente para fundo, blobs, bordas e efeitos de hover.

### Prioridade técnica/performance

1. Testar `npm run lint` e `npm run build` antes e depois das alterações.
2. Revisar dependências redundantes e imports globais de bibliotecas de ícones.
3. Otimizar imagens e remover assets não utilizados quando confirmados.
4. Cancelar RAF do Lenis corretamente.
5. Avaliar cache, limites e robustez do endpoint GitHub.
6. Adicionar testes ou ao menos critérios manuais para navegação, idioma, formulário, carrossel e responsividade.

## 21. Critérios sugeridos para qualquer futuro redesign

O plano de melhorias deve preservar ou decidir explicitamente sobre:

- página única versus múltiplas páginas/rotas;
- inglês como idioma inicial versus português;
- uso de Lenis e intensidade das animações;
- carrossel versus grid para projetos;
- exposição pública de telefone, endereço e horário;
- integração do formulário e serviço de e-mail;
- consistência entre o nome da pessoa, marca MvDev, domínio e currículo;
- estratégia de deploy (Vercel ou outro provedor);
- equilíbrio entre identidade visual impactante e acessibilidade/performance.

## 22. Resumo executivo

O projeto já possui uma base visual completa e funcional como portfólio one-page: navegação por âncoras, Hero, serviços, currículo, projetos, contato e footer, com suporte bilíngue, animações, smooth scroll, carrossel e dados do GitHub.

As maiores lacunas atuais não estão na quantidade de seções, mas em robustez e refinamento: o formulário ainda não envia mensagens, o SEO é básico, a acessibilidade precisa ser reforçada, há possíveis inconsistências de identidade e dados, o sistema visual possui tokens duplicados, e alguns comportamentos são frágeis em mobile ou durante a troca de idioma.

O próximo plano de redesign deve partir de uma decisão clara de posicionamento profissional e conversão: quem é o público-alvo, quais serviços devem ser priorizados, quais projetos comprovam melhor a competência e qual ação principal o visitante deve realizar.
