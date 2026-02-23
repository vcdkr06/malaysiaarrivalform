import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import worldDottedMap from "@/assets/world-dotted-map.png";

const HeroSection = () => {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Subtle dotted world map */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <img src={worldDottedMap} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-6 py-20 md:py-28 relative z-10">
        <div className="grid md:grid-cols-[1fr_380px] gap-12 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full font-semibold text-xs tracking-wide mb-5 uppercase">
              Malaysia Digital Arrival Card
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-5">
              Your Gateway to <br className="hidden md:block" />Seamless Entry
            </h1>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl leading-relaxed">
              Complete your Malaysia Digital Arrival Card online before you travel. 
              Skip the queues, arrive with confidence.
            </p>
            <div className="flex gap-4 items-center mb-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-12 px-8 rounded-lg">
                <Link to="/apply" className="inline-flex items-center gap-2">
                  Apply Now
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <a href="#faq" className="text-primary-foreground/60 hover:text-primary-foreground/90 text-sm font-medium transition-colors">
                Learn more →
              </a>
            </div>
            <p className="text-xs text-primary-foreground/40 max-w-lg leading-relaxed">
              Independent service provider — not affiliated with any government agency.
            </p>
          </div>

          {/* Right Content - Steps */}
          <div className="bg-primary-light/50 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-7">
            <h3 className="text-lg font-bold text-primary-foreground mb-5 tracking-tight">How It Works</h3>
            <div className="space-y-4">
              {[
                { step: 1, title: "Fill the application", desc: "Enter your personal and travel details." },
                { step: 2, title: "Secure payment", desc: "Pay the processing fee through our secure portal." },
                { step: 3, title: "Expert review", desc: "Our team verifies accuracy and compliance." },
                { step: 4, title: "Receive your MDAC", desc: "Get your approved QR code via email." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-3 items-start">
                  <div className="w-8 h-8 bg-accent text-accent-foreground rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {step}
                  </div>
                  <div>
                    <div className="font-semibold text-primary-foreground text-sm">{title}</div>
                    <div className="text-xs text-primary-foreground/50 mt-0.5">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-xs text-primary-foreground/40 mt-5 pt-4 border-t border-primary-foreground/10">
              💡 Apply at least 7 days before your travel date.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
