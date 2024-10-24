import React from 'react';
import './Freelancers.css';

function Freelancers() {
  const freelancers = [
    {
      id: 1,
      name: 'John Doe',
      skill: 'Web Developer',
      bio: 'Expert in frontend and backend development.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Jane Smith',
      skill: 'Graphic Designer',
      bio: 'Specialized in logo design and branding.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Mark Johnson',
      skill: 'Content Writer',
      bio: 'Creating compelling content for blogs and websites.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Emily Davis',
      skill: 'SEO Specialist',
      bio: 'Optimizing websites to rank higher on search engines.',
      image: 'https://via.placeholder.com/150',
    },
    // Add more freelancers here
  ];

  return (
    <div className="freelancers-page">
      <h1>Freelancers</h1>
      <div className="freelancers-grid">
        {freelancers.map((freelancer) => (
          <div key={freelancer.id} className="freelancer-card">
            <img src={freelancer.image} alt={freelancer.name} className="freelancer-image" />
            <div className="freelancer-info">
              <h3>{freelancer.name}</h3>
              <h4>{freelancer.skill}</h4>
              <p>{freelancer.bio}</p>
              <a href="#" className="btn">Contact</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Freelancers;
