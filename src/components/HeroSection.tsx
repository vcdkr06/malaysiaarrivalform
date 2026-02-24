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
  AlertCircle,
} from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Details",
      desc: "Digital form",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Payment",
      desc: "Secure fee",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Review",
      desc: "Data audit",
      color: "text-blue-600",
      bg: "bg-blue-50",
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
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-white py-6 lg:py-0">
      {/* ——— BACKGROUND IMAGE LAYER ——— */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596422846543-75c6fc18a5ce?q=80&w=2070&auto=format&fit=crop"
          alt="Petronas Twin Towers Malaysia"
          className="w-full h-full object-cover"
        />
        {/* Balanced Gradient: Keeps Petronas visible on the right while clearing text on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-blue-600/20 lg:via-white/70 lg:to-transparent" />
      </div>

      <div className="container mx-auto px-5 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-6 lg:gap-12 items-center">
          {/* ——— LEFT SIDE: Content ——— */}
          <div className="flex flex-col space-y-3 lg:space-y-5">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-md bg-yellow-400 text-slate-900 text-[10px] font-black uppercase tracking-widest shadow-sm">
                MANDATORY
              </span>
              <span className="flex items-center gap-1 text-blue-800 text-[10px] font-bold uppercase tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Portal
              </span>
            </div>

            <div className="space-y-1 lg:space-y-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-[900] tracking-tight text-slate-900 leading-[1.1]">
                Entry into <span className="text-blue-600">Malaysia</span> <br className="hidden lg:block" /> Made Easy
              </h1>
              <p className="text-xs md:text-base text-slate-500 max-w-sm font-medium leading-relaxed">
                Mandatory digital registration for all foreign arrivals via MDAC.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-12 px-10 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-200 border-0"
              >
                <Link to="/apply" className="flex items-center justify-center gap-2">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                Travel Concierge
              </div>
            </div>
          </div>

          {/* ——— RIGHT SIDE: Compact Stepper ——— */}
          <div className="relative mt-2 lg:mt-0">
            {/* Subtle Azure Glow */}
            <div className="absolute -inset-2 bg-blue-400/5 rounded-[2rem] blur-xl" />

            <div className="relative bg-white/85 backdrop-blur-md border border-white rounded-[1.5rem] p-4 lg:p-7 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[9px] font-black text-slate-900 uppercase tracking-[0.2em]">Application Process</h3>
                <AlertCircle className="w-3.5 h-3.5 text-slate-300" />
              </div>

              {/* 2x2 Grid: Icons Centered Above Text */}
              <div className="grid grid-cols-2 gap-2 lg:gap-4">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center p-3 rounded-xl bg-white border border-blue-50/50 shadow-sm transition-all hover:border-blue-200"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${step.bg} ${step.color} flex items-center justify-center mb-1.5 shadow-sm border border-white`}
                    >
                      {step.icon}
                    </div>
                    <h4 className="text-[12px] font-bold text-slate-900 leading-none mb-1">{step.title}</h4>
                    <p className="text-[9px] text-slate-400 font-medium leading-none">{step.desc}</p>
                  </div>
                ))}
              </div>

              {/* Requirement Alert */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <div className="flex items-center justify-center lg:justify-start gap-1.5 text-[9px] text-blue-600 font-bold uppercase tracking-tight">
                  <Lightbulb className="w-3 h-3 animate-pulse" />
                  <span>Submit within 3 days of arrival</span>
                </div>
              </div>
            </div>

            {/* Disclaimer: Below the Card on Mobile */}
            <p className="block lg:hidden mt-4 text-[8px] text-center text-slate-400 leading-tight font-medium uppercase tracking-tighter opacity-60 px-4">
              Independent agency assisting with MDAC filings. <br /> Not affiliated with the Malaysian government.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Footer Disclaimer */}
      <div className="hidden lg:block absolute bottom-4 left-0 right-0 text-center opacity-40">
        <p className="text-[8px] text-slate-600 tracking-[0.2em] font-bold uppercase">
          Independent Agency • Professional Review • Secure Checkout
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
