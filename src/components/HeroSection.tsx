import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, CreditCard, UserCheck, MailCheck, Lightbulb, Zap } from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-4 h-4" />,
      title: "Enter Details",
      desc: "Provide required travel information.",
    },
    {
      icon: <CreditCard className="w-4 h-4" />,
      title: "Payment",
      desc: "Secure online transaction.",
    },
    {
      icon: <UserCheck className="w-4 h-4" />,
      title: "Review",
      desc: "Application verification process.",
    },
    {
      icon: <MailCheck className="w-4 h-4" />,
      title: "Confirmation",
      desc: "Receive digital approval via email.",
    },
  ];

  return (
    <section className="relative overflow-hidden min-h-[88vh] flex items-start bg-slate-50 pt-8 md:pt-12 pb-8">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#1E3A8A 1px, transparent 1px), linear-gradient(to right, #1E3A8A 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT COLUMN */}
          <div className="flex flex-col order-2 md:order-1">
            <div className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold mb-5 w-fit bg-blue-50 border border-blue-200 text-blue-800">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              Mandatory Travel Requirement
            </div>

            <p className="hidden md:block text-xs font-bold uppercase tracking-[0.15em] mb-2 text-slate-600">
              MDAC Registration Portal
            </p>

            <h1 className="text-2xl md:text-[2.6rem] font-extrabold leading-[1.15] mb-4 text-slate-900">
              Digital Arrival Registration for <span className="text-blue-700">Malaysia</span>
            </h1>

            <p className="text-[14px] md:text-[15px] leading-[1.7] mb-6 max-w-lg text-slate-600">
              Foreign visitors are required to submit their arrival information prior to entry to ensure smooth border
              clearance.
            </p>

            <Button
              asChild
              size="lg"
              className="font-semibold h-12 px-8 rounded-md bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300 shadow-sm w-full md:w-auto"
            >
              <Link to="/apply" className="flex items-center justify-center gap-2 h-12">
                Begin Application
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            {/* Disclaimer (Moved Down on Mobile) */}
            <p className="hidden md:block mt-6 text-[10px] leading-relaxed max-w-md text-slate-400">
              Disclaimer: We are an independent agency assisting travelers with documentation processing. We are not
              affiliated with the Malaysian government.
            </p>
          </div>

          {/* RIGHT COLUMN – Stepper FIRST on Mobile */}
          <div className="order-1 md:order-2">
            <div className="bg-white/70 backdrop-blur-lg border border-slate-200 rounded-xl p-5 md:p-6">
              <h3 className="font-semibold text-[15px] mb-6 text-slate-900">4-Step Application Process</h3>

              <div className="relative">
                {/* Horizontal Connector (Desktop Only) */}
                <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-slate-300" />

                <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-4">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="relative flex md:flex-col items-start md:items-center text-left md:text-center md:w-1/4"
                    >
                      {/* Icon */}
                      <div className="relative z-10 w-11 h-11 rounded-full bg-blue-700 text-white flex items-center justify-center shadow-sm">
                        {step.icon}
                      </div>

                      {/* Text */}
                      <div className="ml-4 md:ml-0 md:mt-4">
                        <div className="text-[11px] font-semibold text-blue-700 tracking-wide mb-1">
                          STEP {index + 1}
                        </div>
                        <h4 className="font-semibold text-[13.5px] text-slate-900 mb-0.5">{step.title}</h4>
                        <p className="text-[12px] text-slate-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notice */}
              <div className="mt-6 pt-5 border-t border-slate-200 flex gap-3">
                <Lightbulb className="w-4 h-4 text-blue-700 mt-0.5 flex-shrink-0" />
                <p className="text-[12px] text-slate-700 leading-relaxed">
                  Submit at least <span className="font-semibold text-blue-700">3 days before arrival</span>.
                </p>
              </div>
            </div>

            {/* Disclaimer on Mobile (Moved Down) */}
            <p className="md:hidden mt-6 text-[10px] leading-relaxed text-slate-400">
              Disclaimer: We are an independent agency assisting travelers with documentation processing. We are not
              affiliated with the Malaysian government.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
