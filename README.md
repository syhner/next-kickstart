## Webstack

Next.js 13.4 template repository, batteries included and edge-runtime ready

## Config

[**TypeScript**](https://www.typescriptlang.org/)

- [`src/types/reset.d.ts`](src/types/reset.d.ts) - using [ts-reset](https://github.com/total-typescript/ts-reset) to increase type-safety
- [`tsconfig.json`](tsconfig.json)
  - `"noUncheckedIndexedAccess": true` to increase type-safety
  - `"target": "ES6"` (instead of `ES5`) for compatibility with [Drizzle Studio](https://orm.drizzle.team/drizzle-studio/overview)
  - Import alias `~/*` (to differentiate from `@/*` imports)

[**ESLint**](https://eslint.org/) - linter

- [`.eslintrc.json`](.eslintrc.json)

[**Prettier**](https://prettier.io/) - code formatter

- [`.eslintrc.json`](.eslintrc.json)
- [`.prettierignore`](.prettierignore)
- [`.prettierrc.json`](.prettierrc.json)

[**Tailwind CSS**](https://tailwindcss.com/) - CSS utility framework

- [`src/styles/globals.css`](src/styles/globals.css)
- [`tailwind.config.js`](tailwind.config.js)

[**t3-env**](https://github.com/t3-oss/t3-env) - type-safe environment variables

- [`src/env.mjs`](src/env.mjs) - configure environment variables
- [`next.config.mjs`](next.config.mjs) - environment variables are validated at build-time

[**NextAuth**](https://next-auth.js.org/) - authentication

- [`src/app/api/auth/[...nextauth]/route.ts`](src/app/api/auth/[...nextauth]/route.ts)
- [`src/components/auth.tsx`](src/components/auth.tsx)
- [`src/lib/auth.ts`](src/lib/auth.ts)
- [`src/db/schemas/auth.ts`](src/db/schemas/auth.ts) — store auth data (users, accounts, sessions, verification tokens) in database

[**GitHub Actions**](https://github.com/features/actions) - CI/CD

- [`.github/workflows/ci.yml`](.github/workflows/ci.yml) - type-checking and linting (hence these errors are ignored in [`next.config.mjs`](next.config.mjs))

[**Drizzle**](https://orm.drizzle.team/) - SQL ORM

- [`src/db/*`](src/db/)
- [`src/lib/db.ts`](src/lib/db.ts)
- [`drizzle.config.ts`](drizzle.config.ts)

[**shadcn/ui**](https://ui.shadcn.com/) - UI component library

- [`src/components/ui/*`](src/components/ui/)
- [`src/components/theme-provider.tsx`](src/components/theme-provider.tsx)
- [`src/components/theme-toggle.tsx`](src/components/theme-provider.tsx)
- [`components.json`](components.json)

[**VS Code**](https://code.visualstudio.com/)

- [`.vscode/*`](.vscode/) - use project TypeScript version + debug configurations
