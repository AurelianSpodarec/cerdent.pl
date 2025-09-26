import Link from "next/link";

function WebFooter() {
  return (
    <footer className="bg-white py-6 group/row relative isolate pt-12 border border-t-[#333]/30">

      <div className="container mx-auto w-[1400px]">
        <div className="flex flex-row lg:flex-row justify-between items-center align-middle">

          <Link href="/" className="text-[#333] flex flex-col group/item relative">
            <div className="text-sm/6 text-gray-950 flex flex-col">

              <span className="font-logo text-5xl font-bold uppercase leading-6">CerDent</span>
              <span className="font-logo text-lg">Labolatorium Prototyczne</span>

            </div>
          </Link>

          {/* Warsaw Dental Center Leończak Sp.k. (Domofon 2) */}

          <div>

            <span className="text-sm">&copy; CerDent 2004-{new Date().getFullYear()}.
            </span>
            {/* All rights reserved */}
            <span>Wszelkie prawa zastrzeżone</span>
          </div>

          <div className="flex space-x-7 text-[#333]">
            <Link href="mailto:info@cerdent.pl">
              info@cerdent.pl
            </Link>
            <Link href="tel:509828454">
              509 828 545
            </Link>
          </div>

        </div>

        {/* <div>
          FaceBook
          Instagram
          X
        </div> */}

        {/* <div>
          <h3>O Nas</h3>
          <Link href="#">Polityka Prywatonisci</Link>
          <Link href="#">Cookies</Link>
          <Link href="#">Blog</Link>
        </div>
        <div>
          <h3>Dla Dentystow</h3>
          <Link href="#">Protetyka</Link>
          <Link href="#"></Link>
          <Link href="#"></Link>
        </div> */}

        {/* <div className="flex space-x-2"> */}
        {/* <p className="text-sm">&copy; CerDent 2004-{new Date().getFullYear()}. All rights reserved</p> */}
        {/* <p className="text-sm"><strong>NIP:</strong> 123123123</p> */}
        {/* </div> */}

      </div>
    </footer>
  )
}

export default WebFooter;
