import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Mail, Globe, Scale } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1E40AF] text-white pt-10 pb-6 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header Section: Logo & Quick Links */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2.5 shadow-2xl shrink-0">
              <img src={logo} alt="MDAC Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-xl font-bold leading-tight uppercase tracking-tight">
                Malaysia <br />
                <span className="text-cyan-300">Digital Arrival</span>
              </h2>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[11px] font-bold uppercase tracking-[0.15em]">
            <Link to="/#faq" className="hover:text-cyan-300 transition-colors">
              FAQ
            </Link>
            <Link to="/about" className="hover:text-cyan-300 transition-colors">
              About Service
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

          <Link
            to="/contact"
            className="flex items-center gap-2 bg-cyan-400 text-blue-900 px-6 py-2.5 rounded-full font-bold text-xs hover:bg-white hover:scale-105 transition-all shadow-lg shadow-blue-900/30"
          >
            <Mail className="w-4 h-4" />
            Contact Agent
          </Link>
        </div>

        {/* Legal Disclaimer Box - Vibrant & Readable */}
        <div className="bg-blue-900/40 border border-white/10 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Scale className="w-4 h-4 text-cyan-300" />
            <span className="text-[10px] font-black uppercase tracking-widest text-cyan-300">Legal Disclaimer</span>
          </div>
          <div className="space-y-3 text-[11px] md:text-xs leading-relaxed text-blue-50 font-medium">
            <p>
              This website is a private, independent service provider and is{" "}
              <span className="text-white font-bold underline decoration-cyan-400/50">
                not affiliated with, endorsed by, or operated by any government agency.
              </span>{" "}
              We are not part of or connected to any official immigration or border authority.
            </p>
            <p>
              Our service provides optional assistance to help travelers complete and submit arrival card applications
              accurately and efficiently. You may choose to complete the official process directly through the relevant
              government website at no cost.
            </p>
            <p className="opacity-80 italic">
              Use of our service is entirely voluntary, and all fees charged are for the convenience and support we
              provide in preparing and processing your application.
            </p>
          </div>
        </div>

        {/* Bottom Tier: Trust & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-white/10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-cyan-300" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-100">SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-300" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-100">Verified Secure</span>
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-1">
            <p className="text-[10px] text-blue-200/60 font-bold uppercase tracking-widest">
              © 2026 malaysia.earrivalform.com
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
              <span className="text-[9px] text-blue-100 font-bold uppercase tracking-tighter">
                Global Systems Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
