import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Users, AlertTriangle, ArrowRight, ShieldCheck } from "lucide-react";

const InfoCardsSection = () => {
  const cards = [
    {
      icon: FileText,
      title: "What is MDAC?",
      text: "The Malaysia Digital Arrival Card (MDAC) is a mandatory digital entry form required for foreign nationals entering Malaysia.",
      accent: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Users,
      title: "Who Needs to Register?",
      text: "All foreign visitors arriving by air, land, or sea must complete the MDAC prior to arrival unless officially exempted.",
      accent: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: AlertTriangle,
      title: "When to Submit?",
      text: "The form must be submitted within 3 days before arrival. Failure to comply may result in entry delays.",
      accent: "bg-yellow-50",
      iconColor: "text-yellow-600",
      isAlert: true,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* HEADER */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wide mb-5 border border-blue-100">
            <ShieldCheck className="w-4 h-4" />
            {/* Slightly Larger Flag */}
            <img src="/malaysia-flag.png" alt="Malaysia Flag" className="w-6 h-4 object-cover" />
            Entry Requirements
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Important <span className="text-blue-600">Travel Information</span>
          </h2>

          <p className="text-slate-600 mt-3 text-sm md:text-base max-w-2xl">
            Please review the following guidelines before submitting your Malaysia Digital Arrival Card.
          </p>
        </div>

        {/* INFO CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className={`p-7 bg-white border border-slate-200 transition-all duration-200 hover:shadow-sm ${card.isAlert ? "border-yellow-300" : ""}`}
              >
                <div className={`w-12 h-12 ${card.accent} flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-3">{card.title}</h3>

                <p className="text-sm text-slate-600 leading-relaxed">{card.text}</p>
              </div>
            );
          })}
        </div>

        {/* CONSISTENT CTA (Matches Hero Style) */}
        <div className="border border-blue-200 bg-blue-50 px-8 md:px-10 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div className="max-w-lg">
            <h4 className="text-xl md:text-2xl font-bold text-blue-800 tracking-tight">
              Complete Your Digital Arrival Registration
            </h4>

            <p className="text-sm md:text-base text-slate-700 mt-3 leading-relaxed">
              Submit your Malaysia Digital Arrival Card securely before travel. Filing takes approximately 2 minutes.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 px-10 font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition rounded-md"
            >
              <Link to="/apply" className="flex items-center gap-2">
                Start Registration
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <span className="text-[11px] text-slate-600 uppercase tracking-wide">Mandatory for Foreign Travelers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
