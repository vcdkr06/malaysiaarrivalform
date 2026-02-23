import { FileText, Users, AlertTriangle } from "lucide-react";

const InfoCardsSection = () => {
  const cards = [
    { icon: FileText, title: "What Is the MDAC?", text: "A mandatory digital form that replaces paper arrival cards for all visitors entering Malaysia." },
    { icon: Users, title: "Who Must Apply?", text: "Every foreign national entering by air, land, or sea — with very limited exceptions." },
    { icon: AlertTriangle, title: "Don't Miss the Deadline", text: "Submit in English at least 7 days before arrival to prevent delays at immigration." },
  ];

  return (
    <section className="py-16 bg-background border-b border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
