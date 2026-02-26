import { Link } from "react-router-dom";
import { ShieldCheck, Lock, ArrowRight, Mail, Info } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1D4ED8] text-white pt-10 pb-6">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-y-8 lg:gap-x-12 mb-8 items-start">
          {/* Brand Section */}
          <div className="lg:col-span-5 flex flex-col space-y-4">
            <div className="flex items-center gap-4">
              {/* Logo Box - Perfectly Centered */}
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-2 shadow-lg shrink-0">
                <img src={logo} alt="MDAC Logo" className="w-full h-full object-contain" />
              </div>

              <div className="flex flex-col">
                <h2 className="text-xl font-bold leading-tight tracking-tight uppercase">
                  Malaysia <br />
                  <span className="text-blue-100">Digital Arrival</span>
                </h2>
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-blue-200 mt-1">
                  Independent Agency
                </span>
              </div>
            </div>

            {/* Security Badges */}
            <div className="flex gap-2">
              <div className="flex items-center gap-1.5 px-2 py-1 bg-white/10 rounded border border-white/10">
                <Lock className="w-3 h-3 text-blue-200" />
                <span className="text-[9px] font-bold uppercase tracking-wider">256-Bit SSL</span>
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-white/10 rounded border border-white/10">
                <ShieldCheck className="w-3 h-3 text-blue-200" />
                <span className="text-[9px] font-bold uppercase tracking-wider">Verified</span>
              </div>
            </div>
          </div>

          {/* Links Row */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 mt-2">
            <div>
              <h3 className="text-blue-200 font-bold text-[10px] uppercase tracking-widest mb-3">Links</h3>
              <ul className="space-y-2 text-sm font-medium text-blue-50">
                <li>
                  <Link to="/#faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-blue-200 font-bold text-[10px] uppercase tracking-widest mb-3">Legal</h3>
              <ul className="space-y-2 text-sm font-medium text-blue-50">
                <li>
                  <Link to="/legal#terms" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/legal#privacy" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Card */}
          <div className="lg:col-span-3">
            <Link
              to="/contact"
              className="group flex items-center justify-between bg-blue-600/40 border border-white/10 p-4 rounded-2xl hover:bg-blue-600/60 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg text-blue-600">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white uppercase">Need Help?</span>
                  <span className="text-[10px] text-blue-100 font-medium">Contact Support</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-blue-200 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3 items-start mb-6">
          <Info className="w-4 h-4 text-blue-200 shrink-0 mt-0.5" />
          <p className="text-[11px] leading-snug font-medium text-blue-50/80">
            malaysia.earrivalform.com is a private agency assisting with MDAC applications.
            <span className="text-white font-bold ml-1">We are not affiliated with the Government of Malaysia.</span>
            Official applications can be processed at the official portal for free.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-blue-200 font-medium uppercase tracking-tight">
            © 2026 malaysia.earrivalform.com
          </p>

          <div className="flex items-center gap-2 opacity-80">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
            <span className="text-[9px] text-white font-bold uppercase tracking-widest">System Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
