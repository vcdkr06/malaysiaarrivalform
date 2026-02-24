import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ClipboardList, CreditCard, UserCheck, MailCheck, Info, ShieldCheck, Globe } from "lucide-react";

const HeroSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Digital Entry Form",
      desc: "Quickly input your passport and travel details.",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Secure Verification",
      desc: "Process the service fee via encrypted checkout.",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      title: "Specialist Audit",
      desc: "Our team reviews your data for 100% accuracy.",
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      icon: <MailCheck className="w-5 h-5" />,
      title: "Instant Delivery",
      desc: "Receive your MDAC PDF via email within hours.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#FDFDFF] overflow-hidden pt-16 pb-12 lg:py-0">
      {/* Soft Ambient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-indigo-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* --- Left Column: Content --- */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wide uppercase">
                <Globe className="w-3 h-3" />
                Official MDAC Assistance
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.1]">
                Your Gateway to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Malaysia
                </span>{" "}
                Made Simple.
              </h1>

              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Skip the stress of arrival paperwork. We provide a premium concierge service to handle your
                <strong> Malaysia Digital Arrival Card (MDAC)</strong> with expert review and guaranteed delivery.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto px-10 h-14 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white shadow-xl shadow-blue-900/10 transition-all hover:scale-[1.02] active:scale-[0.98] group"
              >
                <Link to="/apply" className="flex items-center gap-3 text-base font-semibold">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <div className="flex items-center gap-2 text-slate-500 font-medium text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                Trusted by 50k+ Travelers
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-start gap-4 max-w-md">
              <div className="w-1 h-12 bg-slate-200 rounded-full hidden sm:block" />
              <p className="text-[11px] text-slate-400 italic leading-relaxed">
                Note: This is a commercial service provider assisting with MDAC filings. We charge a service fee for
                expert review and processing. We are not affiliated with the Immigration Department of Malaysia.
              </p>
            </div>
          </div>

          {/* --- Right Column: Step UI --- */}
          <div className="lg:col-span-5 relative">
            {/* The "Glass" Card */}
            <div className="relative bg-white/70 backdrop-blur-2xl border border-white rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Application Path</h3>
                  <p className="text-xs text-slate-500 font-medium">Average completion: 3 minutes</p>
                </div>
                <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                  <Info className="w-5 h-5 text-slate-400" />
                </div>
              </div>

              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-4 group cursor-default">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center transition-all group-hover:shadow-lg group-hover:-translate-y-1`}
                    >
                      {step.icon}
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-sm font-bold text-slate-900">{step.title}</h4>
                      <p className="text-xs text-slate-500 leading-snug">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Deadline Indicator */}
              <div className="mt-8 p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-80 mb-1">Timing Window</p>
                  <p className="text-sm leading-snug font-medium">
                    Submit your application within{" "}
                    <span className="underline decoration-2 underline-offset-4 font-bold text-white">72 hours</span> of
                    your arrival date.
                  </p>
                </div>
                {/* Subtle pulse background */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
              </div>
            </div>

            {/* Floating Decorative Badge */}
            <div className="absolute -bottom-6 -right-6 hidden xl:flex flex-col items-center bg-white p-4 rounded-2xl shadow-xl border border-slate-50 animate-bounce-slow">
              <div className="text-2xl font-bold text-slate-900">24/7</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
