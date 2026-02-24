import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import petronasBg from "@/assets/kuala-lumpur-petronas.png";

const HeroSection = () => {
  const steps = [
    { title: "Enter Details", desc: "Provide travel information as it appears on your passport." },
    { title: "Payment", desc: "Complete the secure online transaction for processing." },
    { title: "Review", desc: "Wait for official application verification." },
    { title: "Confirmation", desc: "Receive digital approval document via email." },
  ];

  return (
    <section className="relative bg-slate-50 pt-10 pb-16 border-b border-slate-300">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-slate-50 to-slate-100" />
        <img src={petronasBg} alt="" className="absolute inset-0 w-full h-full object-cover object-top opacity-15" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
          {/* LEFT COLUMN - Heading & Text */}
          <div className="lg:w-1/2 flex flex-col gap-6 lg:mt-2">
            {/* Formal Notice Box - Hidden on Mobile (sm), Visible on Tablet (md) & Desktop (lg) */}
            <div className="hidden md:block border-l-4 border-yellow-500 bg-yellow-50 p-3 rounded-sm w-fit">
              <p className="text-sm font-medium text-yellow-800 uppercase tracking-wide">
                Mandatory Travel Requirement
              </p>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-semibold text-slate-800 leading-snug">
                Digital Arrival Registration for <span className="text-blue-700">Malaysia</span>
              </h1>

              <p className="text-base text-slate-700 max-w-md leading-relaxed">
                {/* Mobile-only concise text */}
                <span className="md:hidden">
                  <span className="font-semibold text-slate-900">Mandatory Requirement: </span>
                  Submit your arrival info prior to entry for smooth border clearance.
                </span>

                {/* Tablet & Desktop full text */}
                <span className="hidden md:inline">
                  Foreign visitors must submit their arrival information prior to entry to ensure smooth border
                  clearance and immigration processing. Failure to do so may result in delays.
                </span>
              </p>
            </div>

            {/* CTA Button & Disclaimer - DESKTOP ONLY (Hidden on Mobile/Tablet Stack) */}
            <div className="hidden lg:block pt-4">
              <Button
                asChild
                size="lg"
                className="h-12 px-8 rounded-sm font-medium bg-blue-700 hover:bg-blue-800 text-white shadow-none transition-none text-base"
              >
                <Link to="/apply">Begin Application</Link>
              </Button>

              <p className="mt-4 text-xs text-slate-500 max-w-sm leading-relaxed">
                Independent documentation assistance service. Not affiliated with the Malaysian government.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN - Application Process Card */}
          <div className="lg:w-1/2 w-full flex flex-col">
            {/* Reduced padding (p-6 instead of p-8) for a more compact card */}
            <div className="bg-white border border-slate-300 border-t-4 border-t-blue-700 rounded-sm shadow-sm p-6 w-full">
              <div className="border-b border-slate-200 pb-3 mb-4">
                <h2 className="font-semibold text-lg text-slate-800">Application Process</h2>
                <p className="text-sm text-slate-600 mt-1">
                  Please complete the following steps to finalize your registration.
                </p>
              </div>

              {/* Step-by-Step List - Tighter gaps (gap-4) and slightly smaller text for compactness */}
              <div className="flex flex-col gap-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 bg-slate-100 border border-slate-300 flex items-center justify-center text-blue-700 font-semibold rounded-sm text-sm mt-0.5">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="font-medium text-slate-800 text-[15px]">{step.title}</h3>
                      <p className="text-[13px] text-slate-600 mt-0.5 leading-snug">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button & Disclaimer - MOBILE & TABLET ONLY (Placed below the box when columns stack) */}
            <div className="lg:hidden w-full mt-6 flex flex-col">
              <Button
                asChild
                size="lg"
                className="h-12 w-full md:w-auto md:self-start md:px-10 rounded-sm font-medium bg-blue-700 hover:bg-blue-800 text-white shadow-none transition-none text-base"
              >
                <Link to="/apply" className="flex justify-center w-full">
                  Begin Application
                </Link>
              </Button>

              <p className="mt-4 text-xs text-slate-500 text-center md:text-left leading-relaxed">
                Independent documentation assistance service. Not affiliated with the Malaysian government.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
