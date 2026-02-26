import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Mail, Globe, ArrowRight } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-white pt-12 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Main Grid: Clean & Aligned */}
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          {/* Column 1: Brand & Security (4 units) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2.5 shadow-2xl shrink-0">
                <img src={logo} alt="MDAC Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight leading-tight uppercase">
                  Malaysia <br />
                  <span className="text-blue-400">Digital Arrival</span>
                </h2>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
              Professional travel assistance for Malaysia's digital entry requirements. Available 24/7 for global
              travelers.
            </p>

            <div className="flex gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-lg border border-slate-700">
                <Lock className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-200">256-Bit SSL</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-lg border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-200">Verified</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation (4 units) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">Service</h3>
              <ul className="space-y-3 text-sm font-semibold text-slate-300">
                <li>
                  <Link to="/#faq" className="hover:text-blue-400 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-blue-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-400 transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">Legal</h3>
              <ul className="space-y-3 text-sm font-semibold text-slate-300">
                <li>
                  <Link to="/legal#terms" className="hover:text-blue-400 transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/legal#privacy" className="hover:text-blue-400 transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Action (3 units) */}
          <div className="md:col-span-3">
            <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl">
              <h3 className="text-white font-bold text-sm mb-2">Need Assistance?</h3>
              <p className="text-slate-400 text-xs mb-4 leading-normal">
                Our agents are online to help with your application.
              </p>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-3 rounded-xl font-bold text-xs hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/20"
              >
                <Mail className="w-4 h-4" />
                Contact Support
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer: Slim & Precise */}
        <div className="bg-slate-900/40 rounded-xl p-5 border border-slate-800/60 mb-8 flex items-start gap-4">
          <div className="shrink-0 text-[9px] font-black bg-slate-700 text-slate-300 px-2 py-0.5 rounded uppercase tracking-tighter mt-0.5">
            Note
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed italic">
            malaysia.earrivalform.com is a private agency assisting with MDAC applications.
            <span className="text-white font-bold not-italic mx-1">
              We are not affiliated with the Government of Malaysia.
            </span>
            Official applications can be made at the official government portal for free.
          </p>
        </div>

        {/* Bottom Bar: Ultra Clean */}
        <div className="pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            © 2026 malaysia.earrivalform.com
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">Systems Online</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500">
              <Globe className="w-3 h-3" />
              <span className="text-[9px] font-black uppercase tracking-tighter">Global Entry</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
