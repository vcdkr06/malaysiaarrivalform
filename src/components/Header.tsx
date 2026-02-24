import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";
import NoticeBanner from "./NoticeBanner";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <NoticeBanner />

      {/* Aligned with Hero/InfoSection content */}
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Height reduced to h-20 (mobile) and h-24 (desktop) for a slimmer profile */}
        <div className="flex items-end justify-between h-20 md:h-24 pb-3 md:pb-4">
          {/* Logo - Adjusted to be large but fit the slimmer header */}
          <Link to="/" className="flex items-center">
            <img
              alt="MDAC Logo"
              className="h-12 md:h-16 w-auto object-contain transition-all duration-300"
              src={logo}
            />
          </Link>

          {/* CTA Button - 4px rounded-sm corners */}
          <Link to="/apply">
            <Button
              size="lg"
              className="font-bold h-10 md:h-11 px-5 md:px-8 rounded-sm bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300 shadow-md text-xs md:text-sm"
            >
              {/* Desktop Text */}
              <span className="hidden md:inline">Apply for Malaysia Digital Arrival Card</span>

              {/* Mobile Text */}
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
