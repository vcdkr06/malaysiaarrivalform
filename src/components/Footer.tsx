import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Globe, ArrowRight, Mail, CheckCircle2 } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-slate-600 pt-12 pb-8 border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-8 mb-10 items-start">
          {/* Brand Section - More Compact */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            <div className="flex items-center gap-4">
              {/* Centered Logo in Soft Blue Box */}
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center p-2 shrink-0 border border-blue-100">
                <img src={logo} alt="MDAC Logo" className="w-full h-full object-contain" />
              </div>

              <div className="flex flex-col">
                <h2 className="text-xl font-[900] leading-[1.1] tracking-tight uppercase text-slate-800">
                  Malaysia <br />
                  <span className="text-blue-600">Digital Arrival</span> <br />
                  <span className="text-slate-400 text-sm tracking-widest font-bold">Services</span>
                </h2>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 font-sans">
                  SSL Secure
                </span>
              </div>
              <div className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 font-sans">
                  Verified
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links - Compact Columns */}
          <div className="lg:col-span-2">
            <h3 className="text-blue-600 font-black text-[11px] uppercase tracking-[0.2em] mb-4">Resources</h3>
            <ul className="space-y-2.5 text-slate-500 text-sm font-bold">
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

          <div className="lg:col-span-2">
            <h3 className="text-blue-600 font-black text-[11px] uppercase tracking-[0.2em] mb-4">Legal</h3>
            <ul className="space-y-2.5 text-slate-500 text-sm font-bold">
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

          {/* Contact CTA - Compact & Professional */}
          <div className="lg:col-span-4">
            <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-black text-slate-800 uppercase tracking-tight">Support 24/7</span>
              </div>
              <Link
                to="/contact"
                className="block text-center bg-blue-600 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all shadow-sm"
              >
                Get Assistance Now
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer - Streamlined and Minimal */}
        <div className="border-t border-slate-100 pt-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <span className="shrink-0 text-[9px] font-black bg-slate-100 text-slate-500 px-2 py-1 rounded uppercase">
              Notice
            </span>
            <p className="text-[11px] text-slate-400 leading-normal font-medium italic">
              malaysia.earrivalform.com is a private agency assisting with MDAC applications for a service fee.
              <span className="font-bold text-slate-500 not-italic">
                {" "}
                We are not affiliated with the Government of Malaysia.
              </span>
              Official applications can be made at the government portal for free.
            </p>
          </div>
        </div>

        {/* Bottom Bar - Ultra Slim */}
        <div className="pt-4 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tight">
            © 2026 malaysia.earrivalform.com
          </p>

          <div className="flex items-center gap-2 opacity-60">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">System Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
