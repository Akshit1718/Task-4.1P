import React from 'react';
import ArticleCard from './ArticleCard';
import './FeaturedArticles.css';

const FeaturedArticles = () => {
  const articles = [
    { title: 'React or Vue', description: 'Learn React or Vue', author: 'John Doe', rating: 5 },
    { title: 'NodeJS', description: 'Master NodeJS', author: 'Jane Smith', rating: 4.5 },
    { title: 'NodeJS', description: 'Master NodeJS', author: 'Jane Smith', rating: 4.5 },
    // More articles
  ];

  return (
    <section className="featured-articles">
      <h2>Featured Articles</h2>
      <div className="article-grid">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
      <button className="see-all-btn">See all articles</button>
    </section>
  );
};

export default FeaturedArticles;
