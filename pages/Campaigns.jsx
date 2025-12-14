import React from 'react';
import { Button } from '../components/Button.jsx';
import { Megaphone, FileCheck, Map } from 'lucide-react';

export const Campaigns = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-16 animate-fade-in-up">Global Campaigns</h1>

        {/* Public Right to Know */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden mb-16 animate-fade-in-up">
            <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-blue-900 to-blue-800 p-10 text-white flex flex-col justify-center">
                    <Megaphone size={56} className="mb-6 text-blue-300" />
                    <h2 className="text-3xl font-bold mb-3">Public Right to Know</h2>
                    <p className="text-blue-200 font-medium text-lg">Supply Chain Transparency Initiative</p>
                    <p className="mt-8 text-sm text-blue-100 bg-blue-800/50 py-1 px-3 rounded-full inline-block w-fit">Launching February 2026</p>
                </div>
                <div className="md:w-2/3 p-10">
                    <p className="text-slate-600 dark:text-slate-300 text-xl mb-8 leading-relaxed">
                        This global campaign demands full public disclosure of supply chain data across all tiers — a prerequisite for accountability, justice, and worker protection.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6 mb-10">
                        {['Publish complete supplier lists', 'Reveal recruiters & brokers', 'Link exploitation to brands', 'Public transparency archive'].map((goal, i) => (
                            <div key={i} className="flex items-start">
                                <FileCheck size={24} className="text-green-600 dark:text-green-400 mr-3 mt-0.5" />
                                <span className="text-slate-700 dark:text-slate-300 font-medium">{goal}</span>
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
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-slate-800 to-slate-900 p-10 text-white flex flex-col justify-center">
                    <Map size={56} className="mb-6 text-teal-300" />
                    <h2 className="text-3xl font-bold mb-3">DiscriMap Platform</h2>
                    <p className="text-slate-300 font-medium text-lg">Anti-Discrimination Work (Belgium & EU)</p>
                </div>
                <div className="md:w-2/3 p-10">
                    <p className="text-slate-600 dark:text-slate-300 text-xl mb-8 leading-relaxed">
                        Building a national system to capture discrimination reports, map trends, produce annual reports, and run large-scale awareness campaigns across Belgium.
                    </p>
                    <div className="mb-8">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4 text-lg">Activities Include:</h4>
                        <ul className="space-y-3 text-slate-600 dark:text-slate-300 ml-2">
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></span>Digital reporting platform & analytics</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></span>School programmes and youth workshops</li>
                            <li className="flex items-center"><span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-3"></span>National poster campaigns</li>
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
        <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Expose the Supply Chain</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">A public call for mandatory disclosure of supplier data at every tier.</p>
                <Button variant="outline" size="sm">Support This Campaign</Button>
            </div>
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">End Forced Labour in Indian Aviation</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">Based on testimonies from workers across major airports.</p>
                <Button variant="outline" size="sm">Read Findings</Button>
            </div>
        </div>

      </div>
    </div>
  );
};