import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Users, AlertTriangle, ArrowRight, Sparkles } from "lucide-react";

const InfoCardsSection = () => {
  const cards = [
    {
      icon: FileText,
      title: "What is MDAC?",
      text: "A mandatory digital form that replaces the old paper arrival card for every foreign visitor entering Malaysia.",
    },
    {
      icon: Users,
      title: "Who needs one?",
      text: "Every foreign national arriving by air, land, or sea — regardless of visa status. Very few exemptions apply.",
    },
    {
      icon: AlertTriangle,
      title: "When to submit?",
      text: "File your MDAC within 72 hours of arrival. Late or missing submissions may delay your entry at the border.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-5 md:px-6 max-w-5xl">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-bold px-3.5 py-1.5 rounded-full mb-3 bg-secondary border border-border text-primary">
            Before You Apply
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-[-0.02em] text-heading-strong">
            Essential <span className="text-primary">Entry Information</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-3 md:gap-4 mb-10 md:mb-14">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="group relative flex flex-col p-5 md:p-6 rounded-2xl transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg cursor-default overflow-hidden bg-secondary border border-border"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105 bg-card shadow-soft">
                  <Icon className="w-[18px] h-[18px] text-primary" strokeWidth={2} />
                </div>
                <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] mb-2 text-heading-strong">
                  {card.title}
                </h3>
                <p className="text-[12px] md:text-[13px] leading-relaxed text-muted-foreground">
                  {card.text}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left bg-primary opacity-35" />
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="relative overflow-hidden rounded-[20px] p-7 md:p-10 bg-primary shadow-cta">
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl bg-primary-foreground/[0.08]" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-3xl bg-primary-light/30" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] mb-3 bg-primary-foreground/[0.12] border border-primary-foreground/15 text-primary-foreground/85">
                <Sparkles className="w-3 h-3" />
                Concierge Filing
              </div>
              <h4 className="text-xl md:text-2xl font-extrabold mb-1.5 text-primary-foreground">
                Ready to secure your entry?
              </h4>
              <p className="text-[13px] md:text-[14px] max-w-sm leading-relaxed text-primary-foreground/60">
                Thousands of travelers have already filed through our streamlined platform — your turn takes minutes.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full md:w-auto font-bold text-[14px] h-12 md:h-13 px-8 rounded-md transition-all duration-200 hover:translate-y-[-2px] hover:shadow-xl active:scale-[0.97] bg-primary-foreground text-primary shadow-soft"
            >
              <Link to="/apply" className="flex items-center gap-2">
                Start My Application
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
