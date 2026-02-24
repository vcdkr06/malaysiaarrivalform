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
      desc: "Secure online transaction.",
    },
    {
      title: "Review",
      desc: "Application verification process.",
    },
    {
      title: "Confirmation",
      desc: "Receive digital approval via email.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50 pt-10 pb-12">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-3xl" />

        <img
          src={petronasBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top lg:object-[center_20%] opacity-[0.16]"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT COLUMN */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-semibold mb-4 bg-yellow-100 border border-yellow-300 text-yellow-800">
              Mandatory Travel Requirement
            </div>

            <h1 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900 mb-4">
              Digital Arrival Registration for <span className="text-blue-600">Malaysia</span>
            </h1>

            <p className="text-sm md:text-base text-gray-700 max-w-md mb-6 leading-relaxed">
              Foreign visitors must submit their arrival information prior to entry to ensure smooth border clearance.
            </p>

            <Button
              asChild
              size="lg"
              className="h-12 px-8 rounded-sm font-semibold shadow-none bg-blue-600 hover:bg-blue-700 text-white transition"
            >
              <Link to="/apply" className="flex items-center gap-2">
                Begin Application
              </Link>
            </Button>

            <p className="mt-4 text-[11px] text-gray-500 max-w-sm">
              Independent documentation assistance service. Not affiliated with the Malaysian government.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <div className="bg-white border border-gray-300 rounded-sm p-6">
              <h3 className="font-semibold text-sm text-gray-900 mb-6">4-Step Application Process</h3>

              <div className="relative">
                <div className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-gray-200" />

                <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="relative flex flex-col items-start lg:items-center text-left lg:text-center lg:w-1/4"
                    >
                      <div className="text-[10px] font-semibold text-blue-600 tracking-wide mb-1">STEP {index + 1}</div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-0.5">{step.title}</h4>
                      <p className="text-xs text-gray-600 leading-snug">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-600">
                  Submit at least <span className="font-semibold text-blue-600">3 days before arrival</span>.
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
