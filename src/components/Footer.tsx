import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Mail, Scale, Circle } from "lucide-center";
import logo from "@/assets/mdac-icon-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#173691] text-white pt-8 pb-4">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Top Row: Identity & Navigation */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 shadow-lg shrink-0">
              <img src={logo} alt="MDAC Logo" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-lg font-bold leading-tight uppercase tracking-tight">
              <span className="text-white">Malaysia</span> <br className="md:hidden" />
              <span className="text-blue-300">Digital Arrival</span>
            </h2>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] font-bold uppercase tracking-widest text-blue-100/80">
            <Link to="/#faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Support
            </Link>
            <Link to="/legal#terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/legal#privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
          </nav>

          <Link
            to="/contact"
            className="flex items-center gap-2 bg-white text-[#173691] px-5 py-2 rounded-full font-bold text-xs hover:bg-blue-50 transition-all shadow-md"
          >
            <Mail className="w-3.5 h-3.5" />
            Contact Agent
          </Link>
        </div>

        {/* Legal Disclaimer Box - Transparent White (Glassmorphism) */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-3 text-blue-200 uppercase font-black text-[10px] tracking-[0.2em]">
            <Scale className="w-4 h-4" />
            <span className="text-white">Legal Disclaimer</span>
          </div>
          <div className="space-y-4 text-[12px] leading-relaxed text-blue-50 font-medium">
            <p>
              This website is a private, independent service provider and is{" "}
              <span className="text-white font-bold underline decoration-blue-300/50 underline-offset-4">
                not affiliated with, endorsed by, or operated by any government agency.
              </span>{" "}
              We are not part of or connected to any official immigration or border authority.
            </p>
            <p>
              Our service provides optional assistance to help travelers complete and submit arrival card applications
              accurately and efficiently. You may choose to complete the official process directly through the relevant
              government website at no cost.
            </p>
            <p className="text-white/60 text-[11px] leading-snug border-t border-white/10 pt-3 italic">
              Use of our service is entirely voluntary, and all fees charged are for the convenience and support we
              provide in preparing and processing your application.
            </p>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Trust */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-white/5">
          <div className="flex items-center gap-4">
            <p className="text-[10px] text-blue-300/40 font-bold uppercase tracking-widest">
              © 2026 malaysia.earrivalform.com
            </p>
            <div className="flex items-center gap-1.5">
              <Circle className="w-1.5 h-1.5 fill-green-400 text-green-400 animate-pulse" />
              <span className="text-[9px] text-blue-200/50 font-bold uppercase tracking-tighter">Systems Online</span>
            </div>
          </div>

          <div className="flex items-center gap-6 opacity-60">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-blue-300" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-blue-100">SSL Secure</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-blue-300" />
              <span className="text-[9px] font-bold uppercase tracking-widest text-blue-100">Verified Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
