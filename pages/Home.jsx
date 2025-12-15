import {
  Briefcase,
  FileText,
  Globe2,
  Mic2,
  ShieldAlert,
  Users,
} from "lucide-react";
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
import { Button } from "../components/Button.jsx";

const impactData = [
  { year: "2013", interviews: 120 },
  { year: "2015", interviews: 850 },
  { year: "2018", interviews: 2400 },
  { year: "2021", interviews: 5600 },
  { year: "2024", interviews: 8500 },
];

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Parallax */}
      <section
        className="relative min-h-[85vh] flex items-center overflow-hidden parallax-bg py-20 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage:
            "url('https://i.ibb.co.com/HD2L78fw/Gemini-Generated-Image-x44fj1x44fj1x44f.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/80 dark:from-slate-950/95 dark:to-slate-900/90" />
        <div className="relative max-w-7xl mx-auto w-full z-10 animate-fade-in-up text-center lg:text-left">
          <div className="lg:w-3/4 mx-auto lg:mx-0">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-6 sm:mb-8 leading-tight text-white drop-shadow-lg">
              Decoding Power. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">
                Demanding Justice.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-slate-200 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Migrant88 is an independent investigative NGO exposing forced
              labour, trafficking, discrimination, and the hidden structures
              that allow exploitation to persist across global supply chains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
              <Link to="/work" className="w-full sm:w-auto">
                <Button
                  variant="danger"
                  size="lg"
                  className="w-full shadow-xl shadow-blue-900/20"
                >
                  Explore Our Work
                </Button>
              </Link>
              <Link to="/campaigns" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full text-white border-white hover:bg-white hover:text-slate-900 backdrop-blur-sm bg-white/5"
                >
                  Join a Campaign
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              What We Do
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-red-600  to-red-300 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                icon: ShieldAlert,
                color: "blue",
                title: "Investigations",
                text: "We uncover forced labour, trafficking, corporate secrecy, and discrimination across global production networks.",
              },
              {
                icon: Users,
                color: "red",
                title: "Campaigns",
                text: "We mobilise public pressure through coordinated global campaigns such as the Public Right to Know Supply Chain Initiative.",
              },
              {
                icon: Mic2,
                color: "green",
                title: "Worker-Centred Evidence",
                text: "Our work is grounded in testimony from workers, migrants, survivors, and communities affected by exploitation.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="space-y-6 p-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 bg-${item.color}-100 dark:bg-${item.color}-900/30 rounded-2xl flex items-center justify-center text-${item.color}-700 dark:text-${item.color}-400 group-hover:scale-110 transition-transform duration-300 shadow-sm`}
                >
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-16">
            <div className="animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                Spotlight
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2 text-lg">
                Investigations, Campaigns, and Podcast
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {[
              {
                title: "The Liability Report",
                badge: "Report",
                color: "red",
                img: "1",
                text: "A global investigation series documenting forced labour indicators across industries and countries.",
                link: "/reports",
                linkText: "View All Reports",
              },
              {
                title: "The Inquisitor File",
                badge: "Archive",
                color: "red",
                img: "2",
                text: "A deep dive archive revealing trafficking networks, corporate misconduct, and recruitment deception.",
                link: "/reports",
                linkText: "Access the Archive",
              },
              {
                title: "Voices from the Supply Chain",
                badge: "Podcast",
                color: "red",
                img: "3",
                text: "Stories from the ground, investigative commentary, and expert dialogue on forced labour.",
                link: "/podcast",
                linkText: "Listen Now",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="h-48 sm:h-56 bg-slate-200 dark:bg-slate-700 relative overflow-hidden group">
                  <img
                    src={`https://picsum.photos/600/400?random=${card.img}`}
                    alt={card.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute top-4 left-4 py-2 bg-gradient-to-r from-red-700 to-red-400 hover:from-red-600 hover:to-red-300 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-md shadow-md`}
                  >
                    {card.badge}
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 flex-1 leading-relaxed">
                    {card.text}
                  </p>
                  <Link to={card.link}>
                    <Button
                      variant="danger"
                      className="w-full hover:bg-slate-50 dark:hover:bg-slate-700 shadow-xl hover:shadow-md transition"
                    >
                      {card.linkText}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact Section (Data Viz) */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white overflow-hidden relative">
        {/* Background blobs - hidden on mobile for performance/clutter */}
        <div className="hidden sm:block absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="hidden sm:block absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                Our Impact
              </h2>
              <ul className="space-y-6 sm:space-y-8">
                {[
                  {
                    icon: Globe2,
                    title: "Global Reach",
                    text: "Investigations across 70 countries in Europe, Asia, and Africa.",
                  },
                  {
                    icon: FileText,
                    title: "Evidence Driven",
                    text: "Reports used by journalists, NGOs, governments, and policymakers to shape legal action.",
                  },
                  {
                    icon: Briefcase,
                    title: "Systemic Change",
                    text: "Challenging corporate accountability frameworks through verified field data.",
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <div className="mt-1 mr-4 sm:mr-6 p-3 bg-white/10 rounded-lg group-hover:bg-blue-500/20 transition-colors duration-300 flex-shrink-0">
                      <item.icon className="text-red-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-semibold mb-2">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h4 className="text-lg sm:text-xl font-semibold mb-6 text-center">
                Cumulative Worker Interviews (Since 2013)
              </h4>
              <div className="h-64 sm:h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={impactData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#475569"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="year"
                      stroke="#94a3b8"
                      tick={{ fontSize: 12 }}
                      tickMargin={10}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      stroke="#94a3b8"
                      tick={{ fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#0f172a",
                        border: "1px solid #334155",
                        borderRadius: "8px",
                        color: "#fff",
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5)",
                      }}
                      cursor={{ fill: "rgba(255,255,255,0.05)" }}
                    />
                    <Bar
                      dataKey="interviews"
                      fill="url(#colorInterviews)"
                      radius={[6, 6, 0, 0]}
                      animationDuration={1500}
                    >
                      <defs>
                        <linearGradient
                          id="colorInterviews"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#e22828ff"
                            stopOpacity={1}
                          />
                          <stop
                            offset="95%"
                            stopColor="#d34343ff"
                            stopOpacity={0.6}
                          />
                        </linearGradient>
                      </defs>
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-center text-slate-400 text-xs sm:text-sm mt-6 font-medium tracking-wide">
                More than 8500 verified interviews conducted
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 sm:py-24 bg-gradient-to-r from-red-800 via-red-700 to-red-400
dark:from-red-700 dark:via-red-800 dark:to-red-200 text-white text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
            Join Our Movement
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Receive updates, investigations, and campaign alerts directly to
            your inbox. Be part of the change.
          </p>
          <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-6 py-4 rounded-xl text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-400/50 shadow-lg"
            />
            <Button
              variant="experimental"
              size="lg"
              className="bg-white text-red-700  whitespace-nowrap shadow-xl w-full sm:w-auto"
            >
              Sign Up for Updates
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};
