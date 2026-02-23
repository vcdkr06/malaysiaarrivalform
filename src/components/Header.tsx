import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/mdac-icon-logo.png";
import NoticeBanner from "./NoticeBanner";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-card border-b border-border shadow-soft">
      <NoticeBanner />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 sm:h-20">
          <div className="flex items-center gap-3">
            <img src={logo} alt="MDAC Logo" className="h-20 sm:hue-rotate-1object-contain" />
            <span className="text-sm leading-tigh uppercase tracking-wide font-extrabold font-sans text-secondary-foreground sm:text-l my-[10px]">
              Malaysia Digital<br />Arrival Card
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/apply">
              <Button
                className="text-white font-bold h-9 px-5 rounded-full border-0 transition-all duration-300 hover:translate-y-[-1px] text-base"
                style={{
                  background: "linear-gradient(135deg, #4338CA, #6366F1, #818CF8)",
                  boxShadow: "0 4px 15px rgba(99,102,241,0.3), 0 1px 4px rgba(67,56,202,0.2)"
                }}>

                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>);

};

export default Header;