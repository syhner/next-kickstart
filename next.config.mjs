/* eslint-disable no-process-env */
// @ts-check

import { env } from './src/env.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: env.NODE_ENV === 'production' ? 'standalone' : undefined,
  typescript: {
    // Handled during CI
    ignoreBuildErrors: true,
  },
  eslint: {
    // Handled during CI
    ignoreDuringBuilds: true,
  },
  experimental: {
    mdxRs: true,
    /**
     * @enable NextAuth
     */
    // serverActions: true,
  },
};

/**
 * @param {string} phase
 * @param {{ defaultConfig: import('next').NextConfig }} options
 */
const nextConfigWithPlugins = async (phase, { defaultConfig }) => {
  /* Dynamically import plugins from devDependencies to reduce bundle size */

  const withBundleAnalyzer = (await import('@next/bundle-analyzer')).default({
    enabled: env.ANALYZE,
  });

  const withMDX = (await import('@next/mdx')).default();

  return withBundleAnalyzer(withMDX(nextConfig));
};

export default nextConfigWithPlugins;
