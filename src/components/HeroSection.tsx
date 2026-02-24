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
  Navigation,
  CheckCircle,
} from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-5 h-5 text-sky-600" />,
      title: "Submit Details",
      desc: "Fill in your travel info.",
    },
    {
      icon: <CreditCard className="w-5 h-5 text-sky-600" />,
      title: "Processing",
      desc: "Secure service payment.",
    },
    {
      icon: <UserCheck className="w-5 h-5 text-sky-600" />,
      title: "Verification",
      desc: "Expert accuracy audit.",
    },
    {
      icon: <MailCheck className="w-5 h-5 text-emerald-600" />,
      title: "Approval",
      desc: "Pass sent via email.",
    },
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white">
      {/* ——— GRAPHIC BACKGROUND ——— */}
      <div className="absolute inset-0 z-0 bg-[#f8fafc]">
        {/* Abstract "Travel Path" SVG Graphic */}
        <svg
          className="absolute right-0 top-0 h-full w-1/2 text-sky-100/50"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M400 0C400 0 300 50 200 200C100 350 0 400 0 400"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="10 10"
          />
          <circle cx="200" cy="200" r="100" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
          <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
        </svg>

        {/* Soft corner glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* ——— LEFT COLUMN: Content & CTA ——— */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest shadow-xl">
                <Globe className="w-3 h-3 text-sky-400" />
                MDAC Portal
              </div>
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                Secure Registration
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-[900] tracking-tight text-slate-900 leading-[1.1]">
                Entry into <span className="text-sky-600">Malaysia</span>, <br />
                Simplified.
              </h1>

              <p className="text-base md:text-lg text-slate-500 max-w-xl leading-relaxed font-medium">
                The <span className="text-slate-900 font-bold">MDAC</span> is Malaysia’s new digital entry system,
                replacing paper forms with a <span className="text-sky-600">secure online process</span> for all
                travelers arriving by air, land, or sea.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-14 px-12 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-lg shadow-2xl shadow-sky-200 transition-all active:scale-95 border-0"
              >
                <Link to="/apply" className="flex items-center justify-center gap-3">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>

              <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-100 rounded-xl shadow-sm">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-slate-600 font-bold text-xs uppercase tracking-tight">Verified System</span>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 max-w-sm leading-tight font-bold uppercase tracking-widest opacity-60">
              Professional assistance service for MDAC filings. We are not the Malaysian government.
            </p>
          </div>

          {/* ——— RIGHT COLUMN: Floating Card ——— */}
          <div className="lg:col-span-5 relative">
            {/* Background Graphic Shadow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-sky-400/20 to-indigo-400/20 rounded-[2.5rem] blur-2xl" />

            <div className="relative bg-white border border-slate-50 rounded-[2rem] p-8 lg:p-10 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)]">
              <div className="flex items-center justify-between mb-8 border-b border-slate-50 pb-4">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em]">Application Process</h3>
                <Navigation className="w-4 h-4 text-sky-400 rotate-45" />
              </div>

              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-4 items-center group">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 transition-all group-hover:bg-sky-50 group-hover:border-sky-100">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-slate-900 leading-none mb-1">{step.title}</h4>
                      <p className="text-[11px] text-slate-400 font-medium">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Requirement Summary */}
              <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                  <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
                    Timing Requirement
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                  Travelers must submit their application <span className="text-sky-600 font-bold">within 3 days</span>{" "}
                  of their scheduled arrival in Malaysia.
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
