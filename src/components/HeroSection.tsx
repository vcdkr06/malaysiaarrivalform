import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light pointer-events-none" />

      <div className="container mx-auto px-6 py-20 md:py-28 relative z-10">
        <div className="grid md:grid-cols-[1fr_420px] gap-14 items-center max-w-6xl mx-auto">
          <div>
            <div className="inline-block bg-accent text-accent-foreground px-4 py-1.5 rounded-full font-semibold text-xs tracking-widest mb-6 uppercase">
              MDAC Official Entry Guide
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.05] mb-6">
              Seamless Entry<br />into <span className="text-accent">Malaysia</span>.
            </h1>
            <p className="text-lg text-primary-foreground/60 mb-10 max-w-xl leading-relaxed">
              All foreign visitors are required to complete the Malaysia Digital Arrival Card (MDAC) within 72 hours of arrival. Our concierge handles the complexity, so you can focus on the journey.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12 px-8 rounded-full text-sm uppercase tracking-wider">
                <Link to="/apply">Apply for MDAC</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-semibold h-12 px-8 rounded-full text-sm uppercase tracking-wider">
                <a href="#faq">View Checklist</a>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 flex items-center justify-between">
              <div>
                <p className="text-xs text-primary-foreground/40 uppercase tracking-widest mb-1">Standard Processing</p>
                <h3 className="text-lg font-bold text-primary-foreground">Fast-Track Delivery</h3>
              </div>
              <span className="text-accent text-2xl font-bold">&lt; 24h</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-5">
                <div className="w-10 h-10 bg-accent/15 rounded-full flex items-center justify-center mb-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-sm font-bold text-primary-foreground mb-1">Expert Review</h3>
                <p className="text-xs text-primary-foreground/40 leading-relaxed">Every submission manually verified by our team.</p>
              </div>
              <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-5">
                <div className="w-10 h-10 bg-accent/15 rounded-full flex items-center justify-center mb-3">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-sm font-bold text-primary-foreground mb-1">Secure Filing</h3>
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
