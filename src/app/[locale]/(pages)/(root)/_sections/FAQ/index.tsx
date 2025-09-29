import { useTranslations, useMessages } from "next-intl";
import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";
import AccordionBasic from "@/components/molecules/Accordion";

import { IFaq } from "@/app/[locale]/(pages)/(root)/_sections/FAQ/dataFaq";
import SectionHeader from "@/components/SectionHeader";

function SectionFAQ() {
  const t = useTranslations("home.faq");
  const messages = useMessages();

  const keys = Object.keys(messages.home.faq.questions);
  const faqItems: IFaq[] = keys.map((key) => ({
    question: t(`questions.${key}.question`),
    answer: t(`questions.${key}.answer`),
  }));

  return (
    <Section id="faq">
      <Container size="tiny">

        <SectionHeader
          kicker={t("kicker")}
          title={t("title")}
          className="max-w-[550px] mx-auto"
        />

        <AccordionBasic type="single" data={faqItems} />

      </Container>
    </Section>
  );
}

export default SectionFAQ;
