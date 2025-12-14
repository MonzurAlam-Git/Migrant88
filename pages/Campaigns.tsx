import React from 'react';
import { Button } from '../components/Button';
import { Megaphone, FileCheck, Map } from 'lucide-react';

export const Campaigns: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-12">Global Campaigns</h1>

        {/* Public Right to Know */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-12">
            <div className="md:flex">
                <div className="md:w-1/3 bg-blue-900 p-8 text-white flex flex-col justify-center">
                    <Megaphone size={48} className="mb-4 text-blue-300" />
                    <h2 className="text-2xl font-bold mb-2">Public Right to Know</h2>
                    <p className="text-blue-200 font-medium">Supply Chain Transparency Initiative</p>
                    <p className="mt-4 text-sm text-blue-100">Launching February 2026</p>
                </div>
                <div className="md:w-2/3 p-8">
                    <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                        This global campaign demands full public disclosure of supply chain data across all tiers — a prerequisite for accountability, justice, and worker protection.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        {['Publish complete supplier lists', 'Reveal recruiters & brokers', 'Link exploitation to brands', 'Public transparency archive'].map((goal, i) => (
                            <div key={i} className="flex items-start">
                                <FileCheck size={20} className="text-green-600 mr-2 mt-1" />
                                <span className="text-slate-700">{goal}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Button variant="secondary">Support This Campaign</Button>
                        <Button variant="outline">Read the Campaign Brief</Button>
                    </div>
                </div>
            </div>
        </div>

        {/* DiscriMap */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-12">
            <div className="md:flex">
                <div className="md:w-1/3 bg-slate-800 p-8 text-white flex flex-col justify-center">
                    <Map size={48} className="mb-4 text-teal-300" />
                    <h2 className="text-2xl font-bold mb-2">DiscriMap Platform</h2>
                    <p className="text-slate-300 font-medium">Anti-Discrimination Work (Belgium & EU)</p>
                </div>
                <div className="md:w-2/3 p-8">
                    <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                        Building a national system to capture discrimination reports, map trends, produce annual reports, and run large-scale awareness campaigns across Belgium.
                    </p>
                    <div className="mb-6">
                        <h4 className="font-bold text-slate-900 mb-2">Activities Include:</h4>
                        <ul className="list-disc list-inside text-slate-600 space-y-1 ml-2">
                            <li>Digital reporting platform & analytics</li>
                            <li>School programmes and youth workshops</li>
                            <li>National poster campaigns</li>
                        </ul>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Button variant="secondary">Learn More</Button>
                        <Button variant="outline">Join the Project</Button>
                    </div>
                </div>
            </div>
        </div>

        {/* Smaller Cards */}
        <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Expose the Supply Chain</h3>
                <p className="text-slate-600 mb-4">A public call for mandatory disclosure of supplier data at every tier.</p>
                <Button variant="outline" size="sm">Support This Campaign</Button>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-2">End Forced Labour in Indian Aviation</h3>
                <p className="text-slate-600 mb-4">Based on testimonies from workers across major airports.</p>
                <Button variant="outline" size="sm">Read Findings</Button>
            </div>
        </div>

      </div>
    </div>
  );
};