import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";
import NoticeBanner from "./NoticeBanner";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <NoticeBanner />

      {/* container aligned with Hero/Info content */}
      <div className="container mx-auto px-6 max-w-6xl relative">
        {/* Slim height for the bar: h-16 (mobile) to h-20 (desktop) */}
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Large size, but h-full + py ensures it never touches the border */}
          <Link to="/" className="flex items-center h-full py-2">
            <img alt="MDAC Logo" className="h-12 md:h-16 w-auto object-contain" src={logo} />
          </Link>

          {/* CTA - Vertically centered by flex items-center */}
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
