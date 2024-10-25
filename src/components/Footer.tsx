import React from 'react';
import { Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 className="text-xl font-bold mb-4">OADA.ai</h3>
          <p className="text-gray-600 mb-6 max-w-md">
            OADA.ai offers unique ways for you to join our network, contribute computing resources, or initiate AI projects.
          </p>
          <div className="flex gap-4 mb-6">
            <Twitter className="w-6 h-6" />
            <Github className="w-6 h-6" />
          </div>
          <button className="bg-[#002D57] text-white px-6 py-2 rounded-md">
            Request A Demo
          </button>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#about" className="text-gray-600">About</a></li>
            <li><a href="#contact" className="text-gray-600">Contact</a></li>
            <li><a href="#whitepaper" className="text-gray-600">Whitepaper</a></li>
            <li><a href="#team" className="text-gray-600">Team</a></li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 pt-8 border-t border-gray-100 gap-4">
        <p>Copyright © 2024 OADA.ai. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="/privacy">Terms & Privacy Policy</a>
          <a href="/sitemap">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;