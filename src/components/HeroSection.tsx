import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import globeBg from "@/assets/hero-bg-globe.jpg";

const HeroSection = () => {
  const steps = [
    {
      title: "Enter Details",
      desc: "Provide travel and passport data accurately as shown on your documents.",
    },
    {
      title: "Payment",
      desc: "Securely complete the transaction using our encrypted payment gateway.",
    },
    {
      title: "Review",
      desc: "Our specialists verify your submission for compliance with entry requirements.",
    },
    {
      title: "Confirmation",
      desc: "Receive your official digital arrival document via email, ready for travel.",
    },
  ];

  return (
    <section className="relative pt-10 pb-16 border-b border-slate-300 bg-white overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent z-10" />
        <img
          src={globeBg}
          alt="Globe and Airplane"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80 -scale-x-100"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center text-left">
          {/* LEFT COLUMN - Messaging */}
          <div className="lg:w-5/12 flex flex-col gap-5 lg:mt-2 text-left items-start">
            <div className="md:block border border-yellow-200 bg-yellow-100/90 px-3 py-1 rounded w-fit shadow-sm">
              <p className="text-[10px] md:text-xs font-bold text-yellow-800 uppercase tracking-widest">
                Mandatory Travel Requirement
              </p>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                Digital Arrival Registration for <span className="text-blue-700">Malaysia</span>
              </h1>
              <p className="text-base md:text-lg text-slate-800 max-w-md leading-relaxed font-medium">
                Foreign visitors must submit their arrival info prior to entry for smooth border clearance.
              </p>
            </div>

            <div className="hidden lg:flex flex-col gap-4 pt-2 items-start">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 rounded-full font-bold bg-blue-700 hover:bg-blue-800 text-white shadow-xl transition-all text-base w-fit"
              >
                <Link to="/apply">Begin Application</Link>
              </Button>

              <div className="bg-orange-50 border border-orange-100 px-4 py-1.5 rounded-md shadow-sm">
                <p className="text-[10px] md:text-[11px] text-orange-900 font-bold whitespace-nowrap">
                  Independent documentation assistance service. Not affiliated with the Malaysian government.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Compact Grid Layout */}
          <div className="lg:w-7/12 w-full">
            <div className="bg-white/75 backdrop-blur-xl border border-white/40 border-t-4 border-t-blue-700 shadow-2xl p-5 md:p-6 w-full rounded-2xl text-left">
              <div className="mb-6">
                <h2 className="font-bold text-lg text-slate-900">Application Process</h2>
                <p className="text-xs text-slate-700 mt-1 font-semibold italic">
                  Complete these 4 steps for your travel authorization
                </p>
              </div>

              {/* Grid Layout for Compactness */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    {/* Number Circle */}
                    <div className="flex-shrink-0 w-7 h-7 bg-blue-700 text-white flex items-center justify-center font-bold text-xs rounded-full shadow-md">
                      {index + 1}
                    </div>

                    <div className="flex flex-col">
                      <h3 className="font-bold text-slate-900 text-sm">{step.title}</h3>
                      <p className="text-[12px] text-slate-700 leading-snug font-medium mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="lg:hidden mt-8 flex flex-col gap-3">
                <Button asChild className="h-11 w-full rounded-xl font-bold bg-blue-700 text-white">
                  <Link to="/apply" className="flex justify-center w-full">
                    Begin Application
                  </Link>
                </Button>
                <div className="bg-orange-50 border border-orange-100 py-2 rounded-md text-center text-[10px] text-orange-900 font-bold">
                  Independent service. Not affiliated with government.
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
