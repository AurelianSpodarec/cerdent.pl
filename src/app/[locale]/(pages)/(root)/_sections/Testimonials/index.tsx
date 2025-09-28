import { dataTestimonials } from "./dataTestimonials";

import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";
import TestimonialCardRated from "./TestimonialCard";
import { useTranslations } from "next-intl";
import SectionHeader from "@/components/SectionHeader";

function SectionTestimonials() {
  const t = useTranslations("home.testimonials");

  return (
    <Section id="testimonials" color="clean" size="lg">
      <Container>

        <SectionHeader
          kicker={t("kicker")}
          title={t("title")}
          description="4,8/5 ⭐"
        />

        <div className="masonry-container columns-1 md:columns-2 lg:columns-3 gap-4">
          {dataTestimonials.map((testimonial, index) => {
            return <TestimonialCardRated item={testimonial} key={index} />
          })}
        </div>

      </Container>
    </Section>
  )
}

export default SectionTestimonials
