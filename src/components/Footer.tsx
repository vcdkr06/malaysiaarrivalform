import { Link } from "react-router-dom";
import { ShieldCheck, Lock } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-[#0B1221] text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1: Logo & Security Row */}
          <div className="flex flex-col items-start col-span-1 md:col-span-1">
            <div className="mb-6 flex items-center gap-4">
              {/* Logo in White Circle */}
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl overflow-hidden p-2">
                <img
                  src={logo}
                  alt="MDAC Logo"
                  className="w-full h-full object-contain"
                  style={{ transform: "translateY(-1px)" }}
                />
              </div>
              <span className="font-bold text-sm uppercase tracking-wider text-slate-100 leading-tight">
                Malaysia Digital <br /> Arrival Card
              </span>
            </div>

            {/* Side-by-Side Security Badges */}
            <div className="flex flex-row gap-3 w-full">
              {/* SSL Box */}
              <div className="flex flex-col items-start gap-2 bg-white/5 px-4 py-3 rounded-sm border border-white/10 flex-1">
                <Lock className="w-4 h-4 text-green-500" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-bold uppercase text-slate-400">SSL Secure</span>
                  <span className="text-[11px] text-slate-200 font-medium leading-tight text-nowrap">
                    256-bit Secure
                  </span>
                </div>
              </div>

              {/* Safety Box */}
              <div className="flex flex-col items-start gap-2 bg-white/5 px-4 py-3 rounded-sm border border-white/10 flex-1">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-bold uppercase text-slate-400">Safety</span>
                  <span className="text-[11px] text-slate-200 font-medium leading-tight text-nowrap">
                    Verified Site
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-blue-400 font-bold mb-6">Resources</h3>
            <ul className="space-y-3 text-slate-300 text-sm font-medium">
              <li>
                <Link to="/#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Our Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-blue-400 font-bold mb-6">Legal Information</h3>
            <ul className="space-y-3 text-slate-300 text-sm font-medium">
              <li>
                <Link to="/legal#terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/legal#privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal#cookies" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Official Notice */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="bg-white/5 border border-slate-700/50 rounded-sm p-6 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold py-0.5 px-2 bg-slate-700 text-slate-200 rounded-sm uppercase tracking-widest">
                Disclaimer
              </span>
            </div>
            <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed font-medium">
              This website is a private agency that assists travelers with the Malaysia Digital Arrival Card (MDAC)
              process. We are an independent entity and **not affiliated with the Government of Malaysia**. Our
              professional service includes 24/7 assistance and application verification for a service fee. You may
              choose to apply independently through the official government portal at no cost.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[11px] text-slate-500 font-medium">© 2026 malaysia.earrivalform.com</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1.5 grayscale opacity-50">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                <span className="text-[10px] text-slate-400 font-bold uppercase">System Status: Online</span>
              </div>
              <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">
                Global Entry Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
