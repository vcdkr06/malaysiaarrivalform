import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is the Malaysia Digital Arrival Card?",
    answer: "The MDAC is a mandatory online pre-arrival form by the Malaysian Immigration Department. It replaces paper-based arrival cards as part of Malaysia's digital border modernisation.",
  },
  {
    question: "Is there a fee for the MDAC?",
    answer: "The official government registration is free. Our service charges a fee for professional review, error-checking, and guided assistance to ensure your submission is accurate and complete.",
  },
  {
    question: "When should I submit my application?",
    answer: "You must complete and submit the MDAC within seven (7) days before your arrival in Malaysia, including the date of arrival.",
  },
  {
    question: "Do children need an MDAC?",
    answer: "Yes. All foreign nationals, regardless of age, require a completed MDAC. Parents or guardians must submit separate forms for each child.",
  },
  {
    question: "How will I receive my MDAC?",
    answer: "After submission, you'll receive a confirmation email with a PDF copy and unique PIN. Save it digitally or print it to present at immigration.",
  },
  {
    question: "What if I make an error?",
    answer: "If you notice a mistake after submission, submit a new corrected application. The most recent submission linked to your passport will be referenced by immigration.",
  },
  {
    question: "Is the MDAC the same as a visa?",
    answer: "No. The MDAC is an arrival registration form, not a visa or travel authorisation. If your nationality requires a visa, you must obtain it separately.",
  },
  {
    question: "Why use this service?",
    answer: "Our professional review ensures accuracy, prevents common errors, and saves you time. We handle the complexities so you can travel with confidence.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 px-4 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-5"
            >
              <AccordionTrigger className="py-4 text-left font-semibold text-foreground text-sm hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
