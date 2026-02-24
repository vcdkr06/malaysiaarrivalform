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
    <section className="relative overflow-hidden bg-white pt-16 pb-20">
      {/* Soft Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={petronasBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.06]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT COLUMN */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6 bg-primary/5 border border-primary/10 text-primary">
              <Zap className="w-4 h-4" />
              Mandatory Travel Requirement
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
              Digital Arrival Registration for <span className="text-primary">Malaysia</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mb-8 leading-relaxed">
              Foreign visitors must submit their arrival information prior to entry to ensure smooth border clearance
              and faster immigration processing.
            </p>

            <Button
              asChild
              size="lg"
              className="h-14 px-10 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all"
            >
              <Link to="/apply" className="flex items-center gap-2">
                Begin Application
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <p className="mt-6 text-xs text-gray-500 max-w-md">
              We are an independent agency assisting travelers with documentation processing. We are not affiliated with
              the Malaysian government.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-lg text-gray-900 mb-8">4-Step Application Process</h3>

              <div className="grid sm:grid-cols-2 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      {step.icon}
                    </div>

                    <div>
                      <div className="text-xs font-semibold text-primary tracking-wide mb-1">STEP {index + 1}</div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-gray-200 flex gap-3">
                <Lightbulb className="w-5 h-5 text-primary mt-0.5" />
                <p className="text-sm text-gray-600">
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
