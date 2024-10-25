import React from 'react';
import { Icons } from './Icons';

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white z-50 px-6 py-4 border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold flex items-center gap-2">
          <Icons.Logo className="h-8 w-auto text-blue-600" />
        </div>
        <div className="flex gap-8 items-center">
          <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="#oada" className="text-gray-600 hover:text-gray-900">OADA.ai</a>
          <a href="#whitepaper" className="text-gray-600 hover:text-gray-900">Whitepaper</a>
          <a href="#teams" className="text-gray-600 hover:text-gray-900">Teams</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Request A Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;