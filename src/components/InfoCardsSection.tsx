import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Users, AlertTriangle, ArrowRight, ShieldCheck } from "lucide-react";

const InfoCardsSection = () => {
  const cards = [
    {
      icon: FileText,
      title: "What is MDAC?",
      text: "The Malaysia Digital Arrival Card is the mandatory digital form replacing old paper cards for all foreign arrivals.",
      accent: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Users,
      title: "Who needs one?",
      text: "Every foreign national arriving by air, land, or sea. Very few exemptions apply regardless of visa status.",
      accent: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: AlertTriangle,
      title: "When to submit?",
      text: "Must be filed within 3 days of arrival. Late submissions can lead to delays at the border.",
      accent: "bg-yellow-100",
      iconColor: "text-yellow-700",
      isAlert: true,
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* HEADER */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-semibold tracking-wider uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Official Guidelines
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
            Essential <span className="text-primary">Entry Information</span>
          </h2>

          <p className="text-gray-600 mt-2 text-sm md:text-base max-w-lg">
            Important requirements for your visit to Malaysia.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className={`p-6 rounded-xl bg-white border border-gray-200 transition hover:shadow-sm ${
                  card.isAlert ? "border-yellow-300 bg-yellow-50/40" : ""
                }`}
              >
                <div className={`w-11 h-11 rounded-lg ${card.accent} flex items-center justify-center mb-5`}>
                  <Icon className={`w-5 h-5 ${card.iconColor}`} />
                </div>

                <h3 className="text-base font-semibold text-gray-900 mb-2">{card.title}</h3>

                <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
              </div>
            );
          })}
        </div>

        {/* CLEAN CTA (Matches Hero Style) */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg md:text-xl font-semibold text-gray-900">Ready to complete your registration?</h4>
            <p className="text-sm text-gray-600 mt-1">Submit your Digital Arrival Card in just a few minutes.</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <Button asChild size="lg" className="h-12 px-8 rounded-md font-semibold shadow-sm hover:shadow transition">
              <Link to="/apply" className="flex items-center gap-2">
                Start Application
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <span className="text-[10px] text-gray-500 uppercase tracking-wide">Average filing time: 2 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
