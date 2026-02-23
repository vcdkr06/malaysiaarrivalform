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
      icon: <ClipboardList className="w-5 h-5" />,
      num: "1",
      title: "Complete the online form",
      desc: "Enter your personal and travel details accurately.",
      color: "#3B82F6",
      bg: "#EFF6FF",
      border: "#DBEAFE",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      num: "2",
      title: "Pay the processing fee",
      desc: "Use secure payment options provided on our portal.",
      color: "#8B5CF6",
      bg: "#F5F3FF",
      border: "#EDE9FE",
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      num: "3",
      title: "Details Review & Verification",
      desc: "Our specialists manually review your application to ensure all information is complete and accurate before processing.",
      color: "#F59E0B",
      bg: "#FFFBEB",
      border: "#FEF3C7",
    },
    {
      icon: <MailCheck className="w-5 h-5" />,
      num: "4",
      title: "Delivery & Approval",
      desc: "Receive your MDAC confirmation by email with your PIN once approved. Present it at immigration for faster processing.",
      color: "#10B981",
      bg: "#ECFDF5",
      border: "#D1FAE5",
    },
  ];

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section
        className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24"
        style={{
          background: "linear-gradient(170deg, #FFFFFF 0%, #F7FAFF 25%, #EDF3FF 55%, #F4F7FF 85%, #FFFFFF 100%)",
        }}
      >
        {/* Decorative background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-28 right-[5%] w-[520px] h-[520px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.09) 0%, rgba(139,92,246,0.04) 50%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-[-15%] left-[-8%] w-[400px] h-[400px] rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(16,185,129,0.06) 0%, transparent 60%)",
            }}
          />
          {/* Floating shapes */}
          <div
            className="absolute top-[12%] right-[6%] w-14 h-14 rounded-2xl rotate-12 opacity-[0.06]"
            style={{
              background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
            }}
          />
          <div
            className="absolute top-[55%] right-[12%] w-8 h-8 rounded-full opacity-[0.05]"
            style={{ background: "#10B981" }}
          />
          <div
            className="absolute top-[30%] left-[3%] w-6 h-6 rounded-lg rotate-45 opacity-[0.05]"
            style={{ background: "#F59E0B" }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          {/* Center-aligned hero content */}
          <div className="text-center max-w-3xl mx-auto">
            {/* Update badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-bold mb-6"
              style={{
                background: "linear-gradient(135deg, #EFF6FF, #F5F3FF)",
                border: "1px solid #DBEAFE",
                color: "#4F46E5",
              }}
            >
              <Zap className="w-3.5 h-3.5" style={{ color: "#F59E0B" }} />
              New Update — Digital Arrival Card
            </div>

            {/* Pre-heading */}
            <p
              className="text-sm md:text-base font-semibold uppercase tracking-[0.15em] mb-3"
              style={{ color: "#3B82F6" }}
            >
              Apply For Malaysia Digital Arrival Card
            </p>

            {/* Main headline */}
            <h1
              className="text-3xl md:text-5xl lg:text-[3.4rem] font-black leading-[1.1] mb-5 tracking-[-0.02em]"
              style={{
                color: "#0F172A",
                fontFamily: "'Outfit', system-ui, sans-serif",
              }}
            >
              Experience Faster Entry
              <br />
              with the Updated{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #2563EB, #7C3AED)",
                }}
              >
                MDAC System
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm md:text-[16px] leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              The Malaysia Digital Arrival Card (MDAC) is Malaysia's new and improved digital entry form — replacing the
              old paper-based card with a{" "}
              <span className="font-semibold" style={{ color: "#0F172A" }}>
                faster, more secure online system
              </span>{" "}
              for travelers entering by air, land, or sea.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 items-center justify-center mb-6">
              <Button
                asChild
                size="lg"
                className="font-bold h-13 px-8 rounded-full transition-all duration-200 hover:translate-y-[-2px] hover:shadow-2xl group text-[15px]"
                style={{
                  background: "linear-gradient(135deg, #2563EB, #4F46E5)",
                  color: "#FFFFFF",
                  boxShadow: "0 8px 32px rgba(37,99,235,0.25)",
                }}
              >
                <Link to="/apply" className="flex items-center gap-2.5">
                  Apply Now
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>

            {/* Trust row */}
            <div className="flex items-center gap-4 justify-center flex-wrap mb-8">
              {[
                {
                  icon: <ShieldCheck className="w-3.5 h-3.5" />,
                  text: "256-bit encrypted",
                },
                {
                  icon: <Globe className="w-3.5 h-3.5" />,
                  text: "Air, land & sea",
                },
                {
                  icon: <MailCheck className="w-3.5 h-3.5" />,
                  text: "Email delivery",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5" style={{ color: "#94A3B8" }}>
                  {item.icon}
                  <span className="text-[11px] font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <p className="text-[10px] leading-relaxed max-w-lg mx-auto" style={{ color: "#B0BEC5" }}>
              This website is a private, independent service provider and is not affiliated with, endorsed by, or
              operated by any government agency. We are not part of or connected to any official immigration or border
              authority.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ APPLICATION PROCESS ═══════════ */}
      <section className="relative py-16 md:py-24" style={{ background: "#FFFFFF" }}>
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#3B82F6" }}>
              How It Works
            </p>
            <h2
              className="text-2xl md:text-4xl font-black tracking-[-0.02em]"
              style={{
                color: "#0F172A",
                fontFamily: "'Outfit', system-ui, sans-serif",
              }}
            >
              Application Process
            </h2>
          </div>

          {/* Steps grid — 2x2 on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative rounded-2xl p-5 md:p-6 transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg cursor-default"
                style={{
                  background: step.bg,
                  border: `1px solid ${step.border}`,
                }}
              >
                {/* Top row: number + icon */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: "#FFFFFF",
                      border: `1px solid ${step.border}`,
                      color: step.color,
                      boxShadow: `0 2px 8px ${step.color}15`,
                    }}
                  >
                    {step.icon}
                  </div>
                  <span
                    className="text-[48px] font-black leading-none opacity-[0.08] select-none"
                    style={{ color: step.color }}
                  >
                    {step.num}
                  </span>
                </div>

                {/* Step label */}
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.15em] mb-1.5 block"
                  style={{ color: step.color }}
                >
                  Step {step.num}
                </span>

                {/* Title */}
                <h3 className="font-bold text-[15px] md:text-[16px] mb-1.5" style={{ color: "#0F172A" }}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] leading-relaxed" style={{ color: "#64748B" }}>
                  {step.desc}
                </p>

                {/* Connector arrow (between 1→2 and 3→4 on desktop) */}
                {(index === 0 || index === 2) && (
                  <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: "#FFFFFF",
                        border: "1px solid #E2E8F0",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                      }}
                    >
                      <ArrowRight className="w-3 h-3" style={{ color: "#94A3B8" }} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pro Tip */}
          <div
            className="flex items-start md:items-center gap-3 md:gap-4 rounded-2xl px-5 py-4 max-w-2xl mx-auto"
            style={{
              background: "linear-gradient(135deg, #FFFBEB, #FEF9F0)",
              border: "1px solid #FEF3C7",
            }}
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "#FEF3C7" }}
            >
              <Lightbulb className="w-4 h-4" style={{ color: "#F59E0B" }} />
            </div>
            <p className="text-[13px] leading-relaxed" style={{ color: "#64748B" }}>
              <span className="font-bold" style={{ color: "#92400E" }}>
                Pro Tip:
              </span>{" "}
              Apply at least{" "}
              <span className="font-bold" style={{ color: "#0F172A" }}>
                3 days before
              </span>{" "}
              your travel date to avoid last-minute delays.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
