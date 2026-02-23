import { Clock, Shield, Headphones, CheckCircle, FileText, Search, FolderCheck, Languages } from "lucide-react";

const WhyChooseUsSection = () => {
  const benefits = [
    { icon: Clock, title: "24-Hour Processing", desc: "Most applications reviewed and returned within a single business day." },
    { icon: Shield, title: "Enterprise Security", desc: "SSL encryption and bank-grade data protection at every step." },
    { icon: Headphones, title: "24/7 Assistance", desc: "Our support team is available around the clock in multiple languages." },
    { icon: CheckCircle, title: "Accuracy Guaranteed", desc: "We catch errors before submission to maximise approval rates." },
    { icon: FileText, title: "Step-by-Step Guidance", desc: "Clear instructions at every stage — no guesswork required." },
    { icon: Search, title: "Professional Review", desc: "A specialist checks your details for compliance before filing." },
    { icon: FolderCheck, title: "Document Prep", desc: "We verify your uploads meet format and size requirements." },
    { icon: Languages, title: "Multilingual Team", desc: "Support available in English, Mandarin, Arabic, and more." },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Our Advantages</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Why Travelers Choose Us</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className="bg-secondary rounded-xl p-5 border border-border hover:shadow-elegant transition-shadow">
                <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{b.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
