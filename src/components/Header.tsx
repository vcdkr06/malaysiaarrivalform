import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/mdac-logo-new.jpg";
import NoticeBanner from "./NoticeBanner";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-card border-b border-border shadow-soft">
      <NoticeBanner />
      <div className="container mx-auto px-4">
        {/* Reduced height from h-14/16 to h-12/14 and tightened padding */}
        <div className="flex items-center justify-between h-12 sm:h-14">
          <div className="flex items-center gap-3">
            <img src={logo} alt="MDAC Logo" className="h-7 sm:h-8 object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="text-foreground font-bold text-xs sm:text-sm tracking-tight">MALAYSIA DIGITAL</span>
              <span className="text-foreground font-bold text-xs sm:text-sm tracking-tight">ARRIVAL CARD</span>
            </div>
          </div>

          <div className="flex items-center">
            <Link to="/apply">
              <Button
                className="text-white font-bold text-xs h-8 px-4 rounded-full border-0 transition-all duration-300 hover:translate-y-[-1px]"
                style={{
                  background: "linear-gradient(135deg, #4338CA, #6366F1, #818CF8)",
                  boxShadow: "0 4px 12px rgba(99,102,241,0.2)",
                }}
              >
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
