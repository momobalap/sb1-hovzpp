import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import CoreTechnology from './components/CoreTechnology';
import Team from './components/Team';
import Partners from './components/Partners';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-[1200px] mx-auto px-6">
        <Hero />
        <div id="about" className="scroll-mt-24">
          <About />
        </div>
        <div id="oada" className="scroll-mt-24">
          <div className="py-16">
            <h3 className="text-xl font-bold mb-4">The Problem</h3>
            <h4 className="text-[#0066FF] font-bold mb-4">Resource Scarcity and Monopoly Intensification</h4>
            <p className="text-gray-600 max-w-3xl">
              As large AI models continue to grow in size and achieve computational power to generate all AI applications at scale. This surge will only increase the demand for computing power but also leads to resource monopolization by a few major corporations.
            </p>
          </div>
        </div>
        <CoreTechnology />
        <div id="teams" className="scroll-mt-24">
          <Team />
        </div>
        <Partners />
        <Footer />
      </main>
    </div>
  );
}

export default App;