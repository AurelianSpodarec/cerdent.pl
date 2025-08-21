import SectionHero from "./_sections/Hero";
import SectionProcess from "./_sections/Process";
import SectionTestimonials from "./_sections/Testimonials";
import SectionFAQ from "./_sections/FAQ";
import SectionOffer from "./_sections/Offer";
import SectionLocation from "./_sections/Location";

function WebRoot() {
  return (
    <>
      <SectionHero />
      <SectionOffer />
      <SectionProcess />
      <SectionTestimonials />
      <SectionFAQ />
      <SectionLocation />
    </>
  );
}

export default WebRoot
