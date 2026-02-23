import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ReadyToApplySection = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-primary-foreground/60 mb-8 max-w-lg mx-auto">
          Apply in under 10 minutes. We'll review, verify, and deliver your approved MDAC straight to your inbox.
        </p>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-10 py-6 h-auto rounded-full text-sm uppercase tracking-wider">
          <Link to="/apply" className="inline-flex items-center gap-2">
            Start Application <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ReadyToApplySection;
