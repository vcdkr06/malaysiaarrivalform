import { Link } from "react-router-dom";
import { ShieldCheck, Lock, Mail, Scale, Circle, ArrowUpRight } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#173691] overflow-hidden text-white pt-10 pb-6">
      {/* Subtle Background Glow for Depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.3),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Top Tier: Brand & Navigation */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-8">
          {/* Logo & Identity */}
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center p-2.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] shrink-0 transition-transform hover:scale-105">
              <img src={logo} alt="MDAC Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <h2 className="text-xl font-black leading-[1.1] uppercase tracking-tight">
                <span className="text-white">Malaysia</span> <br />
                <span className="text-blue-300 font-medium text-lg lowercase italic tracking-normal">
                  Digital Arrival
                </span>
              </h2>
            </div>
          </div>

          {/* Precision Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {["FAQ", "About Us", "Support", "Terms", "Privacy"].map((item) => (
              <Link
                key={item}
                to={item === "FAQ" ? "/#faq" : `/${item.toLowerCase().replace(" ", "")}`}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-100/60 hover:text-white transition-all flex items-center gap-1 group"
              >
                {item}
                <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </nav>

          {/* Action Button with Subtle Pulse */}
          <Link
            to="/contact"
            className="group flex items-center gap-3 bg-white text-[#173691] px-6 py-3 rounded-xl font-bold text-xs hover:bg-blue-50 transition-all shadow-[0_15px_30px_-5px_rgba(0,0,0,0.2)] active:scale-95"
          >
            <Mail className="w-4 h-4" />
            CONTACT SUPPORT
          </Link>
        </div>

        {/* Refined Disclaimer: Premium Glassmorphism */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400/20 to-transparent rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-2 mb-4 text-blue-300">
              <Scale className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Legal Disclaimer</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-[11px] leading-relaxed text-blue-50/80 font-medium">
              <div className="space-y-3">
                <p>
                  This website is a private, independent service provider and is{" "}
                  <span className="text-white font-bold underline decoration-blue-400/40 underline-offset-4">
                    not affiliated with, endorsed by, or operated by any government agency.
                  </span>{" "}
                  We are not part of or connected to any official immigration or border authority.
                </p>
                <p>
                  Our service provides optional assistance to help travelers complete applications accurately and
                  efficiently.
                </p>
              </div>
              <div className="space-y-3 md:border-l md:border-white/5 md:pl-6">
                <p>
                  You may choose to complete the official process directly through the relevant government website at no
                  cost.
                </p>
                <p className="text-blue-300/60 italic">
                  Use of our service is entirely voluntary; all fees charged are for the convenience and support we
                  provide in processing your application.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Minimalist Copyright & Trust */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-white/10">
          <div className="flex items-center gap-6">
            <p className="text-[10px] text-blue-300/30 font-bold uppercase tracking-widest">
              © 2026 malaysia.earrivalform.com
            </p>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
              <Circle className="w-1.5 h-1.5 fill-green-400 text-green-400 animate-pulse" />
              <span className="text-[9px] text-blue-200/50 font-black uppercase tracking-tighter">Systems Live</span>
            </div>
          </div>

          <div className="flex items-center gap-8 opacity-40 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-blue-300" />
              <span className="text-[9px] font-black uppercase tracking-widest">Secure SSL</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
              <span className="text-[9px] font-black uppercase tracking-widest">Verified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
