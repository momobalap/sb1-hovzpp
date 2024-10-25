import React from 'react';
import { Icons } from './Icons';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 gap-4 pt-24 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl lg:text-4xl font-bold">
            Unlock the Future of AI — <br />
            Open, <br />
            Accessible, <br />
            Decentralized
          </h1>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#002D57]">
            <img 
              src="https://images.unsplash.com/photo-1478359844494-1092259d93e4?auto=format&fit=crop&q=80"
              alt="Semiconductor"
              className="w-full h-full object-cover mix-blend-overlay opacity-80"
            />
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-4 h-full">
          {/* First card - top right */}
          <div className="bg-[#002D57] text-white rounded-2xl p-8 flex-1">
            <p className="text-lg leading-relaxed">
              The OADA.ai network leverages global decentralized computing power to democratize cutting-edge AI technology, making it easily accessible to everyone.
            </p>
          </div>

          {/* Bottom cards container */}
          <div className="grid grid-cols-2 gap-4 flex-1">
            {/* Second card - bottom left */}
            <div className="bg-[#002D57] text-white rounded-2xl p-8 flex flex-col justify-between">
              <p className="text-lg mb-4">Start using OADA.ai, experience the future of AI solutions.</p>
              <button className="bg-white text-[#002D57] px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors w-fit">
                Deploy Now
                <Icons.Arrow className="w-4 h-4" />
              </button>
            </div>

            {/* Third card - bottom right */}
            <div className="bg-[#E8EDF4] text-[#002D57] rounded-2xl p-8 flex flex-col justify-between">
              <p className="text-lg mb-4">Delve deeper into how we are transforming the world of AI.</p>
              <button className="border-2 border-[#002D57] text-[#002D57] px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#002D57] hover:text-white transition-colors w-fit">
                Learn More
                <Icons.Arrow className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;