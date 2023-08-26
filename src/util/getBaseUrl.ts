/* eslint-disable no-process-env */

export function getBaseUrl() {
  // Browser should use relative path
  if (typeof window !== 'undefined') return '';

  // Deployment URL when deployed on Vercel
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  // Assume localhost
  return 'http://localhost:3000';
}
