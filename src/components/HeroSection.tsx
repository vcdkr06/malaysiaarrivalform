import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ClipboardList,
  CreditCard,
  UserCheck,
  MailCheck,
  Lightbulb,
  Globe,
  ShieldCheck,
} from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Details",
      desc: "Fast digital form entry.",
      color: "#0284c7",
      bg: "#f0f9ff",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Payment",
      desc: "Secure service processing.",
      color: "#0284c7",
      bg: "#f0f9ff",
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Review",
      desc: "Expert accuracy check.",
      color: "#d97706",
      bg: "#fffbeb",
    },
    {
      icon: <MailCheck className="w-5 h-5" />,
      title: "Delivery",
      desc: "Digital pass via email.",
      color: "#059669",
      bg: "#f0fdf4",
    },
  ];

  return (
    <section className="relative min-h-[85vh] lg:h-[88vh] flex items-center overflow-hidden bg-[#fcfdff]">
      {/* ——— BACKGROUND IMAGE ——— */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596422846543-75c6fc18a5ce?q=80&w=2070&auto=format&fit=crop"
          alt="Malaysia Skyline"
          className="w-full h-full object-cover"
        />
        {/* Soft Azure-White Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/98 via-white/95 to-sky-50/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* ——— LEFT COLUMN ——— */}
          <div className="lg:col-span-7 flex flex-col -mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100/50 border border-sky-200 text-sky-700 text-[11px] font-bold uppercase tracking-widest w-fit mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              Official Entry Assistance
            </div>

            {/* Smaller, cleaner headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5">
              Your Digital Gateway <br />
              to <span className="text-sky-600">Malaysia</span>
            </h1>

            {/* Rephrased & Balanced Text */}
            <p className="text-base text-slate-600 leading-relaxed max-w-lg mb-8">
              The <span className="font-semibold text-slate-900">MDAC</span> is Malaysia’s modern, paperless entry
              system. Replacing old paper cards, this secure digital platform ensures a faster arrival process by{" "}
              <span className="text-sky-600 font-medium">air, land, or sea.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-14 px-10 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-lg shadow-lg shadow-sky-100 transition-all hover:translate-y-[-2px] border-0"
              >
                <Link to="/apply" className="flex items-center justify-center gap-2">
                  Apply Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                <Globe className="w-4 h-4 text-sky-400" />
                Trusted Registration Service
              </div>
            </div>
          </div>

          {/* ——— RIGHT COLUMN: Stepper Card ——— */}
          <div className="lg:col-span-5">
            <div className="relative bg-white/70 backdrop-blur-xl border border-white rounded-[2rem] p-8 shadow-[0_15px_40px_rgba(186,230,253,0.2)]">
              <h3 className="text-base font-bold text-slate-800 mb-6 flex items-center gap-2">
                <div className="w-1.5 h-4 bg-sky-500 rounded-full" />
                How to Get Started
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm border border-white flex-shrink-0"
                      style={{ backgroundColor: step.bg, color: step.color }}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                      <p className="text-[11px] text-slate-500 leading-tight">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Requirement Tip */}
              <div className="mt-8 p-4 rounded-xl bg-sky-50/80 border border-sky-100 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" />
                <p className="text-[11px] leading-snug text-sky-900">
                  <strong>Traveler Note:</strong> Submit your MDAC within <strong>3 days</strong> of your arrival date
                  for it to be valid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Footer Disclaimer */}
      <div className="absolute bottom-6 w-full px-6 text-center opacity-40">
        <p className="text-[9px] text-slate-500 uppercase tracking-widest">
          Independent Concierge Agency • Secure Processing • Professional Review
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
