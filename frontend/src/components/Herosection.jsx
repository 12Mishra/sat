import React from "react";
import { motion } from "framer-motion";
import VideoSection from "./VideoSection";
import VotixFooter from "./Footer";

const Herosection = () => {
  return (
    <main className="bg-black text-white mb-4">
      <div className="container mx-auto px-4 pt-16">
        <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center mt-2">
              Votix
              <span className="block text-blue-500 animate-pulse">
                Secure, Transparent Voting
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              A decentralized, blockchain-based voting system on Solana,
              ensuring privacy, integrity, and immutability. Vote with confidence
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
          <VideoSection/>
          <VotixFooter/>
        </div>
      </div>
    </main>
  );
};

export default Herosection;
