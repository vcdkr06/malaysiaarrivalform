import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";
import NoticeBanner from "./NoticeBanner";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-card border-b border-border shadow-soft">
      <NoticeBanner />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 sm:h-20">
          <div className="flex items-center gap-3">
            <img src={logo} alt="MDAC Logo" className="h-20 sm:h-20 object-contain" />
          </div>
          <div className="flex items-center gap-3">
            <Link to="/apply">
              <Button
                size="lg"
                className="font-semibold h-11 px-7 rounded-md bg-primary hover:bg-primary-dark text-primary-foreground transition-all duration-300 shadow-sm text-sm"
              >
                Apply Now
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
