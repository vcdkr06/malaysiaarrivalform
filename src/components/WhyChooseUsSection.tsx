import { Clock, Shield, Headphones, CheckCircle, FileText, Search, FolderCheck, Languages } from "lucide-react";

const WhyChooseUsSection = () => {
  const stats = [
    { icon: Clock, value: "< 24h", label: "Processing Time" },
    { icon: Shield, value: "256-bit", label: "SSL Encryption" },
    { icon: Headphones, value: "24/7", label: "Customer Support" },
    { icon: CheckCircle, value: "99.8%", label: "Accuracy Rate" },
  ];

  const features = [
    { icon: FileText, title: "Guided Application", desc: "Structured prompts for faster completion." },
    { icon: Search, title: "Manual Review", desc: "Each submission verified before processing." },
    { icon: FolderCheck, title: "Document Check", desc: "Uploads validated for format compliance." },
    { icon: Languages, title: "Multilingual Support", desc: "Available in 8+ major languages." },
  ];

  return (
    <section className="py-14 bg-blue-600 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* HEADER */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-blue-200 font-semibold">Service Performance</p>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-white tracking-tight">
            Proven Standards You Can Rely On
          </h2>
        </div>

        {/* COMPACT STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-blue-400/40 border-b border-blue-400/40">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="py-6 px-4 text-center border-r border-blue-400/30 last:border-r-0">
                <Icon className="w-4 h-4 mx-auto mb-2 text-blue-200" />
                <p className="text-3xl md:text-4xl font-bold leading-tight">{stat.value}</p>
                <p className="text-xs mt-2 text-blue-100 uppercase tracking-wide">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* FEATURES PANEL */}
        <div className="bg-white text-slate-900 mt-8 border border-blue-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-blue-700" />
                    <h3 className="text-sm font-semibold">{f.title}</h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
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
