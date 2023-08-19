## Webstack

Next.js 13.4 template repository — edge-runtime ready and runs out of the box.

## 📚 Features

Features which require configuration (using environment variables) can be enabled by uncommenting just a few lines in their [configuration](#⚙️-configuration).

- 🏗️ [**TypeScript**](#typescript) - Configured to maximize type safety
- ⚙️ [**T3 Env**](#t3-env) - Environment variable validation
- 📏 [**ESLint**](#eslint) - Consistent code standards
- ✨ [**Prettier**](#prettier) - Consistent code styling
- 🎨 [**Tailwind CSS**](#tailwind-css) - Utility-first CSS framework
- 🧩 [**shadcn/ui**](#shadcnui) - Beautifully designed components built with Radix UI and Tailwind CSS
- 💽 [**Drizzle**](#drizzle) - ORM which feels like writing SQL (requires enabling)
- 🔒 [**NextAuth**](#nextauth) - Flexible and secure authentication (requires enabling)
- 🎭 [**Playwright**](#playwright) - End-to-end testing against multiple environments
- 🔄 [**GitHub Actions**](#github-actions) - Robust CI/CD
- 💻 [**VS Code configuration**](#vs-code) - Configurations for easy debugging

## 🌱 Getting started

🚀 **Option 1: Clone and deploy with Vercel**

[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2FSyhner%2Fwebstack)

📋 **Option 2: Clone and run locally**

1. [Use this template](https://github.com/new?template_name=webstack&template_owner=Syhner)
2. Clone your new repository
3. Install dependencies and run the development server

```sh
pnpm install
pnpm run dev
```

## ⚙️ Configuration

### [TypeScript](https://www.typescriptlang.org/)

- [`reset.d.ts`](reset.d.ts) - using [ts-reset](https://github.com/total-typescript/ts-reset) to increase type-safety
- [`tsconfig.json`](tsconfig.json)
  - `"noUncheckedIndexedAccess": true` to increase type-safety
  - `"target": "ES6"` (instead of `ES5`) for compatibility with [Drizzle Studio](https://orm.drizzle.team/drizzle-studio/overview)
  - Absolute imports with `~/*` (to differentiate from `@/*` namespace imports)

### [T3 Env](https://github.com/t3-oss/t3-env)

- [`env.mjs`](env.mjs) - configure environment variables
- [`next.config.mjs`](next.config.mjs) - environment variables are validated at build-time

### [ESLint](https://eslint.org/)

- [`.eslintrc.json`](.eslintrc.json)

### [Prettier](https://prettier.io/)

- [`.eslintrc.json`](.eslintrc.json), [`.prettierignore`](.prettierignore), [`.prettierrc.json`](.prettierrc.json)

### [Tailwind CSS](https://tailwindcss.com/)

- [`src/styles/globals.css`](src/styles/globals.css), [`tailwind.config.js`](tailwind.config.js)

### [shadcn/ui](https://ui.shadcn.com/)

- [`src/components/ui/`](src/components/ui/), [`src/components/theme-provider.tsx`](src/components/theme-provider.tsx), [`src/components/theme-toggle.tsx`](src/components/theme-provider.tsx), [`components.json`](components.json)

### [Drizzle](https://orm.drizzle.team/)

- [`src/db/`](src/db/), [`src/lib/db.ts`](src/lib/db.ts), [`drizzle.config.ts`](drizzle.config.ts)

### [NextAuth](https://next-auth.js.org/)

- [`src/app/api/auth/[...nextauth]/route.ts`](src/app/api/auth/[...nextauth]/route.ts), [`src/components/auth.tsx`](src/components/auth.tsx)
- [`src/db/schemas/auth.ts`](src/db/schemas/auth.ts) — store auth data (users, accounts, sessions, verification tokens) in database
- [`src/lib/auth.ts`](src/lib/auth.ts)

### [Playwright](https://playwright.dev/)

- [`e2e/`](e2e/), [`playwright.config.ts`](playwright.config.ts)

### [GitHub Actions](https://github.com/features/actions)

- [`.github/workflows/ci.yml`](.github/workflows/ci.yml) - type-checking and linting (hence these errors are ignored in [`next.config.mjs`](next.config.mjs))

### [VS Code](https://code.visualstudio.com/)

- [`.vscode/launch.json`](.vscode/launch.json) - debug configurations
- [`.vscode/settings.json`](.vscode/settings.json) - use project TypeScript version
