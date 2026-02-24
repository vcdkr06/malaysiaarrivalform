import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ClipboardList,
  CreditCard,
  UserCheck,
  MailCheck,
  Lightbulb,
  Globe,
  ShieldCheck,
} from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Information Entry",
      desc: "Provide your personal details and travel itinerary.",
      color: "#1E40AF", // Deeper Navy
      bg: "#EFF6FF",
      border: "#DBEAFE",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Secure Processing",
      desc: "Complete the service fee via encrypted checkout.",
      color: "#1E40AF",
      bg: "#EFF6FF",
      border: "#DBEAFE",
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Data Verification",
      desc: "Specialists review your application for accuracy.",
      color: "#92400E", // Professional Amber
      bg: "#FFFBEB",
      border: "#FEF3C7",
    },
    {
      icon: <MailCheck className="w-5 h-5" />,
      title: "Digital Delivery",
      desc: "Receive your approved pass via email in PDF format.",
      color: "#065F46", // Professional Emerald
      bg: "#ECFDF5",
      border: "#D1FAE5",
    },
  ];

  return (
    <section className="relative min-h-[85vh] lg:h-[90vh] flex items-center overflow-hidden bg-slate-50">
      {/* ——— BACKGROUND IMAGE LAYER ——— */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596422846543-75c6fc18a5ce?q=80&w=2070&auto=format&fit=crop"
          alt="Malaysia Skyline"
          className="w-full h-full object-cover"
        />
        {/* Professional White/Blue Gradient for high legibility */}
        <div className="absolute inset-0 bg-white/95 lg:bg-gradient-to-r lg:from-white lg:via-white/98 lg:to-white/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* ——— LEFT COLUMN: Official Branding ——— */}
          <div className="flex flex-col w-full -mt-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-md text-[11px] font-bold mb-6 w-fit bg-slate-900 text-white uppercase tracking-widest shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              Official Registration Assistance
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[900] leading-[1.1] mb-6 tracking-tight text-slate-900">
              Malaysia Digital <br />
              Arrival Card <span className="text-blue-700">(MDAC)</span>
            </h1>

            {/* Your Specific Text - Formatted for "Official" Clarity */}
            <div className="space-y-4 mb-8">
              <p className="text-[15px] lg:text-[17px] leading-relaxed text-slate-700 border-l-4 border-blue-600 pl-5 bg-blue-50/30 py-2 rounded-r-lg">
                The <span className="font-bold text-slate-900">Malaysia Digital Arrival Card (MDAC)</span> is Malaysia's
                new and improved digital entry form — replacing the old paper-based card with a faster, more secure
                online system for travelers entering by <span className="font-semibold italic">air, land, or sea</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <Button
                asChild
                size="lg"
                className="font-bold h-14 px-10 rounded-md transition-all duration-300 hover:bg-blue-800 group text-base w-full sm:w-auto bg-blue-700 text-white shadow-lg border-0"
              >
                <Link to="/apply" className="flex items-center justify-center gap-2">
                  Apply Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold">
                <Globe className="w-4 h-4" />
                Available for All Nationalities
              </div>
            </div>

            <p className="text-[10px] leading-relaxed max-w-sm text-slate-400 font-medium">
              DISCLAIMER: We are an independent agency specializing in travel documentation. This service includes
              professional review and processing. We are not the Malaysian Government.
            </p>
          </div>

          {/* ——— RIGHT COLUMN: Process Card ——— */}
          <div className="w-full">
            <div className="rounded-xl p-8 lg:p-10 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 relative">
              <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-blue-50 border border-blue-100 px-4 py-1 rounded-full text-[10px] font-black text-blue-700 uppercase tracking-tighter">
                Processing Guide
              </div>

              <h3 className="font-bold text-lg text-slate-900 mb-8 border-b border-slate-50 pb-4">
                Standardized Procedure
              </h3>

              <div className="relative space-y-8">
                {/* Clean Progress Line */}
                <div className="absolute top-2 bottom-2 left-[23px] w-[2px] bg-slate-100" />

                {steps.map((step, index) => (
                  <div key={index} className="relative z-10 flex gap-5 items-center">
                    <div
                      className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center shadow-sm"
                      style={{
                        background: step.bg,
                        color: step.color,
                        border: `1px solid ${step.border}`,
                      }}
                    >
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[14px] text-slate-900 uppercase tracking-tight">{step.title}</h4>
                      <p className="text-[12px] text-slate-500 leading-snug mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Requirement Note */}
              <div className="mt-10 flex items-start gap-3 p-4 bg-slate-900 rounded-lg">
                <Lightbulb className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-[11px] text-slate-200 leading-relaxed font-medium">
                  <span className="text-white font-bold underline">Mandatory Window:</span> Applications must be
                  submitted within 3 days prior to your scheduled arrival in Malaysia.
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
