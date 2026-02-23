import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, CreditCard, ShieldCheck, ArrowRight, Plane, Sparkles, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Fill & Submit",
      desc: "5-minute smart form",
      color: "#3B82F6",
      bg: "#EFF6FF",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Pay Securely",
      desc: "Bank-grade encryption",
      color: "#8B5CF6",
      bg: "#F5F3FF",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Get Your PIN",
      desc: "Delivered to inbox",
      color: "#10B981",
      bg: "#ECFDF5",
    },
  ];

  return (
    <section
      className="relative overflow-hidden min-h-[80vh] flex items-center pt-8 md:pt-0"
      style={{
        background: "linear-gradient(160deg, #FFFFFF 0%, #F8FBFF 20%, #EEF4FF 50%, #F0F4FF 80%, #FFFFFF 100%)",
      }}
    >
      {/* ——— Decorative background ——— */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Vibrant gradient orbs */}
        <div
          className="absolute -top-20 right-[10%] w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(139,92,246,0.05) 50%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, rgba(59,130,246,0.04) 50%, transparent 65%)",
          }}
        />
        {/* Floating geometric shapes */}
        <div
          className="absolute top-[15%] right-[8%] w-16 h-16 rounded-2xl rotate-12 opacity-[0.07]"
          style={{ background: "linear-gradient(135deg, #3B82F6, #8B5CF6)" }}
        />
        <div
          className="absolute top-[60%] right-[15%] w-10 h-10 rounded-full opacity-[0.06]"
          style={{ background: "#10B981" }}
        />
        <div
          className="absolute top-[35%] left-[5%] w-8 h-8 rounded-lg rotate-45 opacity-[0.05]"
          style={{ background: "#F59E0B" }}
        />
      </div>

      <div className="container mx-auto px-6 py-4 md:py-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* ——— Left column ——— */}
          <div className="flex flex-col w-full">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold mb-6 w-fit"
              style={{
                background: "linear-gradient(135deg, #EFF6FF, #F5F3FF)",
                border: "1px solid #DBEAFE",
                color: "#3B82F6",
              }}
            >
              <Plane className="w-3.5 h-3.5" />
              Trusted by 50,000+ travelers
            </div>

            {/* Headline */}
            <h1
              className="text-3xl md:text-5xl lg:text-[3.6rem] font-black leading-[1.08] mb-4 md:mb-5 tracking-[-0.03em]"
              style={{
                color: "#0F172A",
                fontFamily: "'Outfit', system-ui, sans-serif",
              }}
            >
              <span className="md:hidden">
                Your Ticket Into
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #2563EB, #7C3AED)",
                  }}
                >
                  Malaysia
                </span>{" "}
                Starts Here
              </span>
              <span className="hidden md:inline">
                Your Ticket Into
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #2563EB, #7C3AED)",
                  }}
                >
                  Malaysia
                </span>{" "}
                Starts Here.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base mb-6 md:mb-8 max-w-md leading-relaxed" style={{ color: "#64748B" }}>
              Skip the paperwork stress.{" "}
              <span className="font-semibold" style={{ color: "#0F172A" }}>
                Every foreign visitor needs an MDAC
              </span>{" "}
              — we file yours in minutes so you can focus on the adventure.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 items-center mb-8">
              <Button
                asChild
                size="lg"
                className="font-bold h-12 px-7 rounded-full transition-all duration-200 hover:translate-y-[-2px] hover:shadow-2xl group"
                style={{
                  background: "linear-gradient(135deg, #2563EB, #4F46E5)",
                  color: "#FFFFFF",
                  boxShadow: "0 8px 32px rgba(37,99,235,0.25)",
                }}
              >
                <Link to="/apply" className="flex items-center gap-2">
                  Start My Application
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>

              <div
                className="flex items-center gap-2 px-4 py-2.5 rounded-full"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 1px 4px rgba(15,23,42,0.04)",
                }}
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: "#FEF3C7" }}
                >
                  <Sparkles className="w-3 h-3" style={{ color: "#F59E0B" }} />
                </div>
                <p className="text-xs font-medium" style={{ color: "#64748B" }}>
                  Takes only{" "}
                  <span className="font-bold" style={{ color: "#0F172A" }}>
                    5 minutes
                  </span>
                </p>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-2 flex-wrap">
              {["256-bit SSL", "Instant delivery", "24/7 support"].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                  style={{
                    background: "#F8FAFC",
                    border: "1px solid #F1F5F9",
                  }}
                >
                  <CheckCircle2 className="w-3 h-3" style={{ color: "#10B981" }} />
                  <span className="text-[11px] font-medium" style={{ color: "#64748B" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ——— Right column: Steps reimagined ——— */}
          <div className="relative w-full order-2 lg:order-none">
            {/* Main card */}
            <div
              className="relative rounded-3xl p-6 lg:p-8"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 8px 40px rgba(15,23,42,0.06), 0 1px 3px rgba(15,23,42,0.04)",
              }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-7">
                <div>
                  <h3 className="font-bold text-[15px] mb-0.5" style={{ color: "#0F172A" }}>
                    How it works
                  </h3>
                  <p className="text-[12px]" style={{ color: "#94A3B8" }}>
                    Three steps to your MDAC
                  </p>
                </div>
                <div
                  className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                  style={{
                    background: "linear-gradient(135deg, #EFF6FF, #F5F3FF)",
                    color: "#4F46E5",
                    border: "1px solid #E0E7FF",
                  }}
                >
                  ~ 24h turnaround
                </div>
              </div>

              {/* Steps — vertical timeline */}
              <div className="relative">
                {steps.map((step, index) => (
                  <div key={index} className="relative flex gap-5 mb-2 last:mb-0">
                    {/* Timeline rail */}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 hover:scale-105"
                        style={{
                          background: step.bg,
                          color: step.color,
                          boxShadow: `0 4px 12px ${step.color}12`,
                        }}
                      >
                        {step.icon}
                      </div>
                      {index < steps.length - 1 && (
                        <div
                          className="w-0.5 flex-1 my-1.5 rounded-full min-h-[20px]"
                          style={{
                            background: `linear-gradient(to bottom, ${step.color}20, ${steps[index + 1].color}20)`,
                          }}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className="flex-1 rounded-2xl p-4 mb-2 transition-all duration-200 hover:shadow-sm cursor-default"
                      style={{
                        background: step.bg + "66",
                        border: `1px solid ${step.color}10`,
                      }}
                    >
                      <div className="flex items-center gap-2.5 mb-1">
                        <span className="text-[10px] font-extrabold tracking-widest" style={{ color: step.color }}>
                          STEP {index + 1}
                        </span>
                      </div>
                      <h4 className="font-bold text-[14px] mb-0.5" style={{ color: "#0F172A" }}>
                        {step.title}
                      </h4>
                      <p className="text-[12px] leading-relaxed" style={{ color: "#64748B" }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom stats bar */}
              <div className="mt-6 pt-5 flex items-center justify-between" style={{ borderTop: "1px solid #F1F5F9" }}>
                <div className="flex items-center gap-4">
                  {[
                    { val: "98%", label: "Approved" },
                    { val: "50K+", label: "Filed" },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <p className="text-[18px] font-black" style={{ color: "#0F172A" }}>
                        {s.val}
                      </p>
                      <p className="text-[10px] uppercase tracking-wider font-medium" style={{ color: "#94A3B8" }}>
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                  style={{
                    background: "#ECFDF5",
                    border: "1px solid #D1FAE5",
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#10B981" }} />
                  <span className="text-[10px] font-bold" style={{ color: "#059669" }}>
                    LIVE
                  </span>
                </div>
              </div>
            </div>

            {/* Floating mini-card accent */}
            <div
              className="absolute -bottom-4 -left-4 px-4 py-3 rounded-2xl hidden lg:flex items-center gap-3"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
              }}
            >
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#FEF3C7" }}>
                <span className="text-base">🇲🇾</span>
              </div>
              <div>
                <p className="text-[11px] font-bold" style={{ color: "#0F172A" }}>
                  Malaysia MDAC
                </p>
                <p className="text-[10px]" style={{ color: "#94A3B8" }}>
                  Required since Jan 2024
                </p>
              </div>
            </div>
          </div>

          {/* ——— Disclaimer ——— */}
          <div className="order-3 lg:col-span-2 lg:mt-2">
            <p
              className="text-[9px] md:text-[10px] leading-relaxed max-w-md pl-3"
              style={{
                color: "#94A3B8",
                borderLeft: "2px solid #E0E7FF",
              }}
            >
              Independent service provider. Not affiliated with government agencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
