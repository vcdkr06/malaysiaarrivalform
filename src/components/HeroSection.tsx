import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, CreditCard, UserCheck, MailCheck, Lightbulb, Zap } from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-4 h-4" />,
      title: "Submit Details",
      desc: "Provide your basic personal info and travel itinerary.",
      color: "#1D4ED8",
      bg: "#EFF6FF",
      border: "#BFDBFE",
    },
    {
      icon: <CreditCard className="w-4 h-4" />,
      title: "Settle Payment",
      desc: "Complete your transaction through our reliable checkout.",
      color: "#0F172A",
      bg: "#F1F5F9",
      border: "#CBD5E1",
    },
    {
      icon: <UserCheck className="w-4 h-4" />,
      title: "Expert Review",
      desc: "Our specialists double-check everything to prevent errors.",
      color: "#B45309",
      bg: "#FFFBEB",
      border: "#FDE68A",
    },
    {
      icon: <MailCheck className="w-4 h-4" />,
      title: "Get Confirmation",
      desc: "Check your inbox for your approved digital arrival pass.",
      color: "#047857",
      bg: "#ECFDF5",
      border: "#A7F3D0",
    },
  ];

  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center py-6 md:py-10 lg:py-0 bg-slate-50">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 right-[0%] w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(15,23,42,0.06) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(5,150,105,0.05) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-[1.15fr_1fr] gap-5 md:gap-10 lg:gap-16 items-center">
          {/* LEFT COLUMN */}
          <div className="flex flex-col w-full">
            {/* Badge */}
            <div className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold mb-6 w-fit bg-amber-50 border border-amber-200 text-amber-800">
              <Zap className="w-3.5 h-3.5 text-[#D4AF37]" />
              Mandatory Travel Requirement
            </div>

            {/* Pre-heading */}
            <p className="hidden md:block text-xs lg:text-sm font-bold uppercase tracking-[0.15em] mb-2 text-slate-600">
              MDAC Registration Portal
            </p>

            {/* Heading */}
            <h1
              className="text-3xl md:text-[2.25rem] lg:text-[3rem] font-extrabold leading-[1.12] mb-3 md:mb-5 tracking-[-0.02em] text-slate-900"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              Streamline Your Arrival
              <br className="hidden lg:block" /> into <span className="text-emerald-600">Malaysia</span>
            </h1>

            {/* Desktop Description */}
            <p className="hidden md:block text-[13px] lg:text-[15px] leading-[1.7] mb-8 max-w-lg text-slate-600">
              Skip the paperwork at immigration. All foreign visitors are now required to submit their digital arrival
              profile prior to reaching the border to ensure a smooth, hassle-free entry.
            </p>

            {/* Mobile Description */}
            <p className="block md:hidden text-[14px] leading-[1.5] mb-5 max-w-lg text-slate-600">
              Submit your digital arrival profile before reaching the border to ensure a smooth, hassle-free entry.
            </p>

            {/* CTA */}
            <div className="mb-0 md:mb-8">
              <Button
                asChild
                size="lg"
                className="font-bold h-12 px-8 rounded-full bg-[#0F172A] hover:bg-[#0B1220] text-white transition-all duration-300 hover:translate-y-[-2px] shadow-lg hover:shadow-xl w-full md:w-auto"
                style={{
                  boxShadow: "0 10px 30px rgba(15,23,42,0.25)",
                }}
              >
                <Link to="/apply" className="flex items-center justify-center gap-2 h-12">
                  Start Application
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Disclaimer Desktop */}
            <p className="hidden md:block text-[9px] lg:text-[10px] leading-relaxed max-w-md pl-3 text-slate-400 border-l-2 border-slate-200">
              Disclaimer: We are an independent agency assisting travelers with their documentation. We are not legally
              affiliated with the Malaysian government.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full py-2 md:py-6 lg:py-10">
            <div className="rounded-[2rem] p-4 md:p-6 lg:p-8 bg-white shadow-xl border border-slate-200">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-bold text-[14px] lg:text-[16px] text-slate-900">How It Works</h3>
                <span className="text-[9px] lg:text-[10px] px-3 py-1.5 rounded-full font-bold tracking-widest uppercase bg-slate-100 text-slate-500 border border-slate-200">
                  Quick Guide
                </span>
              </div>

              {/* Stepper */}
              <div className="relative space-y-4 pl-1">
                <div
                  className="absolute top-2 bottom-2 left-[21px] border-l-[1.5px] border-dashed"
                  style={{ borderColor: "#E2E8F0" }}
                />

                {steps.map((step, index) => (
                  <div key={index} className="relative z-10 flex gap-4 items-center group">
                    <div
                      className="w-10 h-10 rounded-2xl flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: step.bg,
                        color: step.color,
                        border: `1px solid ${step.border}`,
                      }}
                    >
                      {step.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[14px] mb-0.5 text-slate-900">{step.title}</h4>
                      <p className="text-[12px] leading-snug text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Important Note */}
              <div className="flex items-start gap-3 mt-6 px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200">
                <Lightbulb className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#D4AF37]" />
                <p className="text-[12px] leading-relaxed text-slate-600">
                  <span className="text-[#D4AF37] font-bold">Important Note:</span> Travelers must submit this form
                  within <span className="text-emerald-600 font-bold">3 days prior</span> to their scheduled arrival
                  date.
                </p>
              </div>
            </div>

            {/* Disclaimer Mobile */}
            <p className="block md:hidden mt-3 text-[9.5px] leading-relaxed text-center px-2 text-slate-400">
              Disclaimer: We are an independent agency assisting travelers with their documentation. We are not legally
              affiliated with the Malaysian government.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
