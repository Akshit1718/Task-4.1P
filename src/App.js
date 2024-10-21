import React from 'react';
import Header from './components/Header';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import Footer from './components/Footer';
import './App.css'; // Global styles for app

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <FeaturedArticles />
        <FeaturedTutorials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
