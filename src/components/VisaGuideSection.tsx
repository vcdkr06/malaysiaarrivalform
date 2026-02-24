import { Check, FileCheck, ShieldCheck, Sparkles, Mail } from "lucide-react";
import malaysiaCoupleNew from "@/assets/malaysia-couple-petronas.jpg";

const VisaGuideSection = () => {
  const highlights = [
    { text: "Guided digital filing system", icon: <Sparkles className="w-3 h-3" /> },
    { text: "Professional data verification", icon: <ShieldCheck className="w-3 h-3" /> },
    { text: "Format & document optimization", icon: <FileCheck className="w-3 h-3" /> },
    { text: "Direct delivery to your inbox", icon: <Mail className="w-3 h-3" /> },
  ];

  return (
    <section className="py-14 md:py-24 overflow-hidden bg-card">
      <div className="container mx-auto px-5 md:px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Image */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -top-3 -right-3 w-full h-full rounded-[20px] bg-secondary border border-border" />
            <div className="relative rounded-[20px] overflow-hidden transition-transform duration-500 group-hover:translate-y-[-3px] shadow-elegant">
              <img
                src={malaysiaCoupleNew}
                alt="Travelers exploring Malaysia"
                className="w-full h-full object-cover aspect-[4/3] md:aspect-video lg:aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-primary/[0.06]" />
            </div>

            {/* Floating stat badge */}
            <div className="absolute -bottom-4 -right-2 md:bottom-4 md:right-[-16px] px-4 py-3 rounded-2xl hidden sm:flex items-center gap-3 bg-card border border-border shadow-elegant">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-primary shadow-cta">
                <Check className="w-4 h-4 text-primary-foreground" strokeWidth={3} />
              </div>
              <div>
                <p className="text-[13px] font-extrabold text-heading-strong">50,000+</p>
                <p className="text-[10px] text-muted-foreground">Applications filed</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-5 md:space-y-7">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1.5 rounded-full bg-secondary border border-border text-primary">
                The Experience
              </span>
              <h2 className="text-2xl md:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.12] tracking-[-0.02em] text-heading-strong">
                We Handle the Filing,
                <br />
                <span className="text-primary">You Enjoy the Trip.</span>
              </h2>
            </div>

            <div className="space-y-3">
              <p className="text-[13px] md:text-[15px] leading-[1.7] text-muted-foreground">
                Our platform walks you through a simple guided form — then our specialists take over. Every detail is
                reviewed, errors are corrected, and your submission is checked for{" "}
                <span className="text-body-strong font-semibold">full compliance</span> before it's filed.
              </p>
              <p className="hidden md:block text-[13px] md:text-[15px] leading-[1.7] text-muted-foreground">
                Once approved, your confirmation and PIN are delivered straight to your inbox — ready to present at the
                border.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:translate-y-[-2px] hover:shadow-sm cursor-default bg-secondary border border-border"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110 bg-card text-primary shadow-soft">
                    {item.icon}
                  </div>
                  <span className="text-[12px] md:text-[13px] font-bold text-heading-strong">
                    {item.text}
                  </span>
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
