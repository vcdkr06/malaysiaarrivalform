import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircleQuestion } from "lucide-react";

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
    a: "Yes — every foreign national, regardless of age, requires a completed MDAC. Parents or guardians must submit a separate form for each child.",
  },
  {
    q: "How do I receive my confirmation?",
    a: "Once approved, you'll receive a confirmation email containing a PDF copy and a unique PIN. Save it to your phone or print it to present at the immigration counter.",
  },
  {
    q: "What if I entered incorrect details?",
    a: "Simply submit a new corrected application. Immigration will always reference the most recent submission linked to your passport number.",
  },
  {
    q: "Is the MDAC a visa replacement?",
    a: "No. The MDAC is strictly an arrival registration form — not a visa. If your nationality requires a visa to enter Malaysia, you must obtain one separately.",
  },
  {
    q: "Why use this service instead of the official portal?",
    a: "We catch errors before submission, verify compliance with current requirements, and save you time with a guided form — so you travel with confidence knowing everything is handled correctly.",
  },
];

const FAQSection = () => {
  return (
    <section
      id="faq"
      className="py-14 md:py-24"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F6F9FF 40%, #F0F4FF 70%, #F8FAFF 100%)",
      }}
    >
      <div className="container mx-auto px-5 md:px-6 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* ——— Left: Header (sticky on desktop) ——— */}
          <div className="w-full lg:w-[280px] flex-shrink-0 lg:sticky lg:top-28 lg:self-start">
            <div
              className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1.5 rounded-full mb-3"
              style={{
                background: "#EEF4FF",
                border: "1px solid #DBEAFE",
                color: "#4B7BE5",
              }}
            >
              <MessageCircleQuestion className="w-3 h-3" />
              Support
            </div>

            <h2
              className="text-2xl md:text-3xl font-extrabold tracking-[-0.02em] leading-tight mb-3"
              style={{
                color: "#2D4A6F",
                fontFamily: "'Outfit', system-ui, sans-serif",
              }}
            >
              Frequently Asked{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #4338CA, #6366F1, #818CF8)",
                }}
              >
                Questions
              </span>
            </h2>

            <p className="text-[13px] md:text-[14px] leading-relaxed mb-4" style={{ color: "#8196AE" }}>
              Everything you need to know about the MDAC process before you travel.
            </p>

            {/* Quick stat */}
            <div
              className="hidden lg:flex items-center gap-3 p-3 rounded-xl"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E8EFF8",
                boxShadow: "0 2px 8px rgba(75,123,229,0.04)",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[14px]"
                style={{ background: "#EEF4FF" }}
              >
                💬
              </div>
              <div>
                <p className="text-[12px] font-bold" style={{ color: "#3D5A80" }}>
                  Still have questions?
                </p>
                <p className="text-[10px]" style={{ color: "#8DA2B8" }}>
                  Our team responds within 2 hours.
                </p>
              </div>
            </div>
          </div>

          {/* ——— Right: Accordion ——— */}
          <div className="flex-1 min-w-0">
            <Accordion type="single" collapsible className="space-y-2.5">
              {faqData.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-xl px-5 transition-all duration-200 data-[state=open]:shadow-sm"
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E8EFF8",
                  }}
                >
                  <AccordionTrigger
                    className="py-4 text-left font-bold text-[13px] md:text-[14px] hover:no-underline gap-3"
                    style={{ color: "#3D5A80" }}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-extrabold"
                        style={{
                          background: "#EEF4FF",
                          color: "#4B7BE5",
                          border: "1px solid #DBEAFE",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent
                    className="text-[12px] md:text-[13px] leading-relaxed pb-4 pl-9"
                    style={{ color: "#8196AE" }}
                  >
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
