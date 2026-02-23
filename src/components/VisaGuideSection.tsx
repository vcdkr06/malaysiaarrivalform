import malaysiaCoupleNew from "@/assets/malaysia-couple-new.webp";

const VisaGuideSection = () => {
  return <section className="py-16 bg-background font-quicksand">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Content */}
          <div className="w-full md:w-3/5 lg:w-1/2 flex flex-col justify-center space-y-4 order-2 md:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary leading-tight">
              How to Complete Your MDAC
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">Our Malaysia Digital Arrival Card (MDAC) submission service is built to handle the entire process on your behalf, ensuring your application is completed accurately and submitted correctly. Instead of navigating the form alone, you are guided through a simplified application with clear instructions, while our team reviews your details to identify and correct potential errors before submission.</p>
              <p className="text-lg">
                We provide expert checks to ensure all information and supporting documentation meet required formats and size guidelines, then securely submit your MDAC to the appropriate authority.
              </p>
              <p className="text-lg">
                From start to finish, our service includes multilingual customer support and ongoing assistance, giving you peace of mind that this essential travel requirement is being managed professionally. Whether you are traveling to Malaysia for tourism, business, or family visits, our MDAC submission service helps ensure a smooth and efficient preparation for your journey.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full md:w-2/5 lg:w-1/2 flex-shrink-0 order-1 md:order-2">
            <img alt="Couple enjoying Malaysia" className="w-full h-full object-cover rounded-lg shadow-soft" src={malaysiaCoupleNew} />
          </div>
        </div>
      </div>
    </section>;
};
export default VisaGuideSection;
