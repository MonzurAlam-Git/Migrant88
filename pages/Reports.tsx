import { Download, Filter } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../components/Button";
import { Report } from "../types";

const mockReports: Report[] = [
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

export const Reports: React.FC = () => {
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
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900">
            Reports and Resources
          </h1>
          <p className="text-slate-600 mt-2">
            A searchable library including The Liability Report, The Inquisitor
            File, and Dossiers.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4 space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <div className="flex items-center mb-4">
                <Filter size={20} className="text-slate-500 mr-2" />
                <h3 className="font-bold text-slate-900">Filters</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">
                    Type
                  </label>
                  <select
                    className="w-full p-2 border border-slate-300 rounded text-sm"
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
                  <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">
                    Region
                  </label>
                  <select
                    className="w-full p-2 border border-slate-300 rounded text-sm"
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
                  <label className="block text-xs font-semibold uppercase text-slate-500 mb-1">
                    Sector
                  </label>
                  <select
                    className="w-full p-2 border border-slate-300 rounded text-sm"
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
                  className="text-sm text-red-600 hover:text-red-800 underline w-full text-left"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:w-3/4">
            <div className="mb-4 text-sm text-slate-500">
              Showing {filteredReports.length} results
            </div>

            {filteredReports.length === 0 ? (
              <div className="text-center py-20 bg-slate-50 rounded-lg border border-dashed border-slate-300">
                <p className="text-slate-500">
                  No reports match your filters. Try adjusting your selection.
                </p>
              </div>
            ) : (
              <div className="grid gap-6">
                {filteredReports.map((report) => (
                  <div
                    key={report.id}
                    className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow"
                  >
                    <div className="sm:w-1/3">
                      <img
                        src={report.imageUrl}
                        alt={report.title}
                        className="w-full h-48 object-cover rounded bg-slate-200"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-bold rounded uppercase">
                          {report.type}
                        </span>
                        <span className="text-xs text-slate-500">
                          {report.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {report.title}
                      </h3>
                      <div className="flex items-center text-xs text-slate-500 mb-3 space-x-3">
                        <span>{report.region}</span>
                        <span>&bull;</span>
                        <span>{report.country}</span>
                        <span>&bull;</span>
                        <span>{report.sector}</span>
                      </div>
                      <p className="text-slate-600 text-sm mb-4 flex-1">
                        {report.summary}
                      </p>
                      <div className="mt-auto">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full sm:w-auto"
                        >
                          <Download size={14} className="mr-2" /> Download
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
