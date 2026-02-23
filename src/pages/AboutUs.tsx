import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Shield, Clock, FileCheck, Headphones, Globe, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const pricingPlans = [
    {
      name: "Fast Processing",
      price: "$59",
      description: "Standard quick turnaround",
      features: ["Government Fee Included", "Expert Application Review", "24-48 Hour Processing", "Email Support"],
      popular: false,
    },
    {
      name: "Ultra Premium",
      price: "$99",
      description: "Priority service for urgent travelers",
      features: [
        "Government Fee Included",
        "Expert Application Review",
        "6-12 Hour Priority Processing",
        "24/7 Priority Support",
        "100% Error-Free Guarantee",
      ],
      popular: true,
    },
  ];

  const serviceFeatures = [
    {
      icon: FileCheck,
      title: "Expert Application Review",
      desc: "Every application is carefully reviewed by our team to ensure accuracy and compliance with Malaysian immigration requirements.",
    },
    {
      icon: Clock,
      title: "Fast Processing",
      desc: "We process your Malaysia Digital Arrival Card quickly, with priority options available for urgent travel needs.",
    },
    {
      icon: Shield,
      title: "Secure & Encrypted",
      desc: "Your personal information is protected with SSL encryption and handled according to strict privacy standards.",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      desc: "Our customer support team is available to assist you throughout the application process.",
    },
    {
      icon: Globe,
      title: "Trusted Worldwide",
      desc: "Thousands of travelers trust us to help them prepare their Malaysia Digital Arrival Card applications.",
    },
    {
      icon: Check,
      title: "100% Accuracy Guarantee",
      desc: "We guarantee error-free applications or we'll fix any issues at no additional cost.",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-quicksand">
      <Header />

      {/* Slimmer Header Bar - Aligned with Content */}
      <section className="bg-blue-600 py-6 md:py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-left">
            <h1 className="text-xl md:text-2xl font-bold text-white mb-0.5">About Us</h1>
            <p className="text-xs md:text-sm text-blue-50 opacity-80 font-medium">
              Clear, transparent, and up-to-date pricing
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Intro Description */}
        <section className="mb-16 text-lg md:text-xl text-muted-foreground leading-relaxed">
          <p className="mb-6">
            Malaysia Digital Arrival Card Service is a private platform, not affiliated with any government or embassy.
            We charge a fee for our application support services and always share information about the cost of using
            our platform upfront, so you can <strong className="text-foreground">buy with confidence.</strong>
          </p>
          <p className="mb-6">
            With us, there are <strong className="text-foreground">no surprises and no hidden charges.</strong> We
            regularly review our products and prices to guarantee they're fair and in keeping with the latest Malaysian
            immigration regulations.
          </p>
          <p className="italic text-sm opacity-70">Last review of our pricing and fees: February 1, 2026</p>
        </section>

        {/* Pricing Grid */}
        <h2 className="text-2xl font-bold mb-8">Prices for Malaysia Digital Arrival Card</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-8 relative border-2 shadow-sm flex flex-col ${plan.popular ? "border-blue-600" : "border-border"}`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-6 bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-1">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                <span className="text-lg text-muted-foreground">USD</span>
              </div>
              <p className="text-muted-foreground mb-6 text-base">{plan.description}</p>

              <ul className="space-y-4 border-t pt-6 flex-grow">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-[15px] text-muted-foreground leading-tight">
                    <Check className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/apply" className="block mt-8">
                <Button
                  size="lg"
                  className={`w-full py-6 text-lg font-bold ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-secondary"}`}
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Full Service Features */}
        <h2 className="text-3xl font-bold mb-10 text-center">What's Included in Our Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 text-left">
          {serviceFeatures.map((f, i) => (
            <div key={i} className="flex gap-5 p-6 border rounded-2xl bg-muted/20 hover:bg-muted/40 transition-colors">
              <f.icon className="h-8 w-8 text-blue-600 flex-shrink-0" />
              <div>
                <h4 className="text-lg font-bold mb-2">{f.title}</h4>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Billing Transparency */}
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12 mb-20 border-2 border-dashed border-border">
          <h2 className="text-2xl font-bold mb-6">How We Charge for Your Application</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our mission is to make it quick and easy to complete your Malaysia Digital Arrival Card. We cover{" "}
            <strong className="text-foreground">all charges in one single payment</strong> due at the time you submit
            your details.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Our service fee", "Processing and handling", "Priority processing"].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-border">
                <Check className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Security Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 border-t pt-12">
          <div>
            <h3 className="text-xl font-bold flex items-center gap-3 mb-4 text-blue-600">
              <Lock className="h-6 w-6" /> Secure Checkout
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              We process all payments securely using HTTPS (SSL/TLS) encryption. Our systems are PCI-compliant,
              supporting all major credit and debit cards.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold flex items-center gap-3 mb-4 text-blue-600">
              <Shield className="h-6 w-6" /> Data Protection
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Your personal information is never shared with third parties. We handle every document according to strict
              global privacy standards and internal data protection policies.
            </p>
          </div>
        </div>

        {/* CTA */}
        <section className="bg-blue-600 rounded-3xl p-10 text-center text-white shadow-xl shadow-blue-600/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto font-medium">
            Start your Malaysia Digital Arrival Card application today and travel with peace of mind.
          </p>
          <Link to="/apply">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-7 text-xl font-bold rounded-xl shadow-lg"
            >
              Start Application
            </Button>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
