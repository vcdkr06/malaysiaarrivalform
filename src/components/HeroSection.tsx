import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import globeBg from "@/assets/hero-bg-globe.jpg";

const HeroSection = () => {
  const steps = [
    {
      title: "Enter Details",
      desc: "Carefully provide your travel information and passport data exactly as they appear on your official documents to ensure a valid registration.",
    },
    {
      title: "Payment",
      desc: "Complete the secure service fee transaction through our encrypted payment gateway to initiate the formal review of your application.",
    },
    {
      title: "Review",
      desc: "Our travel specialists will verify your submission for compliance with current Malaysian entry requirements to prevent any border clearance delays.",
    },
    {
      title: "Confirmation",
      desc: "Receive your official digital arrival document via email, which you should keep ready for presentation to immigration officers upon your entry.",
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
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80 -scale-x-100 saturate-250"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start text-left">
          {/* LEFT COLUMN */}
          <div className="lg:w-1/2 flex flex-col gap-5 lg:mt-2 text-left items-start">
            {/* Soft Yellow Notice - 4px rounded */}
            <div className="md:block border border-yellow-200 bg-yellow-100/90 px-3 py-1 rounded-sm shadow-sm">
              <p className="text-[10px] md:text-xs font-bold text-yellow-800 uppercase tracking-widest">
                Mandatory Travel Requirement
              </p>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                Digital Arrival Registration for <span className="text-blue-700">Malaysia</span>
              </h1>
              <p className="text-base md:text-lg text-slate-800 max-w-md leading-relaxed font-medium">
                Foreign visitors must submit their arrival info prior to entry to ensure smooth border clearance and
                immigration processing.
              </p>
            </div>

            <div className="hidden lg:flex flex-col gap-4 pt-2 items-start">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 rounded-sm font-bold bg-blue-700 hover:bg-blue-800 text-white shadow-md transition-all text-base w-fit"
              >
                <Link to="/apply">Begin Application</Link>
              </Button>

              <div className="bg-orange-50 border border-orange-100 px-4 py-1.5 rounded-sm shadow-sm">
                <p className="text-[10px] md:text-[11px] text-orange-900 font-bold whitespace-nowrap">
                  Independent documentation assistance service. Not affiliated with the Malaysian government.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Vertical Compact with Dotted Connectors */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white/75 backdrop-blur-xl border border-white/40 border-t-4 border-t-blue-700 shadow-2xl p-6 w-full rounded-sm text-left">
              <div className="mb-6">
                <h2 className="font-bold text-lg text-slate-900 uppercase tracking-tight">Application Process</h2>
                <p className="text-xs text-slate-700 mt-1 font-semibold italic">
                  Complete these 4 steps for your authorization
                </p>
              </div>

              {/* Vertical Steps with Dotted Line */}
              <div className="relative space-y-6">
                {/* Dotted Connecting Line */}
                <div className="absolute left-[13px] top-2 bottom-2 w-0 border-l-2 border-dotted border-slate-300 z-0" />

                {steps.map((step, index) => (
                  <div key={index} className="relative z-10 flex items-start gap-4">
                    {/* Number Circle */}
                    <div className="flex-shrink-0 w-7 h-7 bg-blue-700 text-white flex items-center justify-center font-bold text-xs rounded-sm shadow-md">
                      {index + 1}
                    </div>

                    <div className="flex flex-col">
                      <h3 className="font-bold text-slate-900 text-[14px] leading-tight">{step.title}</h3>
                      <p className="text-[12.5px] text-slate-700 leading-normal font-medium mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="lg:hidden mt-8 flex flex-col gap-3">
                <Button asChild className="h-11 w-full rounded-sm font-bold bg-blue-700 text-white shadow-md">
                  <Link to="/apply" className="flex justify-center w-full">
                    Begin Application
                  </Link>
                </Button>
                <div className="bg-orange-50 border border-orange-100 py-2 rounded-sm text-center text-[10px] text-orange-900 font-bold">
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
