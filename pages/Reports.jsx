import { Download, Filter } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/Button.jsx";

const mockReports = [
  {
    id: "1",
    title: "India Aviation Edition",
    summary:
      "Reveals coercion across major Indian airports and documents testimony from ground staff.",
    region: "Asia",
    country: "India",
    sector: "Aviation",
    year: 2024,
    type: "Liability Report",
    imageUrl: "https://picsum.photos/400/300?random=1",
  },
  {
    id: "2",
    title: "Textile Supply Chains in Bangladesh",
    summary:
      "Deep dive into wage manipulation and safety hazards in export-oriented factories.",
    region: "Asia",
    country: "Bangladesh",
    sector: "Textile",
    year: 2023,
    type: "Liability Report",
    imageUrl: "https://picsum.photos/400/300?random=2",
  },
  {
    id: "3",
    title: "Construction Sector: Qatar Dossier",
    summary:
      "Analysis of recruitment fees and debt bondage among migrant workers.",
    region: "Middle East",
    country: "Qatar",
    sector: "Construction",
    year: 2022,
    type: "Dossier",
    imageUrl: "https://picsum.photos/400/300?random=3",
  },
  {
    id: "4",
    title: "Hidden Subcontractors in Electronics",
    summary:
      "Tracing the path of components from unregulated workshops to major brands.",
    region: "Asia",
    country: "Malaysia",
    sector: "Electronics",
    year: 2025,
    type: "Inquisitor File",
    imageUrl: "https://picsum.photos/400/300?random=4",
  },
];

export const Reports = () => {
  const [filterRegion, setFilterRegion] = useState("");
  const [filterSector, setFilterSector] = useState("");
  const [filterType, setFilterType] = useState("");

  const filteredReports = mockReports.filter((report) => {
    return (
      (filterRegion === "" || report.region === filterRegion) &&
      (filterSector === "" || report.sector === filterSector) &&
      (filterType === "" || report.type === filterType)
    );
  });

  const clearFilters = () => {
    setFilterRegion("");
    setFilterSector("");
    setFilterType("");
  };

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fade-in-up">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white">
            Reports and Resources
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-lg">
            A searchable library including The Liability Report, The Inquisitor
            File, and Dossiers.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar Filters */}
          <div
            className="lg:w-1/4 space-y-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm sticky top-24">
              <div className="flex items-center mb-6">
                <Filter
                  size={20}
                  className="text-slate-500 dark:text-slate-400 mr-2"
                />
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                  Filters
                </h3>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2 tracking-wide">
                    Type
                  </label>
                  <select
                    className="w-full p-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                  >
                    <option value="">All Types</option>
                    <option value="Liability Report">Liability Report</option>
                    <option value="Inquisitor File">Inquisitor File</option>
                    <option value="Dossier">Dossier</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2 tracking-wide">
                    Region
                  </label>
                  <select
                    className="w-full p-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
                    value={filterRegion}
                    onChange={(e) => setFilterRegion(e.target.value)}
                  >
                    <option value="">All Regions</option>
                    <option value="Asia">Asia</option>
                    <option value="Middle East">Middle East</option>
                    <option value="Europe">Europe</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 dark:text-slate-400 mb-2 tracking-wide">
                    Sector
                  </label>
                  <select
                    className="w-full p-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:outline-none"
                    value={filterSector}
                    onChange={(e) => setFilterSector(e.target.value)}
                  >
                    <option value="">All Sectors</option>
                    <option value="Aviation">Aviation</option>
                    <option value="Textile">Textile</option>
                    <option value="Construction">Construction</option>
                    <option value="Electronics">Electronics</option>
                  </select>
                </div>
                <button
                  onClick={clearFilters}
                  className="text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-medium underline w-full text-left pt-2"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div
            className="lg:w-3/4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="mb-6 text-sm text-slate-500 dark:text-slate-400 font-medium">
              Showing {filteredReports.length} results
            </div>

            {filteredReports.length === 0 ? (
              <div className="text-center py-24 bg-slate-50 dark:bg-slate-900 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700">
                <p className="text-slate-500 dark:text-slate-400 text-lg">
                  No reports match your filters. Try adjusting your selection.
                </p>
              </div>
            ) : (
              <div className="grid gap-8">
                {filteredReports.map((report) => (
                  <div
                    key={report.id}
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row gap-8 hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 group"
                  >
                    <div className="sm:w-1/3 overflow-hidden rounded-xl">
                      <img
                        src={report.imageUrl}
                        alt={report.title}
                        className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 text-xs font-bold rounded-full uppercase tracking-wide">
                          {report.type}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                          {report.year}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors">
                        {report.title}
                      </h3>
                      <div className="flex items-center text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 space-x-3">
                        <span>{report.region}</span>
                        <span className="text-slate-300 dark:text-slate-600">
                          &bull;
                        </span>
                        <span>{report.country}</span>
                        <span className="text-slate-300 dark:text-slate-600">
                          &bull;
                        </span>
                        <span>{report.sector}</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 text-base mb-6 flex-1 leading-relaxed">
                        {report.summary}
                      </p>
                      <div className="mt-auto">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full sm:w-auto hover:bg-slate-50 dark:hover:bg-slate-800"
                        >
                          <Download size={16} className="mr-2" /> Download
                          Report
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
