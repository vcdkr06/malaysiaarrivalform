import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";
import NoticeBanner from "./NoticeBanner";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <NoticeBanner />

      {/* container mx-auto px-6 max-w-6xl ensures alignment with Hero and Info sections */}
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-24 md:h-32">
          {/* Bigger Logo with consistent left margin alignment */}
          <Link to="/" className="flex items-center">
            <img
              alt="MDAC Logo"
              className="h-16 md:h-24 w-auto object-contain transition-all duration-300"
              src={logo}
            />
          </Link>

          {/* CTA Button with 4px rounded-sm corners */}
          <Link to="/apply">
            <Button
              size="lg"
              className="font-bold h-12 px-6 md:px-10 rounded-sm bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300 shadow-md text-sm md:text-base"
            >
              <span className="hidden lg:inline">Apply for Malaysia Digital Arrival Card</span>
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
