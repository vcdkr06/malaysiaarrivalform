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
    <section className="relative py-12 md:py-24 bg-white overflow-hidden">
      {/* Subtile Navy Batik Background */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 15-15 15-15-15zM0 30l15 15-15 15-15-15zM60 30l15 15-15 15-15-15zM30 60l15 15-15 15-15-15z' fill='%230a192f' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Section Header */}
        <div className="mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-black text-[#0a192f] mb-3 tracking-tight">
            Essential Entry Information
          </h2>
          <div className="w-16 h-1.5 bg-[#0a192f] rounded-full" />
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-20">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="group p-6 md:p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#0a192f]/20 hover:bg-white hover:shadow-xl hover:shadow-navy-900/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#0a192f]/5 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#0a192f] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#0a192f] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[#0a192f] mb-3">{card.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{card.text}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-8 md:mt-12 p-8 md:p-12 rounded-[2rem] bg-[#0a192f] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          {/* Internal Batik Pattern for the CTA Box */}
          <div
            className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none scale-150 rotate-12"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 15-15 15-15-15zM0 30l15 15-15 15-15-15zM60 30l15 15-15 15-15-15zM30 60l15 15-15 15-15-15z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="text-center md:text-left relative z-10">
            <h4 className="text-2xl md:text-3xl font-black mb-2">Ready to apply?</h4>
            <p className="text-slate-300 text-sm md:text-lg max-w-md">
              Complete your MDAC registration in minutes with our guided process.
            </p>
          </div>

          <Button
            asChild
            className="w-full md:w-auto bg-white text-[#0a192f] hover:bg-slate-100 font-black px-12 h-16 text-lg rounded-xl transition-all active:scale-95 relative z-10"
          >
            <Link to="/apply" className="flex items-center gap-3">
              Apply Now
              <ArrowRight className="w-6 h-6" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
