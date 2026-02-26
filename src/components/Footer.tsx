import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Globe, ArrowRight, HelpCircle, Mail } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1D4ED8] text-white pt-20 pb-10 overflow-hidden relative">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-4 flex flex-col space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-300 p-2">
                <img src={logo} alt="MDAC Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h2 className="text-xl font-black leading-tight tracking-tight uppercase">
                  Malaysia <br />
                  <span className="text-blue-200">Arrival Card</span>
                </h2>
              </div>
            </div>

            <p className="text-blue-100/80 text-sm leading-relaxed max-w-sm">
              Streamlining your entry to Malaysia with professional assistance and 24/7 support. We make travel
              documentation simple, fast, and secure.
            </p>

            <div className="flex gap-4">
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 flex items-center gap-3">
                <Lock className="w-5 h-5 text-blue-200" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-50">256-Bit SSL</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-200" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-50">Verified Safety</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-300" /> Resources
            </h3>
            <ul className="space-y-4 text-blue-100/70 text-sm">
              <li>
                <Link to="/#faq" className="hover:text-white flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />{" "}
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />{" "}
                  Support
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white flex items-center gap-2 group">
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-5 group-hover:ml-0" />{" "}
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-300" /> Privacy
            </h3>
            <ul className="space-y-4 text-blue-100/70 text-sm">
              <li>
                <Link to="/legal#terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/legal#privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal#cookies" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Highlight */}
          <div className="lg:col-span-4">
            <div className="bg-blue-600/50 border border-white/10 p-6 rounded-3xl backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-2">Need help?</h3>
              <p className="text-sm text-blue-100/70 mb-4">
                Our agents are available around the clock to assist with your application.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contact Support
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Disclaimer */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="px-3 py-1 bg-white/20 rounded text-[10px] font-black uppercase tracking-tighter">
              Disclaimer
            </div>
            <p className="text-xs md:text-sm text-blue-100/60 leading-relaxed italic">
              malaysia.earrivalform.com is a dedicated travel agency assisting international visitors. **We are not the
              official government website.** Our premium service includes manual document review and 24/7 customer care
              for a processing fee. Travelers can opt to apply directly through the official Malaysian Immigration
              portal without an additional service charge.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <p className="text-xs text-blue-200/50 font-medium italic">© 2026 malaysia.earrivalform.com</p>
            <span className="text-[10px] text-blue-200/30 uppercase tracking-[0.3em]">Secure Global Processing</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-4 py-1.5 bg-green-500/20 rounded-full border border-green-500/30">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-[10px] text-green-300 font-bold uppercase tracking-widest">Systems Active</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
