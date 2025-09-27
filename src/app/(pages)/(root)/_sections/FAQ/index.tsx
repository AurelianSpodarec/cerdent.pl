import dataFaq from "./dataFaq"

import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"
import AccordionBasic from "@/components/molecules/Accordion"

function SectionFAQ() {
  return (
    <Section id="faq">
      <Container size="tiny">

        {/* <header className="text-center mb-20">
          <span>FAQ</span>
          <h2>Questions? Answers</h2>
        </header> */}

        <header className="text-center mb-20">
          <span>FAQ</span>
          <h2>Masz pytania? Mamy odpowiedzi</h2>
        </header>
        <AccordionBasic type="single" data={dataFaq} />
      </Container>
    </Section>
  )
}

export default SectionFAQ
