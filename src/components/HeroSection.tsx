import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ClipboardList,
  CreditCard,
  UserCheck,
  MailCheck,
  ShieldCheck,
  Plane,
  Sparkles,
} from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Fill Information",
      desc: "Complete our simplified digital form.",
      color: "text-blue-400",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Secure Checkout",
      desc: "Safe processing for your service fee.",
      color: "text-indigo-400",
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Expert Verification",
      desc: "We review every detail for accuracy.",
      color: "text-amber-400",
    },
    {
      icon: <MailCheck className="w-5 h-5" />,
      title: "Instant Approval",
      desc: "Your MDAC arrives directly via email.",
      color: "text-emerald-400",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ——— BACKGROUND IMAGE LAYER ——— */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596422846543-75c6fc18a5ce?q=80&w=2070&auto=format&fit=crop"
          alt="Kuala Lumpur Malaysia Skyline"
          className="w-full h-full object-cover"
        />
        {/* Modern Gradient Overlay (Darker on left for text readability) */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-900/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl pt-20 pb-12">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          {/* ——— LEFT SIDE: Content ——— */}
          <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-6">
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 backdrop-blur-md text-blue-300 text-sm font-bold w-fit shadow-2xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Official MDAC Assistance
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                Your Journey to <br />
                <span className="text-blue-400 italic font-serif">Malaysia</span> <br />
                Starts Here.
              </h1>

              <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed font-light">
                Experience a seamless entry with our premium{" "}
                <span className="text-white font-medium">MDAC Concierge Service</span>. We handle the bureaucracy so you
                can focus on the adventure.
              </p>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-16 px-10 rounded-2xl text-lg font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all hover:scale-105 active:scale-95 group border-0"
              >
                <Link to="/apply" className="flex items-center justify-center gap-3">
                  Apply Now
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>

              <div className="flex -space-x-3 overflow-hidden">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-900 object-cover"
                    src={`https://i.pravatar.cc/150?u=${i}`}
                    alt="User"
                  />
                ))}
                <div className="flex items-center justify-center h-10 px-3 rounded-full bg-slate-800 ring-2 ring-slate-900 text-xs font-bold text-white">
                  +12k Today
                </div>
              </div>
            </div>

            {/* Trust Markers */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 opacity-70 border-t border-white/10">
              <div className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Secure Processing
              </div>
              <div className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-widest">
                <Plane className="w-4 h-4 text-blue-400" /> Fast Delivery
              </div>
              <div className="flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-amber-400" /> 24/7 Support
              </div>
            </div>
          </div>

          {/* ——— RIGHT SIDE: Glass Card Stepper ——— */}
          <div className="relative group animate-in fade-in slide-in-from-right duration-1000">
            {/* Decorative Light Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-2xl font-bold text-white tracking-tight">How to Apply</h3>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-blue-500/20 text-blue-300 px-3 py-1 rounded-md border border-blue-500/30">
                  Easy Process
                </span>
              </div>

              <div className="space-y-8">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-6 group/item">
                    <div className="relative">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover/item:bg-white/10 ${step.color}`}
                      >
                        {step.icon}
                      </div>
                      {idx !== steps.length - 1 && (
                        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-white/20 to-transparent" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">{step.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Warning/Info Box */}
              <div className="mt-10 p-5 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-4 transition-all hover:bg-white/10">
                <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 animate-pulse" />
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  Reminder: Malaysia requires the MDAC to be submitted within <strong>3 days</strong> of your arrival.
                  Please apply within this window for validity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Disclaimer at the very bottom */}
      <div className="absolute bottom-4 left-0 right-0 text-center opacity-30 px-6">
        <p className="text-[10px] text-white tracking-widest uppercase">
          Independent Concierge Service • Not Affiliated with Malaysian Immigration Dept • Fees Apply
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
