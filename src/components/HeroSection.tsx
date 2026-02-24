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
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent z-10" />
        <img
          src={globeBg}
          alt="Globe and Airplane"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80 -scale-x-100"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start text-left">
          {/* LEFT COLUMN */}
          <div className="lg:w-1/2 flex flex-col gap-6 lg:mt-2 text-left items-start">
            <div className="md:block border border-yellow-200 bg-yellow-100/90 px-3 py-1 rounded w-fit shadow-sm">
              <p className="text-[10px] md:text-xs font-bold text-yellow-800 uppercase tracking-widest">
                Mandatory Travel Requirement
              </p>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Digital Arrival Registration for <span className="text-blue-700">Malaysia</span>
              </h1>
              <p className="text-base md:text-lg text-slate-800 max-w-md leading-relaxed font-medium">
                Foreign visitors must submit their arrival information prior to entry to ensure smooth border clearance.
              </p>
            </div>

            <div className="hidden lg:flex flex-col gap-6 pt-4 items-start">
              <Button
                asChild
                size="lg"
                className="h-14 px-10 rounded-full font-bold bg-blue-700 hover:bg-blue-800 text-white shadow-xl transition-all text-lg w-fit"
              >
                <Link to="/apply">Begin Application</Link>
              </Button>

              <div className="bg-orange-50 border border-orange-100 px-4 py-2 rounded-md shadow-sm">
                <p className="text-[11px] md:text-xs text-orange-900 font-bold whitespace-nowrap">
                  Independent documentation assistance service. Not affiliated with the Malaysian government.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Enhanced Separation */}
          <div className="lg:w-1/2 w-full flex flex-col items-start">
            <div className="bg-white/75 backdrop-blur-xl border border-white/40 border-t-4 border-t-blue-700 shadow-2xl p-6 md:p-8 w-full rounded-2xl text-left">
              <div className="mb-8">
                <h2 className="font-bold text-xl text-slate-900">Application Process</h2>
                <p className="text-sm text-slate-800 mt-1 font-semibold italic">
                  Follow our simple 4-step arrival process
                </p>
              </div>

              {/* Steps Container with Vertical Line */}
              <div className="relative space-y-8">
                {/* Vertical Connector Line (Hidden on last step) */}
                <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-slate-200 z-0" />

                {steps.map((step, index) => (
                  <div key={index} className="relative z-10 flex items-start gap-5 group">
                    {/* Step Number Circle */}
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white flex items-center justify-center font-bold text-sm rounded-full shadow-lg group-hover:scale-110 transition-transform duration-200">
                      {index + 1}
                    </div>

                    {/* Step Content with better spacing */}
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold text-slate-900 text-base leading-none">{step.title}</h3>
                      <p className="text-[13px] text-slate-700 leading-relaxed font-medium pt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="lg:hidden w-full mt-10 flex flex-col gap-4">
                <Button asChild className="h-12 w-full rounded-xl font-bold bg-blue-700 text-white">
                  <Link to="/apply" className="flex justify-center w-full">
                    Begin Application
                  </Link>
                </Button>
                <div className="bg-orange-50 border border-orange-100 px-3 py-2 rounded-md text-center text-[10px] text-orange-900 font-bold">
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
