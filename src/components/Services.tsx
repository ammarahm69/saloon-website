"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

const Services = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const saloonImages = [
    {
      id: 1,
      src: 'images/saloon.jpg',
      alt: 'Saloon Interior'
    },
    {
      id: 2,
      src: 'images/saloon2.jpg',
      alt: 'Saloon View 1'
    },
    {
      id: 3,
      src: 'images/shendlier.jpg',
      alt: 'Saloon View 2'
    },
   
  ];

  return (
    <section id="services" className="relative py-24 bg-gradient-to-br from-white via-yellow-50/30 to-amber-50/20 overflow-hidden">
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

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Saloon
          </motion.span>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Saloon Gallery
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Step into our beautifully designed saloon space where luxury meets comfort in every corner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {saloonImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredImage(image.id)}
              onHoverEnd={() => setHoveredImage(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: hoveredImage === image.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Hover Content */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: hoveredImage === image.id ? 1 : 0,
                    y: hoveredImage === image.id ? 0 : 20
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {image.alt}
                  </h3>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-amber-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Visit Our Beautiful Saloon</h3>
            <p className="text-gray-600 mb-6">Experience luxury and comfort in our thoughtfully designed space where every detail creates the perfect ambiance.</p>
            <button className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold py-4 px-10 rounded-full transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25">
              Book Your Visit
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;