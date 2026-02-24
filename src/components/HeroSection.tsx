import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, CreditCard, UserCheck, MailCheck, Lightbulb, Zap } from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-4 h-4" />,
      title: "Submit Details",
      desc: "Provide your basic personal info and travel itinerary.",
    },
    {
      icon: <CreditCard className="w-4 h-4" />,
      title: "Settle Payment",
      desc: "Complete your transaction through our reliable checkout.",
    },
    {
      icon: <UserCheck className="w-4 h-4" />,
      title: "Expert Review",
      desc: "Our specialists double-check everything to prevent errors.",
    },
    {
      icon: <MailCheck className="w-4 h-4" />,
      title: "Get Confirmation",
      desc: "Check your inbox for your approved digital arrival pass.",
    },
  ];

  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center bg-slate-50 py-8">
      {/* Subtle Official Background Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#1E3A8A 1px, transparent 1px), linear-gradient(to right, #1E3A8A 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN */}
          <div className="flex flex-col">
            <div className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold mb-6 w-fit bg-blue-50 border border-blue-200 text-blue-800">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              Mandatory Travel Requirement
            </div>

            <p className="hidden md:block text-xs font-bold uppercase tracking-[0.15em] mb-2 text-slate-600">
              MDAC Registration Portal
            </p>

            <h1 className="text-3xl md:text-[2.5rem] lg:text-[3rem] font-extrabold leading-[1.15] mb-4 text-slate-900">
              Streamline Your Arrival
              <br className="hidden lg:block" /> into <span className="text-blue-700">Malaysia</span>
            </h1>

            <p className="text-[14px] md:text-[15px] leading-[1.7] mb-8 max-w-lg text-slate-600">
              Skip the paperwork at immigration. All foreign visitors are now required to submit their digital arrival
              profile prior to reaching the border to ensure a smooth, hassle-free entry.
            </p>

            <Button
              asChild
              size="lg"
              className="font-semibold h-12 px-8 rounded-md bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300 shadow-md w-full md:w-auto"
            >
              <Link to="/apply" className="flex items-center justify-center gap-2 h-12">
                Start Application
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <p className="mt-6 text-[10px] leading-relaxed max-w-md text-slate-400">
              Disclaimer: We are an independent agency assisting travelers with their documentation. We are not legally
              affiliated with the Malaysian government.
            </p>
          </div>

          {/* RIGHT COLUMN – Creative but Official Layout */}
          <div>
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
              <h3 className="font-semibold text-[16px] mb-6 text-slate-900 border-b border-slate-200 pb-3">
                Application Process
              </h3>

              {/* 2x2 Structured Grid */}
              <div className="grid grid-cols-2 gap-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col gap-3 p-4 border border-slate-200 rounded-lg bg-slate-50">
                    <div className="w-9 h-9 rounded-md bg-blue-700 text-white flex items-center justify-center">
                      {step.icon}
                    </div>

                    <div>
                      <h4 className="font-semibold text-[13.5px] text-slate-900 mb-1">{step.title}</h4>
                      <p className="text-[12px] text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Notice */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md flex gap-3">
                <Lightbulb className="w-4 h-4 text-blue-700 mt-0.5 flex-shrink-0" />
                <p className="text-[12px] text-slate-700 leading-relaxed">
                  <span className="font-semibold text-blue-700">Important:</span> Travelers must submit this form within{" "}
                  <span className="font-semibold">3 days prior</span> to their scheduled arrival date.
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
