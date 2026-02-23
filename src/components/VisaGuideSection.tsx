import malaysiaCoupleNew from "@/assets/malaysia-couple-new.webp";

const VisaGuideSection = () => {
  return (
    <section className="py-20 bg-primary font-quicksand">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 max-w-6xl mx-auto">
          <div className="w-full md:w-3/5 flex flex-col justify-center space-y-5 order-2 md:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight">
              Your MDAC, Handled Professionally
            </h2>
            <div className="space-y-4 text-primary-foreground/60">
              <p className="text-base leading-relaxed">
                Our service takes the complexity out of the Malaysia Digital Arrival Card process. 
                We guide you through a simplified application, then our specialists review every detail 
                to ensure accuracy before submission.
              </p>
              <p className="text-base leading-relaxed">
                From verifying that your documents meet format requirements to securely submitting your 
                MDAC to the appropriate authority — we manage the entire workflow so you can focus on 
                your journey.
              </p>
              <p className="text-base leading-relaxed">
                Whether traveling for leisure, business, or family, our multilingual team provides 
                end-to-end support for a smooth and worry-free experience.
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/5 flex-shrink-0 order-1 md:order-2">
            <img
              alt="Travelers enjoying Malaysia"
              className="w-full h-full object-cover rounded-2xl shadow-elegant"
              src={malaysiaCoupleNew}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaGuideSection;
