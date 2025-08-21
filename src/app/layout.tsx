import type { Metadata } from "next";

import "./../styles/globals.css";

import WebHeader from "./(pages)/_components/Header";
import WebFooter from "./(pages)/_components/Footer";

import { Montserrat, Noto_Serif_Georgian } from "next/font/google";

export const metadata: Metadata = {
  title: "Next.js Dashboard with TailwindCSS",
  description: "Created with best practices in mind",
};

export const montserrat = Montserrat({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export const georgia = Noto_Serif_Georgian({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-serif-georgian'
})

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`antialiased scrollbar ${montserrat.variable} ${georgia.variable}`}>
        <WebHeader />
        <main>
          {children}
        </main>
        <WebFooter />
      </body>
    </html>
  );
}

export default RootLayout
