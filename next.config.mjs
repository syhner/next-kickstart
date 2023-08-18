// @ts-check

import withBundleAnalyzer from '@next/bundle-analyzer';
import { env } from './env.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const withBundleAnalyzerConfig = withBundleAnalyzer({
  enabled: env.ANALYZE === true,
});

export default withBundleAnalyzerConfig(nextConfig);
