import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Mail, Globe, ExternalLink } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#2563EB] text-white pt-8 pb-6">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Tier 1: Identity & Action */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 shadow-lg shrink-0">
              <img src={logo} alt="MDAC Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-lg font-bold leading-none tracking-tight uppercase">
                Malaysia <span className="text-blue-200">Digital Arrival</span>
              </h2>
              <p className="text-[10px] font-bold text-blue-100/60 uppercase tracking-[0.3em] mt-1.5">
                Independent Gateway
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-4 mr-4 text-blue-100/80 border-r border-white/20 pr-6">
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold uppercase">SSL Secure</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold uppercase">Verified</span>
              </div>
            </div>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-5 py-2 rounded-full font-bold text-xs hover:bg-blue-50 transition-all flex items-center gap-2 shadow-md"
            >
              <Mail className="w-3.5 h-3.5" />
              Contact Support
            </Link>
          </div>
        </div>

        {/* Tier 2: Slim Navigation & Disclaimer Bar */}
        <div className="bg-blue-700/40 rounded-2xl p-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-6 border border-white/10">
          <nav className="flex items-center gap-6 text-xs font-bold uppercase tracking-wider">
            <Link to="/#faq" className="hover:text-blue-200 transition-colors">
              FAQ
            </Link>
            <Link to="/about" className="hover:text-blue-200 transition-colors">
              About
            </Link>
            <Link to="/legal#terms" className="hover:text-blue-200 transition-colors">
              Terms
            </Link>
            <Link to="/legal#privacy" className="hover:text-blue-200 transition-colors">
              Privacy
            </Link>
          </nav>

          <div className="h-px w-full lg:w-px lg:h-4 bg-white/20" />

          <p className="text-[10px] md:text-[11px] text-blue-100/70 font-medium italic text-center lg:text-right max-w-xl">
            <span className="not-italic font-bold text-white mr-1">OFFICIAL NOTICE:</span>
            Private agency service for a fee. Not affiliated with the Government of Malaysia. Apply for free at the
            official portal.
          </p>
        </div>

        {/* Tier 3: Bottom Copyright */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/10 pt-6">
          <p className="text-[10px] text-blue-200/60 font-bold uppercase tracking-widest">
            © 2026 malaysia.earrivalform.com
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.4)]"></div>
              <span className="text-[9px] text-blue-100 font-bold uppercase tracking-tighter">Systems Operational</span>
            </div>
            <a
              href="https://imigresen-online.imi.gov.my/mdac/main"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-[9px] text-blue-200 hover:text-white transition-colors font-bold uppercase"
            >
              Official Portal <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
