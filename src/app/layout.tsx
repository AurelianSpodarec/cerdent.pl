import type { Metadata } from "next";

import "./../styles/styles.css";

import WebHeader from "./(pages)/_components/Header";
import WebFooter from "./(pages)/_components/Footer";

import { Montserrat, Rajdhani, Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "CerDent – Same-Day Denture Repairs in Warsaw",
  description: "Broken denture? Get fast, guaranteed repairs in under 90 minutes. Certified lab experts handle all types of dentures—ready for holidays, meetings, or nights out.",
};

export const montserrat = Montserrat({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})

export const georgia = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto'
})

export const rajdhani = Rajdhani({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rajdhani'
})

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`antialiased font-body ${montserrat.variable} ${georgia.variable}`}>
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
