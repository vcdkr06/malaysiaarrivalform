import { Clock, Shield, Headphones, CheckCircle, FileText, Search, FolderCheck, Languages } from "lucide-react";
import { Card } from "@/components/ui/card";

const WhyChooseUsSection = () => {
  const benefits = [
    { icon: Clock, title: "Fast Turnaround", description: "Processed within 24–48 hours through our optimised workflow." },
    { icon: Shield, title: "Bank-Level Security", description: "Your data is encrypted and handled with enterprise-grade protocols." },
    { icon: Headphones, title: "Always Available", description: "Round-the-clock support for any questions throughout the process." },
    { icon: CheckCircle, title: "Approval Confidence", description: "We review every detail to maximise your application's success." },
    { icon: FileText, title: "Guided Experience", description: "Clear, step-by-step forms so you never have to guess." },
    { icon: Search, title: "Error Prevention", description: "Professional review catches mistakes before submission." },
    { icon: FolderCheck, title: "Document Assistance", description: "We ensure your files meet format and specification requirements." },
    { icon: Languages, title: "Multilingual Support", description: "Assistance available in multiple languages throughout the process." },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Why Travelers Trust Us</h2>
          <p className="text-muted-foreground">A smarter, safer way to handle your arrival requirements.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="p-4 bg-card border border-border hover:shadow-elegant transition-shadow duration-300 rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
