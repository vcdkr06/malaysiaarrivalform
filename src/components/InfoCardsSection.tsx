import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Users, AlertTriangle, ArrowRight } from "lucide-react";

const InfoCardsSection = () => {
  const cards = [
    { icon: FileText, title: "What is MDAC?", text: "The mandatory digital arrival card required for all foreign visitors entering Malaysia." },
    { icon: Users, title: "Who needs it?", text: "All foreign nationals entering via air, land, or sea, with very few exceptions." },
    { icon: AlertTriangle, title: "The Deadline", text: "Must be submitted within 72 hours prior to your arrival for seamless entry." },
  ];

  return (
    <section className="py-10 md:py-20 bg-card">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-10 md:mb-12 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-light text-foreground tracking-tight">
            Essential <span className="font-semibold">Entry Information</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="flex flex-col p-6 rounded-2xl bg-secondary border border-border transition-all hover:bg-card hover:shadow-elegant hover:border-primary/20">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-[13px] font-bold text-foreground uppercase tracking-wider mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
              </div>
            );
          })}
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-primary/5 border border-primary/15 p-8 md:p-12">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-4">
                Fast-Track Filing
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Ready to apply?</h4>
              <p className="text-muted-foreground text-sm md:text-base max-w-sm">
                Join thousands of travelers who secure their MDAC PIN through our simplified concierge service.
              </p>
            </div>
            <Button asChild size="lg" className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary-dark px-10 h-14 rounded-xl shadow-elegant transition-all active:scale-95">
              <Link to="/apply" className="flex items-center gap-2 font-bold text-base">
                Start My Application
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
