import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/malaysia-digital-arrival-logo.png";
import NoticeBanner from "./NoticeBanner";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <NoticeBanner />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <img src={logo} alt="MDAC" className="h-9 sm:h-11 w-auto" />
          <Link to="/apply">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs h-9 px-5 rounded-full">
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
