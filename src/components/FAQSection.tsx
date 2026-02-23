import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqData = [
  {
    question: "What exactly is the Malaysia Digital Arrival Card (MDAC)?",
    answer: "The MDAC is a mandatory online pre-arrival form introduced by the Malaysian Immigration Department. It replaces the old paper-based arrival cards and is part of Malaysia's digital transformation to streamline border security and speed up the entry process for international travelers.",
  },
  {
    question: "How much does the Malaysia Digital Arrival Card cost?",
    answer: "The official MDAC registration is completely free of charge when completed through the Malaysian Government's official portal. While some third-party service providers may charge a fee for \"assisted processing\" or \"expert review,\" the government itself does not levy a fee for this card.",
  },
  {
    question: "When should I complete my Malaysia Digital Arrival Card?",
    answer: "You must complete and submit the MDAC within three (3) days prior to your arrival in Malaysia (this includes the date of arrival). For example, if you are arriving on the 7th of the month, you can submit the form starting from the 5th.",
  },
  {
    question: "Are children required to have a Digital Arrival Card too?",
    answer: "Yes. All foreign nationals, regardless of age, must have a completed MDAC. Parents or legal guardians must complete separate MDAC forms for each child or infant traveling with them.",
  },
  {
    question: "How will I receive my Digital Arrival Card?",
    answer: "Once you submit the online form, you will receive a registration acknowledgement via email. This email contains a PDF copy of your MDAC and a unique PIN. You should either print this acknowledgement or save a digital copy on your mobile device to present to immigration officers upon arrival.",
  },
  {
    question: "What if I make a mistake in my application?",
    answer: "Accuracy is vital because the information on your MDAC must match your passport exactly. Before Submission: Double-check all fields. After Submission: If you notice a significant error (like a wrong passport number), it is generally recommended to submit a new, corrected application, as the most recent submission linked to your passport will be the one referenced by immigration.",
  },
  {
    question: "Is the Digital Arrival Card the same as a visa?",
    answer: "No. The MDAC is an arrival registration form, not a travel authorization or visa. If your nationality requires a visa to enter Malaysia (e.g., an eVisa), you must obtain that in addition to completing the MDAC. Even if you belong to a visa-exempt country (like the UK, USA, or Australia), you are still required to complete the MDAC.",
  },
  {
    question: "Why should I use this service?",
    answer: "Completing the MDAC is not optional—it is a legal requirement for entry. Using the digital portal allows you to: Save Time by avoiding long manual processing queues at the airport, Enable Autogates for travelers from 10 eligible countries (including Australia, UK, USA, and Singapore) who can use automated gates at KLIA for faster clearance, and Ensure Compliance to prevent being denied boarding or entry due to missing documentation.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-background border rounded-lg px-6">
              <AccordionTrigger className="flex flex-1 items-center justify-between py-4 transition-all text-left font-semibold text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="overflow-hidden text-sm text-muted-foreground pt-2 pb-4">
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
