import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 lg:px-8">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        You Name
      </motion.h1>
      <motion.p
        className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 max-w-xl sm:max-w-2xl drop-shadow-sm leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Discover the essence of anime like never before. Where imagination meets
        adventure, and stories come to life.
      </motion.p>
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 sm:px-8 sm:py-4 rounded-lg shadow-lg transition">
          Explore Now
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
