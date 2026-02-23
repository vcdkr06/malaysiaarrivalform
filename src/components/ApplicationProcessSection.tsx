import { CheckCircle, FileText, CreditCard, Search, Mail } from "lucide-react";

const ApplicationProcessSection = () => {
  const steps = [
    {
      step: 1,
      icon: FileText,
      title: "Complete the Online Form",
      desc: "Enter your personal and travel details accurately using our guided application.",
    },
    {
      step: 2,
      icon: CreditCard,
      title: "Pay the Processing Fee",
      desc: "Use the secure payment options provided on our portal to finalise your submission.",
    },
    {
      step: 3,
      icon: Search,
      title: "Details Review & Verification",
      desc: "Our specialists manually review your application to ensure all information is complete and accurate before processing.",
    },
    {
      step: 4,
      icon: Mail,
      title: "Delivery & Approval",
      desc: "Receive your MDAC confirmation by email with your unique PIN once approved. Present it at immigration for faster processing.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">
            Step by Step
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Application Process
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.step} className="relative bg-secondary rounded-2xl p-6 text-center">
                {/* Step number badge */}
                <div className="w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4">
                  {s.step}
                </div>
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-sm font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="inline-flex items-center gap-2 bg-accent/10 text-accent font-medium text-sm px-5 py-2.5 rounded-full">
            💡 <span><strong>Pro Tip:</strong> Apply at least 3 days before your travel date.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcessSection;
