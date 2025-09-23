import dataFaq from "./dataFaq"

import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"
import AccordionBasic from "@/components/molecules/Accordion"

function SectionFAQ() {
  return (
    <Section id="faq">
      <Container size="4xl">

        <header className="text-center mb-20">
          <span>FAQ</span>
          <h2 className="text-5xl font-semibold">Questions? Answers</h2>
        </header>
        <AccordionBasic type="single" data={dataFaq} />
      </Container>
    </Section>
  )
}

export default SectionFAQ
