import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/malaysia-digital-arrival-logo.png";
import NoticeBanner from "./NoticeBanner";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <NoticeBanner />
      <div className="border-b border-border">
        <div className="container mx-auto px-3 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 h-auto sm:h-16 py-2 sm:py-0">
            <div className="flex items-center">
              <img src={logo} alt="Malaysia Digital Arrival Card" className="h-10 sm:h-12 w-auto brightness-0 invert opacity-80" />
            </div>
            <Link to="/apply" className="w-full sm:w-auto">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-xs h-9 px-5 w-full sm:w-auto rounded-full uppercase tracking-wider">
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
