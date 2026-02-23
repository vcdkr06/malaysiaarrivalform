import { Clock, Shield, Headphones, CheckCircle, FileText, Search, FolderCheck, Languages } from "lucide-react";

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
      {/* Background Image: KL Tower (UNCHANGED) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596422846543-75c6fc18a593?q=80&w=2070&auto=format&fit=crop"
          alt="KL Tower Malaysia"
          className="w-full h-full object-cover"
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

        {/* Benefits Grid - Enhanced Stand-out Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="group relative p-6 rounded-2xl bg-white border border-white/20 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-blue-500/10"
              >
                {/* Subtle Top Accent Line */}
                <div className="absolute top-0 left-6 right-6 h-1 bg-[#f0f7ff] group-hover:bg-blue-500 rounded-b-full transition-colors" />

                <div className="flex items-start gap-4 lg:flex-col lg:gap-0 mt-2">
                  {/* Icon Wrapper - Stronger Contrast */}
                  <div className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-[#f0f7ff] rounded-xl flex items-center justify-center lg:mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#0a192f]" strokeWidth={2.5} />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-[15px] md:text-[16px] font-bold text-[#0a192f] mb-1.5 leading-tight">
                      {b.title}
                    </h3>
                    <p className="text-[12px] md:text-[13px] text-slate-500 leading-relaxed font-medium">{b.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
