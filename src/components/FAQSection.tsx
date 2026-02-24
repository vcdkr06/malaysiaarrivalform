import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail } from "lucide-react";

const faqData = [
  {
    q: "What exactly is the MDAC?",
    a: "The Malaysia Digital Arrival Card is a mandatory online pre-arrival form introduced by Malaysian Immigration. It replaces the old paper-based landing card as part of the country's digital border modernisation.",
  },
  {
    q: "Does the MDAC cost anything?",
    a: "The official government form itself is free. Our platform charges a service fee that covers professional review, error-checking, guided assistance, and priority handling to ensure a smooth submission.",
  },
  {
    q: "How far in advance should I submit?",
    a: "Your MDAC should be completed and submitted within seven days before your scheduled arrival date in Malaysia.",
  },
  {
    q: "Do minors need their own MDAC?",
    a: "Yes. Every foreign national, regardless of age, requires a completed MDAC. Parents or guardians must submit a separate form for each child.",
  },
  {
    q: "How do I receive my confirmation?",
    a: "Once approved, you will receive a confirmation email containing a PDF copy and a unique PIN. Save it to your mobile device or print it to present at the immigration counter.",
  },
  {
    q: "What if I entered incorrect details?",
    a: "Simply submit a new corrected application. Immigration officials will reference the most recent submission linked to your passport number.",
  },
  {
    q: "Is the MDAC a visa replacement?",
    a: "No. The MDAC is strictly an arrival registration form. If your nationality requires a visa to enter Malaysia, you must obtain one separately prior to travel.",
  },
  {
    q: "Why use this service instead of the official portal?",
    a: "We catch formatting errors before submission, verify compliance with current requirements, and provide a streamlined guided form to ensure your documentation is handled correctly.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50 border-b border-slate-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left: Header & Contact Box */}
          <div className="w-full lg:w-[320px] flex-shrink-0 lg:sticky lg:top-28">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-3">Frequently Asked Questions</h2>
              <div className="w-16 h-1 bg-blue-700 mb-4"></div>
              <p className="text-base text-slate-700 leading-relaxed">
                Review our comprehensive documentation regarding the MDAC application process, requirements, and
                policies.
              </p>
            </div>

            {/* Formal Contact Box */}
            <div className="hidden lg:flex flex-col p-5 border border-slate-300 bg-white rounded border-t-4 border-t-slate-400">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex-shrink-0 w-8 h-8 bg-slate-100 border border-slate-200 flex items-center justify-center rounded-sm">
                  <Mail className="w-4 h-4 text-slate-600" />
                </div>
                <h3 className="text-sm font-semibold text-slate-800">Additional Support</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pl-11">
                If you require further assistance, our support team aims to respond to all inquiries within 2 hours.
              </p>
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="flex-1 w-full">
            <Accordion type="single" collapsible className="space-y-3">
              {faqData.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="bg-white border border-slate-300 rounded px-6 shadow-sm data-[state=open]:border-blue-700 transition-colors"
                >
                  <AccordionTrigger className="py-5 text-left hover:no-underline flex items-center justify-between">
                    <span className="flex items-center gap-4">
                      {/* Numbered Index Box */}
                      <span className="flex-shrink-0 w-7 h-7 bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-semibold text-blue-700 rounded-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] font-medium text-slate-800 leading-snug">{faq.q}</span>
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="pb-5 pt-1 pl-[3.25rem] text-[14px] text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
