import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ClipboardList,
  CreditCard,
  UserCheck,
  MailCheck,
  ShieldCheck,
  PlaneTakeoff,
  MapPin,
} from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-5 h-5 text-blue-600" />,
      title: "Submit Details",
      desc: "Enter passport & itinerary info.",
      bg: "bg-blue-100/50",
      borderColor: "border-blue-200",
    },
    {
      icon: <CreditCard className="w-5 h-5 text-indigo-600" />,
      title: "Secure Payment",
      desc: "Complete service fee transaction.",
      bg: "bg-indigo-100/50",
      borderColor: "border-indigo-200",
    },
    {
      icon: <UserCheck className="w-5 h-5 text-violet-600" />,
      title: "Expert Review",
      desc: "We verify for 100% accuracy.",
      bg: "bg-violet-100/50",
      borderColor: "border-violet-200",
    },
    {
      icon: <MailCheck className="w-5 h-5 text-emerald-600" />,
      title: "Get Confirmation",
      desc: "Receive approved MDAC via email.",
      bg: "bg-emerald-100/50",
      borderColor: "border-emerald-200",
    },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-slate-50/50 py-12 lg:py-0">
      {/* --- Background Graphic Elements --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle Topographic Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 18.1 9.9l7.9-7.9h2zm35.355 23.432l-1.414 1.414-2.12-2.122 1.413-1.414 2.12 2.122zM0 24.847l1.414-1.414 2.122 2.122-1.415 1.414L0 24.847zm55.565-9.193l-1.415 1.415-3.536-3.536 1.414-1.414 3.537 3.536zM4.435 15.654l1.414-1.414 3.536 3.536-1.414 1.415-3.536-3.536zm50.495-4.242l-1.414 1.414-4.95-4.95 1.414-1.414 4.95 4.95zM5.07 11.412l1.414-1.414 4.95 4.95-1.414 1.414-4.95-4.95z' fill='%232563eb' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Soft Ambient Gradients */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-3xl bg-gradient-to-br from-blue-200/40 to-indigo-200/40" />
        <div className="absolute bottom-[-10%] left-[-20%] w-[700px] h-[700px] rounded-full blur-3xl bg-gradient-to-tr from-emerald-100/30 to-teal-100/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl h-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">
          {/* ——— LEFT COLUMN: Copy & CTA ——— */}
          <div className="flex flex-col space-y-8 pt-8 lg:pt-0 order-2 lg:order-1">
            {/* Header Group */}
            <div className="space-y-4">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-blue-900 text-sm font-bold w-fit">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                Official MDAC Filing Assistance
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight text-slate-900 leading-[1.1]">
                Fast-Track Your Entry <br className="hidden md:block" />
                into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
                  Malaysia.
                </span>
              </h1>

              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Skip the airport paperwork. Submit your Digital Arrival Card online in minutes and breeze through
                immigration.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto h-14 px-8 rounded-xl text-base font-bold text-white shadow-lg shadow-blue-500/25 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-[1.02] group border-0"
              >
                <Link to="/apply" className="flex items-center justify-center gap-3">
                  Apply Now
                  <PlaneTakeoff className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Button>

              {/* Secondary Info */}
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500 bg-slate-100/80 px-4 py-2 rounded-lg">
                <MapPin className="w-4 h-4 text-indigo-500" />
                Required for arrival within 3 days.
              </div>
            </div>

            {/* Desktop Disclaimer */}
            <p className="hidden md:block text-xs text-slate-400 max-w-md leading-relaxed border-l-2 border-slate-200 pl-4">
              Disclaimer: We are a private agency preparing MDAC applications. We are not affiliated with the Malaysian
              government. Fees apply for our services.
            </p>
          </div>

          {/* ——— RIGHT COLUMN: Creative Stepper ——— */}
          <div className="relative order-1 lg:order-2 py-8 lg:py-0">
            {/* Abstract Graphic Layer behind the card */}
            <div className="absolute inset-0 z-0 transform translate-x-6 translate-y-6 lg:translate-x-12 lg:translate-y-12 opacity-20">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-blue-300 fill-current"
              >
                <path
                  d="M42.7,-72.8C56.3,-66.3,68.8,-56.3,77.7,-43.5C86.6,-30.7,91.9,-15.3,90.8,-0.6C89.7,14.1,82.2,28.1,73.1,40.3C64,52.4,53.2,62.7,40.6,70.9C28,79.1,14,85.1,-0.5,86C-15,86.9,-29.9,82.6,-43.1,74.9C-56.3,67.1,-67.8,55.9,-76.6,42.7C-85.4,29.5,-91.5,14.7,-91.2,0.2C-90.9,-14.3,-84.2,-28.7,-75.3,-41.5C-66.4,-54.3,-55.3,-65.5,-42.3,-72.4C-29.2,-79.3,-14.6,-81.8,0.3,-82.3C15.2,-82.8,30.3,-81.3,42.7,-72.8Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>

            {/* The Main "Glass" Card */}
            <div className="relative z-10 bg-white/80 backdrop-blur-xl border border-white/40 rounded-[2rem] p-6 md:p-8 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)]">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900">Simple 4-Step Process</h3>
                <p className="text-sm text-slate-500 mt-1">Get travel-ready in under 5 minutes.</p>
              </div>

              {/* Stepper Timeline */}
              <div className="relative space-y-6">
                {/* Connecting Line */}
                <div className="absolute left-[22px] top-5 bottom-5 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-200 to-emerald-200 z-0" />

                {steps.map((step, index) => (
                  <div key={index} className="relative z-10 flex items-center gap-5 group">
                    {/* Icon Bubble */}
                    <div
                      className={`relative flex-shrink-0 w-12 h-12 rounded-full ${step.bg} ${step.borderColor} border-2 flex items-center justify-center shadow-sm transition-transform group-hover:scale-110 bg-white`}
                    >
                      {step.icon}
                      {/* Subtle pulse ring on hover */}
                      <div className="absolute inset-0 rounded-full bg-current opacity-0 group-hover:animate-ping-slow group-hover:opacity-20"></div>
                    </div>

                    {/* Text Content */}
                    <div className="bg-white/60 md:bg-transparent rounded-xl p-3 md:p-0 flex-1 transition-all group-hover:translate-x-1">
                      <h4 className="text-base font-bold text-slate-800">{step.title}</h4>
                      <p className="text-xs md:text-sm font-medium text-slate-500 leading-snug">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Disclaimer (Bottom Order) */}
          <div className="order-3 md:hidden mt-4">
            <p className="text-xs text-center text-slate-400 leading-relaxed px-4">
              Disclaimer: We are an independent agency assisting with MDAC. Not affiliated with the government.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
