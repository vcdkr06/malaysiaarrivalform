import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Users, AlertTriangle, ArrowRight } from "lucide-react";

const InfoCardsSection = () => {
  const cards = [
    {
      icon: FileText,
      title: "What Is the MDAC?",
      text: "The Malaysia Digital Arrival Card is a mandatory electronic requirement replacing paper forms.",
    },
    {
      icon: Users,
      title: "Who Must Apply?",
      text: "All foreign nationals entering Malaysia by land, air, or sea must submit prior to arrival.",
    },
    {
      icon: AlertTriangle,
      title: "Critical Deadline",
      text: "Submit within 72 hours of arrival. Early filing ensures a smooth immigration process.",
    },
  ];

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header - Tight Spacing */}
        <div className="mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-[#0a192f] mb-1 tracking-tight">
            Essential Entry Information
          </h2>
          <div className="w-12 h-1 bg-[#0a192f]" />
        </div>

        {/* Info Grid - Minimal gaps on mobile */}
        <div className="grid md:grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-12">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="flex md:flex-col gap-4 md:gap-0 p-5 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#0a192f]/20 transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-[#0a192f] rounded-lg flex items-center justify-center md:mb-4">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-[15px] md:text-lg font-bold text-[#0a192f] mb-1 md:mb-2">{card.title}</h3>
                  <p className="text-[13px] md:text-sm text-slate-600 leading-snug md:leading-relaxed">{card.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Ready to Apply / CTA Block - Compressed */}
        <div className="p-6 md:p-10 rounded-2xl bg-[#0a192f] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left">
            <h4 className="text-xl md:text-2xl font-black mb-1">Ready to apply?</h4>
            <p className="text-slate-300 text-sm md:text-base">Start your MDAC registration in minutes.</p>
          </div>

          <Button
            asChild
            className="w-full md:w-auto bg-white text-[#0a192f] hover:bg-slate-100 font-bold px-8 h-12 md:h-14 rounded-lg transition-transform active:scale-95"
          >
            <Link to="/apply" className="flex items-center gap-2">
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
