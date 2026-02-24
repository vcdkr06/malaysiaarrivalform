import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import petronasBg from "@/assets/kuala-lumpur-petronas.png";

const HeroSection = () => {
  const steps = [
    { title: "Enter Details", desc: "Provide your travel information." },
    { title: "Payment", desc: "Secure online transaction." },
    { title: "Review", desc: "We verify your application." },
    { title: "Confirmation", desc: "Receive digital approval via email." },
  ];

  return (
    <section className="relative bg-blue-50 pt-10 pb-12">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50" />
        <img src={petronasBg} alt="" className="absolute inset-0 w-full h-full object-cover object-top opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:w-1/2">
            {/* Subheadline responsive with mandatory */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Digital Arrival Registration for <span className="text-blue-600">Malaysia</span>
            </h1>

            <p className="text-sm md:text-base text-gray-700 max-w-md mb-6 leading-relaxed">
              {/* Mobile: include mandatory */}
              <span className="sm:hidden font-semibold">Mandatory Travel Requirement. </span>
              Submit your arrival info for smooth border clearance.
              {/* Desktop & tablet: longer text */}
              <span className="hidden sm:inline">
                Foreign visitors must submit their arrival information prior to entry to ensure smooth border clearance.
              </span>
            </p>

            <Button
              asChild
              size="lg"
              className="h-12 px-8 rounded-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition"
            >
              <Link to="/apply" className="flex items-center justify-center">
                Begin Application
              </Link>
            </Button>
          </div>

          {/* RIGHT COLUMN - Stepper */}
          <div className="lg:w-1/2 flex lg:flex-col gap-6">
            <div className="bg-white border border-gray-300 rounded-sm p-6 flex-1">
              <h3 className="font-semibold text-sm text-gray-900 mb-6">4-Step Application Process</h3>

              {/* Desktop: horizontal stepper */}
              <div className="hidden lg:flex relative items-center justify-between">
                <div className="absolute top-4 left-4 right-4 h-px border-t-2 border-dashed border-gray-300 z-0" />
                <div className="flex justify-between w-full relative z-10">
                  {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center text-center lg:w-1/4">
                      <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold mb-2">
                        {index + 1}
                      </div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-xs text-gray-600 leading-snug">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tablet: vertical stepper on the side */}
              <div className="hidden md:flex lg:hidden flex-col relative z-10">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 mb-6">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      {index < steps.length - 1 && (
                        <div className="flex-1 w-px border-l-2 border-dashed border-gray-300 mt-1" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-xs text-gray-600 leading-snug">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile: vertical stepper below text */}
              <div className="flex flex-col md:hidden relative z-10">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 mb-6">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      {index < steps.length - 1 && (
                        <div className="flex-1 w-px border-l-2 border-dashed border-gray-300 mt-1" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-1">{step.title}</h4>
                      <p className="text-xs text-gray-600 leading-snug">{step.desc}</p>
                    </div>
                  </div>
                ))}

                {/* Disclaimer below stepper on mobile */}
                <p className="mt-2 text-[11px] text-gray-500">
                  Independent documentation assistance service. Not affiliated with the Malaysian government.
                </p>
              </div>

              {/* Desktop & Tablet Disclaimer */}
              <div className="hidden md:block mt-6 pt-4 border-t border-gray-200 text-xs text-gray-600">
                Submit at least <span className="font-semibold text-blue-600">3 days before arrival</span>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
