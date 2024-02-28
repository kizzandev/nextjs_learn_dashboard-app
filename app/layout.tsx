import { Metadata } from 'next';

// Global CSS
import '@/app/ui/global.css';
// Fonts
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme',
    default: 'Acme',
  },
  description: 'Acme Dashboard built with Next.js and TypeScript.',
  metadataBase: new URL('https://nextjs-learn-dashboard-app-kz.vercel.app/'),

  keywords: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Dashboard'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
