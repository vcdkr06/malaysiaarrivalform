import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, CreditCard, UserCheck, MailCheck, Lightbulb, Zap } from "lucide-react";
import petronasBg from "@/assets/kuala-lumpur-petronas.png";

const HeroSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-4 h-4" />,
      title: "Enter Details",
      desc: "Provide required travel information.",
    },
    {
      icon: <CreditCard className="w-4 h-4" />,
      title: "Payment",
      desc: "Secure online transaction.",
    },
    {
      icon: <UserCheck className="w-4 h-4" />,
      title: "Review",
      desc: "Application verification process.",
    },
    {
      icon: <MailCheck className="w-4 h-4" />,
      title: "Confirmation",
      desc: "Receive digital approval via email.",
    },
  ];

  return (
    <section className="relative overflow-hidden min-h-[88vh] bg-background pt-6 md:pt-12 pb-10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={petronasBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-background/70 to-background/80" />
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10 max-w-6xl">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT COLUMN */}
          <div className="flex flex-col">
            <div className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold mb-5 w-fit bg-secondary border border-border text-primary">
              <Zap className="w-3.5 h-3.5 text-primary" />
              Mandatory Travel Requirement
            </div>

            <p className="hidden md:block text-xs font-bold uppercase tracking-[0.15em] mb-2 text-muted-foreground">
              MDAC Registration Portal
            </p>

            <h1 className="text-2xl md:text-[2.6rem] font-extrabold leading-[1.15] mb-3 md:mb-4 text-heading-strong">
              Digital Arrival Registration for <span className="text-primary">Malaysia</span>
            </h1>

            <p className="text-[14px] md:text-[15px] leading-[1.6] mb-4 md:mb-6 max-w-lg text-muted-foreground">
              Foreign visitors must submit their arrival information prior to entry to ensure smooth border clearance.
            </p>

            {/* CTA */}
            <Button
              asChild
              size="lg"
              className="font-semibold h-12 px-8 rounded-md bg-primary hover:bg-primary-dark text-primary-foreground transition-all duration-300 shadow-sm w-full md:w-auto mb-5 md:mb-6"
            >
              <Link to="/apply" className="flex items-center justify-center gap-2 h-12">
                Begin Application
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            {/* Disclaimer (Tablet + Desktop) */}
            <p className="hidden md:block text-[10px] leading-relaxed text-faint max-w-md">
              Disclaimer: We are an independent agency assisting travelers with documentation processing. We are not
              affiliated with the Malaysian government.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col">
            {/* Stepper */}
            <div className="bg-card/70 backdrop-blur-lg border border-border rounded-xl p-4 md:p-6 mt-4 md:mt-8 lg:mt-0">
              <h3 className="font-semibold text-[14px] md:text-[15px] mb-4 md:mb-6 text-heading-strong">
                4-Step Application Process
              </h3>

              <div className="relative">
                <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-border" />

                <div className="flex flex-col lg:flex-row lg:justify-between gap-5 md:gap-8 lg:gap-4">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="relative flex lg:flex-col items-start lg:items-center text-left lg:text-center lg:w-1/4"
                    >
                      <div className="relative z-10 w-10 h-10 md:w-11 md:h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-sm">
                        {step.icon}
                      </div>

                      <div className="ml-3 lg:ml-0 lg:mt-4">
                        <div className="text-[10px] font-semibold text-primary tracking-wide mb-0.5">
                          STEP {index + 1}
                        </div>
                        <h4 className="font-semibold text-[13px] text-heading-strong mb-0.5">{step.title}</h4>
                        <p className="text-[11.5px] text-muted-foreground leading-snug">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 md:mt-6 pt-4 md:pt-5 border-t border-border flex gap-3">
                <Lightbulb className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-[11.5px] md:text-[12px] text-body-strong leading-relaxed">
                  Submit at least <span className="font-semibold text-primary">3 days before arrival</span>.
                </p>
              </div>
            </div>

            {/* Disclaimer (Mobile Only) */}
            <p className="block md:hidden mt-6 text-[10px] leading-relaxed text-faint">
              Disclaimer: We are an independent agency assisting travelers with documentation processing. We are not
              affiliated with the Malaysian government.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
