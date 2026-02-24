import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";
import NoticeBanner from "./NoticeBanner";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <NoticeBanner />

      {/* container mx-auto px-6 max-w-6xl keeps it aligned with Hero/Info content */}
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Added items-end and pb-4/pb-6 to give the logo and button that bottom margin feel */}
        <div className="flex items-end justify-between h-28 md:h-36 pb-4 md:pb-6">
          {/* Bigger Logo with bottom margin alignment */}
          <Link to="/" className="flex items-center mb-1">
            <img
              alt="MDAC Logo"
              className="h-16 md:h-24 w-auto object-contain transition-all duration-300"
              src={logo}
            />
          </Link>

          {/* CTA Button with responsive text and 4px corners */}
          <Link to="/apply">
            <Button
              size="lg"
              className="font-bold h-12 px-6 md:px-10 rounded-sm bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300 shadow-md text-sm md:text-base"
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
