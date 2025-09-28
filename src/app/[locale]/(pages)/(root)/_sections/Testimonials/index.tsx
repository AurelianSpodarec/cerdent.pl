import { dataTestimonials } from "./dataTestimonials";

import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";
import TestimonialCardRated from "./TestimonialCard";
import { useTranslations } from "next-intl";

function SectionTestimonials() {
  const t = useTranslations("home.testimonials");

  return (
    <Section id="testimonials" color="clean" size="lg">
      <Container>

        <header className="text-center mb-20">
          <span>{t("kicker")}</span>
          <h2>{t("title")}</h2>
          <span>4,8/5 ⭐</span>
        </header>

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
