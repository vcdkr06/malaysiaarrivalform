import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/mdac-logo.png";
import NoticeBanner from "./NoticeBanner";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-card border-b border-border shadow-soft">
      <NoticeBanner />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center gap-2">
            <img src={logo} alt="MDAC Logo" className="w-9 h-9 object-contain" />
            <span className="text-foreground font-semibold text-sm hidden sm:inline">Malaysia Digital Arrival Card</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/apply">
              <Button className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold text-xs h-9 px-5 rounded-lg">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
