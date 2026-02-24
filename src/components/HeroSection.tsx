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
      desc: "Digital form",
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
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-white py-8 lg:py-0">
      {/* ——— BACKGROUND IMAGE ——— */}
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
          {/* ——— LEFT SIDE: Content ——— */}
          <div className="flex flex-col space-y-3 lg:space-y-5">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-slate-900 text-white text-[8px] font-black uppercase tracking-widest">
                MDAC Portal
              </span>
              <span className="flex items-center gap-1 text-slate-400 text-[9px] font-bold uppercase tracking-widest">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                Verified
              </span>
            </div>

            <div className="space-y-1 lg:space-y-2">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                Entry to <span className="text-sky-600">Malaysia</span> <br className="hidden lg:block" /> Made Easy
              </h1>
              <p className="text-xs md:text-base text-slate-500 max-w-sm font-medium leading-relaxed">
                Fast digital registration for the mandatory Malaysia Arrival Card (MDAC).
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-11 px-8 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-lg shadow-sky-100 border-0"
              >
                <Link to="/apply" className="flex items-center justify-center gap-2">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <div className="flex lg:hidden items-center gap-1.5 text-[9px] font-bold text-slate-400 uppercase tracking-tight">
                <Globe className="w-3.5 h-3.5 text-sky-300" />
                Official Assistance
              </div>
            </div>
          </div>

          {/* ——— RIGHT SIDE: Steps Card ——— */}
          <div className="relative mt-2 lg:mt-0">
            <div className="relative bg-white/70 backdrop-blur-xl border border-white rounded-[1.5rem] p-4 lg:p-7 shadow-xl shadow-slate-200/50">
              <h3 className="text-[9px] font-black text-slate-900 uppercase tracking-[0.2em] mb-4 text-center lg:text-left">
                Process Path
              </h3>

              {/* Grid 2x2: Icon above Text */}
              <div className="grid grid-cols-2 gap-2 lg:gap-4">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center p-3 rounded-xl bg-white/50 border border-slate-50 shadow-sm"
                  >
                    <div
                      className={`w-9 h-9 rounded-lg ${step.bg} ${step.color} flex items-center justify-center mb-1.5 shadow-sm border border-white`}
                    >
                      {step.icon}
                    </div>
                    <h4 className="text-[11px] font-bold text-slate-900 leading-none mb-1">{step.title}</h4>
                    <p className="text-[9px] text-slate-400 font-medium leading-none">{step.desc}</p>
                  </div>
                ))}
              </div>

              {/* Small Info Line */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <div className="flex items-center justify-center lg:justify-start gap-1.5 text-[9px] text-slate-500 font-bold uppercase tracking-tight">
                  <Lightbulb className="w-3 h-3 text-sky-500" />
                  <span>Apply 3 days before arrival</span>
                </div>
              </div>
            </div>

            {/* Mobile Disclaimer: Below the Card */}
            <p className="block lg:hidden mt-3 text-[8px] text-center text-slate-400 leading-tight font-medium uppercase tracking-tighter opacity-60">
              Independent agency assisting with MDAC filings. <br /> Not affiliated with the Malaysian government.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Disclaimer */}
      <div className="hidden lg:block absolute bottom-4 left-0 right-0 text-center opacity-40">
        <p className="text-[8px] text-slate-600 tracking-[0.2em] font-bold uppercase">
          Independent Concierge Agency • Secure Data • No Government Affiliation
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
