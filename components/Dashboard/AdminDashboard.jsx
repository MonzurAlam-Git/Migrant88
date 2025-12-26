import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  BarChart3,
  Bell,
  CheckCircle,
  Clock,
  Edit3,
  FileText,
  Image as ImageIcon,
  LayoutDashboard,
  LogOut,
  Menu,
  Mic,
  Newspaper,
  Plus,
  Search,
  Settings,
  Target,
  Trash2,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const MOCK_STATS = [
  { label: "Total Views", value: "124.5k", change: "+12%", icon: BarChart3 },
  { label: "Podcasts Published", value: "42", change: "+3", icon: Mic },
  { label: "Subscribers", value: "8,902", change: "+18%", icon: Users },
  { label: "Active Campaigns", value: "6", change: "0", icon: Target },
];

const MOCK_PODCASTS = [
  {
    id: "1",
    title: "The Cobalt Conflict",
    status: "Published",
    views: "12.4k",
    date: "2024-01-14",
    featured: true,
  },
  {
    id: "2",
    title: "Shadow Labour",
    status: "Published",
    views: "8.2k",
    date: "2023-12-20",
    featured: false,
  },
  {
    id: "3",
    title: "Rivers of Chemicals",
    status: "Draft",
    views: "-",
    date: "2023-11-05",
    featured: false,
  },
  {
    id: "4",
    title: "Maritime Silence",
    status: "Published",
    views: "15.1k",
    date: "2023-10-18",
    featured: true,
  },
];

const MOCK_USERS = [
  {
    id: "1",
    name: "Elena Rossi",
    email: "elena@migrant88.org",
    role: "Admin",
    joined: "2023-01-10",
  },
  {
    id: "2",
    name: "Marcus Thorne",
    email: "m.thorne@journalist.com",
    role: "Editor",
    joined: "2023-03-15",
  },
  {
    id: "3",
    name: "Sarah Jenkins",
    email: "sarah.j@ngo.net",
    role: "Moderator",
    joined: "2023-06-22",
  },
];

// --- Sub-components ---

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
      active
        ? "bg-red-900/20 text-red-500 border border-red-900/30"
        : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
    }`}
  >
    <Icon
      size={18}
      className={active ? "text-red-500" : "group-hover:text-white"}
    />
    <span className="text-sm font-medium">{label}</span>
    {active && (
      <motion.div
        layoutId="active-indicator"
        className="ml-auto w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]"
      />
    )}
  </button>
);

const Card = ({ children, title, action }) => (
  <div className="bg-[#14121a] rounded-2xl border border-white/5 p-6 shadow-xl">
    {(title || action) && (
      <div className="flex justify-between items-center mb-6">
        {title && <h3 className="text-lg font-semibold text-white">{title}</h3>}
        {action}
      </div>
    )}
    {children}
  </div>
);

// --- Sections ---

const OverviewSection = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {MOCK_STATS.map((stat, idx) => (
        <Card key={idx}>
          <div className="flex justify-between items-start">
            <div className="p-3 bg-white/5 rounded-xl border border-white/5">
              <stat.icon size={20} className="text-gray-400" />
            </div>
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                stat.change.startsWith("+")
                  ? "bg-green-500/10 text-green-500"
                  : "bg-gray-500/10 text-gray-400"
              }`}
            >
              {stat.change}
            </span>
          </div>
          <div className="mt-4">
            <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
            <h4 className="text-2xl font-bold text-white mt-1">{stat.value}</h4>
          </div>
        </Card>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <Card
          title="Traffic Overview"
          action={
            <select className="bg-transparent text-xs text-gray-400 border border-white/10 rounded-lg px-2 py-1 outline-none">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>
          }
        >
          <div className="h-64 flex items-end gap-2 px-2">
            {[40, 70, 45, 90, 65, 80, 55, 75, 50, 85, 60, 40].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                className="flex-1 bg-gradient-to-t from-red-900/40 to-red-600/60 rounded-t-sm"
              />
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] text-gray-500 uppercase tracking-widest px-1">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
          </div>
        </Card>
      </div>
      <div>
        <Card title="Recent Notifications">
          <div className="space-y-4">
            {[
              {
                text: 'New comment on "Cobalt Conflict"',
                time: "2m ago",
                icon: <CheckCircle className="text-green-500" size={14} />,
              },
              {
                text: 'Podcast "Rivers" pending review',
                time: "1h ago",
                icon: <Clock className="text-amber-500" size={14} />,
              },
              {
                text: 'Campaign "Safe Passage" hitting 80%',
                time: "5h ago",
                icon: <AlertCircle className="text-red-500" size={14} />,
              },
            ].map((n, i) => (
              <div
                key={i}
                className="flex gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
              >
                <div className="mt-1">{n.icon}</div>
                <div>
                  <p className="text-sm text-gray-200">{n.text}</p>
                  <span className="text-xs text-gray-500">{n.time}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 text-xs font-semibold text-gray-400 border border-white/5 rounded-lg hover:bg-white/5 transition-all">
            VIEW ALL NOTIFICATIONS
          </button>
        </Card>
      </div>
    </div>
  </div>
);

const PodcastsSection = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <div className="relative w-96">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          size={18}
        />
        <input
          type="text"
          placeholder="Search podcasts..."
          className="w-full bg-[#14121a] border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none focus:border-red-900/50 transition-all"
        />
      </div>
      <button className="flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-red-900/20">
        <Plus size={18} /> NEW PODCAST
      </button>
    </div>

    <Card>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-white/5 text-gray-400 text-xs uppercase tracking-widest font-bold">
              <th className="px-4 py-4">Title</th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4">Views</th>
              <th className="px-4 py-4">Date</th>
              <th className="px-4 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {MOCK_PODCASTS.map((p) => (
              <tr
                key={p.id}
                className="group hover:bg-white/[0.02] transition-colors"
              >
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-900/20 flex items-center justify-center text-red-500">
                      <Mic size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {p.title}
                      </p>
                      {p.featured && (
                        <span className="text-[10px] text-red-500 font-bold uppercase">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                      p.status === "Published"
                        ? "bg-green-500/10 text-green-500"
                        : "bg-gray-500/10 text-gray-400"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-400">{p.views}</td>
                <td className="px-4 py-4 text-sm text-gray-400">{p.date}</td>
                <td className="px-4 py-4 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-white transition-colors">
                      <Edit3 size={16} />
                    </button>
                    <button className="p-2 hover:bg-red-500/10 rounded-lg text-gray-400 hover:text-red-500 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  </div>
);

const UserManagementSection = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-semibold">User & Subscriber Management</h2>
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-white/5 rounded-xl text-sm font-medium border border-white/5 hover:bg-white/10 transition-all">
          Export CSV
        </button>
        <button className="flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-red-900/20">
          <Plus size={18} /> INVITE ADMIN
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {MOCK_USERS.map((user) => (
        <Card key={user.id}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-lg font-bold">
              {user.name.charAt(0)}
            </div>
            <div>
              <h4 className="font-semibold text-white">{user.name}</h4>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-white/5">
            <span className="text-xs font-bold uppercase px-2 py-1 bg-white/5 rounded text-gray-400">
              {user.role}
            </span>
            <span className="text-[10px] text-gray-500 italic">
              Joined {user.joined}
            </span>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <OverviewSection />;
      case "podcasts":
        return <PodcastsSection />;
      case "users":
        return <UserManagementSection />;
      default:
        return (
          <div className="h-[60vh] flex flex-col items-center justify-center text-center">
            <div className="p-6 bg-white/5 rounded-3xl mb-6">
              <Clock size={48} className="text-gray-600 animate-pulse" />
            </div>
            <h3 className="text-xl font-semibold mb-2 uppercase tracking-widest">
              Section Under Construction
            </h3>
            <p className="text-gray-500 max-w-sm">
              This module is currently being optimized for investigative data
              workflows. Check back shortly.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#0c0a09]">
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.aside
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            className="w-72 bg-[#14121a] border-r border-white/5 flex flex-col z-50 fixed md:relative h-full"
          >
            <div className="p-8">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 bg-red-700 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-red-900/20">
                  M
                </div>
                <h1 className="text-xl font-bold tracking-tighter text-white">
                  MIGRANT88
                </h1>
              </div>

              <nav className="space-y-1">
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-4 px-4">
                  Management
                </p>
                <SidebarItem
                  icon={LayoutDashboard}
                  label="Overview"
                  active={activeSection === "overview"}
                  onClick={() => setActiveSection("overview")}
                />
                <SidebarItem
                  icon={Mic}
                  label="Podcasts"
                  active={activeSection === "podcasts"}
                  onClick={() => setActiveSection("podcasts")}
                />
                <SidebarItem
                  icon={FileText}
                  label="CMS Content"
                  active={activeSection === "content"}
                  onClick={() => setActiveSection("content")}
                />
                <SidebarItem
                  icon={Newspaper}
                  label="Blog & News"
                  active={activeSection === "blog"}
                  onClick={() => setActiveSection("blog")}
                />
                <SidebarItem
                  icon={Target}
                  label="Campaigns"
                  active={activeSection === "campaigns"}
                  onClick={() => setActiveSection("campaigns")}
                />

                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mt-8 mb-4 px-4">
                  System
                </p>
                <SidebarItem
                  icon={Users}
                  label="Subscribers"
                  active={activeSection === "users"}
                  onClick={() => setActiveSection("users")}
                />
                <SidebarItem
                  icon={ImageIcon}
                  label="Media Library"
                  active={activeSection === "media"}
                  onClick={() => setActiveSection("media")}
                />
                <SidebarItem
                  icon={BarChart3}
                  label="Analytics"
                  active={activeSection === "analytics"}
                  onClick={() => setActiveSection("analytics")}
                />
                <SidebarItem
                  icon={Settings}
                  label="Settings"
                  active={activeSection === "settings"}
                  onClick={() => setActiveSection("settings")}
                />
              </nav>
            </div>

            <div className="mt-auto p-8 border-t border-white/5">
              <button className="flex items-center gap-3 text-gray-500 hover:text-white transition-colors w-full px-4 py-2">
                <LogOut size={18} />
                <span className="text-sm font-medium">Log out</span>
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-[#0c0a09]/50 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-8 z-40">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-white/5 rounded-lg text-gray-400 transition-colors"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="h-5 w-px bg-white/10 mx-2" />
            <h2 className="text-lg font-medium text-white capitalize">
              {activeSection}
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-gray-400 hover:text-white transition-colors p-2">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-600 rounded-full border-2 border-[#0c0a09]" />
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-white/10">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium text-white leading-none">
                  Elena Rossi
                </p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">
                  Super Admin
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-red-900 to-red-700 border-2 border-white/5 shadow-lg" />
            </div>
          </div>
        </header>

        {/* Viewport */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            {renderSection()}
          </motion.div>
        </div>
      </main>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
