import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, hsl(210 40% 98%) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="container mx-auto px-6 py-20 md:py-28 relative z-10">
        <div className="grid md:grid-cols-[1fr_420px] gap-14 items-center max-w-6xl mx-auto">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-medium tracking-wide mb-6">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              MDAC Official Entry Guide
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.08] mb-6">
              Seamless Entry<br />into <span className="text-accent">Malaysia</span>.
            </h1>
            <p className="text-base text-primary-foreground/50 mb-10 max-w-xl leading-relaxed">
              All foreign visitors are required to complete the Malaysia Digital Arrival Card (MDAC) within 72 hours of arrival. Our concierge handles the complexity, so you can focus on the journey.
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold h-11 px-7 rounded-lg text-sm">
                <Link to="/apply">Apply for MDAC</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground/70 hover:bg-primary-foreground/5 hover:text-primary-foreground font-medium h-11 px-7 rounded-lg text-sm">
                <a href="#faq">View Checklist</a>
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-3">
            <div className="bg-primary-foreground/[0.06] backdrop-blur border border-primary-foreground/10 rounded-xl p-5 flex items-center justify-between">
              <div>
                <p className="text-[10px] text-primary-foreground/40 uppercase tracking-widest mb-0.5">Standard Processing</p>
                <h3 className="text-base font-bold text-primary-foreground">Fast-Track Delivery</h3>
              </div>
              <span className="text-accent text-xl font-bold">&lt; 24h</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-primary-foreground/[0.06] backdrop-blur border border-primary-foreground/10 rounded-xl p-4">
                <div className="w-9 h-9 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center mb-3">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </div>
                <h3 className="text-sm font-semibold text-primary-foreground mb-1">Expert Review</h3>
                <p className="text-xs text-primary-foreground/40 leading-relaxed">Every submission manually verified by our team.</p>
              </div>
              <div className="bg-primary-foreground/[0.06] backdrop-blur border border-primary-foreground/10 rounded-xl p-4">
                <div className="w-9 h-9 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center mb-3">
                  <Shield className="w-4 h-4 text-accent" />
                </div>
                <h3 className="text-sm font-semibold text-primary-foreground mb-1">Secure Filing</h3>
                <p className="text-xs text-primary-foreground/40 leading-relaxed">Bank-grade encryption for your personal data.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
