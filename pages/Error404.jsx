import { Button } from "@/components/Button";
import { ArrowLeft, Home, RefreshCw, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const EXCUSES = [
  "The developer is refilling their coffee.",
  "A designer is nudging pixels one at a time.",
  "The server stepped away to meditate.",
  "Marketing had one too many ideas.",
  "This link is feeling shy today.",
  "Someone pushed to main without looking.",
  "The internet sneezed. Hard.",
];

export const Error404 = () => {
  const [excuse, setExcuse] = useState("Initializing recovery sequence...");
  const [loading, setLoading] = useState(false);

  const fetchExcuse = () => {
    setLoading(true);

    setTimeout(() => {
      const randomExcuse = EXCUSES[Math.floor(Math.random() * EXCUSES.length)];
      setExcuse(randomExcuse);
      setLoading(false);
    }, 600);
  };

  useEffect(() => {
    fetchExcuse();
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-white overflow-hidden font-sans selection:bg-indigo-500/30">
      {/* Styles */}
      <style>{`
        @keyframes noise {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-5%,5%); }
        }
        .bg-noise {
          position: fixed;
          inset: -50%;
          width: 200%;
          height: 200vh;
          background: transparent url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="n"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23n)" opacity="0.05"/%3E%3C/svg%3E');
          pointer-events: none;
          animation: noise 0.2s infinite;
          z-index: 1;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          background: #050505;
        }
        .glitch-text::before {
          left: 2px;
          text-shadow: -1px 0 #ff00c1;
          animation: glitch 2s infinite;
        }
        .glitch-text::after {
          left: -2px;
          text-shadow: -1px 0 #00fff9;
          animation: glitch 3s infinite;
        }
        @keyframes glitch {
          0% { clip-path: inset(20% 0 80% 0); }
          50% { clip-path: inset(60% 0 10% 0); }
          100% { clip-path: inset(30% 0 50% 0); }
        }
      `}</style>

      {/* Background */}
      <div className="bg-noise" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-900/10 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="mb-8 flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-slate-500 uppercase">
          <Terminal size={12} />
          <span>System Status: Critical</span>
        </div>

        <h1
          className="glitch-text text-[120px] md:text-[200px] font-black tracking-tighter mb-6"
          data-text="404"
        >
          404
        </h1>

        <div className="max-w-md text-center space-y-6">
          <h2 className="text-3xl font-bold text-slate-200">Page Not Found</h2>

          <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-lg">
            <p className="font-mono text-sm text-indigo-300">
              <span className="text-slate-600 mr-2">&gt;</span>
              {loading ? "_analyzing_logs..." : `"${excuse}"`}
              <span className="inline-block w-2 h-4 ml-1 bg-indigo-500 animate-pulse" />
            </p>
          </div>

          <p className="text-slate-500 text-sm">
            The requested URL was not found on this server.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Button
            onClick={() => window.history.back()}
            variant="ghost"
            icon={<ArrowLeft size={16} />}
          >
            Go Back
          </Button>

          <Button
            onClick={() => (window.location.href = "/")}
            variant="primary"
            icon={<Home size={16} />}
          >
            Return Home
          </Button>

          <Button
            onClick={fetchExcuse}
            variant="danger"
            icon={
              <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
            }
          >
            Refresh
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 w-full text-center">
        <p className="text-[10px] text-slate-700 font-mono tracking-widest uppercase">
          Agency Error Code: ID-10-T
        </p>
      </div>
    </div>
  );
};
