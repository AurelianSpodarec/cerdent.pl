import { useTranslations, useMessages } from "next-intl";
import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";
import AccordionBasic from "@/components/molecules/Accordion";

import { IFaq } from "@/app/[locale]/(pages)/(root)/_sections/FAQ/dataFaq";

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
        <header className="text-center mb-20">
          <span>{t("kicker")}</span>
          <h2>{t("title")}</h2>
        </header>

        <AccordionBasic type="single" data={faqItems} />
      </Container>
    </Section>
  );
}

export default SectionFAQ;
