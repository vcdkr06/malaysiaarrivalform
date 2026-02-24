import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ClipboardList,
  CreditCard,
  UserCheck,
  MailCheck,
  ShieldCheck,
  Globe,
  Lightbulb,
} from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Details",
      desc: "Fill form",
      color: "text-sky-600",
      bg: "bg-sky-50",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Payment",
      desc: "Secure fee",
      color: "text-sky-600",
      bg: "bg-sky-50",
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Review",
      desc: "Data audit",
      color: "text-sky-600",
      bg: "bg-sky-50",
    },
    {
      icon: <MailCheck className="w-5 h-5" />,
      title: "Approval",
      desc: "Email pass",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <section className="relative min-h-screen lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-white py-6 md:py-10 lg:py-0">
      {/* ——— BACKGROUND IMAGE LAYER ——— */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596422846543-75c6fc18a5ce?q=80&w=2070&auto=format&fit=crop"
          alt="Malaysia Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/95 lg:bg-gradient-to-r lg:from-white lg:via-white/95 lg:to-white/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-6 lg:gap-12 items-center">
          {/* ——— LEFT SIDE ——— */}
          <div className="flex flex-col space-y-4 lg:space-y-5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest">
                MDAC Portal
              </span>
              <span className="flex items-center gap-1 text-slate-400 text-[9px] font-bold uppercase tracking-widest">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                Verified
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                Digital Entry Into <br />
                <span className="text-sky-600">Malaysia</span>
              </h1>

              {/* Shortened Subtitle */}
              <p className="text-sm md:text-base text-slate-500 max-w-md leading-relaxed font-medium">
                Fast, secure online registration for the mandatory Malaysia Digital Arrival Card (MDAC).
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-12 px-10 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-md shadow-lg shadow-sky-100 border-0 transition-transform active:scale-95"
              >
                <Link to="/apply" className="flex items-center justify-center gap-2">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                <Globe className="w-4 h-4 text-sky-300" />
                Official Assistance
              </div>
            </div>

            {/* Disclaimer Hidden on Mobile (will show below the box) */}
            <p className="hidden lg:block text-[10px] text-slate-400 max-w-xs leading-tight font-medium uppercase tracking-tighter opacity-60">
              Independent agency assisting with MDAC filings. Not affiliated with the Malaysian government.
            </p>
          </div>

          {/* ——— RIGHT SIDE: STEPS CARD ——— */}
          <div className="relative">
            <div className="relative bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] p-5 lg:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-5 text-center lg:text-left">
                Application Process
              </h3>

              {/* Grid with Vertical Steps (Icon above text) */}
              <div className="grid grid-cols-2 gap-3">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center p-3 rounded-2xl bg-white/50 border border-slate-50 shadow-sm"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${step.bg} ${step.color} flex items-center justify-center mb-2 shadow-sm border border-white`}
                    >
                      {step.icon}
                    </div>
                    <h4 className="text-[12px] font-bold text-slate-900 leading-none mb-1">{step.title}</h4>
                    <p className="text-[10px] text-slate-400 font-medium leading-none">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[10px] text-slate-500 font-medium italic">
                  <Lightbulb className="w-3.5 h-3.5 text-sky-500" />
                  <p>
                    Apply <strong>within 3 days</strong> of arrival date.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile-Only Disclaimer (Below the box) */}
            <p className="block lg:hidden mt-4 text-[9px] text-center text-slate-400 leading-tight font-medium uppercase tracking-tighter opacity-70">
              Independent agency assisting with MDAC filings. <br /> Not affiliated with the Malaysian government.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
