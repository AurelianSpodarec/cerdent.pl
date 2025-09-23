import { Badge, CheckCircle, Clock, PhoneIcon } from "lucide-react";
import CardPoint from "./_sections/Process/CardPoint";
import { dataProcess } from "./_sections/Process/dataProcess";
import SectionTestimonials from "./_sections/Testimonials";
import SectionFAQ from "./_sections/FAQ";

const dataBenefits = [
  {
    icon: <Clock />,
    title: "Fast Repairs",
    desc: "Get your denture fixed today in under 90 minutes for holidays, business meetings, or nights out."
  },
  {
    icon: <CheckCircle />,
    title: "Guaranteed Fit",
    desc: "We guarantee your denture will fit perfectly—quality repairs."
  },
  {
    icon: <Badge />,
    title: "Certified Experts",
    desc: "Since 2004, our certified lab professionals have repaired all types of dentures—from simple to complex cases."
  }
];


function WebRoot() {
  return (
    <>

      <section className="py-52">
        <div className="flex flex-col items-center justify-center text-center">

          <div className="text-center mb-4">
            <h1 className="text-6xl font-semibold max-w-[900px] mx-auto">Broken Denture? Repaired Today</h1>
            <p className="text-lg max-w-[700px] mx-auto">Eat, smile, and go out without worry — your denture fixed in under 90 minutes, guaranteed</p>
          </div>  

          <ul className="flex flex-row space-y-4 space-x-4">
            <li>Certified & trusted lab</li>
            <li>Open 24/7 in Warsaw</li>
            <li>20+ years fixing smiles</li>
          </ul>

          <div className="flex flex-col space-y-2">
            <button className="bg-black text-white py-3.5 font-semibold px-8 rounded-sm cursor-pointer flex items-center">
              <PhoneIcon className="size-4 mr-1" />
              <span>Call 509 828 545</span>
            </button>
            <button>For Dentists →</button>
          </div>
        </div>
      </section>

      <section>

        <header className="text-center mb-20">
          <h2 className="text-5xl font-semibold">Why Choose CerDent?</h2>
        </header>

        <div className="container max-w-[1400px] mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {dataBenefits.map((item, index) => {
              return (
                <div className="border p-4">
                  {item.icon}
                  <h3 className="text-2xl">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div>

          <header className="text-center mb-20">
            <h2 className="text-5xl font-semibold">How it works</h2>
            <span>Your denture repaired in 3 simple steps</span>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12">
            {dataProcess.map((item, index) => {
              return <CardPoint item={item} key={index} index={index} />
            })}
          </div>

        </div>
      </section>

      <SectionTestimonials />
      <SectionFAQ />
    </>
  );
}

export default WebRoot
