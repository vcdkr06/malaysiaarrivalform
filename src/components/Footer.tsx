import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Mail, Globe, ArrowRight } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1E40AF] text-white pt-8 pb-4">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Main Row: Branding, Nav, and CTA merged for vertical speed */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-6">
          {/* Identity Block */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 shadow-xl shrink-0">
              <img src={logo} alt="MDAC Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-lg font-bold leading-none uppercase tracking-tight">
                Malaysia <br />
                <span className="text-cyan-300">Digital Arrival</span>
              </h2>
            </div>
          </div>

          {/* Clean Horizontal Nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-bold uppercase tracking-widest text-blue-50">
            <Link to="/#faq" className="hover:text-cyan-300 transition-colors">
              FAQ
            </Link>
            <Link to="/about" className="hover:text-cyan-300 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-cyan-300 transition-colors">
              Support
            </Link>
            <Link to="/legal#terms" className="hover:text-cyan-300 transition-colors">
              Terms
            </Link>
            <Link to="/legal#privacy" className="hover:text-cyan-300 transition-colors">
              Privacy
            </Link>
          </nav>

          {/* Ultra-Slim CTA */}
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-cyan-400 text-blue-900 px-5 py-2 rounded-full font-bold text-xs hover:bg-white transition-all shadow-lg"
          >
            <Mail className="w-4 h-4" />
            Contact Agent
          </Link>
        </div>

        {/* Integrated Security & Disclaimer Bar */}
        <div className="bg-blue-900/40 border border-white/10 rounded-xl p-3 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-1.5 border-r border-white/10 pr-4">
              <Lock className="w-3.5 h-3.5 text-cyan-300" />
              <span className="text-[10px] font-bold uppercase tracking-widest">SSL Secure</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Verified</span>
            </div>
          </div>

          <p className="text-[10px] text-blue-100/80 font-medium italic text-center md:text-right">
            <span className="not-italic font-bold text-white mr-1">NOTICE:</span>
            Private agency service. Not affiliated with the Malaysian Gov. Official portal is free of charge.
          </p>
        </div>

        {/* Bottom Bar: Slimmest Version */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-tighter text-blue-200/60">
            <span>© 2026 malaysia.earrivalform.com</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              <Globe className="w-3 h-3" /> Global Support
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-[9px] text-blue-100 font-bold uppercase tracking-widest">Systems Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
