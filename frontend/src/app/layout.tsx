import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Product Showcase Page',
  description: 'Jewelry products showcase page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-montserrat`}>
        <main className="min-h-screen bg-white">
          {children}
        </main>
      </body>
    </html>
  );
} 