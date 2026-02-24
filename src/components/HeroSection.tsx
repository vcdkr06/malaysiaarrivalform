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
      {/* ——— BACKGROUND IMAGE ——— */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596422846543-75c6fc18a5ce?q=80&w=2070&auto=format&fit=crop"
          alt="Kuala Lumpur Malaysia"
          className="w-full h-full object-cover"
        />
        {/* Soft light overlay for readability */}
        <div className="absolute inset-0 bg-white/90 lg:bg-gradient-to-r lg:from-white lg:via-white/95 lg:to-white/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* ——— LEFT COLUMN: Content & CTA ——— */}
          <div className="flex flex-col -mt-4 lg:-mt-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold mb-4 w-fit bg-blue-600 text-white shadow-lg shadow-blue-200 uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              Official MDAC Assistance
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-5 tracking-tight text-slate-900">
              Streamline Your <br />
              Entry into <span className="text-blue-600">Malaysia</span>
            </h1>

            {/* Your Custom Text */}
            <p className="text-[14px] lg:text-[16px] leading-relaxed mb-6 max-w-lg text-slate-600 font-medium">
              The <span className="text-slate-900 font-bold">Malaysia Digital Arrival Card (MDAC)</span> is Malaysia's
              new and improved digital entry form — replacing the old paper-based card with a faster, more secure online
              system for travelers entering by air, land, or sea.
            </p>

            <div className="mb-6">
              <Button
                asChild
                size="lg"
                className="font-bold h-14 px-12 rounded-full transition-all duration-300 hover:scale-105 group text-lg w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-300/50 border-0"
              >
                <Link to="/apply" className="flex items-center justify-center gap-2">
                  Apply Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <p className="text-[10px] leading-relaxed max-w-sm text-slate-400 border-l-2 border-slate-200 pl-3">
              Disclaimer: We are an independent agency assisting travelers with their documentation. We are not legally
              affiliated with the Malaysian government.
            </p>
          </div>

          {/* ——— RIGHT COLUMN: Stepper Card ——— */}
          <div className="w-full">
            <div className="rounded-[2.5rem] p-6 lg:p-10 bg-white/80 backdrop-blur-xl border border-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)]">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-lg text-slate-900">How It Works</h3>
                <div className="h-2 w-12 bg-blue-100 rounded-full" />
              </div>

              <div className="relative space-y-7">
                {/* Connector Line */}
                <div className="absolute top-2 bottom-2 left-[23px] border-l-2 border-dashed border-blue-100" />

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
                    <div className="flex-1">
                      <h4 className="font-bold text-[14px] text-slate-900 leading-tight">{step.title}</h4>
                      <p className="text-[12px] text-slate-500 leading-snug mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Notice Box */}
              <div className="mt-8 flex items-start gap-3 p-4 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-[11px] text-slate-600 leading-normal">
                  <strong>Traveler Requirement:</strong> You must submit this application within <strong>3 days</strong>{" "}
                  of your arrival date in Malaysia.
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
