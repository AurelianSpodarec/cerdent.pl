import { useTranslations } from "next-intl";
import Image from "next/image";

import Section from "@/components/_layout/Section";
import Container from "@/components/_layout/Container";

const benefitIcons = {
  b1: "/images/wall-clock.png",
  b2: "/images/denture.png",
  b3: "/images/certificate.png"
};

function SectionOffer() {
  const t = useTranslations("home.offer");
  const benefits = [
    { key: "b1", icon: benefitIcons.b1 },
    { key: "b2", icon: benefitIcons.b2 },
    { key: "b3", icon: benefitIcons.b3 }
  ];

  return (
    <Section id="offer">
      <header className="text-center mb-20">
        <h2>{t("title")}</h2>
      </header>

      <Container size="wide">
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((item) => (
            <div
              key={item.key}
              className="border border-[#f0f0f0] rounded bg-[#fffdfc] text-center"
            >
              <div className="flex justify-center items-center mt-12">
                <div className="w-[160px]">
                  <Image
                    src={item.icon}
                    alt={t(`benefits.${item.key}.title`)}
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className="p-10 pb-16">
                <h3 className="text-2xl font-medium mb-2 text-[#685524]">
                  {t(`benefits.${item.key}.title`)}
                </h3>
                <p className="text-[#333] px-2">
                  {t(`benefits.${item.key}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default SectionOffer;
