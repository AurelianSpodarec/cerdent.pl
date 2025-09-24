import { PhoneIcon } from "lucide-react";
import IconStar2 from "@/components/Star2";

function SectionHero() {
  return (
    <section className="pt-52 pb-10">
      <div className="flex flex-col items-center justify-center text-center">

        <svg aria-hidden="true" className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-[#dcdcdc]/40">
          <defs>
            <pattern id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none"></path>
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-[#dcdcdc]/20">
            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0"></path>
          </svg>
          <rect width="100%" height="100%" fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" stroke-width="0"></rect>
        </svg>

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