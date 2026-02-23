import { Clock, Shield, Headphones, CheckCircle, FileText, Search, FolderCheck, Languages } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyChooseUsSection = () => {
  const benefits = [
    { icon: Clock, title: "Fast Turnaround", description: "Processed within 24–48 hours through our optimised workflow." },
    { icon: Shield, title: "Bank-Level Security", description: "Your data is encrypted with enterprise-grade protocols." },
    { icon: Headphones, title: "Always Available", description: "Round-the-clock support for any questions." },
    { icon: CheckCircle, title: "Approval Confidence", description: "We review every detail to maximise success." },
    { icon: FileText, title: "Guided Experience", description: "Clear, step-by-step forms — no guesswork." },
    { icon: Search, title: "Error Prevention", description: "Professional review catches mistakes early." },
    { icon: FolderCheck, title: "Document Assistance", description: "We ensure files meet all requirements." },
    { icon: Languages, title: "Multilingual Support", description: "Assistance in multiple languages." },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Why Travelers Trust Us</h2>
          <p className="text-muted-foreground text-sm">A smarter, safer way to handle your arrival requirements.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="p-5 bg-card/60 backdrop-blur-sm border border-border hover:border-accent/30 transition-all duration-300 rounded-2xl">
                <div className="w-9 h-9 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
