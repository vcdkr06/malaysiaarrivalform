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
} from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-4 h-4" />,
      title: "Submit Details",
      desc: "Provide your basic personal info and travel itinerary.",
      color: "#3B82F6",
      bg: "#EFF6FF",
      border: "#DBEAFE",
    },
    {
      icon: <CreditCard className="w-4 h-4" />,
      title: "Settle Payment",
      desc: "Complete your transaction through our reliable checkout.",
      color: "#8B5CF6",
      bg: "#F5F3FF",
      border: "#EDE9FE",
    },
    {
      icon: <UserCheck className="w-4 h-4" />,
      title: "Expert Review",
      desc: "Our specialists double-check everything to prevent errors.",
      color: "#F59E0B",
      bg: "#FFFBEB",
      border: "#FEF3C7",
    },
    {
      icon: <MailCheck className="w-4 h-4" />,
      title: "Get Confirmation",
      desc: "Check your inbox for your approved digital arrival pass.",
      color: "#10B981",
      bg: "#ECFDF5",
      border: "#D1FAE5",
    },
  ];

  return (
    <section
      className="relative overflow-hidden min-h-[92vh] flex items-center py-10 lg:py-0"
      style={{
        background:
          "linear-gradient(170deg, #FFFFFF 0%, #F8FAFF 20%, #F0F5FF 50%, #F5F8FF 80%, #FFFFFF 100%)",
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 right-[0%] w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(99,147,255,0.07) 0%, rgba(139,92,246,0.03) 50%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* MODIFIED: Trigger grid on md (tablet) instead of lg (desktop) */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-[1.15fr_1fr] gap-8 md:gap-10 lg:gap-16 items-center">
          
          {/* ——— LEFT COLUMN: Copy & CTA ——— */}
          <div className="flex flex-col w-full">
            {/* Badge - Desktop Only */}
            <div
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold mb-6 w-fit"
              style={{
                background: "linear-gradient(135deg, #EFF6FF, #F5F3FF)",
                border: "1px solid #DBEAFE",
                color: "#6366F1",
              }}
            >
              <Zap className="w-3.5 h-3.5" style={{ color: "#F59E0B" }} />
              Mandatory Travel Requirement
            </div>

            {/* Desktop Only Pre-heading */}
            <p
              className="hidden md:block text-xs lg:text-sm font-bold uppercase tracking-[0.15em] mb-2"
              style={{ color: "#7C9FE8" }}
            >
              MDAC Registration Portal
            </p>

            <h1
              className="text-3xl md:text-[2.25rem] lg:text-[3rem] font-extrabold leading-[1.12] mb-5 tracking-[-0.02em]"
              style={{
                color: "#2D4A6F",
                fontFamily: "'Outfit', system-ui, sans-serif",
              }}
            >
              Streamline Your Arrival
              <br className="hidden lg:block" /> into{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #4B7BE5, #7C5CE5)",
                }}
              >
                Malaysia
              </span>
            </h1>

            {/* Desktop Description */}
            <p
              className="hidden md:block text-[13px] lg:text-[15px] leading-[1.7] mb-8 max-w-lg"
              style={{ color: "#8196AE" }}
            >
              Skip the paperwork at immigration. All foreign visitors are now required to submit their digital arrival profile prior to reaching the border to ensure a smooth, hassle-free entry.
            </p>

            {/* Mobile Description (Shorter) */}
            <p
              className="block md:hidden text-[14px] leading-[1.6] mb-7 max-w-lg"
              style={{ color: "#8196AE" }}
            >
              Submit your digital arrival profile before reaching the border to ensure a smooth, hassle-free entry.
            </p>

            <div className="mb-2 md:mb-8">
              <Button
                asChild
                size="lg"
                className="font-bold h-13 px-6 lg:px-8 rounded-full transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl group text-[14px] lg:text-[15px]"
                style={{
                  background: "linear-gradient(135deg, #4B7BE5, #6366F1)",
                  color: "#FFFFFF",
                  boxShadow: "0 8px 25px rgba(75,123,229,0.25)",
                }}
              >
                <Link to="/apply" className="flex items-center gap-2 h-12">
                  Start Application
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Disclaimer - Desktop Only (Hidden on Mobile) */}
            <p
              className="hidden md:block text-[9px] lg:text-[10px] leading-relaxed max-w-md pl-3"
              style={{
                color: "#B8C7D8",
                borderLeft: "2px solid #DCE6F2",
              }}
            >
              Disclaimer: We are an independent agency assisting travelers with their documentation. We are not legally affiliated with the Malaysian government.
            </p>
          </div>

          {/* ——— RIGHT COLUMN: Stepper ——— */}
          <div className="w-full">
            <div
              className="rounded-[2rem] p-6 lg:p-9"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                backdropFilter: "blur(12px)",
                border: "1px solid #F1F5F9",
                boxShadow: "0 10px 40px rgba(45,74,111,0.04)",
              }}
            >
              <div className="flex items-center justify-between mb-8">
                <h3
                  className="font-bold text-