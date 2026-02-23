import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, CreditCard, ShieldCheck, Send, Info } from "lucide-react";

const HeroSection = () => {
  const steps = [
    { icon: <User className="w-4 h-4" />, title: "Submit Details", desc: "Enter passport & travel info" },
    { icon: <CreditCard className="w-4 h-4" />, title: "Secure Checkout", desc: "Safe, encrypted payment" },
    { icon: <ShieldCheck className="w-4 h-4" />, title: "Expert Audit", desc: "Manual review for 100% accuracy" },
    { icon: <Send className="w-4 h-4" />, title: "Instant Delivery", desc: "Receive your PIN via email" },
  ];

  return (
    <section className="relative bg-primary overflow-hidden min-h-[90vh] flex items-center">
      {/* Malaysia Pattern Graphic */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23ffffff'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary to-primary pointer-events-none" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Value Proposition */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              MDAC Concierge Service
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary-foreground tracking-tight leading-[0.95] mb-6">
              Malaysia <br />
              <span className="text-accent">Made Easy.</span>
            </h1>
            <p className="text-lg text-primary-foreground/60 mb-8 max-w-lg leading-relaxed">
              Skip the confusion. We process your Mandatory Digital Arrival Card with expert oversight, ensuring a
              smooth entry at immigration.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-14 px-10 rounded-xl shadow-xl shadow-accent/20 mb-8"
            >
              <Link to="/apply">Start My Application</Link>
            </Button>

            <div className="flex items-center gap-3 text-primary-foreground/40 border-t border-white/10 pt-6">
              <Info className="w-5 h-5 text-accent" />
              <p className="text-sm">
                <strong>Pro Tip:</strong> Apply 3 days before departure for peace of mind.
              </p>
            </div>
          </div>

          {/* Right: Concise Process Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full opacity-20" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8">
              <h3 className="text-white font-bold text-lg mb-8 tracking-tight">Quick Process</h3>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-5 group">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        {step.icon}
                      </div>
                      {index !== steps.length - 1 && (
                        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-px h-6 bg-white/10" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-primary-foreground font-bold text-sm tracking-wide">{step.title}</h4>
                      <p className="text-xs text-primary-foreground/40 mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-4 bg-white/5 rounded-2xl border border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-bold text-primary-foreground/30 uppercase">Priority Status</span>
                <span className="text-xs font-bold text-accent">Active & Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
