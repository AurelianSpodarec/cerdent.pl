import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'

import { georgia, montserrat, rajdhani } from "@/components/fonts";
import "@/styles/styles.css";

import WebHeader from "./(pages)/_components/Header";
import WebFooter from "./(pages)/_components/Footer";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { InitRoutes } from "@/components/InitRoutes";

export const metadata: Metadata = {
  title: "CerDent – Same-Day Denture Repairs in Warsaw",
  description: "Broken denture? Get fast, guaranteed repairs in under 90 minutes. Certified lab experts handle all types of dentures—ready for holidays, meetings, or nights out.",
};

async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode, params: Promise<{ locale: string }> }>) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang="en">
      <body className={`antialiased font-body ${rajdhani.variable} ${montserrat.variable} ${georgia.variable}`}>
        <NextIntlClientProvider>
          <InitRoutes />
          <WebHeader />
          <main>
            {children}
          </main>
          <WebFooter />
        </NextIntlClientProvider>
      </body>

      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_TAG!} />
    </html>
  );
}

export default RootLayout
