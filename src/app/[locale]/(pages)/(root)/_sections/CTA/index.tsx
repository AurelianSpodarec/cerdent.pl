import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";
import { PhoneIncomingIcon } from "lucide-react";
import Link from "next/link";

function SectionCta() {
  return (
    <Section size="clean" className="mb-16">
      <Container>

        <div className="bg-[#fff7f0] border border-[#ffe7d2] py-20 px-4 text-center rounded">


          {/* <div className="max-w-[600px] mx-auto mb-10">
            <h2>Still have questions?</h2>
            <p>If you need more details, want to arrange an appointment, or are ready to drop off your denture, just give us a call — we’re available 24/7.</p>
            </div> */}

          <div className="max-w-[600px] mx-auto mb-10">
            <h2>Masz pytania?</h2>
            <p>Chcesz dowiedzieć się więcej, umówić wizytę lub dostarczyć protezę? Zadzwoń do nas — działamy 24/7 i chętnie pomożemy.</p>
          </div>

          <Link href="tel:509 828 545" className="bg-primary border-2 border-[#efba49] space-x-1 text-[#333] text-md lg:text-lg py-4 font-semibold px-4 lg:px-10 rounded cursor-pointer inline-flex items-center mx-auto">
            <PhoneIncomingIcon className="size-4 mr-1" />
            <span>Zadzwoń 509 828 545</span>
          </Link>
 
        </div>
      </Container>
    </Section>
  );
}

export default SectionCta