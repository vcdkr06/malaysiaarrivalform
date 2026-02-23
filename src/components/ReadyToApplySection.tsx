import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ReadyToApplySection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Begin?
        </h2>
        <p className="text-base text-primary-foreground/60 mb-8 max-w-2xl mx-auto">
          Complete your Malaysia Digital Arrival Card in minutes. Secure, guided, and stress-free.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base px-10 py-6 h-auto rounded-lg">
          <Link to="/apply" className="inline-flex items-center gap-2">
            Start Your Application
            <ArrowRight size={18} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ReadyToApplySection;
