import dataFaq from "./dataFaq"

import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"
import AccordionBasic from "@/components/molecules/Accordion"
import PageHeader from "@/components/molecules/PageHeader"

function SectionFAQ() {
  return (
    <Section id="faq">
      <Container size="4xl">
        <PageHeader
          kicker="FAQ"
          title="Questions? Answers."
        />
        <AccordionBasic type="single" data={dataFaq} />
      </Container>
    </Section>
  )
}

export default SectionFAQ
