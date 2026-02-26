import { Link } from "react-router-dom";
import { ShieldCheck, Lock, ArrowRight, Mail, Globe } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#F8FAFC] pt-8 pb-6 px-4 md:px-6 border-t border-slate-200">
      <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
        {/* Top Row: Brand & Quick Actions */}
        <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-8 gap-8 border-b border-slate-100">
          {/* Logo & Identity */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center p-2 border border-slate-100 shrink-0">
              <img src={logo} alt="MDAC Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1E3A8A] leading-tight uppercase tracking-tight">
                Malaysia <span className="text-blue-500 font-medium">Digital</span>
              </h2>
              <div className="flex items-center gap-2 mt-0.5">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em]">Service Online</span>
              </div>
            </div>
          </div>

          {/* Compact Links Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link to="/#faq" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
              FAQ
            </Link>
            <Link to="/about" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
              Support
            </Link>
            <Link
              to="/legal#terms"
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              Terms
            </Link>
            <Link
              to="/legal#privacy"
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              Privacy
            </Link>
          </nav>

          {/* Slim CTA Button */}
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-[#1E3A8A] text-white px-5 py-2.5 rounded-full font-bold text-xs hover:bg-[#1e3a8acc] transition-all shadow-md shadow-blue-900/10"
          >
            <Mail className="w-3.5 h-3.5" />
            Contact Agent
          </Link>
        </div>

        {/* Middle Row: Security & Disclaimer (The Slim Part) */}
        <div className="bg-slate-50/50 p-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">SSL Secure</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Verified</span>
            </div>
          </div>

          <p className="text-[10px] text-slate-400 font-medium italic text-center md:text-right max-w-2xl leading-relaxed">
            <span className="not-italic font-bold text-slate-600 uppercase mr-1 tracking-tighter">Note:</span>
            Private agency service. Not affiliated with the Malaysian Government. Official applications can be made at
            the government portal for free.
          </p>
        </div>
      </div>

      {/* Very Bottom Copyright */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4 opacity-50">
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
          © 2026 malaysia.earrivalform.com
        </p>
        <div className="flex items-center gap-1 text-slate-500">
          <Globe className="w-3 h-3" />
          <span className="text-[9px] font-bold uppercase tracking-tighter">Global Entry Portal</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
