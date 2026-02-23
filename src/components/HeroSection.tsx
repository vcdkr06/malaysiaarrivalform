import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, CreditCard, ShieldCheck, Info } from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "1. Complete Application",
      desc: "Provide your travel and personal details through our simplified, user-friendly digital form.",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "2. Secure Settlement",
      desc: "Process your application fee through our bank-grade encrypted portal using any major card.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "3. Review & Delivery",
      desc: "Our specialists audit your data for 100% accuracy before emailing your MDAC PIN for entry.",
    },
  ];

  return (
    <section className="relative bg-[#0a192f] overflow-hidden min-h-[85vh] flex items-center">
      {/* High-Visibility Grid Pattern */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #64ffda 1.5px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0a192f] via-transparent to-accent/5" />
      </div>

      <div className="container mx-auto px-6 py-4 md:py-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_420px] gap-8 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Left Side: Headline & CTAs */}
          <div className="flex flex-col justify-center pt-2 md:pt-6">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 w-fit">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Official Entry Concierge
            </div>

            {/* Shortened Headline for Mobile */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.02] mb-6 tracking-tight">
              <span className="hidden md:inline">
                Fast-Track Your <br />
              </span>
              <span className="text-accent md:text-white">Malaysia</span>
              <span className="md:text-accent"> Entry.</span>
            </h1>

            {/* Shortened Sub-headline for Mobile */}
            <p className="text-base md:text-lg text-slate-400 mb-8 max-w-xl leading-snug">
              <span className="md:hidden">
                Get your mandatory MDAC PIN 72 hours before arrival. Seamless, error-free filing.
              </span>
              <span className="hidden md:inline">
                Every foreign visitor must submit a Malaysia Digital Arrival Card (MDAC) 72 hours before arrival. We
                handle the filing to ensure your entry is seamless.
              </span>
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-6">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12 px-8 rounded-lg shadow-xl shadow-accent/10"
              >
                <Link to="/apply">Apply for MDAC Now</Link>
              </Button>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg">
                <Info className="w-4 h-4 text-accent" />
                <p className="text-xs text-slate-300 font-medium italic underline underline-offset-4 decoration-accent/30">
                  Apply 3 days before travel.
                </p>
              </div>
            </div>

            {/* Regulatory Disclaimer */}
            <p className="text-[10px] leading-relaxed text-slate-500 max-w-md border-l border-slate-800 pl-4">
              This website is a private service provider and is not affiliated with any government agency.
            </p>
          </div>

          {/* Right Side: Rephrased 3-Step Card */}
          <div className="relative group mt-6 lg:mt-0">
            <div className="absolute -inset-2 bg-accent/20 blur-2xl rounded-full opacity-20 transition duration-1000 group-hover:opacity-40" />

            <div className="relative bg-[#112240]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 lg:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-white font-bold tracking-tight uppercase text-xs">Processing Journey</h3>
                <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 rounded border border-accent/20 font-bold uppercase">
                  Fast-Track
                </span>
              </div>

              <div className="space-y-7">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-5">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/5 border border-accent/15 flex items-center justify-center text-accent shadow-inner">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-[14px] mb-1">{step.title}</h4>
                      <p className="text-[12px] text-slate-400 leading-normal">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Removed Global Access section as requested */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
