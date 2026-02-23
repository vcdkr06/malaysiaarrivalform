import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ReadyToApplySection = () => {
  return (
    <section className="py-20 bg-card/30 border-y border-border">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ready to Begin?
        </h2>
        <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto">
          Complete your Malaysia Digital Arrival Card in minutes. Secure, guided, and stress-free.
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-accent to-[hsl(210,100%,50%)] text-accent-foreground hover:opacity-90 font-bold text-sm px-10 py-6 h-auto rounded-full uppercase tracking-wider">
          <Link to="/apply" className="inline-flex items-center gap-2">
            Start Application
            <ArrowRight size={18} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ReadyToApplySection;
