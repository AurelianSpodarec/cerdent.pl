import Link from "next/link";

function WebFooter() {
  return (
    <footer className="bg-white py-6 group/row relative isolate pt-2">
      

      {/* <div aria-hidden="true" className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"><div className="absolute inset-x-0 top-0 border-t border-black/5"></div><div className="absolute inset-x-0 top-2 border-t border-black/5"></div><div className="absolute inset-x-0 bottom-0 hidden border-b border-black/5 group-last/row:block"></div><div className="absolute inset-x-0 bottom-2 hidden border-b border-black/5 group-last/row:block"></div></div> */}
      <div className="container mx-auto w-[1400px]">

        <div className="flex flex-col lg:flex-row justify-between items-center mb-10">

          <Link href="/" className="text-[#333] flex flex-col">

            <div className="py-3 group/item relative">
              {/* <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="hidden group-first/item:block absolute size-[15px] fill-black/10 -top-2 -left-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
              </svg>
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="absolute size-[15px] fill-black/10 -top-2 -right-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
              </svg>
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="hidden group-first/item:group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -left-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
              </svg>
              <svg
                viewBox="0 0 15 15"
                aria-hidden="true"
                className="hidden group-last/row:block absolute size-[15px] fill-black/10 -bottom-2 -right-2"
              >
                <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
              </svg> */}
              <div className="text-sm/6 text-gray-950 flex flex-col">
                <span className="font-logo text-4xl font-bold uppercase leading-6">CerDent</span>
                <span className="font-logo">Labolatorium Prototyczne</span>
              </div>
            </div>

            {/* <span className="font-logo text-4xl font-bold uppercase">CerDent</span> */}
            {/* <span className="font-logo">Labolatorium Prototyczne</span> */}
          </Link>

          <div className="flex space-x-7 text-[#333]">
 
            <div>
              Email: info@cerdent.pl
            </div>
            <div>
              Telefon: 030234223
            </div>
          </div>
        </div>

        FaceBook
        Instagram
        X
<div>

        Polityka Prywatonisci
        Cookies
</div>

<div>
  Dla Dentystow
</div>

        {/* <hr className="my-6 bg-[#333]/30" /> */}

        {/* <div className="relative flex flex-col lg:flex-row justify-between items-center flex justify-between group/row relative isolate pt-[calc(--spacing(2)+1px)] last:pb-[calc(--spacing(2)+1px)]">
          <div aria-hidden="true" className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2" ><div className="absolute inset-x-0 top-0 border-t border-black/5"></div><div className="absolute inset-x-0 top-2 border-t border-black/5"></div><div className="absolute inset-x-0 bottom-0 hidden border-b border-black/5 group-last/row:block"></div><div className="absolute inset-x-0 bottom-2 hidden border-b border-black/5 group-last/row:block"></div></div>
          <p className="text-[#333] text-sm">&copy; CerDent 2004-{new Date().getFullYear()}. All rights reserved</p>

          1 Ludwika (dr6)
          Warszawa
          (konieczne umawianie sie)

          <span>X</span>

          <nav className="flex flex-col lg:flex-row text-[#333] text-sm lg:space-x-7 text-center">
            <Link href="#">Polityka Prywatnosci</Link>
            <Link href="#">Cookies</Link>



          </nav>
        </div> */}

      </div>
    </footer>
  )
}

export default WebFooter;
