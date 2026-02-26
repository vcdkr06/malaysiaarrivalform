import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Globe, ArrowRight, Mail, CheckCircle2 } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1D4ED8] text-white pt-20 pb-10 relative overflow-hidden">
      {/* Background Accent for Depth */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          {/* Brand Section */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="flex items-center gap-5">
              {/* Perfectly Centered Logo Box */}
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.2)] p-3 shrink-0">
                <img src={logo} alt="MDAC Logo" className="w-full h-full object-contain" />
              </div>

              {/* Ultra Bold Stand-out Text */}
              <div className="flex flex-col">
                <h2 className="text-2xl md:text-3xl font-[900] leading-[0.9] tracking-tighter uppercase drop-shadow-md">
                  Malaysia <br />
                  <span className="text-yellow-400 italic">Digital</span> <br />
                  <span className="text-white">Arrival Card</span>
                </h2>
                <div className="h-1 w-12 bg-yellow-400 mt-2 rounded-full" />
              </div>
            </div>

            <p className="text-blue-50 text-base font-medium leading-relaxed max-w-md opacity-90">
              The premier independent gateway for Malaysia's digital entry requirements. Secure, fast, and verified
              processing for global travelers.
            </p>

            {/* High-Contrast Security Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-blue-800/50 backdrop-blur-sm px-4 py-2.5 rounded-xl border-2 border-white/10 flex items-center gap-3">
                <Lock className="w-5 h-5 text-yellow-400" />
                <span className="text-xs font-black uppercase tracking-wider">256-Bit SSL Secure</span>
              </div>
              <div className="bg-blue-800/50 backdrop-blur-sm px-4 py-2.5 rounded-xl border-2 border-white/10 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-green-400" />
                <span className="text-xs font-black uppercase tracking-wider">Verified Service</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 mt-4">
            <h3 className="text-yellow-400 font-black text-sm uppercase tracking-widest mb-8 border-b border-white/10 pb-2">
              Resources
            </h3>
            <ul className="space-y-5 text-blue-50 text-sm font-bold">
              <li>
                <Link to="/#faq" className="hover:text-yellow-400 transition-all flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4" /> FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-400 transition-all flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4" /> Support
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-400 transition-all flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4" /> About Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="lg:col-span-2 mt-4">
            <h3 className="text-yellow-400 font-black text-sm uppercase tracking-widest mb-8 border-b border-white/10 pb-2">
              Legal
            </h3>
            <ul className="space-y-5 text-blue-50 text-sm font-bold">
              <li>
                <Link to="/legal#terms" className="hover:text-yellow-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/legal#privacy" className="hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal#cookies" className="hover:text-yellow-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Box */}
          <div className="lg:col-span-3">
            <div className="bg-white p-6 rounded-3xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full transition-all group-hover:scale-110" />
              <h3 className="text-blue-900 font-black text-xl mb-2 relative z-10">24/7 Support</h3>
              <p className="text-blue-700/70 text-sm font-bold mb-6 relative z-10">Need help with your application?</p>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-[#1D4ED8] text-white w-full py-4 rounded-2xl font-black uppercase tracking-tighter hover:bg-blue-700 transition-transform active:scale-95 shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Message Us
              </Link>
            </div>
          </div>
        </div>

        {/* Official Disclaimer Box */}
        <div className="bg-blue-900/40 border border-white/20 rounded-3xl p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="shrink-0 flex items-center gap-2 bg-yellow-400 text-blue-900 px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-tighter">
              <CheckCircle2 className="w-3 h-3" /> Important Notice
            </div>
            <p className="text-sm text-blue-100/80 leading-relaxed font-bold">
              malaysia.earrivalform.com is a private agency that assists travelers with the Malaysia Digital Arrival
              Card (MDAC) process.
              <span className="text-white border-b border-yellow-400/50 mx-1">
                We are NOT affiliated with the Government of Malaysia.
              </span>
              Our professional service includes 24/7 assistance for a service fee. You may apply independently through
              the official government portal at no cost.
            </p>
          </div>
        </div>

        {/* Final Footer Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm text-white font-black tracking-tight">© 2026 malaysia.earrivalform.com</p>
            <p className="text-[10px] text-blue-300 font-bold uppercase tracking-[0.4em] mt-1">Global Entry Portal</p>
          </div>

          <div className="flex items-center gap-4 px-6 py-2 bg-blue-800/40 rounded-full border border-white/10">
            <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
            <span className="text-[11px] text-white font-black uppercase tracking-widest">System Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
