import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";
import NoticeBanner from "./NoticeBanner";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <NoticeBanner />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Bigger Logo */}
          <Link to="/" className="flex items-center">
            <img alt="MDAC Logo" className="h-16 md:h-20 w-auto object-contain" src="/lovable-uploads/64086d98-9747-40f3-8122-f181d56e9706.png" />
          </Link>

          {/* CTA */}
          <Link to="/apply">
            <Button
              size="lg"
              className="font-semibold h-11 px-6 md:px-8 rounded-md bg-primary hover:bg-primary-dark text-primary-foreground transition-all duration-300 shadow-sm text-sm">

              <span className="hidden md:inline">Apply for Malaysia Digital Arrival Card</span>
              <span className="md:hidden">Apply Now</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </header>);

};

export default Header;