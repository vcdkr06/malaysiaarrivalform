import { Link } from "react-router-dom";
import logo from "@/assets/mdac-icon-logo.png";

const Footer = () => {
  return (
    <footer className="py-16 bg-[#0B1221] text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Column 1: Logo & Security */}
          <div className="flex flex-col items-start">
            <div className="mb-6 flex items-center gap-3">
              {/* Logo in White Circle */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-lg overflow-hidden">
                <img src={logo} alt="MDAC Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-sm uppercase tracking-wider text-slate-100">
                Malaysia Digital <br /> Arrival Card
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <p className="text-xs font-medium leading-relaxed">Secure 256-bit SSL Encrypted Connection</p>
            </div>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-blue-400 font-bold mb-6">Resources</h3>
            <ul className="space-y-3 text-slate-300 text-sm font-medium">
              <li>
                <Link to="/#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Our Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-blue-400 font-bold mb-6">Legal Information</h3>
            <ul className="space-y-3 text-slate-300 text-sm font-medium">
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
        </div>

        {/* Official Notice - 4px Rounded-sm */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="bg-white/5 border border-slate-700/50 rounded-sm p-6 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-bold py-0.5 px-2 bg-slate-700 text-slate-200 rounded-sm uppercase tracking-widest">
                Disclaimer
              </span>
            </div>
            <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed font-medium">
              This website is a private agency that assists travelers with the Malaysia Digital Arrival Card (MDAC)
              process. We are an independent entity and **not affiliated with the Government of Malaysia**. Our
              professional service includes 24/7 assistance and application verification for a service fee. You may
              choose to apply independently through the official government portal at no cost.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[11px] text-slate-500 font-medium">© 2026 malaysia.earrivalform.com</p>
            <div className="flex gap-6">
              <span className="text-[10px] text-slate-600 font-bold uppercase">SSL Secured</span>
              <span className="text-[10px] text-slate-600 font-bold uppercase">Data Protected</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
