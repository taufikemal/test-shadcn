import localFont from "next/font/local";
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


// 
const geistSans = localFont({
  src       :"./fonts/Manrope-SemiBold.ttf",
  variable  : "--font-manrope",
  weight    : "100 900"
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} flex flex-col justify-items-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-manrope)]`}
    >
      <Button>Submit</Button>
      <Button variant={"secondary"}>Submit</Button>
      <Button variant={"destructive"}>Submit</Button>
      <Button variant={"outline"}>Submit</Button>
      <Button variant={"ghost"}>Submit</Button>
      <Button variant={"link"}>Submit</Button>

      <div className={`flex flex-row`}>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

    </div>
  );
}