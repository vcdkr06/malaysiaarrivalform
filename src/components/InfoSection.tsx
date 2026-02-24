const InfoSection = () => {
  const comparisonData = [
    { feature: "Paper form submission upon arrival", past: true, present: false },
    { feature: "Pre-arrival digital submission required", past: false, present: true },
    { feature: "Mobile device compatibility", past: false, present: true },
    { feature: "Mandatory for all eligible foreign visitors", past: true, present: true },
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-300">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Formal Header with Underline Accent */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-3">
            Key Policy Updates: Effective January 1, 2024
          </h2>
          <div className="w-16 h-1 bg-blue-700"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bureaucratic Text Block */}
          <div className="space-y-5">
            <p className="text-slate-700 text-base leading-relaxed">
              The Digital Arrival Registration officially replaces the legacy paper-based immigration form. This
              mandatory transition applies to all eligible foreign visitors entering Malaysia.
            </p>
            <p className="text-slate-700 text-base leading-relaxed">
              Travelers must now submit their arrival information electronically prior to their departure. This digital
              implementation is designed to optimize border clearance protocols, reduce physical wait times, and ensure
              a more streamlined immigration process upon arrival.
            </p>
          </div>

          {/* Formal Data Table */}
          <div className="bg-white border border-slate-300 border-t-4 border-t-blue-700 rounded w-full overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 border-b border-slate-300">
                <tr>
                  <th className="p-4 font-semibold text-slate-800 text-sm">Requirement / Feature</th>
                  <th className="p-4 font-semibold text-slate-800 text-sm text-center border-l border-slate-300">
                    Previous (Paper)
                  </th>
                  <th className="p-4 font-semibold text-slate-800 text-sm text-center border-l border-slate-300">
                    Current (Digital)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisonData.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 text-sm text-slate-700">{row.feature}</td>
                    <td className="p-4 text-sm text-center border-l border-slate-300 text-slate-500">
                      {row.past ? "Yes" : "No"}
                    </td>
                    {/* Emphasizing the 'Current' column slightly with darker text */}
                    <td className="p-4 text-sm text-center border-l border-slate-300 font-medium text-slate-900 bg-blue-50/30">
                      {row.present ? "Yes" : "No"}
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
