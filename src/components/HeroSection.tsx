import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ClipboardList,
  CreditCard,
  UserCheck,
  MailCheck,
  ShieldCheck,
  Plane,
  Sparkles,
  Globe,
} from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Fill Information",
      desc: "Complete our simplified digital form.",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Secure Checkout",
      desc: "Safe processing for your service fee.",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Expert Verification",
      desc: "We review every detail for accuracy.",
      color: "#b45309", // Amber-700
      bg: "bg-amber-50",
    },
    {
      icon: <MailCheck className="w-5 h-5" />,
      title: "Instant Approval",
      desc: "Your MDAC arrives directly via email.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      {/* ——— BACKGROUND IMAGE LAYER ——— */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596422846543-75c6fc18a5ce?q=80&w=2070&auto=format&fit=crop"
          alt="Kuala Lumpur Malaysia Skyline"
          className="w-full h-full object-cover"
        />
        {/* Light Mode Overlay: White to Transparent Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20 lg:to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl pt-20 pb-12">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          {/* ——— LEFT SIDE: Content ——— */}
          <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="space-y-6">
              {/* Light Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-bold w-fit shadow-xl shadow-blue-200">
                <Globe className="w-4 h-4" />
                Official MDAC Assistance
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.1]">
                Your Gateway to <br />
                <span className="text-blue-600 italic font-serif">Malaysia</span> <br />
                Made Simple.
              </h1>

              <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed">
                The <span className="text-slate-900 font-semibold">Malaysia Digital Arrival Card (MDAC)</span> is the
                new mandatory entry system. We provide a premium concierge service to ensure your application is
                processed quickly and without errors.
              </p>
            </div>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-16 px-12 rounded-2xl text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-2xl shadow-blue-200 transition-all hover:scale-[1.02] active:scale-95 group border-0"
              >
                <Link to="/apply" className="flex items-center justify-center gap-3">
                  Apply Now
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <div className="flex items-center gap-2 text-slate-500 font-semibold text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                Secure Processing
              </div>
            </div>

            {/* Trust Markers */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 opacity-80 border-t border-slate-200">
              <div className="flex items-center gap-2 text-slate-600 text-xs font-bold uppercase tracking-widest">
                <Plane className="w-4 h-4 text-blue-500" /> Land, Air, or Sea
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-amber-500" /> 24/7 Support
              </div>
            </div>
          </div>

          {/* ——— RIGHT SIDE: Light Glass Card ——— */}
          <div className="relative group animate-in fade-in slide-in-from-right duration-1000">
            {/* Subtle Shadow Decoration */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-[2.5rem] blur opacity-50 transition duration-1000"></div>

            <div className="relative bg-white/70 backdrop-blur-2xl border border-white rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">How to Apply</h3>
                  <p className="text-xs text-slate-500 font-medium">Avg. completion: 3 minutes</p>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] bg-slate-100 text-slate-500 px-3 py-1.5 rounded-lg border border-slate-200">
                  Quick Guide
                </span>
              </div>

              <div className="space-y-6">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-5 group/item">
                    <div className="relative">
                      <div
                        className={`w-12 h-12 rounded-2xl ${step.bg} border border-white flex items-center justify-center transition-all duration-300 group-hover/item:scale-110 shadow-sm ${step.color}`}
                      >
                        {step.icon}
                      </div>
                      {idx !== steps.length - 1 && (
                        <div className="absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-slate-100" />
                      )}
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-slate-900 font-bold text-base">{step.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Requirement Info Box */}
              <div className="mt-8 p-5 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-start gap-4">
                <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                  <strong>Important:</strong> Travelers must submit their MDAC within <strong>3 days</strong> of their
                  arrival date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Disclaimer */}
      <div className="absolute bottom-6 left-0 right-0 text-center opacity-40 px-6">
        <p className="text-[9px] text-slate-600 tracking-[0.15em] font-bold uppercase">
          Independent Concierge Agency • Secure Data • Not Affiliated With Government
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

// Helper Icon if missing from lucide
const Lightbulb = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);
