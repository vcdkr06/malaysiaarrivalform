import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Country { country: string; iso_code: string; flag_url: string; }

const CountryFlagsSection = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const INITIAL_DISPLAY_COUNT = 20;

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const response = await fetch('/data/country_flag_mapping.csv');
        const csvText = await response.text();
        const lines = csvText.split('\n');
        const parsedCountries: Country[] = [];
        for (let i = 1; i < lines.length; i++) {
          const line = lines[i].trim();
          if (line) {
            const csvRegex = /,(?=(?:(?:[^"]*"){2})*[^"]*$)/;
            const values = line.split(csvRegex);
            if (values.length >= 3) {
              parsedCountries.push({ country: values[0].replace(/"/g, ''), iso_code: values[1].replace(/"/g, ''), flag_url: values[2].replace(/"/g, '') });
            }
          }
        }
        setCountries(parsedCountries);
        setLoading(false);
      } catch (error) { console.error('Error loading countries:', error); setLoading(false); }
    };
    loadCountries();
  }, []);

  const displayedCountries = showAll ? countries : countries.slice(0, INITIAL_DISPLAY_COUNT);

  if (loading) {
    return <section className="py-16 bg-background"><div className="container mx-auto px-4 text-center"><h2 className="text-3xl font-bold text-foreground">Eligible Nationalities</h2></div></section>;
  }

  return (
    <section className="py-16 bg-background font-quicksand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3">Eligible <span className="text-accent">Nationalities</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">Travelers from these countries must complete the MDAC before entering Malaysia.</p>
        </div>
        <div className="grid grid-cols-5 gap-3 max-w-5xl mx-auto">
          {displayedCountries.map((country, index) => (
            <Card key={index} className="p-3 bg-card/60 backdrop-blur-sm border border-border hover:border-accent/30 transition-all duration-300 cursor-pointer rounded-xl">
              <div className="flex items-center gap-3">
                <img src={country.flag_url} alt={`${country.country} flag`} className="w-7 h-5 object-cover flex-shrink-0 rounded-sm" loading="lazy" />
                <span className="text-xs font-medium text-foreground truncate">{country.country}</span>
              </div>
            </Card>
          ))}
        </div>
        {!showAll && countries.length > INITIAL_DISPLAY_COUNT && (
          <div className="text-center mt-8">
            <Button onClick={() => setShowAll(true)} variant="outline" className="border-border text-foreground hover:bg-card font-medium px-6 rounded-full text-xs uppercase tracking-wider">
              Show More ({countries.length - INITIAL_DISPLAY_COUNT} more)
            </Button>
          </div>
        )}
        {showAll && (
          <div className="text-center mt-8">
            <Button onClick={() => setShowAll(false)} variant="outline" className="border-border text-foreground hover:bg-card font-medium px-6 rounded-full text-xs uppercase tracking-wider">
              Show Less
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CountryFlagsSection;
