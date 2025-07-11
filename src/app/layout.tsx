import type { Metadata } from 'next';
import { Inter, Readex_Pro } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Drawer from '@/components/Drawer';
import Blur from '@/components/Blur';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const readexPro = Readex_Pro({
  subsets: ['latin'],
  variable: '--font-readex',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'E-commerce App',
  description: 'Check it out',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${readexPro.variable} antialiased`}>
        <Blur />
        <div className="min-h-dvh flex flex-col gap-[28px] overflow-hidden relative">
          <Navbar />
          <Drawer />
          <main className="flex-auto">
            <div className="mx-auto max-w-[1264px] w-[100%] px-[15px] ">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
