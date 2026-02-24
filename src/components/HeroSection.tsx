import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import globeBg from "@/assets/hero-bg-globe.jpg";

const HeroSection = () => {
  const steps = [
    {
      title: "Enter Details",
      desc: "Carefully provide your travel information, passport data, and contact details as they appear on your official travel documents to avoid processing errors.",
    },
    {
      title: "Payment",
      desc: "Complete the secure online transaction using our encrypted payment gateway to initiate the document review and submission process.",
    },
    {
      title: "Review",
      desc: "Our specialists will perform a comprehensive quality check on your application to ensure all data meets the specific requirements for entry.",
    },
    {
      title: "Confirmation",
      desc: "Once processed, you will receive your official digital approval and registration documents directly via email in a print-ready format.",
    },
  ];

  return (
    <section className="relative pt-10 pb-16 border-b border-slate-300 bg-white overflow-hidden">
      {/* Background Container - Increased Visibility */}
      <div className="absolute inset-0 z-0">
        {/* Minimal gradient to ensure background is very visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent z-10" />

        <img
          src={globeBg}
          alt="Globe and Airplane Travel Background"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start text-left">
          {/* LEFT COLUMN - Heading & Text */}
          <div className="lg:w-1/2 flex flex-col gap-6 lg:mt-2 text-left items-start">
            {/* Mandatory Notice */}
            <div className="hidden md:block border-l-4 border-blue-600 bg-white/40 backdrop-blur-sm p-3 rounded w-fit shadow-sm">
              <p className="text-sm font-bold text-slate-900 uppercase tracking-wide">Mandatory Travel Requirement</p>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Digital Arrival Registration for <span className="text-blue-700">Malaysia</span>
              </h1>

              {/* Subheadline - Less bold (font-medium) */}
              <p className="text-base md:text-lg text-slate-800 max-w-md leading-relaxed font-medium bg-white/20 backdrop-blur-[2px] rounded-lg">
                Foreign visitors must submit their arrival information prior to entry to ensure smooth border clearance
                and immigration processing.
              </p>
            </div>

            {/* Desktop CTA & New Disclaimer Box */}
            <div className="hidden lg:flex flex-col gap-6 pt-4">
              <Button
                asChild
                size="lg"
                className="h-14 px-10 rounded-full font-bold bg-blue-700 hover:bg-blue-800 text-white shadow-xl transition-all text-lg w-fit"
              >
                <Link to="/apply">Begin Application</Link>
              </Button>

              {/* Yellowish Orange One-Line Disclaimer */}
              <div className="bg-orange-100/90 border border-orange-200 backdrop-blur-sm px-4 py-2 rounded-md shadow-sm w-fit">
                <p className="text-[11px] md:text-xs text-orange-900 font-bold whitespace-nowrap">
                  Independent documentation assistance service. Not affiliated with the Malaysian government.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Application Process Card */}
          <div className="lg:w-1/2 w-full flex flex-col items-start">
            {/* Increased Transparency (bg-white/40) and stronger blur */}
            <div className="bg-white/40 backdrop-blur-xl border border-white/30 border-t-4 border-t-blue-700 shadow-2xl p-6 md:p-8 w-full rounded-2xl text-left">
              <div className="border-b border-slate-900/10 pb-4 mb-6">
                <h2 className="font-bold text-xl text-slate-900">Application Process</h2>
                <p className="text-sm text-slate-800 mt-1 font-semibold italic">
                  Follow our streamlined procedure to secure your travel authorization.
                </p>
              </div>

              {/* Detailed Step-by-Step List */}
              <div className="flex flex-col gap-6">
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

              {/* Mobile CTA & Disclaimer */}
              <div className="lg:hidden w-full mt-8 flex flex-col gap-4">
                <Button
                  asChild
                  size="lg"
                  className="h-12 w-full rounded-xl font-bold bg-blue-700 hover:bg-blue-800 text-white shadow-lg text-base"
                >
                  <Link to="/apply" className="flex justify-center w-full">
                    Begin Application
                  </Link>
                </Button>

                <div className="bg-orange-100/90 border border-orange-200 px-3 py-2 rounded-md text-center">
                  <p className="text-[10px] text-orange-900 font-bold">
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
