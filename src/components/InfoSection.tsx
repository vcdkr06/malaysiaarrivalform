const InfoSection = () => {
  const comparisonData = [
    { feature: "Paper form required", tm6: true, tdac: false },
    { feature: "Digital submission", tm6: false, tdac: true },
    { feature: "Pre-arrival application", tm6: false, tdac: true },
    { feature: "Mobile access", tm6: false, tdac: true },
    { feature: "Mandatory for all travelers", tm6: true, tdac: true },
  ];

  return (
    <section className="py-20 bg-accent/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">
            Key Updates Effective 1st January 2024
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text content */}
          <div className="space-y-6">
            <p className="text-foreground text-lg leading-relaxed">
              The MDAC replaces the old paper form starting January 2024. 
              The new digital process simplifies your entry into Malaysia — faster, paper-free, and fully mobile.
            </p>
            <p className="text-foreground text-lg leading-relaxed">
              These updates make entry into Malaysia smoother and more efficient — no more paper cards or long queues.
              Apply online, receive your QR code, and enjoy a streamlined arrival process.
            </p>
          </div>

          {/* Right: Comparison table */}
          <div className="bg-card rounded-xl shadow-soft overflow-hidden">
            <table className="w-full border-collapse">
              <thead className="bg-muted/30">
                <tr>
                  <th className="p-5 font-bold text-foreground text-center">Feature</th>
                  <th className="p-5 font-bold text-foreground text-center">Before (Paper)</th>
                  <th className="p-5 font-bold text-foreground text-center">Now (Digital)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr 
                    key={index} 
                    className={index % 2 === 0 ? "bg-card" : "bg-muted/10"}
                  >
                    <td className="p-4 text-center border-t border-border">{row.feature}</td>
                    <td className="p-4 text-center border-t border-border">
                      {row.tm6 ? "✅" : "❌"}
                    </td>
                    <td className="p-4 text-center border-t border-border">
                      {row.tdac ? "✅" : "❌"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
