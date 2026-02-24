import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";
import NoticeBanner from "./NoticeBanner";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <NoticeBanner />

      {/* container mx-auto px-6 max-w-6xl for consistent content alignment */}
      <div className="container mx-auto px-6 max-w-6xl">
        {/* py-1 keeps the bar slim while allowing the logo inside to be huge */}
        <div className="flex items-center justify-between py-1 md:py-1">
          {/* LOGO - Scaled up to fill the slim height (h-16 mobile / h-22 desktop) */}
          <Link to="/" className="flex items-center">
            <img
              alt="MDAC Logo"
              className="h-16 md:h-22 w-auto object-contain transition-all duration-300"
              src={logo}
            />
          </Link>

          {/* CTA - Vertically centered with 4px rounded-sm corners */}
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
