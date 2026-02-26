import { Link } from "react-router-dom";
import { ShieldCheck, Lock, ArrowRight, Mail, Globe, ArrowUpRight } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#F0F5FF] text-slate-700 pt-12 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Section: Brand Identity */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 pb-12 border-b border-blue-200/50">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-3 shadow-sm border border-blue-100 shrink-0">
              <img src={logo} alt="MDAC Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1E3A8A] tracking-tight leading-none uppercase">
                Malaysia <span className="text-blue-500 font-medium">Digital</span>
              </h2>
              <p className="text-slate-500 text-sm font-semibold tracking-widest uppercase mt-1">Arrival Card Portal</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Status</span>
              <div className="flex items-center gap-2 mt-1 px-3 py-1 bg-white rounded-full border border-blue-100 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold text-slate-700 uppercase">System Online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Original Asymmetric Layout */}
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          {/* Main Info Card */}
          <div className="lg:col-span-5 bg-[#1E3A8A] rounded-[2rem] p-8 text-white shadow-xl shadow-blue-900/10 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-300" /> Professional Assistance
              </h3>
              <p className="text-blue-100/80 text-sm leading-relaxed mb-6 font-medium">
                We provide a comprehensive review and 24/7 support for your MDAC application, ensuring your entry into
                Malaysia is seamless.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#1E3A8A] px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-50 transition-all"
              >
                Contact Agent <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            {/* Decorative Background Icon */}
            <ShieldCheck className="absolute -bottom-4 -right-4 w-32 h-32 text-white/5 rotate-12" />
          </div>

          {/* Links Clusters */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6 py-4">
            <div className="space-y-4">
              <h4 className="text-[#1E3A8A] font-bold text-xs uppercase tracking-[0.2em]">Service</h4>
              <ul className="space-y-3 text-sm font-semibold text-slate-500">
                <li>
                  <Link to="/#faq" className="hover:text-blue-600 flex items-center gap-1">
                    FAQ <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-blue-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-600">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[#1E3A8A] font-bold text-xs uppercase tracking-[0.2em]">Policy</h4>
              <ul className="space-y-3 text-sm font-semibold text-slate-500">
                <li>
                  <Link to="/legal#terms" className="hover:text-blue-600">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/legal#privacy" className="hover:text-blue-600">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/legal#cookies" className="hover:text-blue-600">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Trust Badges Column */}
          <div className="lg:col-span-3 flex flex-col gap-3 justify-center">
            <div className="p-4 bg-white rounded-2xl border border-blue-100 flex items-center gap-4 shadow-sm">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                <Lock className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Security</span>
                <span className="text-xs font-bold text-slate-800">256-Bit SSL</span>
              </div>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-blue-100 flex items-center gap-4 shadow-sm">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Quality</span>
                <span className="text-xs font-bold text-slate-800">Verified Service</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div className="bg-slate-200/50 border border-slate-300/30 rounded-2xl p-6 text-center">
          <p className="text-[11px] font-medium text-slate-500 leading-relaxed italic max-w-4xl mx-auto">
            <span className="font-bold text-slate-700 not-italic mr-1 uppercase tracking-tighter bg-slate-300/50 px-1.5 py-0.5 rounded">
              Disclaimer:
            </span>
            malaysia.earrivalform.com is a private agency and{" "}
            <span className="text-blue-700 font-bold">is not affiliated with the Malaysian Government</span>. We provide
            professional application services for a fee. Travelers can apply for the MDAC for free at the official
            government website.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-blue-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">© 2026 malaysia.earrivalform.com</p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] text-slate-400 font-black uppercase">Global Entry Support</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
