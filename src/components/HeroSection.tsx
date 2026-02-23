import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Mail } from "lucide-react";
import worldDottedMap from "@/assets/world-dotted-map.png";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-blue-100 shadow-[0_8px_32px_-8px_rgba(30,77,183,0.15)] overflow-hidden">
      {/* Decorative dotted world map background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden mix-blend-multiply">
        <img src={worldDottedMap} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-6 pt-8 md:pt-12 pb-10 md:pb-14 relative z-10">
        <div className="grid md:grid-cols-[1fr_400px] gap-10 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-primary text-primary-foreground px-3 py-1.5 rounded-lg font-bold text-sm mb-3">
              New Update — MDAC
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              Experience Faster Entry with the Updated MDAC System
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
              The Malaysia Digital Arrival Card (MDAC) is Malaysia's new and improved digital entry form — replacing the
              old paper-based card with a faster, more secure online system for travelers entering by air, land, or sea.
            </p>
            <div className="flex gap-4 mb-5">
              <Button asChild className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                <Link to="/apply">Apply Now</Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground/70 italic max-w-2xl leading-relaxed">
              This website is a private, independent service provider and is not affiliated with, endorsed by, or
              operated by any government agency. We are not part of or connected to any official immigration or border
              authority.
            </p>
          </div>

          {/* Right Content - Steps */}
          <div className="relative bg-gradient-to-b from-white to-[#f0f5ff] rounded-2xl shadow-lg p-8">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-40 pointer-events-none" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-primary mb-4">Application Process</h3>
              <div className="space-y-3">
                {[
                  {
                    step: 1,
                    title: "Complete the online form",
                    desc: "Enter your personal and travel details accurately."
                  },
                  {
                    step: 2,
                    title: "Pay the processing fee",
                    desc: "Use secure payment options provided on the official portal."
                  },
                  {
                    step: 3,
                    title: "Details Review & Verification",
                    desc: "Our specialists manually review your application to ensure all information is complete, accurate, and compliant before processing."
                  },
                  {
                    step: 4,
                    title: "Delivery & Approval",
                    desc: "Receive your MDAC QR or confirmation by email once approved. Present it at immigration for faster processing."
                  }
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-3 items-start">
                    <div className="w-9 h-9 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-extrabold flex-shrink-0">
                      {step}
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{title}</div>
                      <div className="text-sm text-muted-foreground mt-0.5">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground mt-5 pt-4 border-t border-border">
                💡 <strong>Pro Tip:</strong> Apply at least 7 days before your travel date.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
