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
      title: "Complete the online form",
      desc: "Enter your personal and travel details accurately.",
      color: "#3B82F6",
      bg: "#EFF6FF",
      border: "#DBEAFE",
    },
    {
      icon: <CreditCard className="w-4 h-4" />,
      title: "Pay the processing fee",
      desc: "Use secure payment options on our portal.",
      color: "#8B5CF6",
      bg: "#F5F3FF",
      border: "#EDE9FE",
    },
    {
      icon: <UserCheck className="w-4 h-4" />,
      title: "Review & Verification",
      desc: "Specialists review your application for accuracy.",
      color: "#F59E0B",
      bg: "#FFFBEB",
      border: "#FEF3C7",
    },
    {
      icon: <MailCheck className="w-4 h-4" />,
      title: "Delivery & Approval",
      desc: "Receive MDAC confirmation & PIN via email.",
      color: "#10B981",
      bg: "#ECFDF5",
      border: "#D1FAE5",
    },
  ];

  return (
    <section
      className="relative overflow-hidden min-h-[92vh] flex items-center py-10 md:py-0"
      style={{
        background: "linear-gradient(170deg, #FFFFFF 0%, #F8FAFF 20%, #F0F5FF 50%, #F5F8FF 80%, #FFFFFF 100%)",
      }}
    >
      {/* Decorative */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 right-[0%] w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(99,147,255,0.07) 0%, rgba(139,92,246,0.03) 50%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute top-[18%] left-[6%] w-10 h-10 rounded-xl rotate-12 opacity-[0.04]"
          style={{
            background: "linear-gradient(135deg, #3B82F6, #8B5CF6)",
          }}
        />
        <div
          className="absolute bottom-[25%] right-[5%] w-6 h-6 rounded-full opacity-[0.04]"
          style={{ background: "#10B981" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:grid lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-14 items-center">
          {/* ——— LEFT: Title + CTA ——— */}
          <div className="flex flex-col w-full">
            {/* Update badge */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold mb-6 w-fit"
              style={{
                background: "linear-gradient(135deg, #EFF6FF, #F5F3FF)",
                border: "1px solid #DBEAFE",
                color: "#6366F1",
              }}
            >
              <Zap className="w-3.5 h-3.5" style={{ color: "#F59E0B" }} />
              New Update — Digital Arrival Card
            </div>

            {/* Pre-heading */}
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] mb-2" style={{ color: "#7C9FE8" }}>
              Apply For Malaysia Digital Arrival Card
            </p>

            {/* Headline */}
            <h1
              className="text-3xl md:text-[2.65rem] lg:text-[3rem] font-extrabold leading-[1.12] mb-4 tracking-[-0.02em]"
              style={{
                color: "#2D4A6F",
                fontFamily: "'Outfit', system-ui, sans-serif",
              }}
            >
              Experience Faster Entry
              <br className="hidden md:block" /> with the Updated{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #4B7BE5, #7C5CE5)",
                }}
              >
                MDAC System
              </span>
            </h1>

            {/* Description */}
            <p className="text-[14px] md:text-[15px] leading-[1.7] mb-7 max-w-lg" style={{ color: "#8196AE" }}>
              The Malaysia Digital Arrival Card (MDAC) is Malaysia's new and improved digital entry form — replacing the
              old paper-based card with a{" "}
              <span style={{ color: "#4B6A8F", fontWeight: 600 }}>faster, more secure online system</span> for travelers
              entering by air, land, or sea.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 items-center mb-7">
              <Button
                asChild
                size="lg"
                className="font-bold h-12 px-7 rounded-full transition-all duration-200 hover:translate-y-[-2px] hover:shadow-xl group text-[14px]"
                style={{
                  background: "linear-gradient(135deg, #4B7BE5, #6366F1)",
                  color: "#FFFFFF",
                  boxShadow: "0 6px 28px rgba(75,123,229,0.22)",
                }}
              >
                <Link to="/apply" className="flex items-center gap-2">
                  Apply Now
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>

              <div className="flex items-center gap-4">
                {[
                  { icon: <ShieldCheck className="w-3.5 h-3.5" />, text: "Encrypted" },
                  { icon: <Globe className="w-3.5 h-3.5" />, text: "All entry points" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5" style={{ color: "#A3B5CB" }}>
                    {item.icon}
                    <span className="text-[11px] font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <p
              className="text-[10px] leading-relaxed max-w-md pl-3"
              style={{
                color: "#B8C7D8",
                borderLeft: "2px solid #DCE6F2",
              }}
            >
              This website is a private, independent service provider and is not affiliated with, endorsed by, or
              operated by any government agency.
            </p>
          </div>

          {/* ——— RIGHT: Steps card (COMPACT TIMELINE VERSION) ——— */}
          <div className="w-full">
            <div
              className="rounded-3xl p-6 md:p-8"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E5EDF6",
                boxShadow: "0 4px 32px rgba(75,123,229,0.06), 0 1px 3px rgba(45,74,111,0.03)",
              }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-7">
                <h3 className="font-bold text-[15px]" style={{ color: "#3D5A80" }}>
                  Application Process
                </h3>
                <span
                  className="text-[10px] px-2.5 py-1 rounded-full font-bold tracking-wide"
                  style={{
                    background: "#EFF6FF",
                    color: "#4B7BE5",
                    border: "1px solid #DBEAFE",
                  }}
                >
                  4 STEPS
                </span>
              </div>

              {/* Compact Timeline Steps */}
              <div className="relative space-y-5">
                {/* Continuous background line */}
                <div className="absolute top-2 bottom-2 left-[19px] w-0.5" style={{ background: "#F1F5F9" }} />

                {steps.map((step, index) => (
                  <div key={index} className="relative z-10 flex gap-4 items-start group cursor-default">
                    {/* Number circle (Smaller & Cleaner) */}
                    <div
                      className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-105"
                      style={{
                        background: step.bg,
                        color: step.color,
                        border: "3px solid #FFFFFF", // Cuts into the vertical line behind it
                        boxShadow: `0 0 0 1px ${step.border}, 0 2px 8px ${step.color}15`,
                      }}
                    >
                      {step.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pt-0.5">
                      <div className="flex items-baseline gap-2 mb-0.5">
                        <span className="text-[10px] font-bold tracking-wider" style={{ color: step.color }}>
                          STEP {index + 1}
                        </span>
                        <h4 className="font-bold text-[13px] truncate" style={{ color: "#3D5A80" }}>
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-[12px] leading-snug" style={{ color: "#8DA2B8" }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pro Tip */}
              <div
                className="flex items-start gap-3 mt-6 px-4 py-3 rounded-xl"
                style={{
                  background: "linear-gradient(135deg, #FFFBEB, #FFF9F0)",
                  border: "1px solid #FEF3C7",
                }}
              >
                <Lightbulb className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#F59E0B" }} />
                <p className="text-[11.5px] leading-relaxed" style={{ color: "#8DA2B8" }}>
                  <span style={{ color: "#B27D10", fontWeight: 700 }}>Pro Tip:</span> Apply at least{" "}
                  <span style={{ color: "#4B6A8F", fontWeight: 700 }}>3 days before</span> your travel date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
