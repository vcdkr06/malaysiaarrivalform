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
  Info,
  Lightbulb,
} from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-4 h-4" />,
      title: "Details",
      desc: "Fill form",
      color: "text-sky-600",
      bg: "bg-sky-50",
    },
    {
      icon: <CreditCard className="w-4 h-4" />,
      title: "Payment",
      desc: "Secure fee",
      color: "text-sky-600",
      bg: "bg-sky-50",
    },
    {
      icon: <UserCheck className="w-4 h-4" />,
      title: "Review",
      desc: "Data audit",
      color: "text-sky-600",
      bg: "bg-sky-50",
    },
    {
      icon: <MailCheck className="w-4 h-4" />,
      title: "Approval",
      desc: "Email pass",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white py-12 lg:py-0">
      {/* ——— BACKGROUND IMAGE LAYER ——— */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596422846543-75c6fc18a5ce?q=80&w=2070&auto=format&fit=crop"
          alt="Malaysia Skyline"
          className="w-full h-full object-cover"
        />
        {/* Premium Light Wash Overlay */}
        <div className="absolute inset-0 bg-white/95 lg:bg-gradient-to-r lg:from-white lg:via-white/95 lg:to-white/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          {/* ——— LEFT SIDE ——— */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-md bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                MDAC Portal
              </span>
              <span className="flex items-center gap-1 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                Verified Registration
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
                Entry into <span className="text-sky-600">Malaysia</span>, <br />
                Simplified.
              </h1>

              <p className="text-sm md:text-base text-slate-500 max-w-md leading-relaxed font-medium">
                The <span className="text-slate-900 font-bold">MDAC</span> is Malaysia’s new digital entry system. We
                provide a premium concierge service to ensure your application is processed{" "}
                <span className="text-sky-600 font-semibold">fast and error-free</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-14 px-12 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-lg shadow-xl shadow-sky-200 border-0 transition-transform active:scale-95"
              >
                <Link to="/apply" className="flex items-center justify-center gap-3">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-tight">
                <Globe className="w-4 h-4 text-sky-400" />
                Trusted by 50k+ Travelers
              </div>
            </div>
          </div>

          {/* ——— RIGHT SIDE: COMPACT GRID STEPPER ——— */}
          <div className="relative">
            {/* Soft Ambient Light Glow under card */}
            <div className="absolute -inset-4 bg-sky-500/5 rounded-[2.5rem] blur-2xl" />

            <div className="relative bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.2em]">
                  Application Process
                </h3>
                <Info className="w-4 h-4 text-slate-300" />
              </div>

              {/* Compact 2x2 Grid */}
              <div className="grid grid-cols-2 gap-3">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex flex-col p-4 rounded-2xl bg-white/50 border border-slate-100 hover:border-sky-200 transition-colors group"
                  >
                    <div
                      className={`w-8 h-8 rounded-lg ${step.bg} ${step.color} flex items-center justify-center mb-2 shadow-sm border border-white`}
                    >
                      {step.icon}
                    </div>
                    <h4 className="text-[12px] font-bold text-slate-900 mb-0.5">{step.title}</h4>
                    <p className="text-[10px] text-slate-400 font-medium leading-none">{step.desc}</p>
                  </div>
                ))}
              </div>

              {/* Timing Note */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <Lightbulb className="w-4 h-4 text-sky-500 animate-pulse" />
                  <p>
                    Apply <strong>within 3 days</strong> of arrival.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Footer Disclaimer */}
      <div className="absolute bottom-4 left-0 right-0 text-center opacity-40">
        <p className="text-[8px] text-slate-600 tracking-[0.2em] font-bold uppercase px-6">
          Independent Concierge Agency • Not Affiliated With Government
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
