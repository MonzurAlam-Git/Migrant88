import React from 'react';
import { Shield, Target, Heart, Eye } from 'lucide-react';

export const About: React.FC = () => {
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
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Who We Are</h1>
            <p className="text-xl text-slate-600 max-w-3xl">
                Migrant88 investigates forced labour, trafficking, discrimination, and exploitation across global supply chains.
            </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-16">
            <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                    <Target className="mr-3 text-blue-600" /> Our Mission
                </h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                    Our mission is to expose hidden systems, amplify worker voices, and demand accountability from corporations, institutions, and governments.
                </p>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                    <Eye className="mr-3 text-blue-600" /> Our Vision
                </h2>
                <p className="text-slate-600 leading-relaxed">
                    A world where no worker is invisible, where exploitation cannot hide, and where global markets operate with dignity, fairness, transparency, and justice.
                </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-lg border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Our Values</h3>
                <ul className="space-y-4">
                    {['Worker centred research', 'Independence and integrity', 'Evidence based advocacy', 'Transparency and accountability', 'Global solidarity and partnership'].map((val, idx) => (
                        <li key={idx} className="flex items-center text-slate-700">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                            {val}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <div className="prose prose-lg prose-invert text-slate-300 max-w-4xl">
                <p>
                    Founded in Malaysia in 2013, opening its 1st international office in Bangladesh in 2016 and internationally expanded through Brussels in 2025, Migrant88 brings together field investigators, researchers, survivors, and allied networks.
                </p>
                <p>
                    From garment factories to construction sites, from airports to agricultural fields, our work exposes systems of harm that corporations and governments allow to remain hidden.
                </p>
            </div>
        </div>
      </div>

      {/* Team */}
      <div id="team" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
                <div key={member.name} className="text-center">
                    <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-slate-100"
                    />
                    <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                    <p className="text-blue-600 text-sm font-medium mb-3 uppercase">{member.role}</p>
                    <p className="text-slate-600 text-sm">{member.bio}</p>
                </div>
            ))}
        </div>
      </div>

      {/* Approach */}
      <div id="approach" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Approach</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                     { title: "Worker Centred", text: "Testimonies from those directly affected form the core of our reports." },
                     { title: "Document Review", text: "Contracts, payslips, photos, videos, internal memos, labour agent records." },
                     { title: "Field Research", text: "Insights from recruitment brokers, subcontractors, organizers, and communities." },
                     { title: "Structural Analysis", text: "A systems-level approach linking exploitation to corporate and state structures." }
                 ].map((item, idx) => (
                     <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                         <h4 className="font-bold text-lg mb-2 text-slate-900">{item.title}</h4>
                         <p className="text-slate-600 text-sm">{item.text}</p>
                     </div>
                 ))}
            </div>
        </div>
      </div>
    </div>
  );
};