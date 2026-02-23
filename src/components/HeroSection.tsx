import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ClipboardList,
  CreditCard,
  UserCheck,
  MailCheck,
  Lightbulb,
  Zap,
  ShieldCheck,
  Globe,
} from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-4 h-4" />,
      num: "01",
      title: "Fill in Your Details",
      desc: "Complete the secure online form with your travel and personal information.",
      color: "#2563EB",
      accent: "rgba(37,99,235,0.1)",
    },
    {
      icon: <CreditCard className="w-4 h-4" />,
      num: "02",
      title: "Pay the Processing Fee",
      desc: "Choose from multiple secure payment methods on our encrypted portal.",
      color: "#7C3AED",
      accent: "rgba(124,58,237,0.1)",
    },
    {
      icon: <UserCheck className="w-4 h-4" />,
      num: "03",
      title: "Expert Review",
      desc: "Our team carefully verifies every application for accuracy and completeness.",
      color: "#0891B2",
      accent: "rgba(8,145,178,0.1)",
    },
    {
      icon: <MailCheck className="w-4 h-4" />,
      num: "04",
      title: "Receive & Travel",
      desc: "Get your MDAC approval and PIN by email — present it at immigration for swift entry.",
      color: "#059669",
      accent: "rgba(5,150,105,0.1)",
    },
  ];

  return (
    <section
      className="relative overflow-hidden min-h-screen flex flex-col justify-center"
      style={{
        background: "#05080F",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      {/* ── Grid texture ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Glow orbs ── */}
      <div
        className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px] z-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.18) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-[-10%] w-[400px] h-[400px] rounded-full blur-[100px] z-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 max-w-5xl relative z-10 py-16 md:py-20">
        {/* ── Badge ── */}
        <div className="flex justify-center mb-6">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold"
            style={{
              background: "rgba(37,99,235,0.12)",
              border: "1px solid rgba(37,99,235,0.3)",
              color: "#93C5FD",
            }}
          >
            <Zap className="w-3 h-3" style={{ color: "#FBBF24" }} />
            New — Malaysia Digital Arrival Card
          </div>
        </div>

        {/* ── Headline ── */}
        <div className="text-center mb-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#3B82F6" }}>
            Apply for MDAC · Air · Land · Sea
          </p>
          <h1
            className="text-3xl md:text-5xl lg:text-[3.2rem] font-black leading-[1.1] tracking-[-0.025em] mb-5"
            style={{
              color: "#F8FAFC",
              fontFamily: "'DM Sans', system-ui, sans-serif",
            }}
          >
            Skip the Queue.
            <br />
            Enter Malaysia{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #60A5FA, #A78BFA)" }}
            >
              Faster.
            </span>
          </h1>

          <p className="text-sm md:text-[15px] leading-relaxed max-w-xl mx-auto mb-8" style={{ color: "#94A3B8" }}>
            The MDAC replaces the old paper arrival card with a{" "}
            <span style={{ color: "#CBD5E1", fontWeight: 600 }}>fully digital, faster-processing system</span> — apply
            online and sail through immigration.
          </p>

          {/* ── CTA ── */}
          <div className="flex flex-wrap gap-3 items-center justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="font-bold px-8 h-12 rounded-full text-[14px] group transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]"
              style={{
                background: "linear-gradient(135deg, #2563EB, #4F46E5)",
                color: "#fff",
                border: "none",
              }}
            >
              <Link to="/apply" className="flex items-center gap-2">
                Start My Application
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          {/* ── Trust pills ── */}
          <div className="flex items-center gap-4 justify-center flex-wrap mb-10">
            {[
              { icon: <ShieldCheck className="w-3.5 h-3.5" />, text: "256-bit encrypted" },
              { icon: <Globe className="w-3.5 h-3.5" />, text: "All entry points" },
              { icon: <MailCheck className="w-3.5 h-3.5" />, text: "Instant email delivery" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5" style={{ color: "#475569" }}>
                {item.icon}
                <span className="text-[11px] font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ HOW IT WORKS — inline steps ═══ */}
        <div
          className="rounded-2xl p-5 md:p-6"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Label */}
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] mb-5" style={{ color: "#475569" }}>
            How It Works — 4 Simple Steps
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector line */}
                {index < 3 && (
                  <div
                    className="hidden md:block absolute top-5 left-[calc(100%-4px)] w-full h-[1px] z-0"
                    style={{
                      background: "linear-gradient(90deg, rgba(255,255,255,0.08), transparent)",
                    }}
                  />
                )}

                <div
                  className="relative z-10 rounded-xl p-4 h-full transition-all duration-200 hover:translate-y-[-2px]"
                  style={{
                    background: step.accent,
                    border: `1px solid ${step.color}22`,
                  }}
                >
                  {/* Icon + number */}
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        background: `${step.color}22`,
                        color: step.color,
                      }}
                    >
                      {step.icon}
                    </div>
                    <span
                      className="text-[28px] font-black leading-none select-none"
                      style={{ color: step.color, opacity: 0.15 }}
                    >
                      {step.num}
                    </span>
                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] mb-1" style={{ color: step.color }}>
                    Step {step.num}
                  </p>
                  <h3 className="text-[13px] font-bold mb-1" style={{ color: "#E2E8F0" }}>
                    {step.title}
                  </h3>
                  <p className="text-[11px] leading-relaxed" style={{ color: "#64748B" }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pro tip */}
          <div
            className="mt-4 flex items-center gap-3 rounded-xl px-4 py-3"
            style={{
              background: "rgba(251,191,36,0.06)",
              border: "1px solid rgba(251,191,36,0.15)",
            }}
          >
            <Lightbulb className="w-4 h-4 flex-shrink-0" style={{ color: "#FBBF24" }} />
            <p className="text-[12px]" style={{ color: "#94A3B8" }}>
              <span style={{ color: "#FCD34D", fontWeight: 700 }}>Pro Tip: </span>
              Apply at least <span style={{ color: "#E2E8F0", fontWeight: 600 }}>3 days before departure</span> to avoid
              any last-minute delays.
            </p>
          </div>
        </div>

        {/* ── Disclaimer ── */}
        <p className="text-center text-[10px] leading-relaxed max-w-lg mx-auto mt-6" style={{ color: "#334155" }}>
          This is an independent service provider and is not affiliated with, endorsed by, or operated by any government
          agency or official immigration authority.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
