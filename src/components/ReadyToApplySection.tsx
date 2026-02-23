import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ReadyToApplySection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-primary-foreground/60 mb-8 max-w-lg mx-auto">
          Apply in under 10 minutes. We'll review, verify, and deliver your approved MDAC straight to your inbox.
        </p>
        <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-6 h-auto rounded-lg text-sm">
          <Link to="/apply" className="inline-flex items-center gap-2">
            Start Application <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ReadyToApplySection;
