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
    <section className="relative py-10 md:py-16 overflow-hidden">
      {/* Background Image: KL Tower */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596422846543-75c6fc18a593?q=80&w=2070&auto=format&fit=crop"
          alt="KL Tower Malaysia"
          className="w-full h-full object-cover"
        />
        {/* Navy Overlay - slightly darker for card prominence */}
        <div className="absolute inset-0 bg-[#0a192f]/90" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-8 md:mb-12 border-l-4 border-blue-500 pl-4 md:pl-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold mb-1">Our Advantages</p>
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-tight">
            Why Travelers <span className="font-semibold">Trust Our System</span>
          </h2>
        </div>

        {/* Benefits Grid - Prominent Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="group p-5 rounded-xl bg-white shadow-2xl shadow-navy-950/50 border-b-4 border-transparent hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex items-start gap-4 lg:flex-col lg:gap-0">
                  {/* Icon Wrapper - Navy on Light Blue */}
                  <div className="flex-shrink-0 w-9 h-9 lg:w-10 lg:h-10 bg-[#f0f7ff] rounded-lg flex items-center justify-center lg:mb-4 group-hover:bg-[#0a192f] transition-colors">
                    <Icon className="w-5 h-5 text-[#0a192f] group-hover:text-white transition-colors" strokeWidth={2} />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3 className="text-[14px] md:text-sm font-bold text-[#0a192f] mb-1">{b.title}</h3>
                    <p className="text-[12px] text-slate-500 leading-snug">{b.desc}</p>
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
