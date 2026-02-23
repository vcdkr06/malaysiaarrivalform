import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Users, AlertTriangle, ArrowRight } from "lucide-react";

const InfoCardsSection = () => {
  const cards = [
    {
      icon: FileText,
      title: "What is MDAC?",
      text: "The mandatory digital arrival card required for all foreign visitors entering Malaysia.",
    },
    {
      icon: Users,
      title: "Who needs it?",
      text: "All foreign nationals entering via air, land, or sea, with very few exceptions.",
    },
    {
      icon: AlertTriangle,
      title: "The Deadline",
      text: "Must be submitted within 3 days prior to your arrival for seamless entry.",
    },
  ];

  return (
    <section className="py-10 md:py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Lean Header */}
        <div className="mb-10 md:mb-16">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-2">Requirement Guide</p>
          <h2 className="text-2xl md:text-3xl font-light text-[#0a192f] tracking-tight">
            Essential <span className="font-semibold">Entry Information</span>
          </h2>
        </div>

        {/* Info Grid - Ultra Lean */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="flex flex-row md:flex-col gap-5 md:gap-0">
                <div className="flex-shrink-0 md:mb-6">
                  <Icon className="w-5 h-5 text-[#0a192f]/40" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0a192f] uppercase tracking-wider mb-2">{card.title}</h3>
                  <p className="text-[13px] md:text-sm text-slate-500 leading-relaxed font-medium">{card.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA - Minimalist & Focused */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-100 pt-10 gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-[#0a192f]">Ready to begin?</h4>
            <p className="text-slate-400 text-sm">Our concierge handles your MDAC filing instantly.</p>
          </div>

          <Button
            asChild
            variant="ghost"
            className="group text-[#0a192f] hover:bg-slate-50 font-bold text-base px-0 md:px-6 transition-all"
          >
            <Link to="/apply" className="flex items-center gap-2">
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
