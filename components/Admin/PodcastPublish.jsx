import { useEffect, useState } from "react";

const getYouTubeId = (url) => {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.slice(1);
    }
    return parsed.searchParams.get("v");
  } catch {
    return null;
  }
};

const PodcastPublish = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [error, setError] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  const [ytLink, setYtLink] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  useEffect(() => {
    const saved = localStorage.getItem("podcasts");
    if (saved) setPodcasts(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("podcasts", JSON.stringify(podcasts));
  }, [podcasts]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ytLink || !date) {
      setError("Title, date, and YouTube link are required.");
      return;
    }

    setPodcasts([
      {
        id: Date.now().toString(),
        title,
        description,
        topic,
        date,
        ytLink,
      },
      ...podcasts,
    ]);

    setTitle("");
    setDescription("");
    setTopic("");
    setYtLink("");
    setDate(new Date().toISOString().split("T")[0]);
    setError(null);
  };

  const handleDelete = (id) => {
    setPodcasts(podcasts.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen p-6 md:p-12 max-w-6xl mx-auto bg-gray-50 dark:bg-gray-950">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Podcasts
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Add and explore podcast episodes
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* FORM */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-800">
          <h2 className="text-xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            Add Podcast
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <input
              type="url"
              placeholder="YouTube link"
              value={ytLink}
              onChange={(e) => setYtLink(e.target.value)}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 p-2.5 text-gray-900 dark:text-gray-100"
            />

            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 p-2.5 text-gray-900 dark:text-gray-100"
            />

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 p-2.5 text-gray-900 dark:text-gray-100"
            />

            <input
              type="text"
              placeholder="Topic (optional)"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 p-2.5 text-gray-900 dark:text-gray-100"
            />

            <textarea
              rows={4}
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 p-2.5 text-gray-900 dark:text-gray-100 resize-none"
            />

            <button
              type="submit"
              className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold"
            >
              Publish Podcast
            </button>
          </form>
        </div>

        {/* LIST */}
        <div className="lg:col-span-2 space-y-6">
          {podcasts.map((podcast) => {
            const videoId = getYouTubeId(podcast.ytLink);

            return (
              <div
                key={podcast.id}
                className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 p-6"
              >
                <div className="flex gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
                  <span>{new Date(podcast.date).toLocaleDateString()}</span>
                  {podcast.topic && (
                    <span className="bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 px-2 py-1 rounded text-xs font-semibold">
                      {podcast.topic}
                    </span>
                  )}
                </div>

                <h3
                  className="text-xl font-bold mb-2 bg-gradient-to-r from-red-600 via-red-400 to-red-300 
  bg-clip-text text-transparent"
                >
                  {podcast.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {podcast.description}
                </p>

                {videoId && (
                  <button
                    onClick={() => setActiveVideo(videoId)}
                    className="relative w-full max-w-md rounded-xl overflow-hidden group"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                      alt={podcast.title}
                      className="w-full object-cover group-hover:opacity-90"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/60 p-4 rounded-full">
                        <svg
                          className="h-6 w-6 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </button>
                )}

                <button
                  onClick={() => handleDelete(podcast.id)}
                  className="mt-4 text-sm text-gray-400 hover:text-red-600"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Podcast Video"
            />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 bg-black/70 text-white rounded-full px-3 py-1"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PodcastPublish;
