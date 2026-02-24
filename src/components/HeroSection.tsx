import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import globeBg from "@/assets/hero-bg-globe.jpg";

const HeroSection = () => {
  const steps = [
    {
      title: "Enter Details",
      desc: "Provide your travel and passport information accurately as shown on your documents to ensure valid processing.",
    },
    {
      title: "Payment",
      desc: "Securely complete the service fee transaction using our encrypted gateway to initiate your application review.",
    },
    {
      title: "Review",
      desc: "Our specialists verify your submission for compliance with current entry requirements to prevent clearance delays.",
    },
    {
      title: "Confirmation",
      desc: "Receive your official digital arrival document via email, ready for presentation at the border upon your entry.",
    },
  ];

  return (
    <section className="relative pt-10 pb-16 border-b border-slate-300 bg-white overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0 z-0">
        {/* Stronger Gradient Mask: Fades from 60% white to 10% to let the globe shine on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-transparent z-10" />

        <img
          src={globeBg}
          alt="Globe and Airplane Travel Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80 -scale-x-100"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start text-left">
          {/* LEFT COLUMN - Messaging */}
          <div className="lg:w-1/2 flex flex-col gap-6 lg:mt-2 text-left items-start">
            {/* Mandatory Notice - SOLID BG */}
            <div className="md:block border-l-4 border-blue-600 bg-slate-100 p-3 rounded w-fit shadow-md">
              <p className="text-sm font-bold text-slate-900 uppercase tracking-wide">Mandatory Travel Requirement</p>
            </div>

            {/* Content "Safe Zone" - White Glass Effect for Text Readability */}
            <div className="space-y-4 text-left bg-white/40 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white/20">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight drop-shadow-md">
                Digital Arrival Registration for <span className="text-blue-700">Malaysia</span>
              </h1>

              <p className="text-base md:text-lg text-slate-800 max-w-md leading-relaxed font-medium">
                Foreign visitors must submit their arrival information prior to entry to ensure smooth border clearance
                and immigration processing.
              </p>
            </div>

            {/* Desktop CTA & One-Line Disclaimer */}
            <div className="hidden lg:flex flex-col gap-6 pt-4 items-start">
              <Button
                asChild
                size="lg"
                className="h-14 px-10 rounded-full font-bold bg-blue-700 hover:bg-blue-800 text-white shadow-xl transition-all text-lg w-fit"
              >
                <Link to="/apply">Begin Application</Link>
              </Button>

              {/* Solid Orange One-Line Disclaimer */}
              <div className="bg-[#FFF8E7] border border-orange-200 px-4 py-2 rounded-md shadow-sm">
                <p className="text-[11px] md:text-xs text-orange-900 font-bold whitespace-nowrap">
                  Independent documentation assistance service. Not affiliated with the Malaysian government.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Application Process Card */}
          <div className="lg:w-1/2 w-full flex flex-col items-start">
            {/* Reduced Transparency (bg-white/80) - Ensures text is perfect regardless of image behind it */}
            <div className="bg-white/80 backdrop-blur-xl border border-white/50 border-t-4 border-t-blue-700 shadow-2xl p-6 md:p-8 w-full rounded-2xl text-left">
              <div className="border-b border-slate-900/10 pb-4 mb-6">
                <h2 className="font-bold text-xl text-slate-900">Application Process</h2>
                <p className="text-sm text-slate-800 mt-1 font-semibold italic">
                  Follow these steps to secure your travel authorization.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white flex items-center justify-center font-bold text-sm mt-0.5 rounded-full shadow-md">
                      {index + 1}
                    </div>

                    <div className="text-left">
                      <h3 className="font-bold text-slate-900 text-base">{step.title}</h3>
                      <p className="text-[13px] text-slate-800 mt-1 leading-relaxed font-medium">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="lg:hidden w-full mt-8 flex flex-col gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-12 w-full rounded-xl font-bold bg-blue-700 hover:bg-blue-800 text-white shadow-lg"
                >
                  <Link to="/apply" className="flex justify-center w-full">
                    Begin Application
                  </Link>
                </Button>

                <div className="bg-[#FFF8E7] border border-orange-200 px-3 py-2 rounded-md text-center">
                  <p className="text-[10px] text-orange-900 font-bold leading-tight">
                    Independent service. Not affiliated with the Malaysian government.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
