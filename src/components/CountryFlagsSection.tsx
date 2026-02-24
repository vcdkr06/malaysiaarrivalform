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
    <section className="py-14 md:py-18 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide font-semibold px-4 py-2 bg-blue-50 border border-blue-200 text-blue-800">
            <Globe className="w-4 h-4" />
            Eligible Nationalities
          </div>

          <h2 className="mt-5 text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            Who Needs an <span className="text-blue-700">MDAC</span>?
          </h2>

          <p className="text-sm text-slate-600 mt-3 max-w-md mx-auto leading-relaxed">
            Passport holders from the following countries are required to submit the Malaysia Digital Arrival Card prior
            to entry.
          </p>
        </div>

        {/* FLAGS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 max-w-4xl mx-auto">
          {shown.map((c, i) => (
            <div key={i} className="flex items-center gap-3 px-3 py-2 border border-slate-200 bg-white">
              {/* Larger + Cleaner Flag */}
              <div className="w-8 h-5 flex-shrink-0 border border-slate-200">
                <img src={c.flag_url} alt={c.country} className="w-full h-full object-cover" loading="lazy" />
              </div>

              <span className="text-xs font-medium text-slate-800 truncate">{c.country}</span>
            </div>
          ))}
        </div>

        {/* Subtle Fade when collapsed */}
        {!showAll && countries.length > INITIAL && (
          <div className="relative h-10 -mt-10 pointer-events-none bg-gradient-to-t from-white to-transparent" />
        )}

        {/* TOGGLE BUTTON — MATCH HERO STYLE */}
        {countries.length > INITIAL && (
          <div className="text-center mt-8">
            <Button
              onClick={() => setShowAll(!showAll)}
              size="lg"
              className="h-11 px-8 font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="w-4 h-4 ml-1" />
                </>
              ) : (
                <>
                  View All {countries.length} Countries <ChevronDown className="w-4 h-4 ml-1" />
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
