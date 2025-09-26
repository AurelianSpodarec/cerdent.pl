import type { Metadata } from "next";

import "./../styles/styles.css";

import WebHeader from "./(pages)/_components/Header";
import WebFooter from "./(pages)/_components/Footer";
import { georgia, montserrat, rajdhani } from "@/components/fonts";

export const metadata: Metadata = {
  title: "CerDent – Same-Day Denture Repairs in Warsaw",
  description: "Broken denture? Get fast, guaranteed repairs in under 90 minutes. Certified lab experts handle all types of dentures—ready for holidays, meetings, or nights out.",
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`antialiased font-body ${rajdhani.variable} ${montserrat.variable} ${georgia.variable}`}>
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
