"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useLanguage } from "@/i18n/context"

export function FAQSection() {
  const { t } = useLanguage()

  return (
    <section id="faq" className="container mx-auto px-4 md:px-6 py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {t.faq.title}
        </h2>
      </div>
      
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {t.faq.items.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 dark:text-gray-400">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
