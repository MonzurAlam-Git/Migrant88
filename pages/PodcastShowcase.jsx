import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, Play, Share2, X } from "lucide-react";
import { useEffect, useState } from "react";

const PODCAST_DATA = [
  {
    id: "1",
    title: "Escaping North Korea: A Survivor’s Story",
    description:
      "Yeonmi Park discusses her harrowing journey escaping North Korea, the reality of human trafficking at the border, and the struggle for migrant dignity.",
    youtubeVideoId: "8yH9sqiafH0",
    publishDate: "August 4, 2021",
    duration: "3:11:00",
    thumbnailUrl: "https://img.youtube.com/vi/8yH9sqiafH0/maxresdefault.jpg",
    viewCount: "14,800,000+",
  },
  {
    id: "2",
    title: "The Most Extreme Survival Story: Shipwrecked & Displacement",
    description:
      "A deep dive into the psychological and physical toll of being lost at sea and the broader themes of displacement and survival in hostile environments.",
    youtubeVideoId: "kAFBhYRlkZc",
    publishDate: "May 20, 2024",
    duration: "1:56:45",
    thumbnailUrl: "https://img.youtube.com/vi/kAFBhYRlkZc/maxresdefault.jpg",
    viewCount: "6,400,000+",
  },
  {
    id: "3",
    title: "Mass Migration, Globalism, and the West",
    description:
      "Dr. Jordan Peterson and guests discuss the socioeconomic impacts of mass migration, policy failures, and the cultural integration of diaspora communities.",
    youtubeVideoId: "leKQZinCh3M",
    publishDate: "January 20, 2024",
    duration: "1:44:12",
    thumbnailUrl: "https://img.youtube.com/vi/leKQZinCh3M/maxresdefault.jpg",
    viewCount: "658,000+",
  },
  {
    id: "4",
    title: "Top Countries for Migration: Policy, Visas & Jobs",
    description:
      "An expert-led discussion on global mobility, identifying the best countries for migrant workers to build wealth and the evolving visa landscapes of 2025.",
    youtubeVideoId: "gxzonqijbPA",
    publishDate: "November 4, 2024",
    duration: "2:36:02",
    thumbnailUrl: "https://img.youtube.com/vi/gxzonqijbPA/maxresdefault.jpg",
    viewCount: "702,368",
  },
  {
    id: "5",
    title: "The Immigration Debate: Trump Term Policy Analysis",
    description:
      "A long-form debate and analysis of U.S. immigration policy, focusing on border security, labor rights, and the legal frameworks of the second Trump administration.",
    youtubeVideoId: "5YFVYrZyg5U",
    publishDate: "September 7, 2024",
    duration: "08:12",
    thumbnailUrl: "https://img.youtube.com/vi/5YFVYrZyg5U/maxresdefault.jpg",
    viewCount: "605,180",
  },
  {
    id: "6",
    title: "How Immigration Is Reshaping the Middle Class",
    description:
      "Christopher Caldwell explores the intersection of immigration, labor markets, and the socioeconomic displacement of the domestic working class.",
    youtubeVideoId: "K9bua4XxWQA",
    publishDate: "August 27, 2024",
    duration: "1:34:51",
    thumbnailUrl: "https://img.youtube.com/vi/K9bua4XxWQA/maxresdefault.jpg",
    viewCount: "533,162",
  },
  {
    id: "7",
    title: "The Great Migration: West Exploitation and Labor",
    description:
      "Lowkey hosts a critical discussion on how Western nations exploit migrant labor while maintaining restrictive cross-border movement policies.",
    youtubeVideoId: "mHh_bldZLDU",
    publishDate: "March 15, 2024",
    duration: "1:08:24",
    thumbnailUrl: "https://img.youtube.com/vi/mHh_bldZLDU/maxresdefault.jpg",
    viewCount: "312,000+",
  },
  {
    id: "8",
    title: "The Crisis of Forced Migration: Global Perspectives",
    description:
      "The Agenda explores the root causes of forced migration, from climate change to conflict, and the legal protections afforded to refugees today.",
    youtubeVideoId: "UMytnh2ZZyA",
    publishDate: "February 12, 2024",
    duration: "52:14",
    thumbnailUrl: "https://img.youtube.com/vi/UMytnh2ZZyA/maxresdefault.jpg",
    viewCount: "285,000+",
  },
  {
    id: "9",
    title: "Global Mobility & Digital Nomad Visas (Episode 3)",
    description:
      "A deep dive into the 'Digital Nomad' trend and how new visa categories are creating a new class of global migrant workers in the tech sector.",
    youtubeVideoId: "e-LOzHltY_8",
    publishDate: "March 21, 2023",
    duration: "1:17:59",
    thumbnailUrl: "https://img.youtube.com/vi/e-LOzHltY_8/maxresdefault.jpg",
    viewCount: "322 (Direct Niche Reach)",
  },
  {
    id: "10",
    title: "Trends Shaping Global Mobility’s Future",
    description:
      "Industry leaders discuss the future of the global workforce, workforce mobility, and the impact of geopolitical shifts on migrant worker rights.",
    youtubeVideoId: "8KBz-4xv-bE",
    publishDate: "November 30, 2024",
    duration: "22:47",
    thumbnailUrl: "https://img.youtube.com/vi/8KBz-4xv-bE/maxresdefault.jpg",
    viewCount: "128 (Professional/Policy Focused)",
  },
];

const PodcastShowcase = () => {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedEpisode(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedEpisode) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedEpisode]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      {/* Page Header */}
      <header className="mb-16 md:mb-24 max-w-3xl">
        <span className="inline-block text-red-500 font-bold tracking-widest text-xs uppercase mb-4">
          Investigative Audio Archive
        </span>
        <h1 className="text-4xl md:text-6xl font-light tracking-tight dark:text-white light:text-black mb-6 leading-tight">
          Voices from the{" "}
          <span className="font-semibold italic text-red-700">
            Supply Chain
          </span>
        </h1>
        <p className="text-lg dark:text-gray-400 light:text-gray-600 leading-relaxed font-light">
          A podcast series dedicated to uncovering hidden exploitation,
          environmental hazards, and systemic labor violations within the
          world’s most complex industrial networks. Evidence-based reporting for
          a more accountable global economy.
        </p>
        <div className="h-px w-24 bg-red-900/50 mt-10" />
      </header>

      {/* Podcast Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">
        {PODCAST_DATA.map((episode) => (
          <motion.div
            key={episode.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group cursor-pointer flex flex-col md:flex-row gap-6 items-start"
            onClick={() => setSelectedEpisode(episode)}
          >
            {/* Thumbnail Container */}
            <div className="relative w-full md:w-56 h-40 flex-shrink-0 overflow-hidden rounded-lg dark:bg-gray-900 light:bg-gray-100 dark:border-white/5 light:border-gray-300 border shadow-xl">
              <img
                src={episode.thumbnailUrl}
                alt={episode.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 dark:bg-black/40 light:bg-white/40 group-hover:dark:bg-black/10 group-hover:light:bg-white/10 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 dark:bg-white/10 light:bg-black/10 backdrop-blur-md rounded-full flex items-center justify-center dark:border-white/20 light:border-black/20 border group-hover:bg-red-700 group-hover:border-red-600 transition-all scale-90 group-hover:scale-100 shadow-2xl">
                  <Play
                    size={20}
                    fill="currentColor"
                    className="dark:text-white light:text-black ml-1"
                  />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 dark:bg-black/80 light:bg-white/80 px-2 py-1 rounded text-[10px] font-medium dark:text-white light:text-black tracking-wider backdrop-blur-sm dark:border-white/10 light:border-black/10 border">
                {episode.duration}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col h-full">
              <div className="flex items-center gap-4 text-[11px] dark:text-gray-500 light:text-gray-400 uppercase tracking-widest mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} /> {episode.publishDate}
                </span>
                <span className="h-1 w-1 dark:bg-gray-700 light:bg-gray-300 rounded-full" />
                <span className="flex items-center gap-1.5">
                  <Clock size={12} /> Episode {episode.id}
                </span>
              </div>
              <h2 className="text-xl font-medium dark:text-white light:text-black mb-3 group-hover:text-red-500 transition-colors leading-tight">
                {episode.title}
              </h2>
              <p className="text-sm dark:text-gray-400 light:text-gray-600 line-clamp-3 leading-relaxed font-light mb-4">
                {episode.description}
              </p>
              <div className="mt-auto flex items-center gap-4">
                <span className="text-xs font-semibold dark:text-white/40 light:text-black/40 group-hover:dark:text-white group-hover:light:text-black transition-colors flex items-center gap-1">
                  LISTEN NOW <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer / Load More (Placeholder) */}
      <footer className="mt-24 pt-12 dark:border-white/5 light:border-gray-300 border-t flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-sm dark:text-gray-500 light:text-gray-400">
          © 2024 Investigative Action NGO. All Rights Reserved.
        </p>
        <div className="flex gap-8 text-xs dark:text-gray-500 light:text-gray-400 font-medium tracking-widest uppercase">
          <button className="hover:dark:text-white hover:light:text-black transition-colors">
            RSS Feed
          </button>
          <button className="hover:dark:text-white hover:light:text-black transition-colors">
            Archive
          </button>
          <button className="hover:dark:text-white hover:light:text-black transition-colors">
            Legal Disclosure
          </button>
        </div>
      </footer>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedEpisode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 dark:bg-black/95 light:bg-white/95 backdrop-blur-sm cursor-zoom-out"
              onClick={() => setSelectedEpisode(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="relative w-full max-w-5xl dark:bg-[#14121a] light:bg-white rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] dark:border-white/10 light:border-gray-300 border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedEpisode(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full dark:bg-black/40 light:bg-white/40 hover:dark:bg-black/60 hover:light:bg-white/60 dark:border-white/10 light:border-gray-300 border dark:text-white light:text-black transition-all hover:rotate-90"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col">
                {/* Video Player Section */}
                <div className="aspect-video w-full dark:bg-black light:bg-gray-100">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedEpisode.youtubeVideoId}?autoplay=0`}
                    title={selectedEpisode.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                {/* Details Section */}
                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap items-center gap-4 text-xs text-red-500 font-bold uppercase tracking-widest mb-6">
                    <span className="bg-red-500/10 px-3 py-1 rounded border border-red-500/20">
                      Now Playing
                    </span>
                    <span className="dark:text-gray-500 light:text-gray-400 flex items-center gap-1.5">
                      <Calendar size={14} /> {selectedEpisode.publishDate}
                    </span>
                    <span className="dark:text-gray-500 light:text-gray-400 flex items-center gap-1.5">
                      <Clock size={14} /> {selectedEpisode.duration}
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-semibold dark:text-white light:text-black mb-6 leading-tight">
                        {selectedEpisode.title}
                      </h2>
                      <p className="dark:text-gray-400 light:text-gray-600 text-lg leading-relaxed font-light">
                        {selectedEpisode.description}
                      </p>
                      <div className="mt-8 pt-8 dark:border-white/5 light:border-gray-300 border-t flex gap-4">
                        <button className="flex items-center gap-2 px-6 py-3 rounded-xl dark:bg-white/5 light:bg-black/5 hover:dark:bg-white/10 hover:light:bg-black/10 dark:border-white/10 light:border-gray-300 border dark:text-white light:text-black transition-all text-sm font-medium">
                          <Share2 size={16} /> Share Episode
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 rounded-xl dark:bg-white/5 light:bg-black/5 hover:dark:bg-white/10 hover:light:bg-black/10 dark:border-white/10 light:border-gray-300 border dark:text-white light:text-black transition-all text-sm font-medium">
                          Report Data Error
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PodcastShowcase;
