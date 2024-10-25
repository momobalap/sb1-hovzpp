import React from 'react';

const teamMembers = [
  {
    image: "/images/team1.jpg",
    name: "Name",
    role: "John Doe User"
  },
  {
    image: "/images/team2.jpg",
    name: "Name",
    role: "John Doe User"
  },
  {
    image: "/images/team3.jpg",
    name: "Name",
    role: "John Doe User"
  }
];

const Team = () => {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-12">Team</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;