import React from 'react';
import { motion } from 'framer-motion';
import Image from './Image';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/hero-bg.jpg"
        alt="Hero background"
        className="absolute inset-0"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to Our Platform
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Discover amazing features and services that will transform your experience
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-blue-600 rounded-full text-lg font-semibold"
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
