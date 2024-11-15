import React from 'react';

export default function VotixFooter() {
  return (
    <footer className="bg-black text-white py-2 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Votix</h2>
            <p className="text-sm mt-1">Simplifying your voting experience</p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4">
            <a href="#" className="px-4 py-2 text-white hover:text-gray-300">
              Help
            </a>
            <a href="#" className="px-4 py-2 text-white hover:text-gray-300">
              More
            </a>
            <a href="#" className="px-4 py-2 text-white hover:text-gray-300">
              Legal
            </a>
          </nav>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-sm">
          © {new Date().getFullYear()} Votix. All rights reserved.
        </div>
      </div>
    </footer>
  );
}