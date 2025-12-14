import { Layers, MapPin, Search } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export const Work: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">
            Inside Global Supply Chains
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Migrant88 investigates hidden systems that trap workers in coercive
            and exploitative conditions across aviation, textiles,
            manufacturing, electronics, agriculture, logistics, and domestic
            work.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Key Themes */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Key Investigation Themes
          </h2>
          <div className="flex flex-wrap gap-3">
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
                className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium border border-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* The Liability Report Section */}
        <div className="border-t border-slate-200 pt-12 mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                The Liability Report
              </h2>
              <p className="text-slate-600 mt-2 max-w-2xl">
                Flagship investigation series documenting forced labour and
                structural coercion through country and sector level analysis.
              </p>
            </div>
            <Link to="/reports?type=Liability" className="mt-4 md:mt-0">
              <Button variant="custom">View All Reports</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center text-sm text-slate-500 mb-3 space-x-4">
                <span className="flex items-center">
                  <MapPin size={14} className="mr-1" /> India
                </span>
                <span className="flex items-center">
                  <Layers size={14} className="mr-1" /> Aviation
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                India Aviation Edition
              </h3>
              <p className="text-slate-600 mb-4">
                Reveals coercion across major Indian airports and documents
                testimony from ground staff, cabin crew, and outsourced teams.
              </p>
              <Button variant="outline" size="sm">
                Download PDF
              </Button>
            </div>
            {/* Placeholder for more */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex items-center justify-center text-center">
              <div>
                <Search className="mx-auto text-slate-400 mb-2" size={32} />
                <h3 className="text-lg font-medium text-slate-600">
                  Explore the full library
                </h3>
                <Link
                  to="/reports"
                  className="text-blue-600 hover:underline mt-2 inline-block"
                >
                  Browse all Liability Reports &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* The Inquisitor File Section */}
        <div className="border-t border-slate-200 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                The Inquisitor File
              </h2>
              <p className="text-slate-600 mt-2 max-w-2xl">
                Deep dive investigations into trafficking networks, profiteering
                systems, audit manipulation, and gendered exploitation.
              </p>
            </div>
            <Link to="/reports?type=Inquisitor" className="mt-4 md:mt-0">
              <Button variant="secondary">Access the Archive</Button>
            </Link>
          </div>

          <div className="bg-slate-900 rounded-lg p-8 text-white">
            <h3 className="text-xl font-bold mb-4">
              Latest Deep Dive: Gendered Exploitation in Electronics
            </h3>
            <p className="text-slate-300 mb-6">
              A comprehensive look at how hidden subcontracting tiers
              disproportionately affect female migrant workers in Southeast
              Asia.
            </p>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900"
            >
              Read Investigation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
