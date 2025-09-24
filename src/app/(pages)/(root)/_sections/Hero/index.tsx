import { PhoneIcon } from "lucide-react";
import IconStar2 from "@/components/Star2";
import BackgroundPattern from "./BackgroundPattern";

function SectionHero() {
  return (
    <section className="pt-52 pb-10">
      <div className="flex flex-col items-center justify-center text-center">
        
        <BackgroundPattern />

        <div className="text-center mb-4">
          <div className="inline-flex py-1.5 px-4 mb-4 space-x-1 border border-[#dcdcdc] rounded-lg">
            <div className="flex items-center">
              <IconStar2 className="size-4 text-yellow-400" />
              <IconStar2 className="size-4 text-yellow-400" />
              <IconStar2 className="size-4 text-yellow-400" />
              <IconStar2 className="size-4 text-yellow-400" />
              <IconStar2 className="size-4 text-yellow-400" />
            </div>
            <span className="text-[#333]/80 text-xs">4.8/5 reviews on Google</span>
          </div>
          <h1 className="font-semibold max-w-[900px] mx-auto mb-4">Broken Denture? Repaired Today</h1>
          <p className="text-lg max-w-[800px] mx-auto">Eat, smile, and go out without worry — your denture fixed in under 90 minutes, guaranteed</p>
        </div>

        <ul className="flex flex-row py-6 space-y-4 space-x-4">
          <li>Certified & trusted lab</li>
          <li>Open 24/7 in Warsaw</li>
          <li>20+ years fixing smiles</li>
        </ul>

        <div className="flex flex-col space-y-2">
          <button className="bg-primary text-white text-lg py-4.5 font-semibold px-10 rounded-sm cursor-pointer flex items-center">
            <PhoneIcon className="size-4 mr-1" />
            <span>Call 509 828 545</span>
          </button>
          <button>For Dentists →</button>
        </div>
      </div>
    </section>
  );
}

export default SectionHero