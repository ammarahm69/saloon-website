"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Portfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videoReels = [
    {
      id: 1,
      // title: 'Hair Transformation',
      video: "/images/reel1.mp4",
      // category: 'Hair Styling',
    },
    {
      id: 2,
      // title: 'Spa Experience',
      video: "/images/reel2.mp4",
      // category: 'Wellness',
    },
    {
      id: 3,
      // title: 'Nail Artistry',
      video: "/images/reel3.mp4",
      // category: 'Nail Care',
    },
    {
      id: 4,
      // title: 'Beauty Glow',
      video: "/images/reel4.mp4",
      // category: 'Skincare',
    },
  ];

  const closeModal = () => setSelectedVideo(null);

  return (
    <section
      id="portfolio"
      className="relative py-24 bg-gradient-to-br from-white via-yellow-50/30 to-amber-50/20 overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Rotating Spotlight Effects */}
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-xl"
          style={{
            background:
              "radial-gradient(circle, rgba(254, 240, 138, 0.4) 0%, rgba(254, 249, 195, 0.3) 40%, transparent 70%)",
          }}
          animate={{
            x: ["-20%", "120%", "-20%"],
            y: ["-10%", "110%", "-10%"],
            rotate: [0, 360, 720],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full blur-lg"
          style={{
            background:
              "radial-gradient(circle, rgba(253, 224, 71, 0.3) 0%, rgba(254, 240, 138, 0.2) 50%, transparent 80%)",
          }}
          animate={{
            x: ["100%", "-30%", "100%"],
            y: ["80%", "-20%", "80%"],
            rotate: [360, 0, -360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/60 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-20 right-20 w-20 h-20 border-2 border-yellow-300/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-16 h-16 bg-yellow-200/20 transform rotate-45"
          animate={{ rotate: [45, 225, 45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-200/30 rounded-full text-sm font-medium text-black tracking-wide uppercase">
              Our Work
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Portfolio
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Experience our artistry through immersive video stories
          </p>
        </motion.div>

        {/* Video Reels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {videoReels.map((reel, index) => (
            <motion.div
              key={reel.id}
              className="group relative"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              <div
                className="relative overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
                onClick={() => setSelectedVideo(reel.video)}
              >
                <div className="relative aspect-[9/16] overflow-hidden rounded-3xl shadow-2xl">
                  <video
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  >
                    <source src={reel.video} type="video/mp4" />
                  </video>

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/30 backdrop-blur-md rounded-full p-4 border border-white/40 shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <svg
                        className="w-8 h-8 text-white ml-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  {/* <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white/90 mb-2 border border-white/20">
                        {reel.category}
                      </span>
                      <h3 className="text-xl font-bold text-white leading-tight">
                        {reel.title}
                      </h3>
                    </div>
                  </div> */}

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
            >
              <motion.div
                className="relative max-w-md w-full"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute -top-16 right-0 bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="bg-black rounded-3xl overflow-hidden aspect-[9/16] shadow-2xl border border-white/10">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    loop
                    playsInline
                  >
                    <source src={selectedVideo} type="video/mp4" />
                  </video>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
