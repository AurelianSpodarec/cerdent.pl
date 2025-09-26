import { dataTestimonials } from "./dataTestimonials";

import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";
import TestimonialCardRated from "./TestimonialCard";

function SectionTestimonials() {
  return (
    <Section id="testimonials" color="clean" size="lg">
      <Container>
        {/* 
        <header className="text-center mb-20">
          <span>What other patients say</span>
          <h2>Testimonials</h2>
          <span>4.8/5 - stars</span>
        </header> */}

        <header className="text-center mb-20">
          <span>Co mówią nasi pacjenci</span>
          <h2>Opinie z Googli</h2>
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
