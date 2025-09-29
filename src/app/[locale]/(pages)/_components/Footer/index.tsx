import Link from "next/link";
import { useTranslations } from "next-intl";

import Container from "@/components/_layout/Container";
import LanguageSwitcher from "@/components/languageSwitch";

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

          <div>
            <span className="text-sm">&copy; CerDent 2004-{new Date().getFullYear()}. {t("copyright")}</span>
          </div>

          <div className="flex space-x-7 text-[#333]">
            <LanguageSwitcher />
            <Link href="mailto:info@cerdent.pl">
              info@cerdent.pl
            </Link>
            <Link href={`tel:${tPhone("raw")}`}>
              {tPhone("display")}
            </Link>
          </div>

          ul. Ludwiki 1  01-226 Warszawa
          NIP 612-149-42-57

          Privacy Policy


          Blog
          For Dentists


          {/* VAT number (NIP): */}

        </div>

      </Container>
    </footer>
  )
}

export default WebFooter;
