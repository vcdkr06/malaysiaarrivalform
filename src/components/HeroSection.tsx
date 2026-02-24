import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, CreditCard, UserCheck, MailCheck, Lightbulb, Zap } from "lucide-react";
import petronasBg from "@/assets/kuala-lumpur-petronas.png";

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
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50 pt-10 pb-12">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Soft blue radial accent */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-3xl" />

        {/* More visible Petronas image */}
        <img
          src={petronasBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.18]"
        />

        {/* Soft white overlay for readability */}
        <div className="absolute inset-0 bg-white/60" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT COLUMN */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-primary/5 border border-primary/10 text-primary">
              <Zap className="w-3.5 h-3.5" />
              Mandatory Travel Requirement
            </div>

            <h1 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900 mb-4">
              Digital Arrival Registration for <span className="text-primary">Malaysia</span>
            </h1>

            <p className="text-sm md:text-base text-gray-600 max-w-md mb-6 leading-relaxed">
              Foreign visitors must submit their arrival information prior to entry to ensure smooth border clearance.
            </p>

            <Button asChild size="lg" className="h-12 px-8 rounded-md font-semibold shadow-sm hover:shadow transition">
              <Link to="/apply" className="flex items-center gap-2">
                Begin Application
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <p className="mt-4 text-[11px] text-gray-500 max-w-sm">
              Independent documentation assistance service. Not affiliated with the Malaysian government.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-sm text-gray-900 mb-6">4-Step Application Process</h3>

              <div className="relative">
                <div className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-gray-200" />

                <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="relative flex lg:flex-col items-start lg:items-center text-left lg:text-center lg:w-1/4"
                    >
                      <div className="relative z-10 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-sm">
                        {step.icon}
                      </div>

                      <div className="ml-3 lg:ml-0 lg:mt-3">
                        <div className="text-[10px] font-semibold text-primary tracking-wide mb-0.5">
                          STEP {index + 1}
                        </div>
                        <h4 className="font-semibold text-sm text-gray-900 mb-0.5">{step.title}</h4>
                        <p className="text-xs text-gray-600 leading-snug">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 flex gap-2">
                <Lightbulb className="w-4 h-4 text-primary mt-0.5" />
                <p className="text-xs text-gray-600">
                  Submit at least <span className="font-semibold text-primary">3 days before arrival</span>.
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
