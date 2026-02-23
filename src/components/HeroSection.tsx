import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ClipboardCheck, ShieldCheck, Zap, Info } from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <ClipboardCheck className="w-5 h-5" />,
      title: "Apply Online",
      desc: "Submit your passport and travel info in minutes.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Expert Review",
      desc: "Our team audits your data for 100% accuracy.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fast Approval",
      desc: "Receive your MDAC PIN directly via email.",
    },
  ];

  return (
    <section className="relative bg-[#0a192f] overflow-hidden min-h-[85vh] flex items-center border-b border-white/5">
      {/* High-Visibility Grid Pattern */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #64ffda 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a192f]/80 to-[#0a192f]" />
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_400px] gap-10 items-start max-w-7xl mx-auto">
          {/* Left Side: Headline & CTA */}
          <div className="pt-4 lg:pt-10">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              MDAC Concierge 2024
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
              Seamless Entry to <br />
              <span className="text-accent">Malaysia</span> Starts Here.
            </h1>

            <p className="text-base md:text-lg text-slate-400 mb-8 max-w-xl leading-snug">
              Avoid immigration delays. We handle your Mandatory Digital Arrival Card with professional oversight and
              guaranteed accuracy.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12 px-8 rounded-lg shadow-lg"
              >
                <Link to="/apply">Start My Application</Link>
              </Button>
              <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                <Info className="w-4 h-4 text-accent/60" />
                <span>Pro Tip: Apply 72h before arrival.</span>
              </div>
            </div>
          </div>

          {/* Right Side: Compressed 3-Step Process */}
          <div className="relative mt-4 lg:mt-0">
            <div className="absolute -inset-2 bg-accent/10 blur-2xl rounded-full opacity-30" />
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8">
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6 border-b border-white/10 pb-4">
                Three Simple Steps
              </h3>

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{step.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 py-3 px-4 bg-accent/5 rounded-xl border border-accent/10">
                <p className="text-[10px] text-accent font-bold uppercase text-center tracking-tighter">
                  Priority processing available upon checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
