import { Link } from "react-router-dom";
import { ShieldCheck, Lock, ArrowRight, Mail, Info } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-12 pb-6">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-y-10 lg:gap-x-12 mb-10 items-start">
          {/* Brand Section */}
          <div className="lg:col-span-5 flex flex-col space-y-5">
            <div className="flex items-center gap-4">
              {/* Perfectly Centered White Logo Box */}
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-2.5 shadow-xl shrink-0">
                <img src={logo} alt="MDAC Logo" className="w-full h-full object-contain" />
              </div>

              <div className="flex flex-col">
                <h2 className="text-xl font-bold leading-tight tracking-tight uppercase text-white">
                  Malaysia <br />
                  <span className="text-blue-400">Digital Arrival</span>
                </h2>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 mt-1">
                  Independent Agency
                </span>
              </div>
            </div>

            {/* Security Badges - Subtle and Clean */}
            <div className="flex gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-lg border border-slate-700">
                <Lock className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-200">256-Bit SSL</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 rounded-lg border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-200">Verified</span>
              </div>
            </div>
          </div>

          {/* Navigation - Better Spacing for Readability */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-white font-bold text-[11px] uppercase tracking-widest mb-4 border-b border-slate-800 pb-2">
                Resources
              </h3>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <Link to="/#faq" className="hover:text-blue-400 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-400 transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-blue-400 transition-colors">
                    About Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-[11px] uppercase tracking-widest mb-4 border-b border-slate-800 pb-2">
                Legal
              </h3>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <Link to="/legal#terms" className="hover:text-blue-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/legal#privacy" className="hover:text-blue-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Card - Refined Blue Accent */}
          <div className="lg:col-span-3">
            <Link
              to="/contact"
              className="group flex flex-col bg-slate-800/40 border border-slate-700 p-5 rounded-2xl hover:bg-slate-800/60 transition-all shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-blue-600 rounded-xl text-white shadow-blue-900/20 shadow-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </div>
              <span className="text-sm font-bold text-white uppercase tracking-tight">Need assistance?</span>
              <span className="text-xs text-slate-400 mt-1">Our support is online 24/7</span>
            </Link>
          </div>
        </div>

        {/* Disclaimer Bar - Integrated Design */}
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-5 flex gap-4 items-start mb-8">
          <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
          <p className="text-[11px] md:text-xs leading-relaxed text-slate-400 italic">
            malaysia.earrivalform.com is a private agency that assists travelers with the MDAC process.
            <span className="text-slate-200 font-semibold not-italic ml-1">
              We are not affiliated with the Government of Malaysia.
            </span>
            Our service includes 24/7 assistance for a service fee. You can apply independently via the official
            government portal at no cost.
          </p>
        </div>

        {/* Final Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            © 2026 malaysia.earrivalform.com
          </p>

          <div className="flex items-center gap-2.5 px-4 py-1.5 bg-slate-800 rounded-full border border-slate-700">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">
              Global Service Status: Online
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
