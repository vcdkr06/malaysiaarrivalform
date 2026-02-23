import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ReadyToApplySection = () => {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81, #3730a3)' }}>
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, hsl(0 0% 100%) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-primary-foreground/60 mb-8 max-w-lg mx-auto">
          Apply in under 10 minutes. We'll review, verify, and deliver your approved MDAC straight to your inbox.
        </p>
        <Button
          asChild
          size="lg"
          className="font-bold h-12 px-8 rounded-full transition-all duration-300 hover:translate-y-[-2px] group text-[15px] text-white border-0"
          style={{
            background: "linear-gradient(135deg, #4338CA, #6366F1, #818CF8)",
            boxShadow: "0 8px 30px rgba(99,102,241,0.3), 0 2px 8px rgba(67,56,202,0.2)",
          }}
        >
          <Link to="/apply" className="inline-flex items-center gap-2">
            Start Application <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default ReadyToApplySection;
