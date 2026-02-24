import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, CreditCard, UserCheck, MailCheck, Lightbulb, Zap } from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      number: "01",
      icon: <ClipboardList className="w-4 h-4" />,
      title: "Submit Details",
      desc: "Provide your basic personal info and travel itinerary.",
    },
    {
      number: "02",
      icon: <CreditCard className="w-4 h-4" />,
      title: "Settle Payment",
      desc: "Complete your transaction through our secure checkout.",
    },
    {
      number: "03",
      icon: <UserCheck className="w-4 h-4" />,
      title: "Expert Review",
      desc: "Our specialists verify your submission for accuracy.",
    },
    {
      number: "04",
      icon: <MailCheck className="w-4 h-4" />,
      title: "Receive Confirmation",
      desc: "Your approved digital arrival pass is sent via email.",
    },
  ];

  return (
    <section className="relative overflow-hidden min-h-[88vh] flex items-start bg-slate-50 pt-12 pb-8">
      {/* Enhanced Official Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#1E3A8A 1px, transparent 1px), linear-gradient(to right, #1E3A8A 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Soft blue radial glow */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT COLUMN */}
          <div className="flex flex-col">
            <div className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold mb-5 w-fit bg-blue-50 border border-blue-200 text-blue-800">
              <Zap className="w-3.5 h-3.5 text-blue-600" />
              Mandatory Travel Requirement
            </div>

            <p className="hidden md:block text-xs font-bold uppercase tracking-[0.15em] mb-2 text-slate-600">
              MDAC Registration Portal
            </p>

            <h1 className="text-3xl md:text-[2.4rem] lg:text-[2.8rem] font-extrabold leading-[1.15] mb-4 text-slate-900">
              Streamline Your Arrival
              <br className="hidden lg:block" /> into <span className="text-blue-700">Malaysia</span>
            </h1>

            <p className="text-[14px] md:text-[15px] leading-[1.7] mb-7 max-w-lg text-slate-600">
              All foreign visitors are required to submit their digital arrival profile prior to reaching the border to
              ensure a smooth, hassle-free entry process.
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

            <p className="mt-5 text-[10px] leading-relaxed max-w-md text-slate-400">
              Disclaimer: We are an independent agency assisting travelers with their documentation. We are not legally
              affiliated with the Malaysian government.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <div className="relative backdrop-blur-xl bg-white/70 border border-white/40 shadow-xl rounded-2xl p-6">
              {/* Glass shine overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

              <h3 className="relative font-semibold text-[16px] mb-6 text-slate-900">Apply in 4 Simple Steps</h3>

              {/* Stylized Step Grid */}
              <div className="relative grid grid-cols-2 gap-5">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="relative p-5 rounded-xl bg-white/60 border border-white/40 backdrop-blur-md shadow-sm hover:shadow-md transition-all"
                  >
                    {/* Step Number */}
                    <div className="absolute top-3 right-3 text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-lg bg-blue-700/90 text-white flex items-center justify-center mb-3 shadow-sm">
                      {step.icon}
                    </div>

                    <h4 className="font-semibold text-[13.5px] text-slate-900 mb-1">{step.title}</h4>

                    <p className="text-[12px] text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>

              {/* Notice */}
              <div className="relative mt-6 p-4 bg-blue-50/80 border border-blue-200 rounded-lg flex gap-3 backdrop-blur-sm">
                <Lightbulb className="w-4 h-4 text-blue-700 mt-0.5 flex-shrink-0" />
                <p className="text-[12px] text-slate-700 leading-relaxed">
                  <span className="font-semibold text-blue-700">Important:</span> Submit your form within{" "}
                  <span className="font-semibold">3 days prior</span> to your scheduled arrival date.
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
