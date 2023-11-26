import '../styles/globals.css';

import type { Metadata, ServerRuntime, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '~/components/providers/theme-provider';
import { TrpcProvider } from '~/components/providers/trpc-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'next-kickstart',
  description: 'Minimal yet feature packed Next.js (app router) boilerplate',
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#000000',
};

export const runtime: ServerRuntime = 'edge';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <TrpcProvider>{children}</TrpcProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
