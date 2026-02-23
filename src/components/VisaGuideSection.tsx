import { Check, FileCheck, ShieldCheck, Sparkles, Mail } from "lucide-react";
import malaysiaCoupleNew from "@/assets/malaysia-couple-petronas.jpg";

const VisaGuideSection = () => {
  const highlights = [
    {
      text: "Guided digital filing system",
      icon: <Sparkles className="w-3 h-3" />,
      color: "#4B7BE5",
      bg: "#EEF4FF",
      border: "#DBEAFE",
    },
    {
      text: "Professional data verification",
      icon: <ShieldCheck className="w-3 h-3" />,
      color: "#2563EB",
      bg: "#EFF6FF",
      border: "#BFDBFE",
    },
    {
      text: "Format & document optimization",
      icon: <FileCheck className="w-3 h-3" />,
      color: "#E8883C",
      bg: "#FFF6ED",
      border: "#FEEFC3",
    },
    {
      text: "Direct delivery to your inbox",
      icon: <Mail className="w-3 h-3" />,
      color: "#10B981",
      bg: "#ECFDF5",
      border: "#D1FAE5",
    },
  ];

  return (
    <section className="py-14 md:py-24 overflow-hidden" style={{ background: "#FFFFFF" }}>
      <div className="container mx-auto px-5 md:px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* ——— Image ——— */}
          <div className="w-full lg:w-1/2 relative group">
            {/* Decorative accents */}
            <div
              className="absolute -top-3 -right-3 w-full h-full rounded-[20px]"
              style={{
                background: "linear-gradient(135deg, #EEF4FF, #F3F0FF)",
                border: "1px solid #E8EFF8",
              }}
            />

            {/* Main image */}
            <div
              className="relative rounded-[20px] overflow-hidden transition-transform duration-500 group-hover:translate-y-[-3px]"
              style={{
                boxShadow: "0 8px 40px rgba(75,123,229,0.1), 0 2px 8px rgba(45,74,111,0.04)",
              }}
            >
              <img
                src={malaysiaCoupleNew}
                alt="Travelers exploring Malaysia"
                className="w-full h-full object-cover aspect-[4/3] md:aspect-video lg:aspect-[4/3]"
              />
              {/* Soft overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(29,78,216,0.12) 0%, transparent 50%)",
                }}
              />
            </div>

            {/* Floating stat badge */}
            <div
              className="absolute -bottom-4 -right-2 md:bottom-4 md:right-[-16px] px-4 py-3 rounded-2xl hidden sm:flex items-center gap-3"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E8EFF8",
                boxShadow: "0 8px 24px rgba(75,123,229,0.1)",
              }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #1D4ED8, #3B82F6)",
                  boxShadow: "0 4px 12px rgba(59,130,246,0.25)",
                }}
              >
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <div>
                <p className="text-[13px] font-extrabold" style={{ color: "#2D4A6F" }}>
                  50,000+
                </p>
                <p className="text-[10px]" style={{ color: "#8DA2B8" }}>
                  Applications filed
                </p>
              </div>
            </div>
          </div>

          {/* ——— Content ——— */}
          <div className="w-full lg:w-1/2 space-y-5 md:space-y-7">
            {/* Label + heading */}
            <div className="space-y-3">
              <span
                className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1.5 rounded-full"
                style={{
                  background: "#EEF4FF",
                  border: "1px solid #DBEAFE",
                  color: "#4B7BE5",
                }}
              >
                The Experience
              </span>
              <h2
                className="text-2xl md:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.12] tracking-[-0.02em]"
                style={{
                  color: "#2D4A6F",
                  fontFamily: "'Outfit', system-ui, sans-serif",
                }}
              >
                We Handle the Filing,
                <br />
                <span
                  className="bg-clip-text text-transparent"
                   style={{
                    backgroundImage: "linear-gradient(135deg, #1D4ED8, #3B82F6, #60A5FA)",
                  }}
                >
                  You Enjoy the Trip.
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <p className="text-[13px] md:text-[15px] leading-[1.7]" style={{ color: "#8196AE" }}>
                Our platform walks you through a simple guided form — then our specialists take over. Every detail is
                reviewed, errors are corrected, and your submission is checked for{" "}
                <span style={{ color: "#4B6A8F", fontWeight: 600 }}>full compliance</span> before it's filed.
              </p>
              <p className="hidden md:block text-[13px] md:text-[15px] leading-[1.7]" style={{ color: "#8196AE" }}>
                Once approved, your confirmation and PIN are delivered straight to your inbox — ready to present at the
                border.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:translate-y-[-2px] hover:shadow-sm cursor-default"
                  style={{
                    background: item.bg,
                    border: `1px solid ${item.border}`,
                  }}
                >
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                    style={{
                      background: "#FFFFFF",
                      color: item.color,
                      boxShadow: `0 2px 8px ${item.color}12`,
                    }}
                  >
                    {item.icon}
                  </div>
                  <span className="text-[12px] md:text-[13px] font-bold" style={{ color: "#3D5A80" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaGuideSection;
