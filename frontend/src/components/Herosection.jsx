import React from "react";
import { motion } from "framer-motion";

const Herosection = () => {
  return (
    <div>
      <main className="container mx-auto px-4 pt-32">
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              VotingBlockChain is a better way
              <span className="block text-blue-500 animate-pulse">to build products</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Meet the new standard for modern software development. Streamline
              issues, sprints, and product roadmaps.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="text-sm px-8 py-4 rounded bg-white text-black hover:bg-gray-200 transition-colors">
                Get started
              </button>
              <button className="text-sm px-8 py-4 rounded border border-white/20 hover:bg-white/10 transition-colors">
                View demo
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 relative w-full max-w-5xl aspect-video"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-10" />
            <div className="absolute inset-0 bg-grid-white/10 bg-[length:50px_50px] z-0" />
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent z-20"
              style={{
                backgroundSize: "200% 100%",
              }}
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Herosection;
