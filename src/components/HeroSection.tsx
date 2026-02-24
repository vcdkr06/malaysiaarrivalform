import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import globeBg from "@/assets/hero-bg-globe.jpg";

const HeroSection = () => {
  const steps = [
    { title: "Enter Details", desc: "Provide travel information as it appears on your passport." },
    { title: "Payment", desc: "Complete the secure online transaction for processing." },
    { title: "Review", desc: "Wait for official application verification." },
    { title: "Confirmation", desc: "Receive digital approval document via email." },
  ];

  return (
    <section className="relative pt-10 pb-16 border-b border-slate-300 bg-white overflow-hidden">
      {/* Background Container */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Overlay: 
           Prevents the 80% opacity image from clashing with the text.
           Fades from solid white on the left to transparent on the right.
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent z-10" />

        <img
          src={globeBg}
          alt="Globe and Airplane Travel Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
          {/* LEFT COLUMN - Heading & Text */}
          <div className="lg:w-1/2 flex flex-col gap-6 lg:mt-2">
            {/* Mandatory Notice */}
            <div className="hidden md:block border-l-4 border-yellow-500 bg-white/90 backdrop-blur-sm p-3 rounded w-fit shadow-sm">
              <p className="text-sm font-bold text-yellow-900 uppercase tracking-wide">Mandatory Travel Requirement</p>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight drop-shadow-sm">
                Digital Arrival Registration for <span className="text-blue-700">Malaysia</span>
              </h1>

              <p className="text-base md:text-lg text-slate-800 max-w-md leading-relaxed font-medium bg-white/40 backdrop-blur-[2px] rounded-lg p-1">
                Foreign visitors must submit their arrival information prior to entry to ensure smooth border clearance
                and immigration processing.
              </p>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block pt-4">
              <Button
                asChild
                size="lg"
                className="h-14 px-10 rounded-full font-bold bg-blue-700 hover:bg-blue-800 text-white shadow-xl transition-all text-lg"
              >
                <Link to="/apply">Begin Application</Link>
              </Button>

              <p className="mt-4 text-xs text-slate-600 max-w-sm leading-relaxed font-semibold">
                Independent documentation assistance service. <br /> Not affiliated with the Malaysian government.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN - Application Process Card */}
          <div className="lg:w-1/2 w-full flex flex-col">
            {/* Added backdrop-blur-md to make the card "pop" against the 80% opacity background */}
            <div className="bg-white/90 backdrop-blur-md border border-slate-200 border-t-4 border-t-blue-700 shadow-2xl p-6 md:p-8 w-full rounded-2xl">
              <div className="border-b border-slate-200 pb-4 mb-6">
                <h2 className="font-bold text-xl text-slate-800">Application Process</h2>
                <p className="text-sm text-slate-600 mt-1 italic">
                  Complete these steps to finalize your registration.
                </p>
              </div>

              {/* Step-by-Step List */}
              <div className="flex flex-col gap-5">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white flex items-center justify-center font-bold text-sm mt-0.5 rounded-full shadow-md">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-800 text-base">{step.title}</h3>
                      <p className="text-sm text-slate-600 mt-0.5 leading-snug">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="lg:hidden w-full mt-8">
                <Button
                  asChild
                  size="lg"
                  className="h-12 w-full rounded-xl font-bold bg-blue-700 hover:bg-blue-800 text-white shadow-lg text-base"
                >
                  <Link to="/apply" className="flex justify-center w-full">
                    Begin Application
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
