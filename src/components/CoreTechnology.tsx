import React from 'react';
import { Network, Shield, FileCode, Map } from 'lucide-react';

const features = [
  {
    icon: Network,
    title: 'Decentralized Computing Network',
    description: 'Our platform optimizes the training and inference processes of large-scale models by intelligently segmenting large AI models into manageable parts distributed across global nodes.'
  },
  {
    icon: FileCode,
    title: 'Smart Contracts and Blockchain',
    description: 'Ensures the accuracy and authenticity of each computation executed through innovative verification methods.'
  },
  {
    icon: Shield,
    title: 'Security and Transparency',
    description: 'A transparent and secure blockchain layer, enabling every operation secures its process to be auditable and trustworthy.'
  },
  {
    icon: Map,
    title: 'Network Protocols and Standards',
    description: 'Follows the highest standards of protocols to ensure the efficient operation and scaling of the network.'
  }
];

const CoreTechnology = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-12">Core Technology</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <feature.icon className="w-8 h-8 text-[#0066FF] mb-4" />
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreTechnology;