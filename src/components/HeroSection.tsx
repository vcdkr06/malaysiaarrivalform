import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, CreditCard, ShieldCheck, Info } from "lucide-react";
import batikPattern from "@/assets/batik-pattern.jpg";

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
  }];


  return (
    <section className="relative bg-[#0a192f] overflow-hidden min-h-[80vh] flex items-center pt-8 md:pt-0">
      {/* Batik-Inspired Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage: `url(${batikPattern})`,
          backgroundSize: '600px',
          backgroundRepeat: 'repeat'
        }} />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-transparent to-[#0a192f] z-0" />

      <div className="container mx-auto px-6 py-4 md:py-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_420px] gap-4 md:gap-6 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Top Block: Badges, Headline, and Subtitle */}
          <div className="flex flex-col w-full">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 w-fit">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Official Entry Concierge
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-2 md:mb-4 tracking-tight">
              <span className="md:hidden uppercase">
                Malaysia Digital <br />
                <span className="text-accent">Arrival Card</span>
              </span>
              <span className="hidden md:inline">
                Fast-Track Your <br />
                <span className="text-accent">Malaysia</span> Entry.
              </span>
            </h1>

            <p className="text-sm md:text-lg text-slate-400 mb-4 md:mb-8 max-w-xl leading-snug">
              <span className="font-semibold text-slate-50">Required for all foreign visitors</span> — submit an MDAC 72 hours before arrival. We handle the filing to ensure your
              entry is seamless.
            </p>

            {/* Desktop-Only CTA */}
            <div className="hidden lg:flex flex-wrap gap-4 items-center mb-6">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12 px-8 rounded-lg shadow-xl shadow-accent/10">

                <Link to="/apply">Apply for MDAC Now</Link>
              </Button>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                <Info className="w-4 h-4 text-accent" />
                <p className="text-xs text-slate-300 font-medium italic underline">Apply 3 days before travel.</p>
              </div>
            </div>
          </div>

          {/* Processing Card: Order 2 on mobile */}
          <div className="relative group w-full order-2 lg:order-none mb-2">
            <div className="absolute -inset-1 bg-accent/10 blur-xl rounded-full opacity-20" />

            <div className="relative bg-[#112240]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-5 lg:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-5 md:mb-8">
                <h3 className="text-white font-bold tracking-tight uppercase text-[10px]">Processing Journey</h3>
                <span className="text-[9px] bg-accent/10 text-accent px-2 py-0.5 rounded border border-accent/20 font-bold">
                  FAST-TRACK
                </span>
              </div>

              <div className="space-y-4 md:space-y-7">
                {steps.map((step, index) =>
                <div key={index} className="flex gap-4 md:gap-5">
                    <div className="flex-shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-lg bg-accent/5 border border-accent/15 flex items-center justify-center text-accent">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-[13px] md:text-[14px] mb-0.5">{step.title}</h4>
                      <p className="text-[11px] md:text-[12px] text-slate-400 leading-tight md:leading-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer Disclaimer */}
          <div className="order-3 lg:col-start-1 lg:mt-[-2rem]">
            <p className="text-[9px] md:text-[10px] leading-relaxed text-slate-500 max-w-md border-l border-slate-800 pl-3">
              Independent service provider. Not affiliated with government agencies.
            </p>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;