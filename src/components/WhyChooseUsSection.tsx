import { Clock, Shield, Headphones, CheckCircle, FileText, Search, FolderCheck, Languages } from "lucide-react";

const WhyChooseUsSection = () => {
  const featured = [
    { icon: Clock, title: "Same-Day Processing", desc: "Most filings are reviewed and returned within a single business day.", stat: "< 24h" },
    { icon: Shield, title: "Bank-Level Security", desc: "Every byte of your data travels through 256-bit SSL encryption.", stat: "256-bit" },
    { icon: Headphones, title: "Always-On Support", desc: "Real humans ready to help — any hour, any timezone, any question.", stat: "24/7" },
    { icon: CheckCircle, title: "Near-Perfect Accuracy", desc: "We flag mistakes before they reach immigration — so you don't have to.", stat: "99.8%" },
  ];

  const extras = [
    { icon: FileText, title: "Guided Form", desc: "Finish in under 5 minutes with clear prompts at every field." },
    { icon: Search, title: "Specialist Review", desc: "A trained agent double-checks your data for compliance." },
    { icon: FolderCheck, title: "Document Check", desc: "We verify your uploads meet format and size standards." },
    { icon: Languages, title: "8+ Languages", desc: "Support in English, Mandarin, Arabic, Bahasa & more." },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-secondary">
      {/* Decorative blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[10%] w-[400px] h-[400px] rounded-full blur-3xl bg-primary/5" />
        <div className="absolute bottom-[-8%] right-[5%] w-[350px] h-[350px] rounded-full blur-3xl bg-primary/[0.04]" />
      </div>

      <div className="container mx-auto px-5 md:px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-bold px-3.5 py-1.5 rounded-full mb-4 bg-card border border-border text-primary">
            Why Choose Us
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.02em] leading-tight mb-3 text-heading-strong">
            Built for Travelers Who <span className="text-primary">Value Their Time</span>
          </h2>
          <p className="text-sm md:text-[15px] max-w-md mx-auto leading-relaxed text-muted-foreground">
            Speed, security, and peace of mind — baked into every step of your application.
          </p>
        </div>

        {/* Featured 4 — stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-3 md:mb-4">
          {featured.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="group relative rounded-2xl p-5 md:p-6 transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg cursor-default overflow-hidden bg-card border border-border"
              >
                <span className="absolute -top-2 -right-1 text-[4rem] md:text-[5rem] font-black leading-none select-none opacity-[0.06] tracking-tighter text-primary">
                  {b.stat}
                </span>
                <p className="text-xl md:text-2xl font-extrabold mb-3 tracking-tight relative z-10 text-primary">
                  {b.stat}
                </p>
                <div className="flex items-center gap-2 mb-1.5 relative z-10">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-card shadow-soft">
                    <Icon className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[12px] md:text-[13px] font-bold text-heading-strong">{b.title}</h3>
                </div>
                <p className="text-[10px] md:text-[11px] leading-relaxed relative z-10 text-muted-foreground">{b.desc}</p>
                <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left bg-primary opacity-40" />
              </div>
            );
          })}
        </div>

        {/* Bottom row — compact extras */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {extras.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl p-3.5 md:p-4 transition-all duration-200 hover:shadow-sm cursor-default bg-card border border-border"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-primary/[0.06] border border-primary/10">
                  <Icon className="w-3.5 h-3.5 text-primary" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-[11px] md:text-[12px] font-bold mb-0.5 text-heading-strong">{b.title}</h3>
                  <p className="text-[10px] md:text-[11px] leading-snug text-muted-foreground">{b.desc}</p>
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
