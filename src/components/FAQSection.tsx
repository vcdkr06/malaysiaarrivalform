import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqData = [
  { q: "What is the Malaysia Digital Arrival Card?", a: "The MDAC is a mandatory online pre-arrival form by Malaysian Immigration, replacing paper-based arrival cards as part of Malaysia's digital border modernisation." },
  { q: "Is there a fee for the MDAC?", a: "The official government form is free. Our service charges a fee for professional review, error-checking, and guided assistance to ensure a smooth submission." },
  { q: "When should I submit?", a: "Complete and submit your MDAC within seven days before your arrival date in Malaysia." },
  { q: "Do children need one?", a: "Yes — all foreign nationals, regardless of age, require a completed MDAC. Parents must submit separate forms for each child." },
  { q: "How will I receive it?", a: "You'll get a confirmation email with a PDF copy and unique PIN. Save or print it to show at immigration." },
  { q: "What if I made an error?", a: "Submit a new corrected application. Immigration references the most recent submission linked to your passport." },
  { q: "Is the MDAC the same as a visa?", a: "No. The MDAC is an arrival registration form — not a visa. If your nationality requires a visa, obtain it separately." },
  { q: "Why use this service?", a: "We catch errors before submission, ensure compliance, and save you time — so you can travel with confidence." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Support</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-2">
          {faqData.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-secondary border border-border rounded-xl px-5">
              <AccordionTrigger className="py-4 text-left font-semibold text-foreground text-sm hover:no-underline">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
