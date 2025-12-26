import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, Play, Share2, X } from "lucide-react";
import { useEffect, useState } from "react";

const PODCAST_DATA = [
  {
    id: "1",
    title: "The Cobalt Conflict: Beneath the Surface",
    description:
      "An investigation into the complex mining networks of the DRC and the global rush for battery minerals. We speak to whistleblowers inside major electronics supply chains.",
    youtubeVideoId: "2u785zGQu6M",
    publishDate: "January 14, 2024",
    duration: "42:15",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Shadow Labour: The Gig Economy Unveiled",
    description:
      "Exploring the legal loopholes exploited by tech giants to classify essential workers as independent contractors. A look at the human cost of algorithmic management.",
    youtubeVideoId: "D86R_mN0O8E",
    publishDate: "December 20, 2023",
    duration: "38:40",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Rivers of Chemicals: Fast Fashion's Legacy",
    description:
      "Satellite imagery and local testimonies reveal the catastrophic impact of unregulated dyeing plants on community water sources in Southeast Asia.",
    youtubeVideoId: "mP9E_mD1V8c",
    publishDate: "November 05, 2023",
    duration: "45:00",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Maritime Silence: Rights at High Sea",
    description:
      "An investigative journey into the fishing industry, documenting forced labor and the lack of international oversight in unregulated waters.",
    youtubeVideoId: "n0_mY8r7zYI",
    publishDate: "October 18, 2023",
    duration: "51:20",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1498354178607-a79df2916198?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Land Grabs: The Paper Trail of Palm Oil",
    description:
      "Uncovering the fraudulent land titles used to displace indigenous communities for commercial plantations. A collaborative cross-border investigation.",
    youtubeVideoId: "T9zX3O_tH0o",
    publishDate: "September 12, 2023",
    duration: "33:10",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Digital Surveillance in the Workplace",
    description:
      "How surveillance software meant for efficiency is being repurposed to monitor labor organizing and suppress collective bargaining rights.",
    youtubeVideoId: "3_Y69sYp30o",
    publishDate: "August 28, 2023",
    duration: "36:55",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "7",
    title: "The Plastic Loophole: Exporting Waste",
    description:
      "Tracking plastic waste from high-income nations to processing sites that lack safety regulations, exposing the failure of global recycling narratives.",
    youtubeVideoId: "1pMreG_9lYw",
    publishDate: "July 14, 2023",
    duration: "40:20",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "8",
    title: "Rare Earths, Common Greed",
    description:
      "An analysis of the environmental deregulation occurring in the name of the 'Green Transition.' Who pays the price for zero-emission goals?",
    youtubeVideoId: "0Yt58A59u0Y",
    publishDate: "June 30, 2023",
    duration: "48:15",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "9",
    title: "Automating Inequality: AI in Hiring",
    description:
      "Examining bias in automated HR tools and how they systematically disadvantage minority candidates in large-scale corporate recruitment.",
    youtubeVideoId: "jXN_Nn6_L6U",
    publishDate: "May 22, 2023",
    duration: "29:40",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "10",
    title: "The Lobbyist Files: Shaping Labor Laws",
    description:
      "Internal documents reveal how corporate lobbying groups influence national labor legislation to weaken worker protections in emerging markets.",
    youtubeVideoId: "Qp06vIe9D_8",
    publishDate: "April 15, 2023",
    duration: "55:00",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
  },
];

const PodcastShowcase = () => {
  const [selectedEpisode, setSelectedEpisode] =
    (useState < PodcastEpisode) | (null > null);

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
        <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6 leading-tight">
          Voices from the{" "}
          <span className="font-semibold italic text-red-700">
            Supply Chain
          </span>
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed font-light">
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
            <div className="relative w-full md:w-56 h-40 flex-shrink-0 overflow-hidden rounded-lg bg-gray-900 border border-white/5 shadow-xl">
              <img
                src={episode.thumbnailUrl}
                alt={episode.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:bg-red-700 group-hover:border-red-600 transition-all scale-90 group-hover:scale-100 shadow-2xl">
                  <Play
                    size={20}
                    fill="currentColor"
                    className="text-white ml-1"
                  />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-[10px] font-medium text-white tracking-wider backdrop-blur-sm border border-white/10">
                {episode.duration}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col h-full">
              <div className="flex items-center gap-4 text-[11px] text-gray-500 uppercase tracking-widest mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} /> {episode.publishDate}
                </span>
                <span className="h-1 w-1 bg-gray-700 rounded-full" />
                <span className="flex items-center gap-1.5">
                  <Clock size={12} /> Episode {episode.id}
                </span>
              </div>
              <h2 className="text-xl font-medium text-white mb-3 group-hover:text-red-500 transition-colors leading-tight">
                {episode.title}
              </h2>
              <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed font-light mb-4">
                {episode.description}
              </p>
              <div className="mt-auto flex items-center gap-4">
                <span className="text-xs font-semibold text-white/40 group-hover:text-white transition-colors flex items-center gap-1">
                  LISTEN NOW <ArrowUpRight size={14} />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer / Load More (Placeholder) */}
      <footer className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-sm text-gray-500">
          © 2024 Investigative Action NGO. All Rights Reserved.
        </p>
        <div className="flex gap-8 text-xs text-gray-500 font-medium tracking-widest uppercase">
          <button className="hover:text-white transition-colors">
            RSS Feed
          </button>
          <button className="hover:text-white transition-colors">
            Archive
          </button>
          <button className="hover:text-white transition-colors">
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
              className="absolute inset-0 bg-black/95 backdrop-blur-sm cursor-zoom-out"
              onClick={() => setSelectedEpisode(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="relative w-full max-w-5xl bg-[#14121a] rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedEpisode(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white transition-all hover:rotate-90"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col">
                {/* Video Player Section */}
                <div className="aspect-video w-full bg-black">
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
                    <span className="text-gray-500 flex items-center gap-1.5">
                      <Calendar size={14} /> {selectedEpisode.publishDate}
                    </span>
                    <span className="text-gray-500 flex items-center gap-1.5">
                      <Clock size={14} /> {selectedEpisode.duration}
                    </span>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">
                        {selectedEpisode.title}
                      </h2>
                      <p className="text-gray-400 text-lg leading-relaxed font-light">
                        {selectedEpisode.description}
                      </p>
                      <div className="mt-8 pt-8 border-t border-white/5 flex gap-4">
                        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all text-sm font-medium">
                          <Share2 size={16} /> Share Episode
                        </button>
                        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all text-sm font-medium">
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
