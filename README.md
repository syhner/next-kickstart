## next-kickstart

Feature packed Next.js 13.4 (app router) boilerplate. Zero setup. Edge ready.

Some features depend on environment variables (indicated in features list with 💡) and so require enabling. They are disabled by default so that the app runs without any setup. They can be enabled by uncommenting all lines under where `@enable {feature}` appears. Some of these may be optional, indicated with `@optional {purpose}` e.g.

```ts
/**
 * @enable Drizzle
 * @optional Store auth data in database
 */
// adapter: DrizzleAdapter(db)
```

## 📚 Features

- 🏗️ [**TypeScript**](https://www.typescriptlang.org/) - Configured to maximize type safety
- ⚙️ [**T3 Env**](https://github.com/t3-oss/t3-env) - Environment variable validation
- 📏 [**ESLint**](https://eslint.org/) - Consistent code standards
- ✨ [**Prettier**](https://prettier.io/) - Consistent code styling
- 🎨 [**Tailwind CSS**](https://tailwindcss.com/) - Utility-first CSS framework
- 🧩 [**shadcn/ui**](https://ui.shadcn.com/) - Components built with Radix UI and Tailwind CSS
- 🌐 [**tRPC**](https://trpc.io/) - Create end-to-end type-safe APIs that work in both client and server components
- ⚡ [**WebSockets**](https://pusher.com) 💡 - Real-time communication (using Pusher)
  - ❗️ using [pusher-http-edge](https://www.npmjs.com/package/pusher-http-edge) to run on edge, use the [nodejs runtime](src/app/api/trpc/[trpc]/route.ts) with a [stable version](https://www.npmjs.com/package/pusher) if desired
  - 🔗 integrates with tRPC for end-to-end type-safe events
- 💽 [**Drizzle**](https://orm.drizzle.team/) 💡 - ORM with maximal type safety
- 🔒 [**NextAuth**](https://next-auth.js.org/) 💡 - Flexible and secure authentication
  - ❗️ using [next-auth@experimental](https://www.npmjs.com/package/next-auth/v/0.0.0-manual.ffd05533) to run on edge. use the [nodejs runtime](src/app/api/auth/[...nextauth]/route.ts) with a [stable version](https://www.npmjs.com/package/next-auth) if desired
  - 🔗 integrates with Drizzle to optionally store auth data
- 📦 [**next-pwa**](https://www.npmjs.com/package/@ducanh2912/next-pwa) 💡 - Installable as a progressive web app (PWA)
- 🧪 [**Vitest**](https://vitest.dev/) - Flexible testing framework
- 🐙 [**React Testing Library**](https://testing-library.com/docs/react-testing-library/intro/) - Maintainable component testing
  - 🔗 integrates with Vitest as your testing framework
- 🎭 [**Playwright**](https://playwright.dev/) - End-to-end testing against multiple environments
- 🐳 [**Docker**](https://www.docker.com/) - Local and production and docker-compose and Dockerfiles for running anywhere
- 🔄 [**GitHub Actions**](https://github.com/features/actions) - Robust CI/CD
- 💻 [**VS Code configuration**](https://code.visualstudio.com/) - Configurations for easy debugging

## 🌱 Getting started

🚀 **Option 1: Clone and deploy with Vercel**

[![Vercel](https://vercel.com/button)](https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2FSyhner%2Fnext-kickstart)

📋 **Option 2: Clone and run locally**

1. [Use this template](https://github.com/new?template_name=next-kickstart&template_owner=Syhner)
2. Clone your new repository
3. Install dependencies and run the development server

- with [pnpm](https://pnpm.io/installation)

  ```sh
  pnpm install
  pnpm run dev
  ```

- or with [Docker](https://docs.docker.com/get-docker/)

  ```sh
  docker-compose --file docker/dev/docker-compose.yml up
  ```

## ⚙️ Configuration

### [TypeScript](https://www.typescriptlang.org/)

- [`tsconfig.json`](tsconfig.json) - all modifications from [create-next-app](https://www.npmjs.com/package/create-next-app) are explained with comments
- [`types/reset.d.ts`](types/reset.d.ts) - using [ts-reset](https://github.com/total-typescript/ts-reset) to increase type-safety

### [T3 Env](https://github.com/t3-oss/t3-env)

- [`src/env.mjs`](src/env.mjs) - configure environment variables
- [`next.config.mjs`](next.config.mjs) - environment variables are validated at build-time

### [ESLint](https://eslint.org/)

- [`.eslintrc.json`](.eslintrc.json)

### [Prettier](https://prettier.io/)

- [`.eslintrc.json`](.eslintrc.json)
- [`.prettierignore`](.prettierignore)
- [`.prettierrc.json`](.prettierrc.json)

### [Tailwind CSS](https://tailwindcss.com/)

- [`src/styles/globals.css`](src/styles/globals.css)
- [`tailwind.config.js`](tailwind.config.js)

### [shadcn/ui](https://ui.shadcn.com/)

- [`src/components/providers/theme-provider.tsx`](src/components/providers/theme-provider.tsx)
- [`src/components/ui/`](src/components/ui/)
- [`src/components/theme-toggle.tsx`](src/components/theme-toggle.tsx)
- [`components.json`](components.json)

### [tRPC](https://trpc.io/)

- [`src/app/api/trpc/[trpc]/route.ts`](src/components/providers/trpc-provider.tsx)
- [`src/components/providers/trpc-provider.tsx`](src/app/api/trpc/[trpc]/route.ts)
- [`src/trpc/`](src/trpc)
  - [`trpc-caller.ts`](src/trpc/trpc-caller.ts) - trpc caller to be used in server components
  - [`trpc-react.ts`](src/trpc/trpc-reacer.ts) - trpc to be used in client components

#### Examples

- [`src/app/examples/client-component/page.tsx`](src/app/examples/client-component/page.tsx) - use in a client component
- [`src/app/examples/server-component/page.tsx`](src/app/examples/server-component/page.tsx) - use in a server component

### [WebSockets with Pusher](https://pusher.com)

💡 (requires enabling)

- [`src/hooks/useEvent.ts`](src/hooks/useEvent.ts)
- [`src/lib/events.ts`](src/lib/events.ts)
- [`src/trpc/methods.ts`](src/trpc/methods.ts)

#### Examples

- [`src/app/examples/websockets/page.tsx`](src/app/examples/websockets/page.tsx)

### [Drizzle](https://orm.drizzle.team/)

💡 (requires enabling)

- [`src/db/`](src/db/)
- [`src/lib/db.ts`](src/lib/db.ts)
- [`drizzle.config.ts`](drizzle.config.ts)

### [NextAuth](https://next-auth.js.org/)

💡 (requires enabling)

- [`src/app/api/auth/[...nextauth]/route.ts`](src/app/api/auth/[...nextauth]/route.ts)
- [`src/components/auth.tsx`](src/components/auth.tsx)
- [`src/db/schemas/auth.ts`](src/db/schemas/auth.ts) — store auth data (users, accounts, sessions, verification tokens) in database
- [`src/lib/auth.ts`](src/lib/auth.ts)

### [next-pwa](https://www.npmjs.com/package/@ducanh2912/next-pwa)

- [`public/icon-512x512.png`](public/icon-512x512.png)
- [`public/manifest.json`](public/manifest.json)
- [`next.config.mjs`](next.config.mjs)

### [Vitest](https://vitest.dev/)

- [`testing/setup.ts`](testing/setup.ts)
- [`types/vitest.d.ts`](types/vitest.d.ts)
- [`vitest.config.ts`](vitest.config.ts)

### [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

- [`src/app/page.test.tsx`](src/app/page.test.tsx)
- [`testing/setup.ts`](testing/setup.ts)

### [Playwright](https://playwright.dev/)

- [`e2e/`](e2e/)
- [`playwright.config.ts`](playwright.config.ts)

### [Docker](https://www.docker.com/)

- [`.dockerignore`](.dockerignore)
- [`docker/`](docker/) - Dockerfile and docker-compose.yml for development and production

### [GitHub Actions](https://github.com/features/actions)

- [`.github/workflows/ci.yml`](.github/workflows/ci.yml) - type-checking and linting (hence these errors are ignored in [`next.config.mjs`](next.config.mjs))

### [VS Code](https://code.visualstudio.com/)

- [`.vscode/extensions.json`](.vscode/extensions.json) - recommended workspace extensions
- [`.vscode/launch.json`](.vscode/launch.json) - debug configurations
- [`.vscode/settings.json`](.vscode/settings.json) - use project TypeScript version
