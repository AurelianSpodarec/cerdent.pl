import Section from "@/components/_layout/Section";
import { dataBenefits } from "./dataBenefits";
import Image from "next/image";

function SectionOffer() {
  return (
    <Section id="offer">

      <header className="text-center mb-20">
        <h2>
          {/* Why Choose  */}
          Dlaczego warto wybrać
          CerDent?
        </h2>
      </header>

      <div className="container max-w-[1200px] mx-auto">
        <div className="grid grid-cols-3 gap-6">
          {/* #f9fafc */}
          {dataBenefits.map((item) => {
            return (
              <div key={item.title} className="border border-[#f0f0f0] rounded  bg-[#fffdfc] text-center">
                <div className="flex justify-center items-center mt-12">
                  <div className="w-[160px]">
                    <Image src={item.icon} alt="" width={200} height={200} />
                  </div>
                </div>
                <div className="p-10 pb-16">
                  <h3 className="text-2xl font-medium mb-2 text-[#685524]">{item.title}</h3>
                  <p className="text-[#333] px-2">{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  );
}

export default SectionOffer
