import { Clock, Shield, Headphones, CheckCircle, FileText, Search, FolderCheck, Languages } from "lucide-react";

const WhyChooseUsSection = () => {
  const featured = [
    {
      icon: Clock,
      title: "Same-Day Processing",
      desc: "Most filings are reviewed and returned within a single business day.",
      stat: "< 24h",
      color: "#4B7BE5",
      bg: "linear-gradient(135deg, #EEF4FF, #E8EEFF)",
      border: "#DBEAFE",
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      desc: "Every byte of your data travels through 256-bit SSL encryption.",
      stat: "256-bit",
      color: "#2563EB",
      bg: "linear-gradient(135deg, #EFF6FF, #DBEAFE)",
      border: "#BFDBFE",
    },
    {
      icon: Headphones,
      title: "Always-On Support",
      desc: "Real humans ready to help — any hour, any timezone, any question.",
      stat: "24/7",
      color: "#10B981",
      bg: "linear-gradient(135deg, #ECFDF5, #E2FBF0)",
      border: "#D1FAE5",
    },
    {
      icon: CheckCircle,
      title: "Near-Perfect Accuracy",
      desc: "We flag mistakes before they reach immigration — so you don't have to.",
      stat: "99.8%",
      color: "#E8883C",
      bg: "linear-gradient(135deg, #FFF6ED, #FFF0E2)",
      border: "#FEEFC3",
    },
  ];

  const extras = [
    {
      icon: FileText,
      title: "Guided Form",
      desc: "Finish in under 5 minutes with clear prompts at every field.",
      color: "#4B7BE5",
    },
    {
      icon: Search,
      title: "Specialist Review",
      desc: "A trained agent double-checks your data for compliance.",
      color: "#2563EB",
    },
    {
      icon: FolderCheck,
      title: "Document Check",
      desc: "We verify your uploads meet format and size standards.",
      color: "#10B981",
    },
    {
      icon: Languages,
      title: "8+ Languages",
      desc: "Support in English, Mandarin, Arabic, Bahasa & more.",
      color: "#E8883C",
    },
  ];

  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F6F9FF 40%, #F0F4FF 70%, #F8FAFF 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-10%] left-[10%] w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(75,123,229,0.05) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-8%] right-[5%] w-[350px] h-[350px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="container mx-auto px-5 md:px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span
            className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-bold px-3.5 py-1.5 rounded-full mb-4"
            style={{
              background: "#EEF4FF",
              border: "1px solid #DBEAFE",
              color: "#4B7BE5",
            }}
          >
            Why Choose Us
          </span>
          <h2
            className="text-2xl md:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.02em] leading-tight mb-3"
            style={{
              color: "#2D4A6F",
              fontFamily: "'Outfit', system-ui, sans-serif",
            }}
          >
            Built for Travelers Who{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #1D4ED8, #3B82F6)",
              }}
            >
              Value Their Time
            </span>
          </h2>
          <p className="text-sm md:text-[15px] max-w-md mx-auto leading-relaxed" style={{ color: "#8196AE" }}>
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
                className="group relative rounded-2xl p-5 md:p-6 transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg cursor-default overflow-hidden"
                style={{
                  background: b.bg,
                  border: `1px solid ${b.border}`,
                }}
              >
                {/* Large stat watermark */}
                <span
                  className="absolute -top-2 -right-1 text-[4rem] md:text-[5rem] font-black leading-none select-none opacity-[0.06] tracking-tighter"
                  style={{ color: b.color }}
                >
                  {b.stat}
                </span>

                {/* Stat value */}
                <p
                  className="text-xl md:text-2xl font-extrabold mb-3 tracking-tight relative z-10"
                  style={{ color: b.color }}
                >
                  {b.stat}
                </p>

                {/* Icon + title */}
                <div className="flex items-center gap-2 mb-1.5 relative z-10">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: "#FFFFFF", boxShadow: `0 1px 4px ${b.color}10` }}
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: b.color }} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[12px] md:text-[13px] font-bold" style={{ color: "#3D5A80" }}>
                    {b.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[10px] md:text-[11px] leading-relaxed relative z-10" style={{ color: "#8DA2B8" }}>
                  {b.desc}
                </p>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                  style={{ background: b.color, opacity: 0.4 }}
                />
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
                className="flex items-start gap-3 rounded-xl p-3.5 md:p-4 transition-all duration-200 hover:shadow-sm cursor-default"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E8EFF8",
                }}
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: `${b.color}0A`,
                    border: `1px solid ${b.color}15`,
                  }}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: b.color }} strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="text-[11px] md:text-[12px] font-bold mb-0.5" style={{ color: "#3D5A80" }}>
                    {b.title}
                  </h3>
                  <p className="text-[10px] md:text-[11px] leading-snug" style={{ color: "#8DA2B8" }}>
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
