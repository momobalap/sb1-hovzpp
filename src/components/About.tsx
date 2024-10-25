import React from 'react';

const About = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-12">About OADA.ai</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <div>
          <h3 className="text-xl font-bold mb-4">Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            OADA.ai is committed to breaking the boundaries on computational resources through decentralization, enabling the development and application of AI technologies in a more equitable and accessible manner. We aim to offer a new era of computational innovation by collaborating on open, transparent, decentralized, and cost-effective access to computational power worldwide.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden h-[300px]">
          <img 
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800"
            alt="AI Technology"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;