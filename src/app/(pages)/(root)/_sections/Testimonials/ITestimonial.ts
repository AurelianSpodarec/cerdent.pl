export interface ITestimonial {
  order: number
  name: string
  title?: string
  image?: string
  quote: string | React.ReactElement
  url: string
  company?: {
    link?: {
      url: string
      name: string
    }
    name: string
    image?: string
    logo: string
  }
}
