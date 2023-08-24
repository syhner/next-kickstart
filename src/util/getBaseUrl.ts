/* eslint-disable no-process-env */

export default function getBaseUrl() {
  if (typeof window !== 'undefined')
    // Browser should use relative path
    return '';

  // Deployment URL when deployed on Vercel
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Assume localhost
  return 'http://localhost:3000';
}
