import { Card } from "@/components/ui/card";
import { FileText, Users, AlertCircle } from "lucide-react";

const InfoCardsSection = () => {
  const infoCards = [
    {
      title: "What Is the MDAC?",
      description: "Malaysia's mandatory digital entry form — a modern replacement for paper-based arrival cards.",
      icon: FileText,
    },
    {
      title: "Who Needs It?",
      description: "All foreign nationals entering Malaysia by air, land, or sea. Limited exemptions apply.",
      icon: Users,
    },
    {
      title: "Important Notice",
      description: "Submit in English within 7 days of arrival to avoid delays or penalties at immigration.",
      icon: AlertCircle,
    },
  ];

  return (
    <section className="py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {infoCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card key={index} className="bg-card border border-border rounded-xl p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-lg font-bold text-foreground">{card.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">{card.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
