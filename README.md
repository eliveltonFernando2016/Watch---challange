# Watch Challenge – Nuxt.js Frontend

Este projeto é uma aplicação frontend desenvolvida como parte de um desafio técnico, utilizando **Nuxt.js 4**, **Vue 3**, **TypeScript**, **Tailwind CSS** e **Swiper** para construção de uma interface moderna inspirada em plataformas de streaming.

---

## 🧠 Por que Nuxt.js ao invés de Next.js?

A escolha pelo **Nuxt.js** foi estratégica e alinhada ao ecossistema Vue:

### Principais motivos:

- **Stack Vue já consolidada**
  O projeto utiliza Vue 3 com Composition API, garantindo:
    - Melhor organização de estado
    - Código mais previsível
    - Reatividade mais performática

- **SSR e Hydration nativos**
  O Nuxt oferece suporte sólido a:
    - Server Side Rendering
    - Client Only Components
    - Controle fino de hydration (fundamental para Swiper, YouTube, etc.)

- **Arquitetura baseada em convenção**
    - Sistema de rotas automático
    - Layouts integrados
    - Plugins client/server separados
    - Menos boilerplate que Next

- **Integração natural com Tailwind e módulos**
  O ecossistema Nuxt facilita:
    - Uso de módulos oficiais
    - Injeção automática de CSS (como Swiper)
    - Separação clara entre client e server

Além disso, como o foco do desafio é frontend e UI/UX, o Nuxt oferece uma experiência mais fluida no desenvolvimento de interfaces complexas.

---

## 🏗️ Decisões de Arquitetura

### 1️⃣ Uso de componentes reutilizáveis (Card)

Um dos pilares do projeto é o componente **Card**, reutilizado em múltiplos contextos:

- Artistas
- Estilos musicais
- Lives
- Conteúdos exclusivos

O componente foi projetado para:

- Ser altamente configurável via `props`
- Controlar layout, background e comportamento por tipo (`cardType`)
- Centralizar lógica visual e evitar duplicação de código

Isso garante:

- Consistência visual em todo o projeto
- Manutenção mais simples
- Escalabilidade para novos tipos de conteúdo

---

### 2️⃣ Estilos dinâmicos com tipagem segura

Os estilos de background (gradientes + imagens) são controlados via `computed` tipado com `CSSProperties`.

Principais cuidados adotados:

- Nunca permitir `boolean` em propriedades de estilo
- Garantir que `background` receba apenas `string | undefined`
- Retornar sempre objetos válidos de CSS

Isso evita:

- Erros de runtime
- Problemas de hydration
- Conflitos com SSR

---

### 3️⃣ Swiper como Web Component

Foi utilizada a versão **swiper/element** (Web Components), por:

- Melhor integração com SSR
- Menor overhead de renderização
- Compatibilidade direta com Nuxt

Decisões importantes:

- Registro manual de módulos com `register()`
- Configuração via atributos + JS
- Estilos sobrescritos no CSS global

Implementações relevantes:

- Carrossel com largura automática dos slides
- Peek do próximo slide
- Fade effect no banner de marketing
- Autoplay controlado
- Pagination customizada

---

### 4️⃣ Controle de SSR e Client Only

Alguns componentes exigem execução apenas no client:

- Swiper
- YouTube iframe
- Detecção de viewport

Decisões adotadas:

- Uso consistente de `<ClientOnly>`
- Separação clara entre código SSR e client
- Evitar qualquer acesso a `window` no server

Isso garante:

- Zero erro de hydration
- Build estável
- Melhor performance

---

## 🎨 Sistema de Design

### Tipografia

- Fontes custom via `@font-face`
- Integração com Tailwind via `@theme`
- Pesos controlados por utilitários (`font-medium`, `font-bold`, etc.)

### Cores

Paleta centralizada no tema:

- Primary
- Secondary
- Gray scale
- Backgrounds institucionais

---

## 🧩 Pontos Técnicos Importantes

### Formatação de datas

O projeto utiliza formatter próprio para datas no padrão:
- DD/MM/AAAA - HH:MM

Isso garante:
- Padrão internacional
- Leitura clara em cards de eventos e lives

---

### Reatividade e Estado

- Uso exclusivo de `ref` e `computed`
- Nenhuma mutação em `computed`
- Estados controlados localmente por componente
- Dropdowns com fechamento ao clicar fora

---

### Performance

Principais cuidados adotados:

- Lazy rendering de carrosséis
- Client-only para players e sliders
- Evitar re-render desnecessário
- Estilos globais bem organizados

---

## ▶️ Setup do Projeto

Instalação das dependências:

```bash
npm install
# ou
pnpm install
# ou
yarn install
# ou
bun install
```

Servidor de desenvolvimento:
```bash
npm run dev
```

Build de produção:
```bash
npm run build
npm run preview
```
---
## ⚖️ Trade-offs e Limitações

### Algumas decisões conscientes foram tomadas:
- Swiper Web Component em vez de versão Vue (mais controle, menos abstração)
- Uso de estilos inline tipados em vez de classes puras (necessário para gradientes dinâmicos)
- ClientOnly em partes específicas (sacrifica SSR parcial em troca de estabilidade)

---

## 🚀 Possíveis Evoluções Futuras
- Integração com API real
- Sistema global de estado (Pinia)
- Skeleton loaders
- Lazy images com IntersectionObserver
- Sistema de temas (dark/light)
- Testes unitários com Vitest

---

## 🧪 Observações Finais

### Este projeto foi estruturado com foco em:
- Qualidade de código
- Estabilidade com SSR
- Reutilização de componentes
- Arquitetura escalável
- Boas práticas modernas de Vue + Nuxt

O objetivo foi simular uma aplicação de produção real, com padrões utilizados em plataformas de streaming e produtos digitais modernos.