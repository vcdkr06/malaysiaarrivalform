import { CheckCircle, ShieldCheck, FileCheck, Sparkles, Mail } from "lucide-react";
import malaysiaCoupleNew from "@/assets/malaysia-couple-petronas.jpg";

const VisaGuideSection = () => {
  const highlights = [
    { text: "Guided Digital Filing System", icon: Sparkles },
    { text: "Professional Data Verification", icon: ShieldCheck },
    { text: "Format & Document Optimization", icon: FileCheck },
    { text: "Direct Delivery to Your Inbox", icon: Mail },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
              <img
                src={malaysiaCoupleNew}
                alt="Travelers exploring Malaysia"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>

            {/* Structured Stat Panel */}
            <div className="absolute bottom-6 left-6 bg-white border border-slate-200 shadow-md px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white">
                  <CheckCircle className="w-5 h-5" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">50,000+</p>
                  <p className="text-xs uppercase tracking-wide text-slate-500">Applications Successfully Filed</p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-blue-600 font-semibold">The Experience</p>

              <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight text-slate-900">
                We Manage the Filing Process.
                <br />
                <span className="text-blue-600">You Focus on Your Journey.</span>
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Our structured digital system guides you step-by-step through the required information. Once submitted,
                our compliance specialists review each entry for accuracy, formatting, and completeness.
              </p>
              <p>
                Every application undergoes manual verification before processing to ensure it meets official entry
                requirements. Upon approval, your confirmation and reference details are delivered directly to your
                email.
              </p>
            </div>

            {/* FEATURES LIST */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-3 border border-slate-200 p-4 bg-slate-50">
                    <div className="mt-1">
                      <Icon className="w-4 h-4 text-blue-600" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaGuideSection;
