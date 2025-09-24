import Image from "next/image";
import { ITestimonial } from "./ITestimonial";

import IconStar from "@/components/Star";
import IconGoogle from "@/components/Google";

function TestimonialCardRated({ item: { name, title, image, quote } }: { item: ITestimonial }) {
  return (
    <figure className="border border-[#dcdcdc]/80 text-gray-900 rounded-lg bg-white mb-4 break-inside-avoid">
      <div className="px-4 py-6">
        <figcaption className="flex justify-between lg:flex-row items-center space-x-2">

          <div className="flex items-center">
            <div className="overflow-hidden rounded-full w-14 h-14 min-w-12">
              <Image src={`/images/testimonials/${image}`} alt={`Testimonial avatar of ${name}`} width={48} height={48} className="p-2 object-cover w-full h-full" />
            </div>
            <h3 className="font-bold font-roboto text-md">{name}</h3>
          </div>
          <div>
            <IconGoogle />
          </div>
        </figcaption>
        <div className="flex pb-4 pt-2 lg:justify-start">
          <IconStar className="size-6 text-yellow-400" />
          <IconStar className="size-6 text-yellow-400" />
          <IconStar className="size-6 text-yellow-400" />
          <IconStar className="size-6 text-yellow-400" />
          <IconStar className="size-6 text-yellow-400" />
        </div>
        <blockquote>
          <p className="text-sm font-normal lg:text-left">{quote}</p>
        </blockquote>
      </div>
    </figure>
  )
}

export default TestimonialCardRated
