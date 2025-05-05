import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import introImage from '../assets/images/intro-img.png';


const Home = () => {
  return (
    <>
      <Header />
      <section id="intro">
        <div>
          <h1>Introducing Your New Workout Wardrobe</h1>
        </div>
        <img src={introImage} alt="Intro" />
      </section>
      <Footer />
    </>
  );
};

export default Home;
