import { Clock, ShieldCheck, Headphones, BadgeCheck, FileText, Search, FolderCheck, Languages } from "lucide-react";

const WhyChooseUsSection = () => {
  const guarantees = [
    {
      icon: Clock,
      title: "Fast Processing",
      desc: "Get your Malaysia Digital Arrival Card approved within 24-48 hours with our streamlined process.",
    },
    {
      icon: ShieldCheck,
      title: "100% Secure",
      desc: "Your personal information is encrypted and protected with bank-level security protocols.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Our dedicated support team is available around the clock to assist you with any questions.",
    },
    {
      icon: BadgeCheck,
      title: "100% Money-Back",
      desc: "If you don’t get approved, you get a full refund. We review every application before submission.",
    },
  ];

  const features = [
    {
      icon: FileText,
      title: "Clear, Step-by-Step Forms",
      desc: "Easy guidance at every stage so you know exactly what to enter and where.",
    },
    {
      icon: Search,
      title: "Professional Review",
      desc: "We carefully check your information and correct formatting issues before submission.",
    },
    {
      icon: FolderCheck,
      title: "Document Preparation",
      desc: "Support to ensure your files meet the strictly required format and specifications.",
    },
    {
      icon: Languages,
      title: "Multilingual Assistance",
      desc: "Customer support available in multiple languages throughout the entire process.",
    },
  ];

  return (
    <section className="py-16 bg-blue-800 border-b border-blue-900">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* HEADER */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">Service Commitments & Assurances</h2>
          <div className="w-16 h-1 bg-blue-400 mb-4"></div>
          <p className="text-blue-100 mt-3 text-base max-w-2xl leading-relaxed">
            We provide a secure, streamlined, and fully supported registration process to ensure your travel
            documentation is processed accurately and without delay.
          </p>
        </div>

        {/* TOP TIER: Core Guarantees (Dark Theme Cards) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {guarantees.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="p-6 border border-blue-700 bg-blue-900/40 rounded flex flex-col items-start">
                <div className="w-10 h-10 border border-blue-600 bg-blue-800 flex items-center justify-center rounded mb-4">
                  <Icon className="w-5 h-5 text-blue-200" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-blue-100/80 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* BOTTOM TIER: Application Features (Strict White Grid) */}
        <div className="mt-8 pt-8 border-t border-blue-700/50">
          <h3 className="text-lg font-semibold text-white mb-6">Application Processing Features</h3>

          {/* Using a 1px gap grid to create perfect internal borders */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-300 border border-slate-300 rounded overflow-hidden">
            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-blue-700 flex-shrink-0" />
                    <h4 className="text-sm font-semibold text-slate-900">{item.title}</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
