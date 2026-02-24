import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";
import NoticeBanner from "./NoticeBanner";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <NoticeBanner />

      {/* container mx-auto px-6 max-w-6xl keeps it aligned with Hero/InfoSection */}
      <div className="container mx-auto px-6 max-w-6xl">
        {/* items-center for vertical centering; py-2 (mobile) and py-3 (desktop) for a slim profile */}
        <div className="flex items-center justify-between py-2 md:py-3">
          {/* LOGO - Scaled to h-14 (mobile) and h-20 (desktop) */}
          <Link to="/" className="flex items-center">
            <img
              alt="MDAC Logo"
              className="h-14 md:h-20 w-auto object-contain transition-all duration-300"
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
