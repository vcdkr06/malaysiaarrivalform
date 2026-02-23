import { Clock, Shield, Headphones, CheckCircle, FileText, Search, FolderCheck, Languages } from "lucide-react";

const WhyChooseUsSection = () => {
  const benefits = [
    { icon: Clock, title: "24-Hour Processing", desc: "Most applications reviewed and returned within one business day.", stat: "< 24h" },
    { icon: Shield, title: "Enterprise Security", desc: "SSL encryption and bank-grade data protection at every step.", stat: "256-bit" },
    { icon: Headphones, title: "24/7 Assistance", desc: "Our support team is available around the clock for any queries.", stat: "24/7" },
    { icon: CheckCircle, title: "Accuracy Guaranteed", desc: "We catch errors before submission to maximise approval rates.", stat: "99.8%" },
    { icon: FileText, title: "Step-by-Step Guidance", desc: "Clear instructions at every stage — no guesswork required.", stat: "5 min" },
    { icon: Search, title: "Professional Review", desc: "A specialist checks your details for compliance before filing.", stat: "2x check" },
    { icon: FolderCheck, title: "Document Prep", desc: "We verify your uploads meet format and size requirements.", stat: "Auto" },
    { icon: Languages, title: "Multilingual Team", desc: "Support available in English, Mandarin, Arabic, and more.", stat: "8+ langs" },
  ];

  const featured = benefits.slice(0, 4);
  const rest = benefits.slice(4);

  return (
    <section className="relative bg-gradient-hero py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(205_55%_58%/0.12),transparent_60%)] z-0" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-primary-foreground/80 font-bold bg-primary-foreground/10 border border-primary-foreground/15 px-4 py-1.5 rounded-full mb-4">
            Our Advantages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground tracking-tight leading-tight">
            Why Travelers <span className="text-white/90">Trust</span> Our System
          </h2>
          <p className="text-primary-foreground/60 text-sm md:text-base mt-3 max-w-lg mx-auto">
            Built for speed, security, and peace of mind — every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-3 md:mb-4">
          {featured.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="group relative bg-primary-foreground/[0.06] backdrop-blur-sm border border-primary-foreground/[0.1] rounded-2xl p-5 md:p-6 hover:bg-primary-foreground/[0.12] hover:border-primary-foreground/25 transition-all duration-300">
                <p className="text-2xl md:text-3xl font-black text-primary-foreground mb-3 tracking-tight">{b.stat}</p>
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-primary-foreground/70" strokeWidth={2.5} />
                  <h3 className="text-[13px] md:text-sm font-bold text-primary-foreground">{b.title}</h3>
                </div>
                <p className="text-[11px] md:text-xs text-primary-foreground/50 leading-relaxed">{b.desc}</p>
                <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary-foreground/0 group-hover:bg-primary-foreground/30 rounded-full transition-all duration-500" />
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {rest.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="flex items-start gap-3 bg-primary-foreground/[0.04] border border-primary-foreground/[0.08] rounded-xl p-4 hover:bg-primary-foreground/[0.08] hover:border-primary-foreground/20 transition-all duration-300">
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary-foreground/10 border border-primary-foreground/15 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-primary-foreground" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-[12px] md:text-[13px] font-bold text-primary-foreground mb-0.5">{b.title}</h3>
                  <p className="text-[10px] md:text-[11px] text-primary-foreground/50 leading-snug">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
