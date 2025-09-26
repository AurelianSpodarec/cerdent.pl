import Section from "@/components/_layout/Section";
import { PhoneIncomingIcon } from "lucide-react";

function SectionCta() {
  return (
    <Section size="clean" className="mb-16">
      <div className="container max-w-[1200px] mx-auto">
        <div className="bg-[#fff7f0] border border-[#ffe7d2] py-20 px-20 text-center rounded">


          <div className="max-w-[600px] mx-auto mb-10">
            <h2>Still have questions?</h2>
            <p>If you need more details, want to arrange an appointment, or are ready to drop off your denture, just give us a call — we’re available 24/7.</p>
          </div>

          <button className="bg-primary border-2 border-[#efba49] space-x-1 text-[#333] text-lg py-4 font-semibold px-10 rounded cursor-pointer flex items-center mx-auto">
            <PhoneIncomingIcon className="size-4 mr-1" />
            <span>Call 509 828 545</span>
          </button>
          {/* <button>
          For Dentists →
          </button> */}

        </div>
      </div>
    </Section>
  );
}

export default SectionCta