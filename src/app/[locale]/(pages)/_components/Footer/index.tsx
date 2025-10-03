import Link from "next/link";
import { useTranslations } from "next-intl";

import Container from "@/components/_layout/Container";
import LanguageSwitcher from "@/components/languageSwitch";
import { configBrand } from "@/config/brand.";

function IconX() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640'>
      <path d='M453.2 112h70.6L369.6 288.2 551 528H409L297.7 382.6 170.5 528H99.8l164.9-188.5L90.8 112h145.6l100.5 132.9zm-24.8 373.8h39.1L215.1 152h-42z'></path>
    </svg>
  )
}

function IconFaceBook() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640'>
      <path d='M240 363.3V576h116V363.3h86.5l18-97.8H356v-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4.4 37 1.2V71.9C451.4 68 416.4 64 396.2 64 289.3 64 240 114.5 240 223.4v42.1h-66v97.8z'></path>
    </svg>
  )
}

function WebFooter() {
  const t = useTranslations('footer')
  const tPhone = useTranslations("phone");

  return (
    <footer className="bg-white text-center lg:text-justify py-6 group/row relative isolate pt-12 border border-t-[#333]/30">
      <Container size="wide">

        <div className="flex flex-col md:flex-row lg:flex-row justify-between space-y-2 items-center align-middle">
          <Link href="/" className="text-[#333] flex flex-col group/item relative">
            <div className="text-sm/6 text-gray-950 flex flex-col">
              <span className="font-logo text-5xl font-bold uppercase leading-6">CerDent</span>
              <span className="font-logo text-lg">{t('motto')}</span>
            </div>
          </Link>



          <div className="flex space-x-7 text-[#333]">
            {/* ul. Ludwiki 1  01-226 Warszawa */}
            <Link href="mailto:info@cerdent.pl">
              info@cerdent.pl
            </Link>
            <Link href={`tel:${tPhone("raw")}`}>
              {tPhone("display")}
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="space-x-2">
            <span className="text-sm">&copy; {configBrand.name} {configBrand.established}-{new Date().getFullYear()}. {t("copyright")}</span>
            {/* VAT number (NIP): */}
            <span>NIP: 612-149-42-57</span>
          </div>

          <div className="flex items-center">
            <LanguageSwitcher />
            <div className="flex items-center">
              <Link href={configBrand.social.twitter} target="_blank" className="size-6 inline-block">
                <IconFaceBook />
              </Link>
              <Link href={configBrand.social.facebook} target="_blank" className="size-6 inline-block">
                <IconX />
              </Link>
            </div>
            {/* <div className="flex items-center space-x-2">
              <Link href="">Blog</Link>
              <Link href="">Privacy Policy</Link>
            </div> */}

          </div>
        </div>

      </Container>
    </footer>
  )
}

export default WebFooter;
