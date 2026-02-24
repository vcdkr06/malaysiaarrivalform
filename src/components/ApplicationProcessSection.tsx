import { FileText, CreditCard, Search, Mail } from "lucide-react";

const ApplicationProcessSection = () => {
  const steps = [
    { step: "01", icon: FileText, title: "Complete the Online Form", desc: "Enter your personal and travel details accurately using our guided application." },
    { step: "02", icon: CreditCard, title: "Pay the Processing Fee", desc: "Use the secure payment options provided on our portal to finalise your submission." },
    { step: "03", icon: Search, title: "Details Review & Verification", desc: "Our specialists manually review your application to ensure all information is complete and accurate before processing." },
    { step: "04", icon: Mail, title: "Delivery & Approval", desc: "Receive your MDAC confirmation by email with your unique PIN once approved. Present it at immigration for faster processing." },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">The Concierge Flow</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-heading-strong">Application Process</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.step} className="bg-card rounded-xl p-6 border border-border hover:shadow-elegant transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary font-bold text-lg">{s.step}</span>
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <h3 className="text-sm font-bold text-heading-strong mb-2">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="inline-flex items-center gap-2 bg-primary/10 text-primary font-medium text-sm px-5 py-2.5 rounded-full border border-primary/20">
            💡 <span><strong>Pro Tip:</strong> Apply at least 3 days before your travel date.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcessSection;
