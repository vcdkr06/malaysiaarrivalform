import { Clock, Shield, Headphones, CheckCircle, FileText, Search, FolderCheck, Languages } from "lucide-react";

const WhyChooseUsSection = () => {
  const stats = [
    { icon: Clock, value: "< 24h", label: "Average Processing Time" },
    { icon: Shield, value: "256-bit", label: "SSL Encryption Standard" },
    { icon: Headphones, value: "24/7", label: "Dedicated Support" },
    { icon: CheckCircle, value: "99.8%", label: "Submission Accuracy Rate" },
  ];

  const features = [
    { icon: FileText, title: "Guided Application", desc: "Clear, structured prompts for faster completion." },
    { icon: Search, title: "Manual Compliance Review", desc: "Each application reviewed before submission." },
    { icon: FolderCheck, title: "Document Verification", desc: "Uploads checked for correct format standards." },
    { icon: Languages, title: "Multilingual Assistance", desc: "Support available in 8+ major languages." },
  ];

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-blue-100 font-semibold">Service Performance</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">Proven Standards You Can Rely On</h2>
        </div>

        {/* AUTHORITATIVE STAT GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-blue-400/40 border-b mb-14">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="py-10 px-6 text-center border-r border-blue-400/30 last:border-r-0">
                <Icon className="w-5 h-5 mx-auto mb-4 text-blue-200" />
                <p className="text-4xl md:text-5xl font-bold tracking-tight">{stat.value}</p>
                <p className="text-sm mt-3 text-blue-100">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* STRUCTURED FEATURES (WHITE PANEL) */}
        <div className="bg-white text-slate-900 border border-blue-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="p-6">
                  <div className="flex items-center gap-2 mb-3">
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
