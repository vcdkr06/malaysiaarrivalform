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
  Zap,
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
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white">
      {/* ——— SPLIT BACKGROUND: Image on Right, Solid on Left ——— */}
      <div className="absolute inset-0 z-0 flex">
        {/* Left Side: Solid White */}
        <div className="hidden lg:block w-[45%] bg-white h-full" />
        {/* Right Side: Clear Photo */}
        <div className="relative w-full lg:w-[55%] h-full">
          <img
            src="https://images.unsplash.com/photo-1596422846543-75c6fc18a5ce?q=80&w=2070&auto=format&fit=crop"
            alt="Petronas Twin Towers"
            className="w-full h-full object-cover object-center lg:object-[25%_center]"
          />
          {/* Subtle blue tint overlay on image only */}
          <div className="absolute inset-0 bg-blue-600/5 lg:bg-transparent" />
          {/* Mobile-only white fade to keep text readable on phones */}
          <div className="absolute inset-0 bg-white/90 lg:hidden" />
          {/* Transition gradient for Desktop */}
          <div className="hidden lg:block absolute inset-y-0 -left-1 w-32 bg-gradient-to-r from-white to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* ——— LEFT COLUMN: Content & CTA ——— */}
          <div className="flex flex-col space-y-4 lg:space-y-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-md bg-yellow-400 text-slate-900 text-[10px] font-black uppercase tracking-widest shadow-sm flex items-center gap-1.5">
                <Zap className="w-3 h-3 fill-current" />
                Mandatory Travel Requirement
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-[900] tracking-tight text-slate-900 leading-tight">
                Digital Entry to <br />
                <span className="text-blue-600">Malaysia</span>
              </h1>
              <p className="text-sm md:text-base text-slate-500 max-w-sm font-medium leading-relaxed">
                The MDAC is a mandatory digital entry form for all visitors. Secure your registration online in minutes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-12 px-10 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-xl shadow-blue-200 border-0 transition-transform active:scale-95"
              >
                <Link to="/apply" className="flex items-center justify-center gap-2">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-tight">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Verified Portal
              </div>
            </div>
          </div>

          {/* ——— RIGHT COLUMN: Compact Stepper Card ——— */}
          <div className="relative">
            <div className="relative bg-white/90 backdrop-blur-md border border-white rounded-[2rem] p-6 lg:p-8 shadow-2xl shadow-blue-900/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">Application Path</h3>
                <Globe className="w-4 h-4 text-blue-100" />
              </div>

              {/* 2x2 Grid: Icon Centered Above Text */}
              <div className="grid grid-cols-2 gap-4">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/60 border border-slate-50 shadow-sm transition-all hover:border-blue-100 group"
                  >
                    <div
                      className={`w-10 h-10 rounded-xl ${step.bg} ${step.color} flex items-center justify-center mb-2 shadow-sm border border-white transition-transform group-hover:scale-105`}
                    >
                      {step.icon}
                    </div>
                    <h4 className="text-[13px] font-bold text-slate-900 leading-none mb-1">{step.title}</h4>
                    <p className="text-[10px] text-slate-400 font-medium leading-none">{step.desc}</p>
                  </div>
                ))}
              </div>

              {/* Requirement Note */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="flex items-center justify-center lg:justify-start gap-2 text-[10px] text-blue-600 font-bold uppercase tracking-tight">
                  <Lightbulb className="w-3.5 h-3.5 animate-pulse" />
                  <span>Submit within 3 days of arrival</span>
                </div>
              </div>
            </div>

            {/* Mobile Disclaimer */}
            <p className="block lg:hidden mt-4 text-[9px] text-center text-slate-400 leading-tight font-medium uppercase tracking-tighter opacity-60 px-4">
              Independent agency assisting with MDAC filings. <br /> Not affiliated with the Malaysian government.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Disclaimer */}
      <div className="hidden lg:block absolute bottom-6 left-12 opacity-30">
        <p className="text-[9px] text-slate-600 tracking-[0.2em] font-bold uppercase">
          Independent Concierge Agency • Secure Data • No Government Affiliation
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
