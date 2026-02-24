import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldAlert, ArrowRight, FileSignature, CreditCard, ShieldCheck, MailCheck } from "lucide-react";
import petronasBg from "@/assets/kuala-lumpur-petronas.png";

const HeroSection = () => {
  const steps = [
    { title: "Enter Details", desc: "Provide travel information.", icon: FileSignature },
    { title: "Payment", desc: "Secure online transaction.", icon: CreditCard },
    { title: "Review", desc: "Application verification.", icon: ShieldCheck },
    { title: "Confirmation", desc: "Receive digital approval.", icon: MailCheck },
  ];

  return (
    <section className="relative bg-slate-50 pt-12 pb-16 border-b border-slate-200">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-slate-50 to-slate-100" />
        <img
          src={petronasBg}
          alt="Kuala Lumpur Skyline"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-[0.08]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          {/* LEFT COLUMN */}
          <div className="lg:w-1/2 flex flex-col gap-6 mt-4">
            {/* Official Notice Badge */}
            <div className="inline-flex items-start gap-3 p-3 bg-blue-50 border-l-4 border-blue-600 rounded-r-md shadow-sm w-fit">
              <ShieldAlert className="w-5 h-5 text-blue-700 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-blue-900 tracking-tight">Mandatory Travel Requirement</p>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Digital Arrival <br className="hidden md:block" />
                Registration for <span className="text-blue-600">Malaysia</span>
              </h1>

              <p className="text-base md:text-lg text-slate-600 max-w-md leading-relaxed font-medium">
                Foreign visitors must submit their arrival information prior to entry to ensure smooth border clearance
                and immigration processing.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                asChild
                size="lg"
                className="h-14 px-8 rounded-md font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all text-base"
              >
                <Link to="/apply" className="flex items-center justify-center gap-2">
                  Begin Application
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>

              {/* Disclaimer */}
              <p className="mt-4 text-xs text-slate-500 max-w-sm leading-relaxed">
                Independent documentation assistance service. Not affiliated with the Malaysian government.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN - Application Process Card */}
          <div className="lg:w-1/2 w-full flex">
            <div className="bg-white border border-slate-200 border-t-4 border-t-blue-600 rounded-lg shadow-xl p-8 flex-1">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <h3 className="font-bold text-lg text-slate-900 tracking-tight">4-Step Application Process</h3>
                <p className="text-sm text-slate-500 mt-1">Complete your registration in under 5 minutes.</p>
              </div>

              {/* Stepper Container */}
              <div className="flex flex-col gap-6 relative">
                {/* Connecting Line (Vertical) */}
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-100 z-0 hidden sm:block" />

                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 relative z-10">
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 text-blue-600 flex items-center justify-center font-bold shadow-sm">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="pt-1.5">
                        <h4 className="font-bold text-slate-900 flex items-center gap-2">
                          <span className="text-blue-600 text-sm font-black hidden sm:inline-block">0{index + 1}.</span>
                          {step.title}
                        </h4>
                        <p className="text-sm text-slate-600 mt-1 leading-snug">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
