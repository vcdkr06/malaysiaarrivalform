import { Link } from "react-router-dom";
import { ShieldCheck, Lock, ArrowRight, Mail, Info } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#EFF6FF] text-slate-700 pt-10 pb-6 border-t border-blue-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-8 items-start">
          {/* Brand Section */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center gap-4">
              {/* Logo Box - White to pop against soft blue bg */}
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2 shadow-sm border border-blue-200 shrink-0">
                <img src={logo} alt="MDAC Logo" className="w-full h-full object-contain" />
              </div>

              <div className="flex flex-col">
                <h2 className="text-xl font-[1000] leading-[1] tracking-tighter uppercase text-slate-900">
                  Malaysia <br />
                  <span className="text-blue-600">Digital Arrival</span>
                </h2>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mt-1">
                  Independent Portal
                </span>
              </div>
            </div>

            {/* Horizontal Security Badges - Ultra Compact */}
            <div className="flex gap-2">
              <div className="flex items-center gap-1.5 px-2 py-1 bg-white/60 rounded border border-blue-200">
                <Lock className="w-3 h-3 text-blue-500" />
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-500">256-Bit</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-white/60 rounded border border-blue-200">
                <ShieldCheck className="w-3 h-3 text-blue-500" />
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-500">Verified</span>
              </div>
            </div>
          </div>

          {/* Links Row - Shared Column to save vertical space */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-blue-600 font-[900] text-[10px] uppercase tracking-[0.15em] mb-3">Links</h3>
              <ul className="space-y-2 text-sm font-bold text-slate-600">
                <li>
                  <Link to="/#faq" className="hover:text-blue-600 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-600 transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-blue-600 transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-blue-600 font-[900] text-[10px] uppercase tracking-[0.15em] mb-3">Legal</h3>
              <ul className="space-y-2 text-sm font-bold text-slate-600">
                <li>
                  <Link to="/legal#terms" className="hover:text-blue-600 transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/legal#privacy" className="hover:text-blue-600 transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact - Minimalist Style */}
          <div className="lg:col-span-3">
            <Link
              to="/contact"
              className="group flex items-center justify-between bg-white border border-blue-200 p-4 rounded-2xl hover:border-blue-400 transition-all shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600 rounded-lg text-white">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-black text-slate-900 uppercase">Need Help?</span>
                  <span className="text-[10px] text-slate-500 font-bold">Contact Support</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Disclaimer - Now uses a subtle alert-style bar */}
        <div className="bg-blue-100/50 rounded-xl p-4 flex gap-3 items-start border border-blue-200/50 mb-6">
          <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <p className="text-[11px] leading-snug font-bold text-blue-800/80">
            malaysia.earrivalform.com is a private agency assisting with MDAC applications.
            <span className="text-blue-900 underline decoration-blue-300 underline-offset-2 ml-1">
              We are not affiliated with the Government of Malaysia.
            </span>
            Official applications can be processed at the official portal for free.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-blue-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-tight">
            © 2026 malaysia.earrivalform.com
          </p>

          <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-blue-100">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-[9px] text-slate-600 font-black uppercase tracking-widest">System Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
