import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserCheck, CreditCard, ShieldCheck, Zap, Info } from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Submit Travel Information",
      desc: "Provide your passport details and travel itinerary through our simplified, user-friendly digital form.",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Secure Fee Settlement",
      desc: "Complete your application using our bank-grade encrypted payment gateway for total peace of mind.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Professional Data Audit",
      desc: "Our visa specialists manually verify every field to ensure 100% accuracy before official submission.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Direct Digital Delivery",
      desc: "Receive your approved MDAC confirmation and PIN via email, ready to present at immigration.",
    },
  ];

  return (
    <section className="relative bg-[#0a192f] overflow-hidden min-h-screen flex items-center">
      {/* Fixed Background Pattern: High-Visibility Grid */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0a192f] via-transparent to-accent/5" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-[1fr_460px] gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left Side: Strategic Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Official Entry Requirement
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
              Navigate Your Entry Into{" "}
              <span className="text-accent underline decoration-accent/30 underline-offset-8">Malaysia</span> With
              Confidence.
            </h1>

            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              Every foreign visitor is required to submit the Malaysia Digital Arrival Card (MDAC) within 72 hours of
              arrival. Our concierge service ensures your submission is flawless, preventing delays at the border.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-14 px-10 rounded-xl text-lg shadow-2xl shadow-accent/20 transition-all hover:scale-105"
              >
                <Link to="/apply">Get Started Now</Link>
              </Button>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-xl">
                <Info className="w-5 h-5 text-accent" />
                <p className="text-sm text-slate-300">
                  <span className="font-bold">Pro Tip:</span> Apply 3 days before travel.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: The Process Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-b from-accent/20 to-transparent blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000" />

            <div className="relative bg-[#112240] border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
              <h3 className="text-white font-bold text-xl mb-10 flex items-center justify-between">
                Application Journey
                <span className="text-[10px] text-accent border border-accent/30 px-2 py-0.5 rounded uppercase">
                  Verified
                </span>
              </h3>

              <div className="space-y-10">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-6 relative">
                    {/* Visual Connector Line */}
                    {index !== steps.length - 1 && (
                      <div className="absolute left-[22px] top-12 w-[2px] h-12 bg-gradient-to-b from-accent/30 to-transparent" />
                    )}

                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                      {step.icon}
                    </div>

                    <div className="pt-1">
                      <h4 className="text-white font-bold text-base mb-1.5">{step.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed font-medium">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#112240] bg-slate-700 flex items-center justify-center overflow-hidden"
                    >
                      <div className="w-full h-full bg-accent/20" />
                    </div>
                  ))}
                </div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                  10k+ Applications Processed
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
