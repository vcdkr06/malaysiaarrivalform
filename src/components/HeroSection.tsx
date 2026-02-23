import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, CreditCard, ShieldCheck, ArrowRight, Clock } from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <FileText className="w-4 h-4" />,
      num: "01",
      title: "Complete Application",
      desc: "Provide travel details via our simplified digital form.",
    },
    {
      icon: <CreditCard className="w-4 h-4" />,
      num: "02",
      title: "Secure Settlement",
      desc: "Process fees through our bank-grade encrypted portal.",
    },
    {
      icon: <ShieldCheck className="w-4 h-4" />,
      num: "03",
      title: "Review & Delivery",
      desc: "Specialists audit data before emailing your MDAC PIN.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden min-h-[80vh] flex items-center pt-8 md:pt-0"
      style={{ background: "linear-gradient(165deg, #061B2E 0%, #0B2A45 40%, #0E3358 80%, #0A2540 100%)" }}
    >
      {/* Geometric accents */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top-right circle */}
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(56,163,209,0.06) 0%, transparent 65%)" }}
        />
        {/* Bottom-left glow */}
        <div
          className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(232,185,72,0.04) 0%, transparent 60%)" }}
        />
        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Diagonal accent line */}
        <div
          className="absolute top-0 right-[30%] w-px h-full opacity-[0.04]"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(56,163,209,0.6), transparent)" }}
        />
      </div>

      <div className="container mx-auto px-6 py-4 md:py-8 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px] gap-4 md:gap-6 lg:gap-20 items-start max-w-7xl mx-auto">
          {/* ——— Left column ——— */}
          <div className="flex flex-col w-full">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] mb-5 w-fit"
              style={{
                background: "rgba(56,163,209,0.08)",
                border: "1px solid rgba(56,163,209,0.15)",
                color: "#38A3D1",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#38A3D1" }} />
              Official Entry Concierge
            </div>

            {/* Headline */}
            <h1
              className="text-3xl md:text-5xl lg:text-[4.25rem] font-black text-white leading-[1.08] mb-3 md:mb-5 tracking-[-0.03em]"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              <span className="md:hidden uppercase">
                Malaysia Digital
                <br />
                <span style={{ color: "#38A3D1" }}>Arrival Card</span>
              </span>
              <span className="hidden md:inline">
                Fast-Track Your
                <br />
                <span style={{ color: "#38A3D1" }}>Malaysia</span> Entry.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-[17px] mb-5 md:mb-9 max-w-lg leading-relaxed" style={{ color: "#7A9AB5" }}>
              <span className="font-semibold" style={{ color: "#C8D8E8" }}>
                Required for all foreign visitors
              </span>{" "}
              — submit an MDAC 72 hours before arrival. We handle the filing to ensure your entry is seamless.
            </p>

            {/* CTA row — Desktop */}
            <div className="hidden lg:flex flex-wrap gap-4 items-center mb-8">
              <Button
                asChild
                size="lg"
                className="font-bold h-12 px-8 rounded-lg shadow-xl transition-all duration-200 hover:translate-y-[-1px]"
                style={{
                  background: "linear-gradient(135deg, #2B8FBF, #38A3D1)",
                  color: "#fff",
                  boxShadow: "0 8px 28px rgba(56,163,209,0.25)",
                }}
              >
                <Link to="/apply" className="flex items-center gap-2">
                  Apply for MDAC Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <div
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <Clock className="w-3.5 h-3.5" style={{ color: "#38A3D1" }} />
                <p className="text-xs font-medium" style={{ color: "#7A9AB5" }}>
                  Apply <span style={{ color: "#C8D8E8" }}>3 days</span> before travel.
                </p>
              </div>
            </div>

            {/* Trust strip */}
            <div className="hidden lg:flex items-center gap-6">
              {[
                { val: "50K+", label: "Applications" },
                { val: "98%", label: "Approval rate" },
                { val: "24/7", label: "Support" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div>
                    <p className="text-white font-extrabold text-sm tracking-tight">{stat.val}</p>
                    <p className="text-[10px] uppercase tracking-widest" style={{ color: "#506A80" }}>
                      {stat.label}
                    </p>
                  </div>
                  {i < 2 && <div className="w-px h-6 ml-3" style={{ background: "rgba(255,255,255,0.06)" }} />}
                </div>
              ))}
            </div>
          </div>

          {/* ——— Processing Card ——— */}
          <div className="relative group w-full order-2 lg:order-none mb-2">
            {/* Glow */}
            <div
              className="absolute -inset-3 rounded-3xl opacity-20 blur-2xl"
              style={{ background: "radial-gradient(circle, rgba(56,163,209,0.15), transparent)" }}
            />

            <div
              className="relative rounded-2xl p-5 lg:p-7 shadow-2xl"
              style={{
                background: "linear-gradient(170deg, rgba(14,51,88,0.85) 0%, rgba(8,34,60,0.95) 100%)",
                backdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#38A3D1" }} />
                  <h3 className="text-white font-bold tracking-[0.12em] uppercase text-[10px]">Processing Journey</h3>
                </div>
                <span
                  className="text-[9px] px-2.5 py-1 rounded-full font-bold"
                  style={{
                    background: "rgba(56,163,209,0.08)",
                    color: "#38A3D1",
                    border: "1px solid rgba(56,163,209,0.15)",
                  }}
                >
                  FAST-TRACK
                </span>
              </div>

              {/* Steps */}
              <div className="space-y-2">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-3 rounded-xl transition-all duration-200 hover:bg-white/[0.02] group/step"
                    style={{ border: "1px solid transparent" }}
                  >
                    {/* Number + icon */}
                    <div className="flex-shrink-0 relative">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200"
                        style={{
                          background: "rgba(56,163,209,0.06)",
                          border: "1px solid rgba(56,163,209,0.1)",
                          color: "#38A3D1",
                        }}
                      >
                        {step.icon}
                      </div>
                      {/* Connector line */}
                      {index < steps.length - 1 && (
                        <div
                          className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-4"
                          style={{ background: "rgba(56,163,209,0.12)" }}
                        />
                      )}
                    </div>
                    <div className="pt-0.5">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[9px] font-bold tracking-widest" style={{ color: "#38A3D1" }}>
                          {step.num}
                        </span>
                        <h4 className="text-white font-bold text-[13px]">{step.title}</h4>
                      </div>
                      <p className="text-[11px] leading-relaxed" style={{ color: "#6B8BA3" }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card footer */}
              <div
                className="mt-5 pt-4 flex items-center justify-between"
                style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
              >
                <p className="text-[10px] font-medium" style={{ color: "#506A80" }}>
                  Average processing: <span style={{ color: "#C8D8E8" }}>~24 hrs</span>
                </p>
                <div className="flex gap-1">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-1 h-1 rounded-full"
                      style={{ background: i === 1 ? "#38A3D1" : "rgba(56,163,209,0.2)" }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ——— Disclaimer ——— */}
          <div className="order-3 lg:col-start-1 lg:mt-[-1rem]">
            <p
              className="text-[9px] md:text-[10px] leading-relaxed max-w-md pl-3"
              style={{ color: "#3D566C", borderLeft: "1px solid rgba(56,163,209,0.15)" }}
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
