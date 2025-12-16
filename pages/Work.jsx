import { Layers, MapPin, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button.jsx";

export const Work = () => {
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="bg-slate-900 dark:bg-slate-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-purple-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in-up">
          <h1 className="text-5xl font-bold mb-6">
            Inside Global Supply Chains
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Migrant88 investigates hidden systems that trap workers in coercive
            and exploitative conditions across aviation, textiles,
            manufacturing, electronics, agriculture, logistics, and domestic
            work.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Key Themes */}
        <div className="mb-20 animate-fade-in">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            Key Investigation Themes
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              "Forced labour indicators",
              "Recruitment deception",
              "Wage manipulation",
              "Debt coercion",
              "Corporate complicity",
              "Audit failure",
              "Trafficking pathways",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700 hover:shadow-md transition-all cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* The Liability Report Section */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-16 mb-20 animate-fade-in-up">
          <div className="flex flex-col md:flex-row justify-between items-start mb-10">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
                The Liability Report
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl text-lg">
                Flagship investigation series documenting forced labour and
                structural coercion through country and sector level analysis.
              </p>
            </div>
            <Link to="/reports?type=Liability" className="mt-6 md:mt-0">
              <Button variant="custom">View All Reports Ex</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4 space-x-6">
                <span className="flex items-center font-medium">
                  <MapPin size={16} className="mr-2 text-red-500" /> India
                </span>
                <span className="flex items-center font-medium">
                  <Layers size={16} className="mr-2 text-red-500" /> Aviation
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                India Aviation Edition
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                Reveals coercion across major Indian airports and documents
                testimony from ground staff, cabin crew, and outsourced teams.
              </p>
              <Button variant="outline" size="sm">
                Download PDF
              </Button>
            </div>
            {/* Placeholder for more */}
            <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 flex items-center justify-center text-center group hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <div>
                <Search
                  className="mx-auto text-slate-400 group-hover:text-red-500 transition-colors duration-300 mb-4"
                  size={40}
                />
                <h3 className="text-xl font-medium text-slate-600 dark:text-slate-300">
                  Explore the full library
                </h3>
                <Link
                  to="/reports"
                  className="text-red-600 dark:text-red-400 hover:underline mt-4 inline-block font-medium"
                >
                  Browse all Liability Reports &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* The Inquisitor File Section */}
        <div
          className="border-t border-slate-200 dark:border-slate-800 pt-16 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start mb-10">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
                The Inquisitor File
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl text-lg">
                Deep dive investigations into trafficking networks, profiteering
                systems, audit manipulation, and gendered exploitation.
              </p>
            </div>
            <Link to="/reports?type=Inquisitor" className="mt-6 md:mt-0">
              <Button variant="secondary">Access the Archive</Button>
            </Link>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-10 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                Latest Deep Dive: Gendered Exploitation in Electronics
              </h3>
              <p className="text-slate-300 mb-8 text-lg max-w-3xl leading-relaxed">
                A comprehensive look at how hidden subcontracting tiers
                disproportionately affect female migrant workers in Southeast
                Asia.
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm bg-white/5"
              >
                Read Investigation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
