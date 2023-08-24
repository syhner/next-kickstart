## next-kickstart

Minimal yet feature packed Next.js 13.4 (app router) boilerplate. Zero setup to run on edge.

Features which require enabling can be done so by uncommenting all lines under where `@enable {feature}` appears. Some of these may be optional, indicated with `@optional {purpose}` e.g.

```ts
/**
 * @enable Drizzle
 * @optional Store auth data in database
 */
// adapter: DrizzleAdapter(db)
```

## 📚 Features

- 🏗️ [**TypeScript**](#typescript) - Configured to maximize type safety
- ⚙️ [**T3 Env**](#t3-env) - Environment variable validation
- 📏 [**ESLint**](#eslint) - Consistent code standards
- ✨ [**Prettier**](#prettier) - Consistent code styling
- 🎨 [**Tailwind CSS**](#tailwind-css) - Utility-first CSS framework
- 🧩 [**shadcn/ui**](#shadcnui) - Components built with Radix UI and Tailwind CSS
- 🌐 [**tRPC**](#trpc) - Create end-to-end type-safe APIs that work in both client and server components
- 💽 [**Drizzle**](#drizzle) - ORM with maximal type safety (requires enabling)
- 🔒 [**NextAuth**](#nextauth) - Flexible and secure authentication (requires enabling)
  - ❗️ using [next-auth@experimental](https://www.npmjs.com/package/next-auth/v/0.0.0-manual.ffd05533) to work on edge
- 📦 [**next-pwa**](#next-pwa) - Installable as a progressive web app (PWA)
- 🧪 [**Vitest**](#vitest) - Flexible testing framework
- 🐙 [**React Testing Library**](#react-testing-library) - Maintainable component testing
- 🎭 [**Playwright**](#playwright) - End-to-end testing against multiple environments
- 🔄 [**GitHub Actions**](#github-actions) - Robust CI/CD
- 💻 [**VS Code configuration**](#vs-code) - Configurations for easy debugging

## 🌱 Getting started

🚀 **Option 1: Clone and deploy with Vercel**

[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2FSyhner%2Fnext-kickstart)

📋 **Option 2: Clone and run locally**

1. [Use this template](https://github.com/new?template_name=next-kickstart&template_owner=Syhner)
2. Clone your new repository
3. Install dependencies and run the development server

```sh
pnpm install
pnpm run dev
```

## ⚙️ Configuration

### [TypeScript](https://www.typescriptlang.org/)

- [`tsconfig.json`](tsconfig.json) - all modifications from [create-next-app](https://www.npmjs.com/package/create-next-app) are explained with comments
- [`types/reset.d.ts`](types/reset.d.ts) - using [ts-reset](https://github.com/total-typescript/ts-reset) to increase type-safety

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

### [tRPC](https://trpc.io/)

- [`src/app/api/trpc/[trpc]/route.ts`](src/app/api/trpc/[trpc]/route.ts), [`src/trpc/`](src/trpc)

### [Drizzle](https://orm.drizzle.team/)

(requires enabling)

- [`src/db/`](src/db/), [`src/lib/db.ts`](src/lib/db.ts), [`drizzle.config.ts`](drizzle.config.ts)

### [NextAuth](https://next-auth.js.org/)

(requires enabling)

- [`src/app/api/auth/[...nextauth]/route.ts`](src/app/api/auth/[...nextauth]/route.ts), [`src/components/auth.tsx`](src/components/auth.tsx)
- [`src/db/schemas/auth.ts`](src/db/schemas/auth.ts) — store auth data (users, accounts, sessions, verification tokens) in database
- [`src/lib/auth.ts`](src/lib/auth.ts)

### [next-pwa](https://www.npmjs.com/package/@ducanh2912/next-pwa)

- [`public/icon-512x512.png`](public/icon-512x512.png), [`public/manifest.json`](public/manifest.json), [`next.config.mjs`](next.config.mjs)

### [Vitest](https://vitest.dev/)

- [`testing/setup.ts`](testing/setup.ts), [`types/vitest.d.ts`](types/vitest.d.ts), [`vitest.config.ts`](vitest.config.ts)

### [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

- [`src/app/page.test.tsx`](src/app/page.test.tsx)

### [Playwright](https://playwright.dev/)

- [`e2e/`](e2e/), [`playwright.config.ts`](playwright.config.ts)

### [GitHub Actions](https://github.com/features/actions)

- [`.github/workflows/ci.yml`](.github/workflows/ci.yml) - type-checking and linting (hence these errors are ignored in [`next.config.mjs`](next.config.mjs))

### [VS Code](https://code.visualstudio.com/)

- [`.vscode/launch.json`](.vscode/launch.json) - debug configurations
- [`.vscode/settings.json`](.vscode/settings.json) - use project TypeScript version
