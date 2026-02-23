import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/malaysia-digital-arrival-logo.png";
import NoticeBanner from "./NoticeBanner";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-primary shadow-elegant">
      <NoticeBanner />
      <div className="border-b border-primary-light/20">
        <div className="container mx-auto px-3 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 h-auto sm:h-20 py-3 sm:py-0">
            <div className="flex items-center">
              <img src={logo} alt="Malaysia Digital Arrival Card" className="h-12 sm:h-16 w-auto brightness-0 invert opacity-90" />
            </div>
            <Link to="/apply" className="w-full sm:w-auto">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-xs sm:text-sm h-10 px-4 sm:px-6 w-full sm:w-auto rounded-lg">
                <span className="sm:hidden">Apply Now</span>
                <span className="hidden sm:inline">Start Application</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
