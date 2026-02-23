import { Check } from "lucide-react";
import malaysiaCoupleNew from "@/assets/malaysia-couple-petronas.jpg";

const VisaGuideSection = () => {
  const highlights = [
    "Guided digital filing system",
    "Professional data verification",
    "Format & document optimization",
    "Direct delivery to your inbox",
  ];

  return (
    <section className="py-12 md:py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-primary/10 rounded-full -z-10" />
            <div className="relative rounded-2xl overflow-hidden shadow-elegant transition-transform duration-500 group-hover:scale-[1.01]">
              <img src={malaysiaCoupleNew} alt="Travelers in Malaysia" className="w-full h-full object-cover aspect-[4/3] md:aspect-video lg:aspect-[4/3]" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">The Experience</p>
              <h2 className="text-3xl md:text-5xl font-light text-foreground leading-[1.1] tracking-tight">
                We Handle the Filing, <br />
                <span className="font-semibold italic text-primary">You Enjoy the Trip.</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                Our system simplifies the entire MDAC application. Fill in a guided digital form, and our specialists
                take over—reviewing your details, correcting potential errors, and ensuring full compliance before submission.
              </p>
              <p className="hidden md:block">
                We handle the secure submission to the appropriate authorities and deliver your approved confirmation
                directly to your inbox.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-secondary border border-border">
                  <div className="flex-shrink-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
                  </div>
                  <span className="text-[13px] font-bold text-foreground">{item}</span>
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
