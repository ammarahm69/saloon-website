"use client";

import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white via-yellow-50/30 to-amber-50/20 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Rotating Spotlight Effects */}
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-xl"
          style={{
            background: 'radial-gradient(circle, rgba(254, 240, 138, 0.4) 0%, rgba(254, 249, 195, 0.3) 40%, transparent 70%)'
          }}
          animate={{
            x: ['-20%', '120%', '-20%'],
            y: ['-10%', '110%', '-10%'],
            rotate: [0, 360, 720]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full blur-lg"
          style={{
            background: 'radial-gradient(circle, rgba(253, 224, 71, 0.3) 0%, rgba(254, 240, 138, 0.2) 50%, transparent 80%)'
          }}
          animate={{
            x: ['100%', '-30%', '100%'],
            y: ['80%', '-20%', '80%'],
            rotate: [360, 0, -360]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/60 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
        
        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-20 right-4 sm:right-20 w-12 sm:w-20 h-12 sm:h-20 border-2 border-yellow-300/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-4 sm:left-16 w-12 sm:w-16 h-12 sm:h-16 bg-yellow-200/20 transform rotate-45"
          animate={{ rotate: [45, 225, 45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20 lg:py-0">
          {/* Left Content */}
          <div className="max-w-2xl text-center lg:text-left order-2 lg:order-1">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-black relative z-10"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-2">
                  <span>Premium</span>
                  <span className="text-yellow-600 min-h-[1.2em]">
                    <Typewriter
                      options={{
                        strings: ['Blonde Hair', 'Hair Styling', 'Hair Coloring', 'Hair Treatment'],
                        autoStart: true,
                        loop: true,
                        delay: 75,
                        deleteSpeed: 50,
                      }}
                    />
                  </span>
                </div>
                <div>Salon</div>
              </div>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl mb-8 leading-relaxed text-gray-700 relative z-10 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Transform your look with our expert blonde hair treatments. From platinum to honey blonde, we create stunning results that enhance your natural beauty.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 relative z-10 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.button 
                className="bg-black hover:bg-gray-800 text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now
              </motion.button>
              <motion.button 
                className="bg-transparent border-2 border-black text-black font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all duration-300 hover:bg-black hover:text-white backdrop-blur-sm text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
              </motion.button>
            </motion.div>
          </div>

          {/* Right Carousel */}
          <motion.div
            className="flex justify-center relative z-10 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          >
            <Carousel className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-yellow-200/20 via-transparent to-yellow-200/20 rounded-2xl blur-xl"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <CarouselContent>
                <CarouselItem>
                  <div className="p-1">
                    <motion.img 
                      src="/images/blonde.png" 
                      alt="Blonde Hair Style 1" 
                      className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <motion.img 
                      src="/images/blonde2.png" 
                      alt="Blonde Hair Style 2" 
                      className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <motion.img 
                      src="/images/blonde3.png" 
                      alt="Blonde Hair Style 3" 
                      className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover rounded-xl shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="text-black border-black hover:bg-gray-100 flex items-center justify-center left-2 sm:left-4" />
              <CarouselNext className="text-black border-black hover:bg-gray-100 flex items-center justify-center right-2 sm:right-4" />
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;