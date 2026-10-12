# AXL Visual Studio

Portfolio and booking website for professional photography services.

**Author:** Alexandru (Qu1etbyte)  
**Stack:** Next.js 15 · React 19 · TypeScript

## Demo / Preview

![Portfolio preview](images/portfolio-preview.jpg)

## Features

- Portfolio grid with lightbox (6 unique photos)
- Services & pricing page (RO / ENG)
- Contact form with WhatsApp deep-link and real `mailto:`
- Language preference persisted in `localStorage`
- Shared package definitions (prices match between Services and Contact)

## Packages

| Package                     | RO price       | EN price   |
|-----------------------------|----------------|------------|
| Portret Standard            | 300 RON        | €60        |
| Portret Premium / Editorial | 500 RON        | €100       |
| Eveniment / Majorat         | de la 450 RON  | from €90   |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  page.tsx          # Portfolio
  prices/page.tsx   # Services & pricing
  contact/page.tsx  # Contact + WhatsApp / email
  layout.tsx
  globals.css
components/
  Header.tsx        # Nav + language switcher
lib/
  i18n.ts           # Translations, packages, photo data
  LanguageContext.tsx
public/             # Portfolio images (unique assets only)
images/             # README preview
```

## AI usage disclosure

AI (Grok) was used to refactor and clean the codebase, fix broken/duplicate assets, unify pricing, and implement persistent language + real contact links. Design direction, photography, and project concept are the author's own.
