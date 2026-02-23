import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Users, AlertTriangle, ArrowRight, Sparkles } from "lucide-react";

const InfoCardsSection = () => {
  const cards = [
    {
      icon: FileText,
      title: "What is MDAC?",
      text: "A mandatory digital form that replaces the old paper arrival card for every foreign visitor entering Malaysia.",
      color: "#4B7BE5",
      bg: "linear-gradient(135deg, #EEF4FF, #E8EEFF)",
      border: "#DBEAFE",
    },
    {
      icon: Users,
      title: "Who needs one?",
      text: "Every foreign national arriving by air, land, or sea — regardless of visa status. Very few exemptions apply.",
      color: "#8B5CF6",
      bg: "linear-gradient(135deg, #F3F0FF, #EDE8FF)",
      border: "#EDE9FE",
    },
    {
      icon: AlertTriangle,
      title: "When to submit?",
      text: "File your MDAC within 72 hours of arrival. Late or missing submissions may delay your entry at the border.",
      color: "#E8883C",
      bg: "linear-gradient(135deg, #FFF6ED, #FFF0E2)",
      border: "#FEEFC3",
    },
  ];

  return (
    <section className="py-12 md:py-20" style={{ background: "#FFFFFF" }}>
      <div className="container mx-auto px-5 md:px-6 max-w-5xl">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <span
            className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-bold px-3.5 py-1.5 rounded-full mb-3"
            style={{
              background: "#EEF4FF",
              border: "1px solid #DBEAFE",
              color: "#4B7BE5",
            }}
          >
            Before You Apply
          </span>
          <h2
            className="text-2xl md:text-3xl font-extrabold tracking-[-0.02em]"
            style={{
              color: "#2D4A6F",
              fontFamily: "'Outfit', system-ui, sans-serif",
            }}
          >
            Essential{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(135deg, #4B7BE5, #7C5CE5)",
              }}
            >
              Entry Information
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-3 md:gap-4 mb-10 md:mb-14">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="group relative flex flex-col p-5 md:p-6 rounded-2xl transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg cursor-default overflow-hidden"
                style={{
                  background: card.bg,
                  border: `1px solid ${card.border}`,
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: `0 2px 8px ${card.color}10`,
                  }}
                >
                  <Icon className="w-[18px] h-[18px]" style={{ color: card.color }} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] mb-2" style={{ color: "#3D5A80" }}>
                  {card.title}
                </h3>

                {/* Text */}
                <p className="text-[12px] md:text-[13px] leading-relaxed" style={{ color: "#8DA2B8" }}>
                  {card.text}
                </p>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"
                  style={{ background: card.color, opacity: 0.35 }}
                />
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div
          className="relative overflow-hidden rounded-[20px] p-7 md:p-10"
          style={{
            background: "linear-gradient(135deg, #4B7BE5, #6366F1)",
            boxShadow: "0 8px 40px rgba(75,123,229,0.18)",
          }}
        >
          {/* Background glow */}
          <div
            className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
          <div
            className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-3xl"
            style={{ background: "rgba(99,102,241,0.3)" }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="text-center md:text-left">
              {/* Badge */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] mb-3"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                <Sparkles className="w-3 h-3" />
                Concierge Filing
              </div>

              <h4
                className="text-xl md:text-2xl font-extrabold mb-1.5"
                style={{
                  color: "#FFFFFF",
                  fontFamily: "'Outfit', system-ui, sans-serif",
                }}
              >
                Ready to secure your entry?
              </h4>
              <p
                className="text-[13px] md:text-[14px] max-w-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Thousands of travelers have already filed through our streamlined platform — your turn takes minutes.
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full md:w-auto font-bold text-[14px] h-12 md:h-13 px-8 rounded-full transition-all duration-200 hover:translate-y-[-2px] hover:shadow-xl active:scale-[0.97]"
              style={{
                background: "#FFFFFF",
                color: "#4B6A8F",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <Link to="/apply" className="flex items-center gap-2">
                Start My Application
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
