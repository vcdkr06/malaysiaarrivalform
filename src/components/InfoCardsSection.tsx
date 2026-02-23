import { FileText, Users, AlertTriangle } from "lucide-react";

const InfoCardsSection = () => {
  const cards = [
    { icon: FileText, title: "What Is the MDAC?", text: "A mandatory digital form that replaces paper arrival cards for all visitors entering Malaysia." },
    { icon: Users, title: "Who Must Apply?", text: "Every foreign national entering by air, land, or sea — with very limited exceptions." },
    { icon: AlertTriangle, title: "Don't Miss the Deadline", text: "Submit in English at least 7 days before arrival to prevent delays at immigration." },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
