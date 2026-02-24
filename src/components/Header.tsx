import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/mdac-icon-logo.png";
import NoticeBanner from "./NoticeBanner";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md border-b border-slate-200" : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <NoticeBanner />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-24 md:h-28">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="MDAC Logo" className="h-16 md:h-20 w-auto object-contain" />
          </Link>

          {/* CTA */}
          <Link to="/apply">
            <Button
              size="lg"
              className="font-semibold h-11 px-6 md:px-8 rounded-md bg-primary hover:bg-primary-dark text-primary-foreground transition-all duration-300 shadow-sm text-sm"
            >
              <span className="hidden md:inline">Apply for Malaysia Digital Arrival Card</span>
              <span className="md:hidden">Apply Now</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
