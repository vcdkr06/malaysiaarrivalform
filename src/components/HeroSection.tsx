import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, FileText, creditCard, Search, Mail, Info } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-primary overflow-hidden min-h-[90vh] flex items-center">
      {/* Gradient & Malaysia Pattern Overlay */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

      {/* Malaysia Pattern Graphic */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0l40 40-40 40L0 40z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
        }}
      />

      <div className="container mx-auto px-6 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-[1fr_480px] gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side: Copy & CTA */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-medium tracking-wide mb-6">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              MDAC Official Entry Guide 2024
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-primary-foreground leading-[1.05] mb-6">
              Seamless Entry
              <br />
              into <span className="text-accent">Malaysia</span>.
            </h1>
            <p className="text-lg text-primary-foreground/60 mb-8 max-w-xl leading-relaxed">
              All foreign visitors are required to complete the MDAC within 72 hours of arrival. We handle the
              paperwork, so you can focus on your journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-10">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold h-14 px-10 rounded-xl text-base shadow-lg shadow-accent/20"
              >
                <Link to="/apply">Apply for MDAC Now</Link>
              </Button>

              <div className="flex items-center gap-2 text-primary-foreground/40 text-sm italic">
                <Shield className="w-4 h-4" />
                Secure 256-bit Encrypted Processing
              </div>
            </div>

            {/* Pro Tip */}
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg">
              <div className="bg-accent/20 p-1.5 rounded-md">
                <Info className="w-4 h-4 text-accent" />
              </div>
              <p className="text-sm text-primary-foreground/70">
                <span className="font-bold text-accent">Pro Tip:</span> Apply at least 3 days before your travel date.
              </p>
            </div>
          </div>

          {/* Right Side: Application Process (Above the Fold) */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 relative">
            <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">Application Process</h3>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold text-sm">Complete Online Form</h4>
                  <p className="text-xs text-primary-foreground/40 mt-1">
                    Enter your personal and travel details accurately.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold text-sm">Pay Processing Fee</h4>
                  <p className="text-xs text-primary-foreground/40 mt-1">
                    Use secure payment options provided on our portal.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold text-sm">Review & Verification</h4>
                  <p className="text-xs text-primary-foreground/40 mt-1">
                    Specialists manually review your data for 100% accuracy.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <h4 className="text-primary-foreground font-semibold text-sm">Delivery & Approval</h4>
                  <p className="text-xs text-primary-foreground/40 mt-1">
                    Receive your MDAC PIN via email. Present at immigration.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats Overlay */}
            <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
              <div>
                <p className="text-[10px] text-primary-foreground/30 uppercase tracking-tighter">Fast-Track</p>
                <p className="text-lg font-bold text-accent">&lt; 24 Hours</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-primary-foreground/30 uppercase tracking-tighter">Support</p>
                <p className="text-sm font-semibold text-primary-foreground">24/7 Concierge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
