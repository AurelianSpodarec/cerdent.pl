import { PhoneIcon } from "lucide-react";
import IconStar2 from "@/components/Star2";
import BackgroundPattern from "./BackgroundPattern";
import Link from "next/link";
import IconCheckmark from "@/components/Checkmark";

function SectionHero() {
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
              {/* reviews on Google */}
              <span>opinie w Google</span>
            </div>
          </div>

          <h1 className="font-semibold max-w-[1040px] mx-auto mb-4">
            {/* Broken Denture? Get It Fixed in Under 90 Minutes */}
            Uszkodzona proteza? 
            Naprawa w mniej niż 90 minut.
          </h1>
          <p className="text-lg max-w-[700px] mx-auto">
            {/* Technical dental laboratory — broken denture repaired today, guaranteed. Eat, smile, and enjoy your day without worry. */}
            Techniczny laboratorium protetyczne — naprawa uszkodzonej protezy jeszcze dziś, gwarantowane. Jedz, uśmiechaj się i ciesz się dniem już dziś.
          </p>
        </div>

        <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center align-middle py-6 space-x-4 text-sm">
          <li className="flex items-center align-center space-x-1">
            <IconCheckmark />
            <span>
              {/* Certified Laboratory */}
              Certyfikowane laboratorium
            </span>
          </li>
          <li className="flex items-center align-center space-x-1">
            <IconCheckmark />
            <span>
              {/* Open 24/7 in Warsaw */}
              Otwarte 24/7 w Warszawie
            </span>
          </li>
          <li className="flex items-center align-center space-x-1">
            <IconCheckmark />
            <span>
              {/* 21+ Years of Expertise */}
              21+ lat doświadczenia
            </span>
          </li>
        </ul>

        <div className="flex flex-col space-y-2">
          <Link href="tel:509 828 545" className="bg-primary border-2 border-[#efba49] space-x-1 text-[#333] text-lg py-4 font-semibold px-10 rounded cursor-pointer flex items-center">
            <PhoneIcon className="size-4 mr-1" />
            <span>Zadzwoń 509 828 545</span>
          </Link>
          {/* TODO: Add This Link Once other site is done
          <button>For Dentists →</button> */}
        </div>
      </div>
    </section>
  );
}

export default SectionHero