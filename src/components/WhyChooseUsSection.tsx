import { Clock, Shield, Headphones, CheckCircle, FileText, Search, FolderCheck, Languages } from "lucide-react";
import petronasTowers from "@/assets/petronas-towers.png";

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "24-Hour Processing",
      desc: "Most applications reviewed and returned within one business day.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      desc: "SSL encryption and bank-grade data protection at every step.",
    },
    {
      icon: Headphones,
      title: "24/7 Assistance",
      desc: "Our support team is available around the clock for any queries.",
    },
    {
      icon: CheckCircle,
      title: "Accuracy Guaranteed",
      desc: "We catch errors before submission to maximise approval rates.",
    },
    {
      icon: FileText,
      title: "Step-by-Step Guidance",
      desc: "Clear instructions at every stage — no guesswork required.",
    },
    {
      icon: Search,
      title: "Professional Review",
      desc: "A specialist checks your details for compliance before filing.",
    },
    { icon: FolderCheck, title: "Document Prep", desc: "We verify your uploads meet format and size requirements." },
    { icon: Languages, title: "Multilingual Team", desc: "Support available in English, Mandarin, Arabic, and more." },
  ];

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* Background Image: KL Tower (Static as requested) */}
      <div className="absolute inset-0 z-0">
        <img
          src={petronasTowers}
          alt="Petronas Twin Towers Malaysia"
          className="w-full h-full object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-[#0a192f]/90" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-10 md:mb-14 border-l-4 border-blue-500 pl-4 md:pl-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold mb-1">Our Advantages</p>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight">
            Why Travelers <span className="font-semibold">Trust Our System</span>
          </h2>
        </div>

        {/* Redesigned Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="group relative bg-white p-6 rounded-2xl shadow-[0_15px_35px_-10px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/20"
              >
                {/* The Redesigned Icon Wrapper */}
                <div className="relative mb-6">
                  <div className="w-12 h-12 bg-[#f0f7ff] rounded-2xl rotate-3 flex items-center justify-center transition-all duration-300 group-hover:rotate-0 group-hover:bg-[#0a192f]">
                    <Icon
                      className="w-6 h-6 text-[#0a192f] transition-colors duration-300 group-hover:text-white -rotate-3 group-hover:rotate-0"
                      strokeWidth={2.2}
                    />
                  </div>
                  {/* Subtle shadow behind the icon for depth */}
                  <div className="absolute inset-0 w-12 h-12 bg-blue-500/10 rounded-2xl -z-10 blur-sm translate-y-1" />
                </div>

                {/* Text Content */}
                <div className="space-y-2">
                  <h3 className="text-[15px] font-bold text-[#0a192f] leading-tight flex items-center gap-2">
                    {b.title}
                  </h3>
                  <p className="text-[12px] md:text-[13px] text-slate-500 leading-relaxed font-medium">{b.desc}</p>
                </div>

                {/* Lean Progress Bar (Interactive Decoration) */}
                <div className="absolute bottom-0 left-0 h-1 bg-transparent group-hover:bg-blue-500 rounded-b-2xl transition-all duration-500 w-0 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
