import { Clock, Shield, Headphones, CheckCircle, FileText, Search, FolderCheck, Languages } from "lucide-react";
import batikPattern from "@/assets/batik-pattern.jpg";

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "24-Hour Processing",
      desc: "Most applications reviewed and returned within one business day.",
      stat: "< 24h",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      desc: "SSL encryption and bank-grade data protection at every step.",
      stat: "256-bit",
    },
    {
      icon: Headphones,
      title: "24/7 Assistance",
      desc: "Our support team is available around the clock for any queries.",
      stat: "24/7",
    },
    {
      icon: CheckCircle,
      title: "Accuracy Guaranteed",
      desc: "We catch errors before submission to maximise approval rates.",
      stat: "99.8%",
    },
    {
      icon: FileText,
      title: "Step-by-Step Guidance",
      desc: "Clear instructions at every stage — no guesswork required.",
      stat: "5 min",
    },
    {
      icon: Search,
      title: "Professional Review",
      desc: "A specialist checks your details for compliance before filing.",
      stat: "2x check",
    },
    {
      icon: FolderCheck,
      title: "Document Prep",
      desc: "We verify your uploads meet format and size requirements.",
      stat: "Auto",
    },
    {
      icon: Languages,
      title: "Multilingual Team",
      desc: "Support available in English, Mandarin, Arabic, and more.",
      stat: "8+ langs",
    },
  ];

  const featured = benefits.slice(0, 4);
  const rest = benefits.slice(4);

  return (
    <section className="relative bg-[#0a192f] py-16 md:py-24 overflow-hidden">
      {/* Batik Pattern Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `url(${batikPattern})`,
          backgroundSize: "600px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-transparent to-[#0a192f] z-0" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header — Centered */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-[10px] uppercase tracking-[0.25em] text-accent font-bold bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-4">
            Our Advantages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Why Travelers{" "}
            <span className="text-accent">Trust</span> Our System
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3 max-w-lg mx-auto">
            Built for speed, security, and peace of mind — every step of the way.
          </p>
        </div>

        {/* Featured Row — 4 large stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-3 md:mb-4">
          {featured.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-5 md:p-6 hover:bg-white/[0.07] hover:border-accent/30 transition-all duration-300"
              >
                {/* Stat number */}
                <p className="text-2xl md:text-3xl font-black text-accent mb-3 tracking-tight">
                  {b.stat}
                </p>

                {/* Icon + Title */}
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-accent/70" strokeWidth={2.5} />
                  <h3 className="text-[13px] md:text-sm font-bold text-white">
                    {b.title}
                  </h3>
                </div>

                <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed">
                  {b.desc}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-accent/0 group-hover:bg-accent/40 rounded-full transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* Bottom Row — 4 compact horizontal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {rest.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/[0.02] border border-white/[0.06] rounded-xl p-4 hover:bg-white/[0.05] hover:border-accent/20 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent/10 border border-accent/15 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-accent" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-[12px] md:text-[13px] font-bold text-white mb-0.5">
                    {b.title}
                  </h3>
                  <p className="text-[10px] md:text-[11px] text-slate-500 leading-snug">
                    {b.desc}
                  </p>
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
