import { ICardPoint } from "./ICardPoint"

function CardPoint({ item, index }: { item: ICardPoint, index: number }) {
  return (
    <div className="relative text-center flex-col justify-center align-center items-center">

      <div className="flex items-center justify-center text-black w-12 h-12 rounded-full mx-auto mb-6">
        <span className="font-bold font-montserrat text-6xl -mt-1">{index + 1}</span>
      </div>

      <div className="px-10">
        <h3 className="text-3xl font-montserrat font-bold mb-1">{item.title}</h3>
        <p className="text-md text-[#07111D] px-6">{item.desc}</p>
      </div>

      {index === 1 &&
        <div className="hidden w-[80px] lg:block absolute right-5 transform fill-black color-[#393939] top-1/2 translate-x-full">
          <svg xmlns='http://www.w3.org/2000/svg' width='512' height='86' viewBox="0 0 512 86"
            className="w-[80px] h-auto">
            <path fill='#FDFDFD' d='M0 0h512v86H0z'></path>
            <path
              fill='#020202'
              d='M437 1c3.712 1.485 6.906 2.968 10.36 4.906l3.103 1.738L453.75 9.5l3.414 1.92c6.772 3.82 13.51 7.69 20.194 11.658 6.868 4.074 13.786 8.06 20.704 12.047l1.8 1.037Q504.932 39.082 510 42v2c-1.068.61-1.068.61-2.158 1.23-13.19 7.526-26.374 15.06-39.53 22.645l-3.237 1.866a1293 1293 0 0 0-16.824 9.855 856 856 0 0 0-4.355 2.612C439.218 85 439.218 85 437 85V50l-14.705.034c-17.84.014-35.67-.23-53.508-.541q-6.552-.113-13.106-.221-11.288-.19-22.576-.383-16.32-.28-32.638-.554-26.493-.446-52.986-.898a310300 310300 0 0 0-70.571-1.198Q110.955 45.125 45 44v-2a858148 858148 0 0 1 151.086-2.563l3.218-.055q25.68-.434 51.36-.873 26.41-.45 52.823-.895 16.256-.273 32.512-.553 11.196-.192 22.39-.378 6.429-.106 12.858-.219c21.922-.382 43.827-.515 65.753-.464z'
            ></path>
          </svg>
        </div>
      }
      {index === 0 &&
        <div className="hidden w-[80px] lg:block absolute right-5 transform fill-black color-[#393939] top-1/2 translate-x-full">
          <svg xmlns='http://www.w3.org/2000/svg' width='512' height='86' viewBox="0 0 512 86"
            className="w-[80px] h-auto">
            <path fill='#FDFDFD' d='M0 0h512v86H0z'></path>
            <path
              fill='#020202'
              d='M437 1c3.712 1.485 6.906 2.968 10.36 4.906l3.103 1.738L453.75 9.5l3.414 1.92c6.772 3.82 13.51 7.69 20.194 11.658 6.868 4.074 13.786 8.06 20.704 12.047l1.8 1.037Q504.932 39.082 510 42v2c-1.068.61-1.068.61-2.158 1.23-13.19 7.526-26.374 15.06-39.53 22.645l-3.237 1.866a1293 1293 0 0 0-16.824 9.855 856 856 0 0 0-4.355 2.612C439.218 85 439.218 85 437 85V50l-14.705.034c-17.84.014-35.67-.23-53.508-.541q-6.552-.113-13.106-.221-11.288-.19-22.576-.383-16.32-.28-32.638-.554-26.493-.446-52.986-.898a310300 310300 0 0 0-70.571-1.198Q110.955 45.125 45 44v-2a858148 858148 0 0 1 151.086-2.563l3.218-.055q25.68-.434 51.36-.873 26.41-.45 52.823-.895 16.256-.273 32.512-.553 11.196-.192 22.39-.378 6.429-.106 12.858-.219c21.922-.382 43.827-.515 65.753-.464z'
            ></path>
          </svg>
        </div>
      }
    </div>
  )
}

export default CardPoint
