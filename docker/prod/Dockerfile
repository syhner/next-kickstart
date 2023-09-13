FROM node:18-alpine AS base
WORKDIR /app
# https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
RUN apk add --no-cache libc6-compat
RUN yarn global add pnpm

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
# Copy files
COPY --from=deps /app/node_modules ./node_modules
COPY public/ ./public/
COPY src/ ./src/
COPY .env* next.config.mjs package.json postcss.config.js tailwind.config.js tsconfig.json ./
# Set environment variables
# ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV=production
RUN pnpm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app
# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder /app/public/ ./public/
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone/ ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static/ ./.next/static/
# Environment variables must be redefined at run time
# ENV NEXT_TELEMETRY_DISABLED 1
COPY .env* ./
ENV NODE_ENV=production
ENV PORT 3000
ENV HOSTNAME localhost
EXPOSE 3000
CMD ["node", "server.js"]
