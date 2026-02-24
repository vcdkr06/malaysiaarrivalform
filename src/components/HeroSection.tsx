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
    <section className="relative overflow-hidden min-h-[88vh] bg-slate-50 pt-6 md:pt-12 pb-10">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(#1E3A8A 1px, transparent 1px), linear-gradient(to right, #1E3A8A 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT COLUMN */}
          <div className="flex flex-col">
            <div className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold mb-5 w-fit bg-blue-50 border border-blue-200 text-blue-800">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              Mandatory Travel Requirement
            </div>

            <p className="hidden md:block text-xs font-bold uppercase tracking-[0.15em] mb-2 text-slate-600">
              MDAC Registration Portal
            </p>

            <h1 className="text-2xl md:text-[2.6rem] font-extrabold leading-[1.15] mb-3 md:mb-4 text-slate-900">
              Digital Arrival Registration for <span className="text-blue-700">Malaysia</span>
            </h1>

            <p className="text-[14px] md:text-[15px] leading-[1.6] mb-4 md:mb-6 max-w-lg text-slate-600">
              Foreign visitors must submit their arrival information prior to entry to ensure smooth border clearance.
            </p>

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="font-semibold h-12 px-8 rounded-md bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300 shadow-sm w-full md:w-auto mb-5 md:mb-6"
            >
              <Link to="/apply" className="flex items-center justify-center gap-2 h-12">
                Begin Application
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            {/* Disclaimer (Tablet + Desktop) */}
            <p className="hidden md:block text-[10px] leading-relaxed text-slate-400 max-w-md">
              Disclaimer: We are an independent agency assisting travelers with documentation processing. We are not
              affiliated with the Malaysian government.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col">
            {/* Stepper */}
            <div className="bg-white/70 backdrop-blur-lg border border-slate-200 rounded-xl p-4 md:p-6 mt-4 md:mt-8 lg:mt-0">
              <h3 className="font-semibold text-[14px] md:text-[15px] mb-4 md:mb-6 text-slate-900">
                4-Step Application Process
              </h3>

              <div className="relative">
                <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-slate-300" />

                <div className="flex flex-col lg:flex-row lg:justify-between gap-5 md:gap-8 lg:gap-4">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="relative flex lg:flex-col items-start lg:items-center text-left lg:text-center lg:w-1/4"
                    >
                      <div className="relative z-10 w-10 h-10 md:w-11 md:h-11 rounded-full bg-blue-700 text-white flex items-center justify-center shadow-sm">
                        {step.icon}
                      </div>

                      <div className="ml-3 lg:ml-0 lg:mt-4">
                        <div className="text-[10px] font-semibold text-blue-700 tracking-wide mb-0.5">
                          STEP {index + 1}
                        </div>
                        <h4 className="font-semibold text-[13px] text-slate-900 mb-0.5">{step.title}</h4>
                        <p className="text-[11.5px] text-slate-600 leading-snug">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 md:mt-6 pt-4 md:pt-5 border-t border-slate-200 flex gap-3">
                <Lightbulb className="w-4 h-4 text-blue-700 mt-0.5 flex-shrink-0" />
                <p className="text-[11.5px] md:text-[12px] text-slate-700 leading-relaxed">
                  Submit at least <span className="font-semibold text-blue-700">3 days before arrival</span>.
                </p>
              </div>
            </div>

            {/* Disclaimer (Mobile Only) */}
            <p className="block md:hidden mt-6 text-[10px] leading-relaxed text-slate-400">
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
