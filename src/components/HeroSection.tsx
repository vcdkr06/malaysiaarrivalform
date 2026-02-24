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
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#F8FAFC]">
      {/* ——— IMAGE POSITIONED RIGHT WITH EXTREME FADE ——— */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full z-0">
        <img
          src="https://images.unsplash.com/photo-1596422846543-75c6fc18a5ce?q=80&w=2070&auto=format&fit=crop"
          alt="Petronas Twin Towers Malaysia"
          className="w-full h-full object-cover object-[70%_center] lg:object-right"
        />
        {/* Extreme Gradient: Solid on the left, fading quickly as it hits the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-transparent to-[#F8FAFC] lg:bg-gradient-to-r lg:from-[#F8FAFC] lg:via-[#F8FAFC] lg:via-[35%] lg:to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-[1fr_0.7fr] gap-8 lg:gap-16 items-center">
          {/* ——— LEFT COLUMN: Clean Professional Workspace ——— */}
          <div className="flex flex-col space-y-4 lg:space-y-6 pt-4 lg:pt-0">
            <div className="flex items-center gap-2">
              {/* Yellow Mandatory Badge */}
              <span className="px-3 py-1.5 rounded-md bg-yellow-400 text-slate-900 text-[10px] font-black uppercase tracking-widest shadow-md shadow-yellow-200/50 flex items-center gap-2">
                <Zap className="w-3 h-3 fill-current" />
                Mandatory Travel Requirement
              </span>
              <span className="hidden sm:flex items-center gap-1 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                Verified Portal
              </span>
            </div>

            <div className="space-y-2 lg:space-y-3">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-[900] tracking-tight text-slate-900 leading-[1.1]">
                Entry into <span className="text-blue-600">Malaysia</span> <br />
                Made Simple.
              </h1>
              <p className="text-sm md:text-base text-slate-500 max-w-md leading-relaxed font-medium">
                The MDAC is a mandatory digital requirement for all international travelers. Complete your registration
                securely in minutes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-14 px-12 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-xl shadow-blue-200 transition-all active:scale-95"
              >
                <Link to="/apply" className="flex items-center justify-center gap-2">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-tight">
                <Globe className="w-4 h-4 text-blue-400" />
                Trusted Assistance
              </div>
            </div>
          </div>

          {/* ——— RIGHT COLUMN: Steps Card Floating Over Towers ——— */}
          <div className="relative pb-8 lg:pb-0">
            {/* The Glass Card */}
            <div className="relative bg-white/80 backdrop-blur-xl border border-white rounded-[2rem] p-6 lg:p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em]">Application Path</h3>
                <div className="h-1.5 w-10 bg-blue-100 rounded-full" />
              </div>

              {/* 2x2 Grid: Icon Above Text */}
              <div className="grid grid-cols-2 gap-4">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/60 border border-white shadow-sm transition-all hover:border-blue-100 group"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl ${step.bg} ${step.color} flex items-center justify-center mb-2 shadow-sm border border-white transition-transform group-hover:scale-110`}
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

            {/* Mobile Disclaimer (Always below card) */}
            <p className="block lg:hidden mt-4 text-[9px] text-center text-slate-400 leading-tight font-medium uppercase tracking-tighter opacity-60 px-4">
              Independent agency assisting with MDAC filings. <br /> Not affiliated with the Malaysian government.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Disclaimer */}
      <div className="hidden lg:block absolute bottom-6 left-12 opacity-40">
        <p className="text-[9px] text-slate-600 tracking-[0.2em] font-bold uppercase">
          Independent Concierge Agency • Secure Data • No Government Affiliation
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
