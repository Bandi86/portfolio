import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio app',
  description: 'My Portfolio app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='min-h-min'>
      <body className={roboto.className}>
        <main >
        <Navbar />
        {children}
        </main>
       
      </body>
    </html>
  );
}
