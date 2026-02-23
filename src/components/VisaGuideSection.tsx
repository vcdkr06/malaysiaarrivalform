import malaysiaCoupleNew from "@/assets/malaysia-couple-new.webp";

const VisaGuideSection = () => {
  return (
    <section className="py-20 bg-card/30 border-y border-border font-quicksand">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 max-w-6xl mx-auto">
          <div className="w-full md:w-3/5 flex flex-col justify-center space-y-5 order-2 md:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Your MDAC, Handled <span className="text-accent">Professionally</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-base leading-relaxed">
                Our service removes the complexity from the MDAC process. We guide you through a simplified application, then our specialists verify every detail before submission.
              </p>
              <p className="text-base leading-relaxed">
                From document verification to secure submission — we manage the entire workflow so you can focus on your journey.
              </p>
              <p className="text-base leading-relaxed">
                Whether for leisure, business, or family travel, our multilingual team provides end-to-end support.
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex-shrink-0 order-1 md:order-2">
            <img alt="Travelers enjoying Malaysia" className="w-full h-full object-cover rounded-2xl border border-border" src={malaysiaCoupleNew} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaGuideSection;
