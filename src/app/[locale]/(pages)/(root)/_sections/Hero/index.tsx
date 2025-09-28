import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { PhoneIcon } from "lucide-react";

import IconStar2 from "@/components/Star2";
import BackgroundPattern from "./BackgroundPattern";
import IconCheckmark from "@/components/Checkmark";

function SectionHero() {
  const locale = useLocale();

  const t = useTranslations('home.hero')
  const tPhone = useTranslations('phone')
  const tBadges = [
    { text: t("badges.certified") },
    { text: t("badges.open") },
    { text: `31+ ${t("badges.experience")}` }
  ];

  const localeTitleStyles: Record<string, string> = {
    en: "max-w-[880px]",
    pl: "max-w-[1040px]",
  };

  return (
    <section className="pt-46 pb-10">
      <div className="flex flex-col items-center justify-center text-center">

        <BackgroundPattern />

        <div className="text-center mb-4">

          <div className="inline-flex py-1.5 px-2 mb-4 space-x-1 border border-[#dcdcdc] rounded-lg backdrop-blur-2xl bg-white/70">
            <div className="flex items-center">
              <IconStar2 className="size-4 text-yellow-400" />
              <IconStar2 className="size-4 text-yellow-400" />
              <IconStar2 className="size-4 text-yellow-400" />
              <IconStar2 className="size-4 text-yellow-400" />
              <IconStar2 className="size-4 text-yellow-400" />
            </div>
            <div className="text-[#333]/80 text-xs space-x-1">
              <span>4.8/5</span>
              <span>{t('rating')}</span>
            </div>
          </div>

          <h1 className={`font-semibold mx-auto mb-4 ${localeTitleStyles[locale]}`}>{t('title')}</h1>
          <p className="text-lg max-w-[700px] mx-auto">{t('description')}</p>
        </div>

        <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center align-middle py-6 space-x-4 text-sm">
          {tBadges.map((item, index) => (
            <li key={index} className="flex items-center space-x-1">
              <IconCheckmark />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col space-y-2">
          <Link href={`tel:${tPhone("raw")}`} className="bg-primary border-2 border-[#efba49] space-x-1 text-white text-lg py-4 font-semibold px-10 rounded cursor-pointer flex items-center">
            <PhoneIcon className="size-4 mr-1" />
            <span>{tPhone('label')} {tPhone('display')}</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default SectionHero