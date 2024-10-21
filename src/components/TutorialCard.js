import React from 'react';
import './TutorialCard.css';

const TutorialCard = ({ tutorial }) => {
  return (
    <div className="tutorial-card">
      <img src="image.webp" alt={tutorial.title} />
      <h3>{tutorial.title}</h3>
      <p>{tutorial.description}</p>
      <p>⭐ {tutorial.rating} - {tutorial.author}</p>
    </div>
  );
};

export default TutorialCard;
