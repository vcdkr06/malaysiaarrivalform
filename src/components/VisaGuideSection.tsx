import malaysiaCoupleNew from "@/assets/malaysia-couple-new.webp";

const VisaGuideSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1 space-y-5">
            <p className="text-xs uppercase tracking-widest text-accent font-semibold">How It Works</p>
            <h2 className="text-3xl font-bold text-foreground leading-tight">
              We Handle the Paperwork,<br />You Enjoy the Trip
            </h2>
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>Our MDAC concierge service simplifies the entire application. Fill in a guided form, and our team takes over — reviewing your details, correcting potential errors, and ensuring full compliance before submission.</p>
              <p>We verify document formats, handle secure submission to the appropriate authority, and deliver your approved MDAC confirmation directly to your inbox.</p>
              <p>Whether you're visiting for business, leisure, or family — our multilingual specialists are with you from start to finish.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <img alt="Travelers in Malaysia" className="w-full rounded-2xl shadow-elegant object-cover aspect-[4/3]" src={malaysiaCoupleNew} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaGuideSection;
