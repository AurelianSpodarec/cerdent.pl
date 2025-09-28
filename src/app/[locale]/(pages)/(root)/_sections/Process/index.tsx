import Link from "next/link";
import { useTranslations } from "next-intl";
import { PhoneIncomingIcon } from "lucide-react";

import CardPoint from "./CardPoint";
import Section from "@/components/_layout/Section";
import Container from "@/components/_layout/Container";
import SectionHeader from "@/components/SectionHeader";

function SectionProcess() {
  const t = useTranslations("home.process");
  const phone = useTranslations("phone");

  const steps = [
    { key: "step1" },
    { key: "step2" },
    { key: "step3" }
  ];

  return (
    <Section id="process" className="bg-[#fffcf7]">
      <Container size="wider">

        <SectionHeader
          title={t("title")}
          description={t("subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12">
          {steps.map((item, index) => (
            <CardPoint
              key={item.key}
              index={index}
              item={{
                title: t(`process.${item.key}.title`),
                desc: t(`process.${item.key}.desc`),
              }}
            />
          ))}
        </div>

        <div className="text-center">
          <Link href={`tel:${phone("raw")}`} className="bg-primary mx-auto text-white py-3.5 font-semibold px-8 rounded-sm cursor-pointer inline-flex items-center">
            <PhoneIncomingIcon className="size-4 mr-1" />
            <span>
              {phone("label")} {phone("display")}
            </span>
          </Link>
        </div>

      </Container>
    </Section>
  );
}

export default SectionProcess;
