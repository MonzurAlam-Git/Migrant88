import { useEffect, useState } from "react";

const PodcastPublish = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [error, setError] = useState(null);

  // form state
  const [ytLink, setYtLink] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  useEffect(() => {
    const saved = localStorage.getItem("podcasts");
    if (saved) {
      setPodcasts(JSON.parse(saved));
    }
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

    const newPodcast = {
      id: Date.now().toString(),
      title,
      description,
      topic,
      date,
      ytLink,
    };

    setPodcasts([newPodcast, ...podcasts]);

    // reset form
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
    <div className="min-h-screen p-6 md:p-12 max-w-6xl mx-auto">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Podcasts</h1>
        <p className="text-gray-600">Add and explore podcast episodes</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 h-fit">
          <h2 className="text-xl font-semibold mb-6">Add Podcast</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <input
              type="url"
              placeholder="YouTube link"
              value={ytLink}
              onChange={(e) => setYtLink(e.target.value)}
              className="w-full rounded-lg border p-2.5"
            />

            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border p-2.5"
            />

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-lg border p-2.5"
            />

            <input
              type="text"
              placeholder="Topic (optional)"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full rounded-lg border p-2.5"
            />

            <textarea
              rows={4}
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-lg border p-2.5 resize-none"
            />

            <button
              type="submit"
              className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold"
            >
              Publish Podcast
            </button>
          </form>
        </div>

        {/* list */}
        <div className="lg:col-span-2 space-y-6">
          {podcasts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-dashed p-12 text-center text-gray-400">
              No podcasts published yet
            </div>
          ) : (
            podcasts.map((podcast) => (
              <div
                key={podcast.id}
                className="bg-white rounded-xl shadow-sm border p-6"
              >
                <div className="flex items-center gap-3 mb-2 text-sm text-gray-500">
                  <span>{new Date(podcast.date).toLocaleDateString()}</span>
                  {podcast.topic && (
                    <span className="bg-red-50 text-red-700 px-2 py-1 rounded text-xs font-semibold">
                      {podcast.topic}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2">{podcast.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {podcast.description}
                </p>

                <div className="flex items-center gap-4">
                  <a
                    href={podcast.ytLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-600 font-semibold text-sm"
                  >
                    Watch on YouTube
                  </a>

                  <button
                    onClick={() => handleDelete(podcast.id)}
                    className="text-gray-400 hover:text-red-600 text-sm ml-auto"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PodcastPublish;
