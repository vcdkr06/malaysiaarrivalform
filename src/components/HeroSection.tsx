import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import petronasBg from "@/assets/kuala-lumpur-petronas.png";

const HeroSection = () => {
  const steps = [
    {
      title: "Enter Details",
      desc: "Provide required travel information.",
    },
    {
      title: "Payment",
      desc: "Complete secure online transaction.",
    },
    {
      title: "Review",
      desc: "Application verification process.",
    },
    {
      title: "Confirmation",
      desc: "Receive approval via email.",
    },
  ];

  return (
    <section className="relative bg-white pt-12 pb-14 border-b border-gray-300">
      {/* Subtle Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={petronasBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.08]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT COLUMN */}
          <div>
            <div className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">
              Mandatory Travel Requirement
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-snug">
              Digital Arrival Registration for Malaysia
            </h1>

            <p className="text-base text-gray-700 max-w-md mb-6">
              Foreign visitors must submit arrival information prior to entry to ensure smooth border clearance
              procedures.
            </p>

            <Button
              asChild
              size="lg"
              className="h-12 px-8 rounded-sm bg-gray-900 text-white hover:bg-gray-800 shadow-none"
            >
              <Link to="/apply">Begin Application</Link>
            </Button>

            <p className="mt-4 text-xs text-gray-600 max-w-sm">
              Independent documentation assistance service. Not affiliated with the Malaysian government.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <div className="bg-white border border-gray-300 p-6">
              <h3 className="font-semibold text-sm text-gray-900 mb-6 uppercase tracking-wide">
                4-Step Application Process
              </h3>

              <div className="space-y-5">
                {steps.map((step, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <div className="text-xs font-semibold text-gray-600 mb-1">Step {index + 1}</div>
                    <h4 className="font-semibold text-gray-900">{step.title}</h4>
                    <p className="text-sm text-gray-700">{step.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-300">
                <p className="text-sm text-gray-700">
                  Submit at least <span className="font-semibold">3 days before arrival</span>.
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
