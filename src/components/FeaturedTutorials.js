import React from 'react';
import TutorialCard from './TutorialCard';
import './FeaturedTutorials.css';

const FeaturedTutorials = () => {
  const tutorials = [
    { title: 'JQuery', description: 'Learn JQuery', author: 'User1', rating: 4.5 },
    { title: 'React Router', description: 'Understand Routing', author: 'User2', rating: 4.7 },
    { title: 'React Router', description: 'Understand Routing', author: 'User2', rating: 4.7 },
    // More tutorials
  ];

  return (
    <section className="featured-tutorials">
      <h2>Featured Tutorials</h2>
      <div className="tutorial-grid">
        {tutorials.map((tutorial, index) => (
          <TutorialCard key={index} tutorial={tutorial} />
        ))}
      </div>
      <button className="see-all-btn">See all tutorials</button>
    </section>
  );
};

export default FeaturedTutorials;
