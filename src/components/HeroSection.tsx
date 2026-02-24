import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, CreditCard, UserCheck, MailCheck, ShieldCheck, Globe, Info } from "lucide-react";

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
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#F8FAFC] py-10 lg:py-0">
      {/* ——— GRAPHIC ELEMENTS ——— */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-sky-50/50 skew-x-[-12deg] translate-x-20" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-sky-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          {/* ——— LEFT COLUMN ——— */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest">
                MDAC Portal
              </span>
              <span className="flex items-center gap-1 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                Verified Registration
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
                Entry into <span className="text-sky-600">Malaysia</span>, <br />
                Simplified.
              </h1>

              <p className="text-base text-slate-500 max-w-md leading-relaxed font-medium">
                The <span className="text-slate-900 font-bold">MDAC</span> is Malaysia’s mandatory digital entry system.
                We provide an expert concierge service to ensure your application is processed{" "}
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

            <p className="text-[10px] text-slate-400 max-w-xs leading-tight font-medium uppercase tracking-tighter opacity-60">
              Independent agency assisting with MDAC filings. Not affiliated with the Malaysian government.
            </p>
          </div>

          {/* ——— RIGHT COLUMN: COMPACT GRID STEPPER ——— */}
          <div className="relative">
            <div className="absolute -inset-4 bg-sky-500/5 rounded-[2.5rem] blur-2xl" />

            <div className="relative bg-white border border-slate-100 rounded-[2rem] p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.2em]">Application Path</h3>
                <Info className="w-4 h-4 text-slate-300" />
              </div>

              {/* Steps 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex flex-col p-4 rounded-2xl bg-slate-50/50 border border-slate-100 hover:border-sky-200 transition-colors group"
                  >
                    <div
                      className={`w-8 h-8 rounded-lg ${step.bg} ${step.color} flex items-center justify-center mb-3 shadow-sm border border-white`}
                    >
                      {step.icon}
                    </div>
                    <h4 className="text-[13px] font-bold text-slate-900 mb-0.5">{step.title}</h4>
                    <p className="text-[11px] text-slate-400 font-medium leading-none">{step.desc}</p>
                  </div>
                ))}
              </div>

              {/* Compact Notice */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="flex items-center gap-2 text-[11px] text-slate-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                  <p>
                    Apply <strong>within 3 days</strong> of arrival.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
