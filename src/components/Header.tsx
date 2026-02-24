import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";
import NoticeBanner from "./NoticeBanner";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <NoticeBanner />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* We keep the container at a slim h-20 (desktop) */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* LOGO - Now scaled to h-24 on a h-20 bar, using a tiny shift 
              This makes it look MUCH larger without the bar getting fat. */}
          <Link to="/" className="flex items-center">
            <img
              alt="MDAC Logo"
              className="h-14 md:h-24 w-auto object-contain py-1 transition-all duration-300"
              src={logo}
            />
          </Link>

          {/* CTA - Stay centered in the h-20 bar */}
          <Link to="/apply">
            <Button
              size="lg"
              className="font-bold h-10 md:h-11 px-5 md:px-8 rounded-sm bg-blue-700 hover:bg-blue-800 text-white shadow-md text-xs md:text-sm"
            >
              <span className="hidden md:inline">Apply for Malaysia Digital Arrival Card</span>
              <span className="md:hidden">Apply Now</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
