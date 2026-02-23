import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/malaysia-digital-arrival-logo.png";
import NoticeBanner from "./NoticeBanner";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-primary border-b border-primary-foreground/10">
      <NoticeBanner />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-accent-foreground text-sm">M</div>
            <span className="text-primary-foreground font-semibold text-sm hidden sm:inline">MalaysiaArrival</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/apply">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-xs h-9 px-5 rounded-lg">
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
