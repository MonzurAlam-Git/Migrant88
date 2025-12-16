import { Lock } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../components/Button.jsx";

export const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#secure") {
      const element = document.getElementById("secure-form");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-24 transition-colors duration-300">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Reach out to our offices in Belgium, Malaysia, and Bangladesh for
            general inquiries, or use our secure channel below.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        {/* General Contact Form */}
        <div
          className="bg-white dark:bg-slate-900 p-10 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            General Inquiry
          </h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900 dark:text-white transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900 dark:text-white transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900 dark:text-white transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-slate-900 dark:text-white transition-all"
              ></textarea>
            </div>
            <Button variant="primary" size="lg">
              Submit Inquiry
            </Button>
          </form>
        </div>

        {/* Secure Form */}
        <div
          id="secure-form"
          className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 p-10 rounded-3xl shadow-2xl border border-slate-700 text-white relative overflow-hidden animate-pulse-slow"
        >
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Lock size={150} />
          </div>

          <div className="flex items-center mb-8 relative z-10">
            <div className="p-3 bg-red-500/10 rounded-xl mr-4">
              <Lock className="text-red-500" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-white">
              Speak Up (Secure Reporting)
            </h2>
          </div>

          <p className="text-slate-300 mb-10 max-w-2xl text-lg leading-relaxed relative z-10">
            Share information safely and confidentially. Your identity will
            never be revealed. All submissions are encrypted. Use this form to
            report forced labour, trafficking, or corruption.
          </p>

          <form className="space-y-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Location of Incident
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-white placeholder-slate-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Sector (e.g., Construction, Textile)
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-white placeholder-slate-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Describe the situation
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none text-white placeholder-slate-500"
                placeholder="Provide as much detail as possible..."
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Upload Evidence (Optional)
              </label>
              <input
                type="file"
                className="block w-full text-sm text-slate-400 file:mr-4 file:py-2.5 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-slate-700 file:text-white hover:file:bg-slate-600 cursor-pointer"
              />
            </div>

            <div className="pt-6">
              <Button
                variant="danger"
                size="lg"
                className="w-full md:w-auto shadow-lg shadow-red-900/20"
              >
                Submit Securely
              </Button>
            </div>
          </form>
        </div>

        {/* Office Locations */}
        <div
          className="grid md:grid-cols-3 gap-8 text-center pt-8 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {[
            {
              title: "Belgium Office",
              loc: "Brussels, EU",
              email: "brussels@migrant88.com",
            },
            {
              title: "Malaysia Office",
              loc: "Kuala Lumpur",
              email: "kl@migrant88.com",
            },
            {
              title: "Bangladesh Office",
              loc: "Dhaka",
              email: "dhaka@migrant88.com",
            },
          ].map((office, idx) => (
            <div
              key={idx}
              className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-2">
                {office.title}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                {office.loc}
              </p>
              <a
                href={`mailto:${office.email}`}
                className="text-sm text-red-600 dark:text-red-400 font-medium hover:underline block"
              >
                {office.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
