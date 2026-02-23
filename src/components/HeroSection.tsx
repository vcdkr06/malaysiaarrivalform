import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, CreditCard, ShieldCheck, Info } from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "1. Complete Application",
      desc: "Provide travel details via our simplified digital form."
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "2. Secure Settlement",
      desc: "Process fees through our bank-grade encrypted portal."
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "3. Review & Delivery",
      desc: "Specialists audit data before emailing your MDAC PIN."
    }
  ];

  return (
    <section className="relative bg-gradient-hero overflow-hidden min-h-[80vh] flex items-center pt-8 md:pt-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(205_55%_58%/0.15),transparent_60%)] z-0" />

      <div className="container mx-auto px-6 py-4 md:py-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_420px] gap-4 md:gap-6 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Top Block */}
          <div className="flex flex-col w-full">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 w-fit">
              <span className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
              Official Entry Concierge
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-primary-foreground leading-[1.1] mb-2 md:mb-4 tracking-tight">
              <span className="md:hidden uppercase">
                Malaysia Digital <br />
                <span className="text-white/90">Arrival Card</span>
              </span>
              <span className="hidden md:inline">
                Fast-Track Your <br />
                <span className="text-white/90">Malaysia</span> Entry.
              </span>
            </h1>

            <p className="text-sm md:text-lg text-primary-foreground/70 mb-4 md:mb-8 max-w-xl leading-snug">
              <span className="font-semibold text-primary-foreground">Required for all foreign visitors</span> — submit an MDAC 72 hours before arrival. We handle the filing to ensure your entry is seamless.
            </p>

            {/* Desktop CTA */}
            <div className="hidden lg:flex flex-wrap gap-4 items-center mb-6">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold h-12 px-8 rounded-lg shadow-xl">
                <Link to="/apply">Apply for MDAC Now</Link>
              </Button>
              <div className="flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/15 px-4 py-2 rounded-lg">
                <Info className="w-4 h-4 text-primary-foreground/80" />
                <p className="text-xs text-primary-foreground/70 font-medium italic underline">Apply 3 days before travel.</p>
              </div>
            </div>
          </div>

          {/* Processing Card */}
          <div className="relative group w-full order-2 lg:order-none mb-2">
            <div className="absolute -inset-1 bg-primary-foreground/5 blur-xl rounded-full opacity-20" />

            <div className="relative bg-primary-foreground/10 backdrop-blur-xl border border-primary-foreground/15 rounded-2xl p-5 lg:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-5 md:mb-8">
                <h3 className="text-primary-foreground font-bold tracking-tight uppercase text-[10px]">Processing Journey</h3>
                <span className="text-[9px] bg-primary-foreground/10 text-primary-foreground px-2 py-0.5 rounded border border-primary-foreground/20 font-bold">
                  FAST-TRACK
                </span>
              </div>

              <div className="space-y-4 md:space-y-7">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4 md:gap-5">
                    <div className="flex-shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-lg bg-primary-foreground/10 border border-primary-foreground/15 flex items-center justify-center text-primary-foreground">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-primary-foreground font-bold text-[13px] md:text-[14px] mb-0.5">{step.title}</h4>
                      <p className="text-[11px] md:text-[12px] text-primary-foreground/60 leading-tight md:leading-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Disclaimer */}
          <div className="order-3 lg:col-start-1 lg:mt-[-2rem]">
            <p className="text-[9px] md:text-[10px] leading-relaxed text-primary-foreground/40 max-w-md border-l border-primary-foreground/20 pl-3">
              Independent service provider. Not affiliated with government agencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
