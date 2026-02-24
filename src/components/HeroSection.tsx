import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, CreditCard, UserCheck, MailCheck, Lightbulb, Zap, Globe } from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Submit Details",
      desc: "Provide your basic personal info and travel itinerary.",
      color: "#4B7BE5",
      bg: "#EEF4FF",
      border: "#DBEAFE",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Settle Payment",
      desc: "Complete your transaction through our reliable checkout.",
      color: "#2563EB",
      bg: "#EFF6FF",
      border: "#BFDBFE",
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Expert Review",
      desc: "Our specialists double-check everything to prevent errors.",
      color: "#E8883C",
      bg: "#FFF6ED",
      border: "#FEEFC3",
    },
    {
      icon: <MailCheck className="w-5 h-5" />,
      title: "Get Confirmation",
      desc: "Check your inbox for your approved digital arrival pass.",
      color: "#10B981",
      bg: "#ECFDF5",
      border: "#D1FAE5",
    },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center py-12 lg:py-0 overflow-hidden">
      {/* ——— BACKGROUND IMAGE LAYER ——— */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596422846543-75c6fc18a5ce?q=80&w=2070&auto=format&fit=crop"
          alt="Malaysia Skyline"
          className="w-full h-full object-cover"
        />
        {/* Light Overlay for readability */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px] lg:bg-gradient-to-r lg:from-white lg:via-white/90 lg:to-white/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
          {/* ——— LEFT COLUMN ——— */}
          <div className="flex flex-col w-full">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold mb-6 w-fit bg-blue-600 text-white shadow-lg shadow-blue-200">
              <Globe className="w-3.5 h-3.5" />
              Official MDAC Assistance
            </div>

            <p className="hidden md:block text-xs lg:text-sm font-bold uppercase tracking-[0.15em] mb-2 text-blue-600">
              MDAC Registration Portal
            </p>

            <h1 className="text-4xl md:text-[2.5rem] lg:text-[3.5rem] font-black leading-[1.1] mb-5 tracking-tight text-slate-900">
              Streamline Your Arrival <br className="hidden lg:block" />
              into <span className="text-blue-600">Malaysia</span>
            </h1>

            <p className="text-[15px] lg:text-[17px] leading-relaxed mb-8 max-w-lg text-slate-600">
              Skip the paperwork at immigration. All foreign visitors are now required to submit their digital arrival
              profile prior to reaching the border to ensure a smooth, hassle-free entry.
            </p>

            <div className="mb-8">
              <Button
                asChild
                size="lg"
                className="font-bold h-14 px-10 rounded-full transition-all duration-300 hover:scale-105 group text-base w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-200 border-0"
              >
                <Link to="/apply" className="flex items-center justify-center gap-2">
                  Apply Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <p className="text-[11px] leading-relaxed max-w-md pl-4 text-slate-400 border-l-2 border-slate-200">
              Disclaimer: We are an independent agency assisting travelers with their documentation. We are not legally
              affiliated with the Malaysian government.
            </p>
          </div>

          {/* ——— RIGHT COLUMN ——— */}
          <div className="w-full">
            <div className="rounded-[2.5rem] p-6 md:p-8 bg-white/90 backdrop-blur-md border border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-lg text-slate-900">How It Works</h3>
                <span className="text-[10px] px-3 py-1 rounded-full font-bold tracking-widest uppercase bg-slate-100 text-slate-500 border border-slate-200">
                  Quick Guide
                </span>
              </div>

              <div className="relative space-y-6">
                {/* Visual Line */}
                <div className="absolute top-2 bottom-2 left-[23px] border-l-2 border-dashed border-slate-100" />

                {steps.map((step, index) => (
                  <div key={index} className="relative z-10 flex gap-5 items-center group">
                    <div
                      className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm"
                      style={{
                        background: step.bg,
                        color: step.color,
                        border: `1px solid ${step.border}`,
                      }}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[15px] text-slate-900">{step.title}</h4>
                      <p className="text-[13px] leading-snug text-slate-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-start gap-3 mt-8 p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
                <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-[12px] leading-relaxed text-slate-600">
                  <span className="text-slate-900 font-bold">Important Note:</span> Travelers must submit this form
                  within <span className="text-blue-600 font-bold">3 days prior</span> to arrival.
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
