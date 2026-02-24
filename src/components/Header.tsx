import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";
import NoticeBanner from "./NoticeBanner";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <NoticeBanner />

      {/* container mx-auto px-6 max-w-6xl maintains consistent site-wide alignment */}
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Flex container: items-center keeps CTA perfectly centered. 
            Height is now dynamic based on the logo's padding. */}
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* LOGO - Scaled up with specific top/bottom margins */}
          <Link to="/" className="flex items-center">
            <img
              alt="MDAC Logo"
              /* h-20 on mobile, h-28 on desktop for a truly large presence.
                 The margins (my-1) ensure it never touches the header borders. */
              className="h-20 md:h-28 w-auto object-contain my-1 transition-all duration-300"
              src={logo}
            />
          </Link>

          {/* CTA - Vertically centered relative to the tall header */}
          <Link to="/apply">
            <Button
              size="lg"
              className="font-bold h-11 md:h-12 px-6 md:px-10 rounded-sm bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300 shadow-md text-sm md:text-base"
            >
              {/* Desktop Text */}
              <span className="hidden lg:inline">Apply for Malaysia Digital Arrival Card</span>

              {/* Mobile Text */}
              <span className="lg:hidden">Apply Now</span>

              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
