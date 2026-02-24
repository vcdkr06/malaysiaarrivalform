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
  Clock,
  Check,
} from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-4 h-4" />,
      title: "Data Entry",
      desc: "Secure digital form.",
      color: "text-sky-600",
      bg: "bg-sky-50",
    },
    {
      icon: <CreditCard className="w-4 h-4" />,
      title: "Processing",
      desc: "Encrypted service fee.",
      color: "text-sky-600",
      bg: "bg-sky-50",
    },
    {
      icon: <UserCheck className="w-4 h-4" />,
      title: "Verification",
      desc: "Expert data audit.",
      color: "text-sky-600",
      bg: "bg-sky-50",
    },
    {
      icon: <MailCheck className="w-4 h-4" />,
      title: "Approval",
      desc: "PDF sent to email.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white">
      {/* ——— BACKGROUND IMAGE ——— */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596422846543-75c6fc18a5ce?q=80&w=2070&auto=format&fit=crop"
          alt="Malaysia Skyline"
          className="w-full h-full object-cover"
        />
        {/* Soft Premium Wash */}
        <div className="absolute inset-0 bg-white/95 lg:bg-gradient-to-r lg:from-white lg:via-white/98 lg:to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* ——— LEFT COLUMN ——— */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 rounded-full bg-sky-600 text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-sky-200">
                Official Assistance
              </div>
              <div className="flex items-center gap-1 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                <ShieldCheck className="w-3 h-3" />
                Secure Portal
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-[900] tracking-tight text-slate-900 leading-[1.1]">
                Entry into <span className="text-sky-500">Malaysia</span>, <br />
                Simplified.
              </h1>

              <p className="text-base text-slate-500 max-w-lg leading-relaxed font-medium">
                The <span className="text-slate-900">MDAC</span> is Malaysia’s mandatory digital arrival system. We
                provide a premium concierge service to ensure your application is processed{" "}
                <span className="text-sky-600 font-semibold">fast and error-free</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-14 px-10 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-lg shadow-xl shadow-sky-200 border-0 transition-transform active:scale-95"
              >
                <Link to="/apply" className="flex items-center justify-center gap-2">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>

              <div className="flex items-center gap-4">
                <div className="h-10 w-[1px] bg-slate-200 hidden sm:block" />
                <div className="flex flex-col">
                  <span className="text-slate-900 font-bold text-sm tracking-tight">2 Minute Completion</span>
                  <span className="text-slate-400 text-[11px] font-medium uppercase tracking-tighter">
                    Average completion time
                  </span>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 max-w-xs leading-tight font-medium uppercase tracking-tighter opacity-60">
              Independent agency assisting with MDAC filings. Not affiliated with the Malaysian government.
            </p>
          </div>

          {/* ——— RIGHT COLUMN: Glass Stepper ——— */}
          <div className="lg:col-span-5 relative">
            {/* Soft Ambient Glow under card */}
            <div className="absolute -inset-4 bg-sky-400/5 rounded-[3rem] blur-3xl" />

            <div className="relative bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)]">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Process Path</h3>
                <Clock className="w-4 h-4 text-slate-300" />
              </div>

              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-4 items-center group">
                    <div
                      className={`w-10 h-10 rounded-xl ${step.bg} flex items-center justify-center border border-white shadow-sm flex-shrink-0 transition-colors group-hover:bg-white group-hover:border-sky-100 ${step.color}`}
                    >
                      {step.icon}
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-[13px] font-bold text-slate-900 leading-none mb-1">{step.title}</h4>
                      <p className="text-[11px] text-slate-400 font-medium">{step.desc}</p>
                    </div>
                    {i === 3 && <Check className="ml-auto w-4 h-4 text-emerald-500" />}
                  </div>
                ))}
              </div>

              {/* Minimal Notice */}
              <div className="mt-8 pt-6 border-t border-slate-50">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1" />
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    <strong className="text-slate-900">Note:</strong> Submissions are required within{" "}
                    <span className="text-sky-600 font-bold">3 days</span> of your arrival.
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
