import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const ReadyToApplySection = () => {
  return <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
          Ready to Apply?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
          Complete your Malaysia Digital Arrival Card application in minutes. Fast, secure, and hassle-free.
        </p>
        <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-10 py-6 h-auto">
          <Link to="/apply" className="inline-flex items-center gap-2">
            Start Your Application
            <ArrowRight size={20} />
          </Link>
        </Button>
      </div>
    </section>;
};
export default ReadyToApplySection;