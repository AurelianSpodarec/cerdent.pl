import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function AccordionBasic({ type, data }:any) {
  return (
    <Accordion type={type} className="space-y-4">
      {data.map((item:any, index:any) => {
        return (
          <AccordionItem value={item.question} key={index}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}

export default AccordionBasic
