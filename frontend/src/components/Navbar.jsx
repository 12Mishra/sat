import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from 'lucide-react';
import Logo from "../assets/Logo.mp4";
import {Link} from 'react-router-dom'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=" bg-black text-white">
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-md z-50">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2 mt-2">
            <div className="h-40 w-32 overflow-hidden">
              <video className="h-full w-full object-cover" muted autoPlay playsInline>
                <source src={Logo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-lg text-gray-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#"
                className="text-lg text-gray-300 hover:text-white transition-colors"
              >
                Customer
              </a>
              <a
                href="#"
                className="text-lg text-gray-300 hover:text-white transition-colors"
              >
                Pricing
              </a>

          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm px-4 py-2 rounded hover:bg-white/10 transition-colors">
              <Link to='/login'>Log in</Link>
            </button>
            <button className="text-sm px-4 py-2 rounded bg-white text-black hover:bg-gray-200 transition-colors">
            <Link to='/register'>Register</Link>
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black border-b border-white/10"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {["Features", "Customers", "Pricing"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <button className="w-full text-sm px-4 py-2 rounded hover:bg-white/10 transition-colors">
                  Log in
                </button>
                <button className="w-full text-sm px-4 py-2 rounded bg-white text-black hover:bg-gray-200 transition-colors">
                  Sign up
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </header>
    </div>
  );
}