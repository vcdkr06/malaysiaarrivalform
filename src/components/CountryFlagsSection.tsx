import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Globe } from "lucide-react";

interface Country {
  country: string;
  iso_code: string;
  flag_url: string;
}

const CountryFlagsSection = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const INITIAL = 20;

  useEffect(() => {
    fetch("/data/country_flag_mapping.csv")
      .then((r) => r.text())
      .then((csv) => {
        const lines = csv.split("\n");
        const parsed: Country[] = [];
        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (!line) continue;
          const vals = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
          if (vals.length >= 3)
            parsed.push({
              country: vals[0].replace(/"/g, ""),
              iso_code: vals[1].replace(/"/g, ""),
              flag_url: vals[2].replace(/"/g, ""),
            });
        }
        setCountries(parsed);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const shown = showAll ? countries : countries.slice(0, INITIAL);

  if (loading) return null;

  return (
    <section
      className="py-14 md:py-20"
      style={{ background: "#F8FAFF" }}
    >
      <div className="container mx-auto px-5 md:px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <div
            className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] font-bold px-3.5 py-1.5 rounded-full mb-3"
            style={{
              background: "#EEF4FF",
              border: "1px solid #DBEAFE",
              color: "#4B7BE5",
            }}
          >
            <Globe className="w-3 h-3" />
            Eligible Nationalities
          </div>
          <h2
            className="text-2xl md:text-3xl font-extrabold tracking-[-0.02em] mb-2"
            style={{
              color: "#2D4A6F",
              fontFamily: "'Outfit', system-ui, sans-serif",
            }}
          >
            Who Needs an{" "}
            <span className="text-primary">
              MDAC
            </span>
            ?
          </h2>
          <p className="text-sm max-w-md mx-auto leading-relaxed" style={{ color: "#8196AE" }}>
            Travelers holding passports from these countries must complete the Digital Arrival Card before entering
            Malaysia.
          </p>
        </div>

        {/* Flags grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2.5 md:gap-3 max-w-4xl mx-auto">
          {shown.map((c, i) => (
            <div
              key={i}
              className="group flex items-center gap-2.5 rounded-xl px-3 py-2.5 transition-all duration-200 cursor-default hover:translate-y-[-2px] hover:shadow-md"
              style={{
                background: "#FFFFFF",
                border: "1px solid #E8EFF8",
              }}
            >
              <div
                className="w-7 h-5 rounded overflow-hidden flex-shrink-0 shadow-sm"
                style={{ border: "1px solid #F0F4FF" }}
              >
                <img src={c.flag_url} alt={c.country} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <span className="text-[11px] md:text-xs font-semibold truncate" style={{ color: "#3D5A80" }}>
                {c.country}
              </span>
            </div>
          ))}
        </div>

        {/* Fade overlay when collapsed */}
        {!showAll && countries.length > INITIAL && (
          <div
            className="relative h-8 -mt-8 pointer-events-none"
              style={{
                background: "linear-gradient(to top, #F8FAFF, transparent)",
              }}
          />
        )}

        {/* Toggle button */}
        {countries.length > INITIAL && (
          <div className="text-center mt-6">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="rounded-full text-xs font-bold px-6 h-9 gap-1.5 transition-all duration-200 hover:translate-y-[-1px]"
              style={{
                background: showAll ? "#FFFFFF" : "#2563EB",
                color: showAll ? "#3B82F6" : "#FFFFFF",
                border: showAll ? "1px solid #BFDBFE" : "none",
                boxShadow: showAll ? "0 1px 4px rgba(45,74,111,0.06)" : "0 4px 16px rgba(59,130,246,0.25)",
              }}
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp className="w-3.5 h-3.5" />
                </>
              ) : (
                <>
                  View All {countries.length} Countries
                  <ChevronDown className="w-3.5 h-3.5" />
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CountryFlagsSection;
