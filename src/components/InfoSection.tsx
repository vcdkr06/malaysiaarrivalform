const InfoSection = () => {
  const comparisonData = [
    { feature: "Paper form required", tm6: true, tdac: false },
    { feature: "Digital submission", tm6: false, tdac: true },
    { feature: "Pre-arrival application", tm6: false, tdac: true },
    { feature: "Mobile access", tm6: false, tdac: true },
    { feature: "Mandatory for all travelers", tm6: true, tdac: true },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-3">
            Key Updates Effective 1st January 2024
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
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

          <div className="bg-card rounded-xl shadow-soft overflow-hidden border border-border">
            <table className="w-full border-collapse">
              <thead className="bg-secondary">
                <tr>
                  <th className="p-5 font-bold text-heading-strong text-center">Feature</th>
                  <th className="p-5 font-bold text-heading-strong text-center">Before (Paper)</th>
                  <th className="p-5 font-bold text-heading-strong text-center">Now (Digital)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-card" : "bg-secondary/50"}>
                    <td className="p-4 text-center border-t border-border text-foreground">{row.feature}</td>
                    <td className="p-4 text-center border-t border-border">{row.tm6 ? "✅" : "❌"}</td>
                    <td className="p-4 text-center border-t border-border">{row.tdac ? "✅" : "❌"}</td>
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
