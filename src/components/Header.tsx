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
        {/* Header bar remains slim at h-16 (mobile) and h-22 (desktop) */}
        <div className="flex items-center justify-between h-16 md:h-22">
          {/* Logo Container - Scaled up and moved up with negative margin */}
          <Link to="/" className="flex items-center h-full pt-1">
            <img
              alt="MDAC Logo"
              /* -mt-2 moves it up. 
                 h-14/h-20 makes it bigger than the previous slim version. 
                 object-top ensures it prioritizes the top space.
              */
              className="h-14 md:h-20 w-auto object-contain object-top -mt-2 md:-mt-3 transition-all"
              src={logo}
            />
          </Link>

          {/* CTA - Vertically centered to the header container */}
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
