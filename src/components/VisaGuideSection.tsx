import { ShieldCheck, FileCheck, Search, MailCheck } from "lucide-react";
import malaysiaCoupleNew from "@/assets/malaysia-couple-petronas.jpg";

const VisaGuideSection = () => {
  const highlights = [
    { text: "Guided Digital Application", icon: FileCheck },
    { text: "Professional Data Verification", icon: ShieldCheck },
    { text: "Document Formatting Review", icon: Search },
    { text: "Secure Digital Delivery", icon: MailCheck },
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-300">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* IMAGE - Framed like an official photograph */}
          <div className="relative">
            <div className="p-2 border border-slate-300 bg-slate-50 rounded">
              <img
                src={malaysiaCoupleNew}
                alt="Travelers exploring Malaysia"
                className="w-full h-full object-cover aspect-[4/3] border border-slate-200 rounded-sm"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-3">
                Application Processing Protocol
              </h2>
              <div className="w-16 h-1 bg-blue-700 mb-6"></div>
            </div>

            {/* SHORTENED TEXT */}
            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                Our digital system guides applicants through all mandatory requirements. Upon submission, compliance
                specialists manually review each entry for accuracy, formatting, and completeness.
              </p>
              <p>
                This verification ensures all data meets official entry standards prior to processing. Once approved,
                the confirmation document is securely delivered to the applicant's registered email.
              </p>
            </div>

            {/* FEATURES LIST - Strict Grid */}
            <div className="mt-8 pt-8 border-t border-slate-200 grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-3 border border-slate-300 p-4 bg-slate-50 rounded">
                    <div className="flex-shrink-0 w-8 h-8 bg-white border border-slate-200 flex items-center justify-center rounded-sm">
                      <Icon className="w-4 h-4 text-blue-700" strokeWidth={2} />
                    </div>
                    <span className="text-sm font-medium text-slate-800">{item.text}</span>
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
