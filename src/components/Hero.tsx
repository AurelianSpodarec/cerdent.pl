'use client'

import { useParallax } from "@/hooks/useParallax";



interface IHeroProps {
  title: string
  desc: string
  bgImage: string
}

function Hero({ title, desc, bgImage }: IHeroProps) {
  const bg = useParallax<HTMLDivElement>({ speed: -0.4 });
  const fg = useParallax<HTMLDivElement>({ speed: -0.4,  inheritParentTransform: true,  });

  return (
    <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
      <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full  bg-cover bg-center bg-no-repeat" ref={bg.ref} style={{ backgroundImage: `url('${bgImage}')` }}>
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-[#262626]/75" />

        <div className="flex items-center justify-center h-full w-full" ref={fg.ref}>
          <div className="text-center z-10 px-4">
            <h1 className="text-gray-50 text-3xl lg:text-5xl font-primary font-bold tracking-tighter">{title}</h1>
            <p className="text-gray-300 text-md lg:text-xl font-secondary">{desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
