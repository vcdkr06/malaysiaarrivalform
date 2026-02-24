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
  Lightbulb,
} from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-4 h-4" />,
      title: "Fill Details",
      desc: "Quick digital entry form.",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: <CreditCard className="w-4 h-4" />,
      title: "Secure Payment",
      desc: "Safe processing fee.",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      icon: <UserCheck className="w-4 h-4" />,
      title: "Expert Review",
      desc: "Accuracy verification.",
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      icon: <MailCheck className="w-4 h-4" />,
      title: "Instant Approval",
      desc: "Direct email delivery.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-white py-8 lg:py-0">
      {/* ——— BACKGROUND ——— */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596422846543-75c6fc18a5ce?q=80&w=2070&auto=format&fit=crop"
          alt="Malaysia Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40 lg:to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-8 lg:gap-12 items-center">
          {/* ——— LEFT SIDE ——— */}
          <div className="flex flex-col space-y-4 lg:space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold w-fit shadow-md uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              Official MDAC Assistance
            </div>

            <div className="space-y-2 lg:space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                Streamline Your Entry <br />
                Into <span className="text-blue-600">Malaysia</span>
              </h1>

              <p className="text-sm md:text-base text-slate-600 max-w-lg leading-relaxed font-medium">
                The <span className="text-slate-900">MDAC</span> is Malaysia's new mandatory digital entry system. We
                provide a premium concierge service for a fast, secure online arrival process.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-12 px-8 rounded-xl text-base font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-100 transition-all active:scale-95 border-0"
              >
                <Link to="/apply" className="flex items-center justify-center gap-2">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <div className="flex items-center gap-1.5 text-slate-500 font-bold text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                SECURE PROCESSING
              </div>
            </div>

            <div className="flex gap-6 pt-2 opacity-80">
              <div className="flex items-center gap-1.5 text-slate-600 text-[10px] font-bold uppercase tracking-widest">
                <Plane className="w-3.5 h-3.5 text-blue-500" /> All Borders
              </div>
              <div className="flex items-center gap-1.5 text-slate-600 text-[10px] font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" /> 24/7 Support
              </div>
            </div>
          </div>

          {/* ——— RIGHT SIDE ——— */}
          <div className="relative">
            <div className="relative bg-white/80 backdrop-blur-xl border border-white rounded-[1.5rem] p-6 lg:p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-base font-bold text-slate-900">How to Apply</h3>
                <span className="text-[9px] font-black uppercase bg-slate-100 text-slate-500 px-2 py-1 rounded border border-slate-200">
                  Quick Guide
                </span>
              </div>

              <div className="space-y-4">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-center">
                    <div
                      className={`w-9 h-9 rounded-lg ${step.bg} border border-white flex items-center justify-center shadow-sm flex-shrink-0 ${step.color}`}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-xs tracking-tight uppercase">{step.title}</h4>
                      <p className="text-slate-500 text-[11px] leading-tight">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-3 rounded-xl bg-blue-50/50 border border-blue-100 flex items-start gap-2.5">
                <Lightbulb className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-[10px] text-slate-600 leading-normal font-medium">
                  <strong>Traveler Note:</strong> Submit your MDAC application within <strong>3 days</strong> of your
                  arrival date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 text-center opacity-40">
        <p className="text-[8px] text-slate-600 tracking-[0.2em] font-bold uppercase">
          Independent Concierge Agency • Not Affiliated With Government
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
