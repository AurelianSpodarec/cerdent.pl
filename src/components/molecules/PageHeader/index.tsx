interface IPageHeader {
  className?: string
  kicker?: string | React.ReactNode
  title: string | React.ReactNode
  subheader?: string
  color?: "normal" | "inverted"
}

function PageHeader({ className, kicker, title, subheader, color }: IPageHeader) {
  return (
    <header className={`flex flex-col justify-center items-center text-center mb-10 lg:mb-20 ${color === "inverted" ? "text-gray-50" : "text-[#2d2d2d]"} `}>
      {kicker && <span className="text-xl font-montserrat font-semibold mb-1">{kicker}</span>}
      {title && <h2 className={`text-4xl lg:text-7xl font-extrabold font-play-fair ${className ? className : "flex"} gap-2`}>{title}</h2>}
      {subheader && <p className="max-w-3xl mt-2">{subheader}</p>}
    </header>
  )
}

export default PageHeader
