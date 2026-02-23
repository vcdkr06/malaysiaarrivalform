import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Users, AlertTriangle, ArrowRight } from "lucide-react";

const InfoCardsSection = () => {
  const cards = [
    {
      icon: FileText,
      title: "What Is the MDAC?",
      text: "The Malaysia Digital Arrival Card is a mandatory electronic entry requirement that replaces the old paper-based arrival forms.",
    },
    {
      icon: Users,
      title: "Who Must Apply?",
      text: "All foreign nationals entering Malaysia by land, air, or sea are required to submit their digital card prior to arrival.",
    },
    {
      icon: AlertTriangle,
      title: "Critical Deadline",
      text: "Submission must be completed within 3 days (72 hours) of your arrival. Early filing ensures a smooth immigration process.",
    },
  ];

  return (
    <section className="relative py-12 md:py-20 bg-[#0a192f] overflow-hidden">
      {/* Subtile Batik Background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 15-15 15-15-15zM0 30l15 15-15 15-15-15zM60 30l15 15-15 15-15-15zM30 60l15 15-15 15-15-15z' fill='%2364ffda' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Essential Entry Information</h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{card.text}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-12 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-1">Ready to start your application?</h4>
            <p className="text-slate-400 text-sm md:text-base">
              Join thousands of travelers who use our fast-track concierge daily.
            </p>
          </div>

          <Button
            asChild
            size="xl"
            className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-10 h-14 rounded-xl shadow-2xl shadow-accent/20 transition-all active:scale-95"
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
