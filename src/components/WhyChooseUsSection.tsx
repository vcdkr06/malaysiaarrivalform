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
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Background Image: KL Tower */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596422846543-75c6fc18a593?q=80&w=2070&auto=format&fit=crop"
          alt="KL Tower Malaysia"
          className="w-full h-full object-cover"
        />
        {/* Dark Navy Overlay for Readability */}
        <div className="absolute inset-0 bg-[#0a192f]/90 md:bg-[#0a192f]/85 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header - Lean & White Text for Contrast */}
        <div className="mb-8 md:mb-14 border-l-2 border-blue-400 pl-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold mb-1">Our Advantages</p>
          <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight">
            Why Travelers <span className="font-semibold">Trust Our System</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4 lg:flex-col lg:gap-0">
                  {/* Icon Wrapper */}
                  <div className="flex-shrink-0 w-9 h-9 lg:w-11 lg:h-11 bg-blue-500/10 rounded-lg flex items-center justify-center lg:mb-4 group-hover:bg-blue-500 transition-colors">
                    <Icon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" strokeWidth={2} />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-[14px] md:text-sm font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {b.title}
                    </h3>
                    <p className="text-[12px] text-slate-300 leading-snug">{b.desc}</p>
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
