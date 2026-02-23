import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface Country { country: string; iso_code: string; flag_url: string; }

const CountryFlagsSection = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const INITIAL = 20;

  useEffect(() => {
    fetch('/data/country_flag_mapping.csv').then(r => r.text()).then(csv => {
      const lines = csv.split('\n');
      const parsed: Country[] = [];
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        const vals = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
        if (vals.length >= 3) parsed.push({ country: vals[0].replace(/"/g,''), iso_code: vals[1].replace(/"/g,''), flag_url: vals[2].replace(/"/g,'') });
      }
      setCountries(parsed);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const shown = showAll ? countries : countries.slice(0, INITIAL);
  if (loading) return null;

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Applicable Countries</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Eligible Nationalities</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-lg mx-auto">Travelers from these countries must complete the MDAC prior to entering Malaysia.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 max-w-4xl mx-auto">
          {shown.map((c, i) => (
            <div key={i} className="flex items-center gap-2.5 bg-background rounded-xl px-3 py-2.5 border border-border hover:shadow-soft transition-shadow">
              <img src={c.flag_url} alt={c.country} className="w-6 h-4 object-cover rounded-sm flex-shrink-0" loading="lazy" />
              <span className="text-xs font-medium text-foreground truncate">{c.country}</span>
            </div>
          ))}
        </div>
        {countries.length > INITIAL && (
          <div className="text-center mt-8">
            <Button onClick={() => setShowAll(!showAll)} variant="outline" className="rounded-full text-xs font-semibold px-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              {showAll ? 'Show Less' : `Show All (${countries.length})`}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CountryFlagsSection;
