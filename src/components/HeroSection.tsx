import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, CreditCard, UserCheck, MailCheck, Lightbulb, Globe } from "lucide-react";

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
    <section className="relative min-h-[85vh] lg:h-[90vh] flex items-center overflow-hidden bg-white">
      {/* ——— BACKGROUND IMAGE LAYER ——— */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596422846543-75c6fc18a5ce?q=80&w=2070&auto=format&fit=crop"
          alt="Malaysia Skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90 lg:bg-gradient-to-r lg:from-white lg:via-white/95 lg:to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* ——— LEFT COLUMN (Higher CTA focus) ——— */}
          <div className="flex flex-col w-full -mt-4 lg:-mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[12px] font-bold mb-4 w-fit bg-blue-600 text-white">
              <Globe className="w-3.5 h-3.5" />
              Official MDAC Assistance
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 tracking-tight text-slate-900">
              Enter <span className="text-blue-600">Malaysia</span> <br />
              Hassle-Free.
            </h1>

            {/* Shortened Subheadline */}
            <p className="text-lg leading-relaxed mb-6 max-w-md text-slate-600 font-medium">
              Skip the immigration paperwork. Register your mandatory digital arrival card online in minutes.
            </p>

            <div className="mb-6">
              <Button
                asChild
                size="lg"
                className="font-bold h-14 px-12 rounded-full transition-all duration-300 hover:scale-105 group text-lg w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-200"
              >
                <Link to="/apply" className="flex items-center justify-center gap-2">
                  Apply Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <p className="text-[11px] leading-relaxed max-w-sm text-slate-400 opacity-80">
              Independent agency assisting with MDAC filings. Not affiliated with the Malaysian government.
            </p>
          </div>

          {/* ——— RIGHT COLUMN (Stepper Card) ——— */}
          <div className="w-full pb-8 lg:pb-0">
            <div className="rounded-3xl p-6 lg:p-8 bg-white shadow-2xl shadow-blue-900/5 border border-slate-100">
              <h3 className="font-bold text-lg text-slate-900 mb-6">Quick 4-Step Process</h3>

              <div className="relative space-y-6">
                {/* Dashed Line */}
                <div className="absolute top-2 bottom-2 left-[23px] border-l-2 border-dashed border-slate-100" />

                {steps.map((step, index) => (
                  <div key={index} className="relative z-10 flex gap-4 items-center group">
                    <div
                      className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center transition-transform group-hover:rotate-3 shadow-sm"
                      style={{
                        background: step.bg,
                        color: step.color,
                        border: `1px solid ${step.border}`,
                      }}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[14px] text-slate-900">{step.title}</h4>
                      <p className="text-[12px] text-slate-500 leading-tight">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Timing Note */}
              <div className="mt-8 flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <Lightbulb className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-[11px] text-slate-600 leading-snug">
                  <strong>Traveler Note:</strong> Apply within <strong>3 days</strong> of your arrival.
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
