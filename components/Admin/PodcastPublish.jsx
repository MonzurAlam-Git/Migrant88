import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini AI
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

interface Podcast {
  id: string;
  title: string;
  description: string;
  date: string;
  topic: string;
  ytLink: string;
}

const PodcastAdmin = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form State
  const [ytLink, setYtLink] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [topic, setTopic] = useState("");

  // Load podcasts from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("podcasts");
    if (saved) {
      setPodcasts(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage whenever podcasts change
  useEffect(() => {
    localStorage.setItem("podcasts", JSON.stringify(podcasts));
  }, [podcasts]);

  const handleSummarize = async () => {
    if (!ytLink) {
      setError("Please enter a YouTube link first.");
      return;
    }
    setError(null);
    setGenerating(true);

    try {
      const prompt = `
        I have a YouTube video link: ${ytLink}.
        Please use Google Search to find information about this video. 
        I need you to generate a title, a concise summary (description) of the content, and a single main topic (e.g., Technology, Health, Business).
        
        Format the response strictly as a JSON object with these keys: "title", "description", "topic".
        Do not include markdown code blocks.
      `;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          tools: [{ googleSearch: {} }],
          responseMimeType: "application/json" 
        },
      });

      const text = response.text;
      if (text) {
        const data = JSON.parse(text);
        setTitle(data.title || "");
        setDescription(data.description || "");
        setTopic(data.topic || "");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch summary. Please fill details manually.");
    } finally {
      setGenerating(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !ytLink || !date) {
      setError("Please fill in all required fields.");
      return;
    }

    const newPodcast: Podcast = {
      id: Date.now().toString(),
      title,
      description,
      date,
      topic,
      ytLink,
    };

    setPodcasts([newPodcast, ...podcasts]);
    
    // Reset form
    setTitle("");
    setDescription("");
    setYtLink("");
    setTopic("");
    setDate(new Date().toISOString().split("T")[0]);
    setError(null);
  };

  const handleDelete = (id: string) => {
    setPodcasts(podcasts.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen p-6 md:p-12 max-w-6xl mx-auto">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Podcast Manager</h1>
        <p className="text-gray-600">Admin dashboard to manage and publish podcast episodes.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Admin Form */}
        <div className="lg:col-span-1 bg-white rounded-2xl shadow-xl p-6 h-fit border border-gray-100">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add New Podcast
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">YouTube Link</label>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://youtube.com/..."
                  value={ytLink}
                  onChange={(e) => setYtLink(e.target.value)}
                  className="flex-1 w-full rounded-lg border-red-200 border p-2.5 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition bg-gradient-to-br from-red-50 to-orange-50 focus:bg-white"
                  required
                />
              </div>
              <button
                type="button"
                onClick={handleSummarize}
                disabled={generating || !ytLink}
                className="mt-2 w-full py-2 px-4 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 text-sm font-medium transition flex items-center justify-center gap-2"
              >
                {generating ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-red-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing with AI...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 5a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-5H3a1 1 0 110-2h1V7a1 1 0 011-1zm5-5a1 1 0 011 1v3.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L10 5.586V3a1 1 0 011-1zm0 12a1 1 0 00-1 1v3a1 1 0 002 0v-3a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Auto-Fill Details
                  </>
                )}
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-lg border-red-200 border p-2.5 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition bg-gradient-to-br from-red-50 to-orange-50 focus:bg-white"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-lg border-red-200 border p-2.5 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition bg-gradient-to-br from-red-50 to-orange-50 focus:bg-white"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full rounded-lg border-red-200 border p-2.5 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition bg-gradient-to-br from-red-50 to-orange-50 focus:bg-white"
                  placeholder="e.g. Health"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full rounded-lg border-red-200 border p-2.5 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition resize-none bg-gradient-to-br from-red-50 to-orange-50 focus:bg-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold shadow-md transition transform active:scale-95"
            >
              Publish Podcast
            </button>
          </form>
        </div>

        {/* Right Column: Live Podcasts */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center mb-4">
             <h2 className="text-2xl font-bold text-gray-800">Live Episodes</h2>
             <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
               {podcasts.length} Published
             </span>
          </div>

          {podcasts.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-sm border border-dashed border-gray-300 p-12 text-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
              <p>No podcasts published yet. Use the form to add one.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {podcasts.map((podcast) => (
                <div key={podcast.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Content Section */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 text-sm text-gray-500">
                        {/* Date with Calendar Icon */}
                        <span className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {new Date(podcast.date).toLocaleDateString()}
                        </span>
                        
                        {/* Topic Label */}
                        {podcast.topic && (
                          <span className="bg-red-50 text-red-700 px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wide border border-red-100">
                            {podcast.topic}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{podcast.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {podcast.description}
                      </p>

                      <div className="flex items-center gap-4 mt-auto border-t border-gray-50 pt-4">
                        <a 
                          href={podcast.ytLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700 text-sm transition-colors group"
                        >
                          {/* YouTube Brand Icon */}
                          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                          </svg>
                          Watch on YouTube
                        </a>
                        <button 
                          onClick={() => handleDelete(podcast.id)}
                          className="text-gray-400 hover:text-red-600 text-sm flex items-center gap-1 transition-colors ml-auto"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<PodcastAdmin />);