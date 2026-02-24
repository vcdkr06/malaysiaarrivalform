import { Clock, Shield, Headphones, CheckCircle, FileText, Search, FolderCheck, Languages } from "lucide-react";

const WhyChooseUsSection = () => {
  const featured = [
    {
      icon: Clock,
      title: "Same-Day Processing",
      desc: "Most applications are reviewed and returned within one business day.",
      stat: "< 24h",
    },
    {
      icon: Shield,
      title: "Secure Data Protection",
      desc: "All information is protected using 256-bit SSL encryption.",
      stat: "256-bit",
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      desc: "Dedicated support team available across all time zones.",
      stat: "24/7",
    },
    {
      icon: CheckCircle,
      title: "High Accuracy Rate",
      desc: "Applications are checked for errors before submission.",
      stat: "99.8%",
    },
  ];

  const extras = [
    { icon: FileText, title: "Guided Application", desc: "Clear step-by-step prompts for faster completion." },
    { icon: Search, title: "Manual Review", desc: "Each submission is reviewed for compliance." },
    { icon: FolderCheck, title: "Document Verification", desc: "Uploads checked for correct format and quality." },
    { icon: Languages, title: "Multilingual Support", desc: "Available in 8+ major international languages." },
  ];

  return (
    <section className="py-16 md:py-20 bg-blue-50 border-t border-blue-100">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 text-xs font-semibold uppercase tracking-wide bg-white border border-blue-200 text-blue-800">
            Service Standards
          </div>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Why Travelers Choose Our <span className="text-blue-700">MDAC Service</span>
          </h2>

          <p className="text-slate-600 mt-3 text-sm md:text-base max-w-xl mx-auto">
            Fast processing, secure systems, and professional oversight — built to simplify your travel entry process.
          </p>
        </div>

        {/* FEATURED STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {featured.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="p-6 bg-white border border-blue-100">
                <p className="text-2xl font-bold text-blue-700 mb-3">{b.stat}</p>

                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-blue-700" />
                  <h3 className="text-sm font-semibold text-slate-900">{b.title}</h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>

        {/* ADDITIONAL FEATURES */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {extras.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="p-5 bg-white border border-blue-100">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-blue-700" />
                  <h3 className="text-sm font-semibold text-slate-900">{b.title}</h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
