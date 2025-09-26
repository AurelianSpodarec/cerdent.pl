import { PhoneIncomingIcon } from "lucide-react"
import CardPoint from "./CardPoint"
import { dataProcess } from "./dataProcess"
import Section from "@/components/_layout/Section"

function SectionProcess() {
  return (
    <Section id="process" className="bg-[#fffcf7]">
      {/* #fbfbfb */}
      <div>

        {/* <header className="text-center mb-20">
          <h2>How it works</h2>
          <span>Your denture repaired in 3 simple steps</span>
        </header> */}
        <header className="text-center mb-20">
          <h2>Jak to działa</h2>
          <span>Twoja proteza naprawiona w 3 prostych krokach</span>
        </header>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12">
          {dataProcess.map((item, index) => {
            return <CardPoint item={item} key={index} index={index} />
          })}
        </div>

        <button className="bg-primary mx-auto text-[#333] py-3.5 font-semibold px-8 rounded-sm cursor-pointer flex items-center">
          <PhoneIncomingIcon className="size-4 mr-1" />
          <span>Zadzwoń 509 828 545</span>
        </button>

      </div>
    </Section>
  )
}

export default SectionProcess
