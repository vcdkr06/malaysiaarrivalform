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
      title: "Submit Details",
      desc: "Fast digital form for your itinerary.",
      color: "#0369a1",
      bg: "#f0f9ff",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Secure Payment",
      desc: "Safe & encrypted service processing.",
      color: "#0369a1",
      bg: "#f0f9ff",
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Expert Review",
      desc: "We verify every detail for accuracy.",
      color: "#b45309",
      bg: "#fffbeb",
    },
    {
      icon: <MailCheck className="w-5 h-5" />,
      title: "Get MDAC",
      desc: "Digital pass delivered to your inbox.",
      color: "#047857",
      bg: "#f0fdf4",
    },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#f8fafc]">
      {/* ——— PREMIUM BACKGROUND LAYER ——— */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596422846543-75c6fc18a5ce?q=80&w=2070&auto=format&fit=crop"
          alt="Malaysia Skyline"
          className="w-full h-full object-cover"
        />
        {/* Soft Light Blue Wash */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-sky-100/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
          {/* ——— LEFT COLUMN: Premium Copy ——— */}
          <div className="flex flex-col space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-[11px] font-bold uppercase tracking-[0.1em] w-fit shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              Official Entry Assistance
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
              Arrival Into <br />
              <span className="text-sky-600">Malaysia</span>, <br />
              Simplified.
            </h1>

            {/* Rephrased & Shortened Text to prevent cutting */}
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-lg">
              The <span className="font-bold text-slate-900">MDAC</span> is Malaysia’s new mandatory digital entry
              system. We replace slow paper forms with a{" "}
              <span className="text-sky-600 font-semibold">fast, secure online process</span> for arrival by air, land,
              or sea.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-14 px-10 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-lg shadow-lg shadow-sky-200 transition-all hover:-translate-y-1 active:scale-95 border-0"
              >
                <Link to="/apply" className="flex items-center justify-center gap-2">
                  Apply Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <div className="flex items-center gap-2 text-slate-400 text-xs font-medium italic">
                <Globe className="w-4 h-4 text-sky-400" />
                Trusted by 50k+ Travelers
              </div>
            </div>

            <p className="text-[10px] text-slate-400 max-w-xs leading-tight uppercase tracking-tighter opacity-70">
              Independent agency assisting with MDAC registration. We are not affiliated with the government.
            </p>
          </div>

          {/* ——— RIGHT COLUMN: Floating Glass Card ——— */}
          <div className="relative">
            {/* Soft Ambient Light Glow */}
            <div className="absolute -inset-4 bg-sky-400/10 rounded-[3rem] blur-3xl" />

            <div className="relative bg-white/80 backdrop-blur-xl border border-white rounded-[2.5rem] p-8 lg:p-10 shadow-[0_20px_50px_rgba(186,230,253,0.3)]">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-bold text-slate-800">Registration Path</h3>
                <div className="px-2 py-1 rounded bg-sky-100 text-[10px] font-bold text-sky-700 uppercase">
                  Step-by-Step
                </div>
              </div>

              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-4 items-center group">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 shadow-sm border border-white"
                      style={{ backgroundColor: step.bg, color: step.color }}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-none mb-1">{step.title}</h4>
                      <p className="text-xs text-slate-500 leading-tight">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Requirement Alert */}
              <div className="mt-10 flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-br from-sky-600 to-blue-700 text-white shadow-md shadow-sky-200">
                <Lightbulb className="w-5 h-5 text-sky-200 mt-0.5 flex-shrink-0" />
                <p className="text-[11px] leading-snug font-medium">
                  <strong>Traveler Note:</strong> You must submit your MDAC within <strong>3 days</strong> of arrival.
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
