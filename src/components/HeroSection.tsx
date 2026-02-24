import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import petronasBg from "@/assets/kuala-lumpur-petronas.png";

const HeroSection = () => {
  const steps = [
    { title: "Enter Details", desc: "Provide required travel information." },
    { title: "Payment", desc: "Secure online transaction." },
    { title: "Review", desc: "Application verification process." },
    { title: "Confirmation", desc: "Receive digital approval via email." },
  ];

  return (
    <section className="relative bg-blue-50 pt-10 pb-12">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50" />
        <img src={petronasBg} alt="" className="absolute inset-0 w-full h-full object-cover object-top opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT COLUMN */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-semibold mb-4 bg-yellow-100 border border-yellow-300 text-yellow-800">
              Mandatory Travel Requirement
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Digital Arrival Registration for <span className="text-blue-600">Malaysia</span>
            </h1>

            <p className="text-sm md:text-base text-gray-700 max-w-md mb-6 leading-relaxed">
              Foreign visitors must submit their arrival information prior to entry to ensure smooth border clearance.
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

            <p className="mt-4 text-[11px] text-gray-500 max-w-sm">
              Independent documentation assistance service. Not affiliated with the Malaysian government.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
            {/* Stepper Line for all screens */}
            <div className="hidden lg:block absolute top-24 left-[calc(50%+150px)] h-full border-l-2 border-dashed border-gray-300 z-0" />

            {/* Stepper */}
            <div className="flex flex-col lg:flex-col lg:justify-between gap-6 relative z-10 lg:ml-16">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row lg:items-center lg:gap-4 items-start text-left lg:text-left"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold mb-2 lg:mb-0">
                    {index + 1}
                  </div>
                  <div className="">
                    <h4 className="font-semibold text-sm text-gray-900 mb-0.5">{step.title}</h4>
                    <p className="text-xs text-gray-600 leading-snug hidden sm:block lg:block">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-6 pt-4 border-t border-gray-200 max-w-md">
          <p className="text-xs text-gray-600">
            Submit at least <span className="font-semibold text-blue-600">3 days before arrival</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
