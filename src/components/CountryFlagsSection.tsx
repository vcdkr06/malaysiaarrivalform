import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react"; // Kept only utility icons for UI state

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
    <section className="py-16 bg-white border-b border-slate-300">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* HEADER - Standardized Formal Style */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-3">Eligible Nationalities</h2>
          <div className="w-16 h-1 bg-blue-700 mb-4"></div>
          <p className="text-slate-700 mt-3 text-base max-w-2xl leading-relaxed">
            Passport holders from the following jurisdictions are required to submit the digital registration prior to
            their arrival at any Malaysian port of entry.
          </p>
        </div>

        {/* FLAGS GRID - Strict rectangular boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 w-full">
          {shown.map((c, i) => (
            <div key={i} className="flex items-center gap-3 px-3 py-2.5 border border-slate-300 bg-slate-50 rounded">
              {/* Flag Container - Sharp borders */}
              <div className="w-8 h-5 flex-shrink-0 border border-slate-300 bg-white">
                <img
                  src={c.flag_url}
                  alt={`${c.country} flag`}
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
              </div>

              <span className="text-sm font-medium text-slate-800 truncate">{c.country}</span>
            </div>
          ))}
        </div>

        {/* TOGGLE BUTTON — Formal Secondary Action */}
        {countries.length > INITIAL && (
          <div className="mt-8 border-t border-slate-200 pt-8 flex justify-center md:justify-start">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="lg"
              className="h-12 px-8 rounded font-medium border-slate-300 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-none transition-none text-sm flex items-center gap-2"
            >
              {showAll ? (
                <>
                  Collapse List <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  View All Required Nationalities ({countries.length}) <ChevronDown className="w-4 h-4" />
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
