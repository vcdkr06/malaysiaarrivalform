import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Users, AlertTriangle, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

const InfoCardsSection = () => {
  const cards = [
    {
      icon: FileText,
      title: "What is MDAC?",
      text: "The Malaysia Digital Arrival Card is the mandatory digital form replacing old paper cards for all foreign arrivals.",
      accent: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Users,
      title: "Who needs one?",
      text: "Every foreign national arriving by air, land, or sea. Very few exemptions apply regardless of visa status.",
      accent: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: AlertTriangle,
      title: "When to submit?",
      text: "Must be filed within 3 days of arrival. Late submissions can lead to significant delays at the border.",
      accent: "bg-yellow-50", // Yellow accent for urgency
      iconColor: "text-yellow-600",
      isAlert: true,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Subtle background graphic */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/40 skew-x-[-15deg] translate-x-32 z-0" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* ——— HEADER ——— */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Official Guidelines
          </div>
          <h2 className="text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight">
            Essential <span className="text-blue-600">Entry Information</span>
          </h2>
          <p className="text-slate-500 mt-2 font-medium">Important requirements for your visit to Malaysia.</p>
        </div>

        {/* ——— INFO CARDS ——— */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className={`group relative p-8 rounded-[2rem] bg-white border border-slate-100 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 ${card.isAlert ? "ring-2 ring-yellow-400/20" : ""}`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${card.accent} flex items-center justify-center mb-6 transition-transform group-hover:scale-110 shadow-sm`}
                >
                  <Icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">{card.title}</h3>

                <p className="text-sm leading-relaxed text-slate-500 font-medium">{card.text}</p>

                {/* Subtle bottom indicator */}
                <div className="mt-6 h-1 w-8 bg-slate-100 rounded-full group-hover:w-16 group-hover:bg-blue-600 transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* ——— PREMIUM CTA BANNER ——— */}
        <div className="relative rounded-[2.5rem] bg-slate-900 p-8 md:p-12 shadow-2xl shadow-blue-900/20 overflow-hidden">
          {/* Abstract Blue Glows */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-400/10 rounded-full blur-[60px] -ml-10 -mb-10" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-yellow-400 text-slate-900 text-[10px] font-black uppercase tracking-widest">
                <Sparkles className="w-3 h-3 fill-current" />
                Premium Concierge
              </div>

              <div>
                <h4 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">
                  Ready to secure <br className="hidden md:block" /> your travel entry?
                </h4>
                <p className="text-slate-400 text-sm md:text-base mt-2 max-w-sm">
                  Join thousands of travelers using our simplified, error-free MDAC filing system.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 w-full md:w-auto">
              <Button
                asChild
                size="lg"
                className="w-full md:w-auto font-bold text-base h-14 px-10 rounded-2xl transition-all duration-300 bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/20 hover:-translate-y-1 active:scale-95 border-0"
              >
                <Link to="/apply" className="flex items-center gap-2">
                  Start Application
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
                Average Filing Time: 2 Mins
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
