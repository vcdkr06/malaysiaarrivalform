import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react"; // Keeping only the utility arrow for the CTA

const InfoCardsSection = () => {
  const cards = [
    {
      title: "What is MDAC?",
      text: "The Malaysia Digital Arrival Card (MDAC) is a mandatory digital entry form required for foreign nationals entering Malaysia.",
      isAlert: false,
    },
    {
      title: "Who Needs to Register?",
      text: "All foreign visitors arriving by air, land, or sea must complete the MDAC prior to arrival unless officially exempted.",
      isAlert: false,
    },
    {
      title: "When to Submit?",
      text: "The form must be submitted within 3 days prior to arrival. Failure to comply may result in entry delays or denial of boarding.",
      isAlert: true,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-100 border-b border-slate-300">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-3">Important Travel Information</h2>
          <div className="w-16 h-1 bg-blue-700 mb-4"></div>
          <p className="text-slate-700 mt-3 text-base max-w-2xl leading-relaxed">
            Please review the following regulatory guidelines before submitting your Malaysia Digital Arrival Card.
            Compliance is strictly enforced at all ports of entry.
          </p>
        </div>

        {/* INFO CARDS (Now formal boxes) */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`p-6 bg-white border rounded ${
                card.isAlert
                  ? "border-yellow-500 border-t-4 border-t-yellow-500"
                  : "border-slate-300 border-t-4 border-t-slate-400"
              }`}
            >
              <h3 className="text-base font-semibold text-slate-900 mb-3">{card.title}</h3>
              <p className="text-sm text-slate-700 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

        {/* PROFESSIONAL CTA (Simplified, formal layout) */}
        <div className="bg-white border border-slate-300 border-l-4 border-l-blue-700 rounded p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side: Text */}
          <div className="max-w-xl text-center md:text-left">
            <h4 className="text-lg md:text-xl font-semibold text-slate-900">
              Complete Your Digital Arrival Registration
            </h4>
            <p className="text-sm text-slate-700 mt-2 leading-relaxed">
              Submit your Malaysia Digital Arrival Card securely online prior to your travel date. The registration
              process requires approximately 5 minutes to complete.
            </p>
          </div>

          {/* Right Side: Button */}
          <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
            <Button
              asChild
              size="lg"
              className="h-12 w-full md:w-auto px-8 rounded font-medium bg-blue-700 hover:bg-blue-800 text-white shadow-none transition-none text-base"
            >
              <Link to="/apply" className="flex items-center justify-center gap-2">
                Begin Application Process
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
              Mandatory Requirement for Entry
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCardsSection;
