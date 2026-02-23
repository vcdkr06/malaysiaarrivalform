import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, CreditCard, ShieldCheck, Info } from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <FileText className="w-4 h-4" />,
      title: "1. Apply",
      desc: "Fill in travel details.",
    },
    {
      icon: <CreditCard className="w-4 h-4" />,
      title: "2. Pay",
      desc: "Secure fee payment.",
    },
    {
      icon: <ShieldCheck className="w-4 h-4" />,
      title: "3. Receive",
      desc: "Get PIN via email.",
    },
  ];

  return (
    <section className="relative bg-[#0a192f] overflow-hidden min-h-screen lg:min-h-[85vh] flex items-center border-b border-white/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #64ffda 1.5px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-5 py-4 lg:py-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_380px] gap-6 lg:gap-12 items-start max-w-7xl mx-auto">
          {/* Main Hook */}
          <div className="flex flex-col pt-2">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest mb-3 w-fit">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              MDAC 2026 Guide
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-[1.05] mb-4 tracking-tight">
              Malaysia Entry <br />
              <span className="text-accent">Made Simple.</span>
            </h1>

            <p className="text-sm md:text-lg text-slate-400 mb-6 max-w-lg leading-snug">
              Every visitor must submit a Digital Arrival Card (MDAC) 72h before arrival. Our experts handle the filing
              for a fast, error-free entry.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center mb-6">
              <Button
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-11 px-6 rounded-lg w-full sm:w-auto"
              >
                <Link to="/apply">Start Application</Link>
              </Button>
              <div className="flex items-center gap-2 text-[11px] text-slate-300">
                <Info className="w-3.5 h-3.5 text-accent" />
                <span>Apply 3 days before travel.</span>
              </div>
            </div>

            {/* Regulatory Disclaimer - Desktop Only or subtle on mobile */}
            <p className="text-[9px] leading-tight text-slate-500 max-w-sm opacity-60">
              Private, independent service provider. Not affiliated with any government agency or immigration authority.
            </p>
          </div>

          {/* Process Card - Optimized for Mobile Visibility */}
          <div className="relative mt-2 lg:mt-0">
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 lg:p-6 shadow-2xl">
              <h3 className="text-white font-bold text-[10px] uppercase tracking-widest mb-4 opacity-50">
                Process Flow
              </h3>

              {/* Mobile: Horizontal-ish Grid | Desktop: Vertical Stack */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex lg:flex-row gap-3 items-center lg:items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      {step.icon}
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-white font-bold text-xs">{step.title}</h4>
                      <p className="text-[10px] text-slate-400 leading-tight">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex justify-center">
                <span className="text-[9px] bg-accent/5 text-accent px-2 py-0.5 rounded border border-accent/10 font-bold">
                  AVG PROCESSING: &lt; 24H
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
