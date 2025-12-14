import React from 'react';
import { Target, Eye } from 'lucide-react';

export const About = () => {
  const team = [
    {
      name: "Ashik Rahman, PhD",
      role: "Founder and Research Director",
      bio: "Leads investigative research on forced labour indicators, recruitment deception, and the political economy of supply chains across multiple regions.",
      image: "https://picsum.photos/200/200?random=10"
    },
    {
      name: "Elena Rossi",
      role: "Senior Investigator",
      bio: "Specialist in gendered exploitation and audit manipulation in the textile sector.",
      image: "https://picsum.photos/200/200?random=11"
    },
    {
      name: "David Okafor",
      role: "Campaign Coordinator",
      bio: "Mobilises global campaigns focusing on supply chain transparency and corporate accountability.",
      image: "https://picsum.photos/200/200?random=12"
    }
  ];

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Header */}
      <div className="bg-slate-100 dark:bg-slate-900 py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
            <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">Who We Are</h1>
            <p className="text-2xl text-slate-600 dark:text-slate-300 max-w-3xl font-light leading-relaxed">
                Migrant88 investigates forced labour, trafficking, discrimination, and exploitation across global supply chains.
            </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-12 animate-fade-in-up">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                        <Target className="mr-3 text-blue-600 dark:text-blue-400" size={32} /> Our Mission
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                        Our mission is to expose hidden systems, amplify worker voices, and demand accountability from corporations, institutions, and governments.
                    </p>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                        <Eye className="mr-3 text-blue-600 dark:text-blue-400" size={32} /> Our Vision
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                        A world where no worker is invisible, where exploitation cannot hide, and where global markets operate with dignity, fairness, transparency, and justice.
                    </p>
                </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-10 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Our Values</h3>
                <ul className="space-y-6">
                    {['Worker centred research', 'Independence and integrity', 'Evidence based advocacy', 'Transparency and accountability', 'Global solidarity and partnership'].map((val, idx) => (
                        <li key={idx} className="flex items-center text-slate-700 dark:text-slate-300 text-lg">
                            <span className="w-3 h-3 bg-blue-600 dark:bg-blue-500 rounded-full mr-4 shadow-sm"></span>
                            {val}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-slate-900 dark:bg-black text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
            <h2 className="text-4xl font-bold mb-10">Our Story</h2>
            <div className="prose prose-lg prose-invert text-slate-300 max-w-4xl leading-loose">
                <p className="mb-6">
                    Founded in Malaysia in 2013, opening its 1st international office in Bangladesh in 2016 and internationally expanded through Brussels in 2025, Migrant88 brings together field investigators, researchers, survivors, and allied networks.
                </p>
                <p>
                    From garment factories to construction sites, from airports to agricultural fields, our work exposes systems of harm that corporations and governments allow to remain hidden.
                </p>
            </div>
        </div>
      </div>

      {/* Team */}
      <div id="team" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-16 text-center">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-10">
            {team.map((member, idx) => (
                <div key={member.name} className="text-center group animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="relative inline-block mb-6">
                         <div className="absolute inset-0 bg-blue-600 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-40 h-40 rounded-full object-cover border-4 border-slate-100 dark:border-slate-800 shadow-lg relative z-10 transform group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{member.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 text-sm font-bold tracking-wider uppercase mb-4">{member.role}</p>
                    <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">{member.bio}</p>
                </div>
            ))}
        </div>
      </div>

      {/* Approach */}
      <div id="approach" className="bg-slate-50 dark:bg-slate-900 py-24 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-16 text-center">Our Approach</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                     { title: "Worker Centred", text: "Testimonies from those directly affected form the core of our reports." },
                     { title: "Document Review", text: "Contracts, payslips, photos, videos, internal memos, labour agent records." },
                     { title: "Field Research", text: "Insights from recruitment brokers, subcontractors, organizers, and communities." },
                     { title: "Structural Analysis", text: "A systems-level approach linking exploitation to corporate and state structures." }
                 ].map((item, idx) => (
                     <div key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-200 dark:border-slate-700 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                         <h4 className="font-bold text-xl mb-4 text-slate-900 dark:text-white">{item.title}</h4>
                         <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.text}</p>
                     </div>
                 ))}
            </div>
        </div>
      </div>
    </div>
  );
};