import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ClipboardList,
  CreditCard,
  UserCheck,
  MailCheck,
  ShieldCheck,
  CheckCircle2,
  Globe,
} from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Data Submission",
      desc: "Fill in your travel details via our secure form.",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Service Fee",
      desc: "Transparent pricing with secure encryption.",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Verification",
      desc: "Our agents double-check for any errors.",
      color: "text-cyan-600",
      bg: "bg-cyan-50",
    },
    {
      icon: <MailCheck className="w-5 h-5" />,
      title: "Fast Delivery",
      desc: "Receive your approved MDAC via email.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-white">
      {/* ——— LIGHT BACKGROUND IMAGE ——— */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540939798-1c3905e32034?q=80&w=2070&auto=format&fit=crop"
          alt="Bright Malaysia Cityscape"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Soft White Radial Gradient to focus on content */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/95 to-blue-50/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl pt-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ——— LEFT CONTENT ——— */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              {/* Light Theme Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600 text-white text-[13px] font-bold shadow-lg shadow-blue-200">
                <Globe className="w-3.5 h-3.5" />
                Official MDAC Assistance
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-[900] text-slate-900 leading-[1.05] tracking-tight">
                Smooth Entry <br />
                Into <span className="text-blue-600">Malaysia</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 max-w-lg leading-relaxed">
                Avoid the immigration queues. We provide a simplified, fast-track registration service for the{" "}
                <strong>Malaysia Digital Arrival Card</strong>.
              </p>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-14 px-10 rounded-full text-base font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-200 transition-all hover:-translate-y-1 active:scale-95 group border-0"
              >
                <Link to="/apply" className="flex items-center gap-2">
                  Apply Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <div className="flex items-center gap-3 text-slate-600">
                <div className="flex -space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
                <span className="text-sm font-semibold">Verified & Secure Processing</span>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 flex items-center gap-8 border-t border-slate-100">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-800 tracking-tighter">100%</span>
                <span className="text-[10px] uppercase font-bold text-slate-400">Success Rate</span>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-800 tracking-tighter">24hr</span>
                <span className="text-[10px] uppercase font-bold text-slate-400">Avg. Support</span>
              </div>
            </div>
          </div>

          {/* ——— RIGHT STEPPER CARD ——— */}
          <div className="lg:col-span-5 relative">
            {/* Soft Ambient Shadow Decoration */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-[100px] opacity-60" />

            <div className="relative bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900">Get Ready for Malaysia</h3>
                <p className="text-sm text-slate-400">Simplified application process</p>
              </div>

              <div className="space-y-6">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center transition-transform group-hover:scale-110`}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{step.title}</h4>
                      <p className="text-xs text-slate-500 leading-snug">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Deadline Callout */}
              <div className="mt-8 p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <p className="text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                  Requirement: Apply within 3 days of arrival
                </p>
              </div>
            </div>

            {/* Floating Review Badge */}
            <div className="absolute -bottom-4 -left-6 bg-white shadow-lg border border-slate-50 rounded-2xl p-4 flex items-center gap-3 animate-bounce-slow">
              <div className="bg-emerald-50 p-2 rounded-full">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="text-[11px]">
                <p className="font-bold text-slate-900">GDPR Compliant</p>
                <p className="text-slate-400 italic">Your data is safe</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="absolute bottom-6 w-full text-center">
        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">
          Professional Assistance Service • Secure Checkout • Independent Agency
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
