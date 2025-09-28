import Link from "next/link";
import { PhoneIncomingIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";

function SectionCta() {
  const t = useTranslations("home.cta");
  const tPhone = useTranslations("phone");

  return (
    <Section size="clean" className="mb-16">
      <Container>
        <div className="bg-[#fff7f0] border border-[#ffe7d2] py-20 px-4 text-center rounded">

          <div className="max-w-[600px] mx-auto mb-10">
            <h2>{t("title")}</h2>
            <p>{t("description")}</p>
          </div>

          <Link href={`tel:${tPhone("raw")}`} className="bg-primary border-2 border-[#efba49] space-x-1 text-white text-md lg:text-lg py-4 font-semibold px-4 lg:px-10 rounded cursor-pointer inline-flex items-center mx-auto">
            <PhoneIncomingIcon className="size-4 mr-1" />
            <span>{tPhone("label")} {tPhone("display")}</span>
          </Link>

        </div>
      </Container>
    </Section>
  );
}

export default SectionCta;
