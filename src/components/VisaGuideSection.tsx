import { Check, FileCheck, ShieldCheck, Sparkles, Mail, Globe } from "lucide-react";
import malaysiaCoupleNew from "@/assets/malaysia-couple-petronas.jpg";

const VisaGuideSection = () => {
  const highlights = [
    { text: "Guided filing system", icon: <Sparkles className="w-4 h-4" /> },
    { text: "Data verification", icon: <ShieldCheck className="w-4 h-4" /> },
    { text: "Document optimization", icon: <FileCheck className="w-4 h-4" /> },
    { text: "Direct email delivery", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-60" />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* ——— IMAGE SIDE ——— */}
          <div className="w-full lg:w-1/2 relative">
            {/* Soft decorative "Back-card" */}
            <div className="absolute -bottom-4 -left-4 w-full h-full rounded-[2.5rem] bg-blue-50/50 border border-blue-100 z-0 hidden md:block" />

            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white">
              <img
                src={malaysiaCoupleNew}
                alt="Travelers in Malaysia"
                className="w-full object-cover aspect-[4/3] md:aspect-video lg:aspect-[4/3]"
              />
              {/* Subtle color wash to match theme */}
              <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply" />
            </div>

            {/* Premium Trust Badge */}
            <div className="absolute -bottom-6 right-4 md:-right-8 bg-white p-4 md:p-5 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.1)] border border-slate-50 flex items-center gap-4 z-20">
              <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200">
                <Check className="w-6 h-6 text-white" strokeWidth={3} />
              </div>
              <div className="pr-4">
                <p className="text-xl font-black text-slate-900 leading-none">50,000+</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Global Travelers</p>
              </div>
            </div>
          </div>

          {/* — — — CONTENT SIDE — — — */}
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-slate-200">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                The Experience
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-[900] leading-[1.1] tracking-tight text-slate-900">
                We Handle the Filing, <br />
                <span className="text-blue-600">You Enjoy the Trip.</span>
              </h2>

              <div className="space-y-4 text-slate-500 font-medium leading-relaxed">
                <p className="text-sm md:text-base">
                  Our platform simplifies the MDAC process with a guided, intuitive interface. Once submitted, our
                  specialists review every detail, correcting errors to ensure
                  <span className="text-slate-900 font-bold italic underline decoration-blue-200 underline-offset-4 ml-1">
                    full compliance
                  </span>{" "}
                  before filing.
                </p>
                <p className="hidden md:block text-sm">
                  Rest easy knowing your travel documents are in professional hands. Your approved confirmation is
                  delivered directly to your inbox, ready for your arrival.
                </p>
              </div>
            </div>

            {/* Features 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-white hover:border-blue-200 hover:shadow-md group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white flex items-center justify-center text-blue-600 shadow-sm transition-transform group-hover:scale-110 border border-slate-100">
                    {item.icon}
                  </div>
                  <span className="text-[12px] md:text-[13px] font-bold text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaGuideSection;
