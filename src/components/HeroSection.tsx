import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, CreditCard, UserCheck, MailCheck, Lightbulb, Zap } from "lucide-react";
import malaysiaPattern from "@/assets/malaysia-pattern-bg.png";

const HeroSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-4 h-4" />,
      title: "Submit Details",
      desc: "Provide your basic personal info and travel itinerary.",
      color: "#4B7BE5",
      bg: "linear-gradient(135deg, #EEF4FF, #E8EEFF)",
      border: "#DBEAFE",
    },
    {
      icon: <CreditCard className="w-4 h-4" />,
      title: "Settle Payment",
      desc: "Complete your transaction through our reliable checkout.",
      color: "#8B5CF6",
      bg: "linear-gradient(135deg, #F3F0FF, #EDE8FF)",
      border: "#EDE9FE",
    },
    {
      icon: <UserCheck className="w-4 h-4" />,
      title: "Expert Review",
      desc: "Our specialists double-check everything to prevent errors.",
      color: "#E8883C",
      bg: "linear-gradient(135deg, #FFF6ED, #FFF0E2)",
      border: "#FEEFC3",
    },
    {
      icon: <MailCheck className="w-4 h-4" />,
      title: "Get Confirmation",
      desc: "Check your inbox for your approved digital arrival pass.",
      color: "#10B981",
      bg: "linear-gradient(135deg, #ECFDF5, #E2FBF0)",
      border: "#D1FAE5",
    },
  ];

  return (
    <section
      className="relative overflow-hidden min-h-[92vh] flex items-center py-6 md:py-10 lg:py-0"
      style={{
        background: "linear-gradient(170deg, #FFFFFF 0%, #F8FAFF 20%, #F0F4FF 50%, #F6F8FF 80%, #FFFFFF 100%)",
      }}
    >
      {/* Pattern Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${malaysiaPattern})`,
          backgroundSize: "800px",
          backgroundRepeat: "repeat",
          opacity: 0.05,
        }}
      />
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 right-[0%] w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, rgba(37,99,235,0.03) 50%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-[1.15fr_1fr] gap-5 md:gap-10 lg:gap-16 items-center">
          {/* ——— LEFT COLUMN: Copy & CTA ——— */}
          <div className="flex flex-col w-full">
            {/* Badge - Desktop Only */}
            <div className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold mb-6 w-fit bg-secondary border border-border text-primary">
              <Zap className="w-3.5 h-3.5 text-warning" />
              Mandatory Travel Requirement
            </div>

            {/* Desktop Only Pre-heading */}
            <p className="hidden md:block text-xs lg:text-sm font-bold uppercase tracking-[0.15em] mb-2 text-primary-light">
              MDAC Registration Portal
            </p>

            <h1
              className="text-3xl md:text-[2.25rem] lg:text-[3rem] font-extrabold leading-[1.12] mb-3 md:mb-5 tracking-[-0.02em] text-foreground"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              Streamline Your Arrival
              <br className="hidden lg:block" /> into{" "}
              <span
                className="bg-clip-text text-transparent"
                 style={{
                  backgroundImage: "linear-gradient(135deg, #1D4ED8, #3B82F6, #60A5FA)",
                }}
              >
                Malaysia
              </span>
            </h1>

            {/* Desktop Description */}
            <p className="hidden md:block text-[13px] lg:text-[15px] leading-[1.7] mb-8 max-w-lg text-muted-foreground">
              Skip the paperwork at immigration. All foreign visitors are now required to submit their digital arrival
              profile prior to reaching the border to ensure a smooth, hassle-free entry.
            </p>

            {/* Mobile Description */}
            <p className="block md:hidden text-[14px] leading-[1.5] mb-5 max-w-lg text-muted-foreground">
              Submit your digital arrival profile before reaching the border to ensure a smooth, hassle-free entry.
            </p>

            <div className="mb-0 md:mb-8">
              <Button
                asChild
                size="lg"
                className="font-bold h-12 lg:h-13 px-6 lg:px-8 rounded-full transition-all duration-300 hover:translate-y-[-2px] group text-[14px] lg:text-[15px] w-full md:w-auto text-white border-0"
                style={{
                  background: "linear-gradient(135deg, #1D4ED8, #3B82F6, #60A5FA)",
                  boxShadow: "0 8px 30px rgba(59,130,246,0.3), 0 2px 8px rgba(29,78,216,0.2)",
                }}
              >
                <Link to="/apply" className="flex items-center justify-center gap-2 h-12">
                  Start Application
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Disclaimer - Desktop Only */}
            <p className="hidden md:block text-[9px] lg:text-[10px] leading-relaxed max-w-md pl-3 text-muted-foreground/60 border-l-2 border-border">
              Disclaimer: We are an independent agency assisting travelers with their documentation. We are not legally
              affiliated with the Malaysian government.
            </p>
          </div>

          {/* ——— RIGHT COLUMN: Stepper ——— */}
          <div className="w-full py-2 md:py-6 lg:py-10">
            <div className="rounded-[1.5rem] md:rounded-[2rem] p-4 md:p-5 lg:p-7 bg-card/80 backdrop-blur-xl border border-border shadow-soft">
              <div className="flex items-center justify-between mb-4 md:mb-5 lg:mb-6">
                <h3 className="font-bold text-[14px] lg:text-[16px] text-foreground">How It Works</h3>
                <span className="text-[9px] lg:text-[10px] px-2.5 py-1 md:px-3 md:py-1.5 rounded-full font-bold tracking-widest uppercase bg-secondary text-muted-foreground border border-border">
                  Quick Guide
                </span>
              </div>

              {/* Stepper */}
              <div className="relative space-y-3 md:space-y-4 lg:space-y-5 pl-1">
                <div
                  className="absolute top-2 bottom-2 left-[19px] md:left-[21px] border-l-[1.5px] border-dashed"
                  style={{ borderColor: "#DCE6F2" }}
                />

                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="relative z-10 flex gap-3 md:gap-4 lg:gap-5 items-center group cursor-default"
                  >
                    <div
                      className="w-9 h-9 md:w-10 md:h-10 rounded-xl md:rounded-2xl flex-shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{
                        background: step.bg,
                        color: step.color,
                        border: `1px solid ${step.border}`,
                      }}
                    >
                      {step.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-[13px] lg:text-[14px] mb-0.5 text-foreground">{step.title}</h4>
                      <p className="text-[11px] lg:text-[12px] leading-tight md:leading-snug text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Alert / Notice */}
              <div className="flex items-start gap-2.5 md:gap-3 mt-4 md:mt-5 lg:mt-6 px-3 py-2.5 md:px-4 md:py-3 rounded-xl md:rounded-2xl bg-secondary border border-border">
                <Lightbulb className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0 mt-0.5 text-primary" />
                <p className="text-[10.5px] md:text-[11px] lg:text-[12px] leading-relaxed text-muted-foreground">
                  <span className="text-foreground font-bold">Important Note:</span> Travelers must submit this form
                  within <span className="text-primary font-bold">3 days prior</span> to their scheduled arrival date.
                </p>
              </div>
            </div>

            {/* Disclaimer - Mobile Only */}
            <p className="block md:hidden mt-3 text-[9.5px] leading-relaxed text-center px-2 text-muted-foreground/60">
              Disclaimer: We are an independent agency assisting travelers with their documentation. We are not legally
              affiliated with the Malaysian government.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
