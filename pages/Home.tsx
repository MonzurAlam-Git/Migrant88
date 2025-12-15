import {
  Briefcase,
  FileText,
  Globe2,
  Mic2,
  ShieldAlert,
  Users,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Button } from "../components/Button";

const impactData = [
  { year: "2013", interviews: 120 },
  { year: "2015", interviews: 850 },
  { year: "2018", interviews: 2400 },
  { year: "2021", interviews: 5600 },
  { year: "2024", interviews: 8500 },
];

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/1920/1080?grayscale')] bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="lg:w-2/3">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Decoding Power. <br />
              <span className="text-blue-400">Demanding Justice.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Migrant88 is an independent investigative NGO exposing forced
              labour, trafficking, discrimination, and the hidden structures
              that allow exploitation to persist across global supply chains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/work">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Explore Our Work
                </Button>
              </Link>
              <Link to="/campaigns">
                <Button
                  variant="outline"
                  sizbg-gradient-to-r
                  from-sky-700
                  to-sky-600
                  hover:from-sky-600
                  hover:to-sky-500
                  text-white
                  px-4
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                  transition-all
                  shadow-md
                  hover:shadow-lg
                  hover:scale-105
                  e="lg"
                  className="w-full sm:w-auto text-white border-slate-500 hover:bg-slate-800 hover:text-white"
                >
                  Join a Campaign
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">What We Do</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                <ShieldAlert size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Investigations
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We uncover forced labour, trafficking, corporate secrecy, and
                discrimination across global production networks.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-700">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Campaigns</h3>
              <p className="text-slate-600 leading-relaxed">
                We mobilise public pressure through coordinated global campaigns
                such as the Public Right to Know Supply Chain Initiative.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                <Mic2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Worker-Centred Evidence
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our work is grounded in testimony from workers, migrants,
                survivors, and communities affected by exploitation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Spotlight</h2>
              <p className="text-slate-600 mt-2">
                Investigations, Campaigns, and Podcast
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="h-48 bg-slate-200 relative">
                <img
                  src="https://picsum.photos/600/400?random=1"
                  alt="Report"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                  Report
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  The Liability Report
                </h3>
                <p className="text-slate-600 text-sm mb-4 flex-1">
                  A global investigation series documenting forced labour
                  indicators across industries and countries. Grounded in
                  verified testimony.
                </p>
                <Link to="/reports">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-gradient-to-r from-red-700 to-red-600
hover:from-red-600 hover:to-red-500
 text-white px-4 py-2 rounded-md text-sm font-medium transition-all shadow-md hover:shadow-lg hover:scale-105 w-full"
                  >
                    View All Reports
                  </Button>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="h-48 bg-slate-200 relative">
                <img
                  src="https://picsum.photos/600/400?random=2"
                  alt="Archive"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-slate-900 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                  Archive
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  The Inquisitor File
                </h3>
                <p className="text-slate-600 text-sm mb-4 flex-1">
                  A deep dive archive revealing trafficking networks, corporate
                  misconduct, and recruitment deception.
                </p>
                <Link to="/reports">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-gradient-to-r from-red-700 to-red-600
hover:from-red-600 hover:to-red-500
 text-white px-4 py-2 rounded-md text-sm font-medium transition-all shadow-md hover:shadow-lg hover:scale-105 w-full"
                  >
                    Access the Archive
                  </Button>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="h-48 bg-slate-200 relative">
                <img
                  src="https://picsum.photos/600/400?random=3"
                  alt="Podcast"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-sm">
                  Podcast
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Voices from the Supply Chain
                </h3>
                <p className="text-slate-600 text-sm mb-4 flex-1">
                  Stories from the ground, investigative commentary, and expert
                  dialogue on forced labour.
                </p>
                <Link to="/podcast">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-gradient-to-r from-red-700 to-red-600
hover:from-red-600 hover:to-red-500
 text-white px-4 py-2 rounded-md text-sm font-medium transition-all shadow-md hover:shadow-lg hover:scale-105 w-full"
                  >
                    Listen Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section (Data Viz) */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Globe2 className="mt-1 mr-4 text-blue-400" size={24} />
                  <div>
                    <h4 className="text-xl font-semibold">Global Reach</h4>
                    <p className="text-slate-400">
                      Investigations across 70 countries in Europe, Asia, and
                      Africa.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FileText className="mt-1 mr-4 text-blue-400" size={24} />
                  <div>
                    <h4 className="text-xl font-semibold">Evidence Driven</h4>
                    <p className="text-slate-400">
                      Reports used by journalists, NGOs, governments, and
                      policymakers to shape legal action.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Briefcase className="mt-1 mr-4 text-blue-400" size={24} />
                  <div>
                    <h4 className="text-xl font-semibold">Systemic Change</h4>
                    <p className="text-slate-400">
                      Challenging corporate accountability frameworks through
                      verified field data.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg shadow-xl">
              <h4 className="text-lg font-semibold mb-4 text-center">
                Cumulative Worker Interviews (Since 2013)
              </h4>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={impactData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="year" stroke="#94a3b8" />
                    <YAxis stroke="#94a3b8" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1e293b",
                        border: "none",
                        color: "#fff",
                      }}
                      cursor={{ fill: "#334155" }}
                    />
                    <Bar
                      dataKey="interviews"
                      fill="#3b82f6"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-center text-slate-400 text-sm mt-4">
                More than 8500 verified interviews conducted
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-sky-700 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Movement
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Receive updates, investigations, and campaign alerts directly to
            your inbox.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-3 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button
              variant="primary"
              className="bg-slate-900 text-white hover:bg-slate-800 whitespace-nowrap"
            >
              Sign Up for Updates
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};
