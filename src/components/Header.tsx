import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/mdac-icon-logo.png";
import NoticeBanner from "./NoticeBanner";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-card border-b border-border shadow-soft">
      <NoticeBanner />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 sm:h-24">
          <div className="flex items-center gap-3">
            <img src={logo} alt="MDAC Logo" className="h-[77px] w-auto object-contain" />
          </div>
          <div className="flex items-center gap-3">
            <Link to="/apply">
              <Button
                className="text-white font-bold h-10 px-6 rounded-full border-0 transition-all duration-300 hover:translate-y-[-1px] text-base"
                style={{
                  background: "#2563EB",
                  boxShadow: "0 4px 15px rgba(59,130,246,0.3), 0 1px 4px rgba(29,78,216,0.2)",
                }}
              >
                {/* Mobile Text */}
                <span className="sm:hidden">Apply Now</span>

                {/* Desktop Text */}
                <span className="hidden sm:inline">Apply for Malaysia Digital Arrival Card</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
