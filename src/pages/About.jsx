import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import aboutImage from '../assets/images/about-img.png'; // Переконайтеся, що шлях до зображення правильний
// import '../styles/about.css'; // Можливо, вам знадобиться цей імпорт для стилів

const About = () => {
  return (
    <>
      <Header />
      <section id="about">
        <div>
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dignissimos sit magnam libero? Possimus voluptatem inventore velit autem soluta itaque libero mollitia distinctio nam deleniti facilis, illo ipsum error doloribus laboriosam debitis. Voluptate ducimus perspiciatis molestias? Accusantium minima quaerat nobis beatae laboriosam maxime. Molestias quam placeat quis commodi tempora magni at accusantium repellat sint repudiandae odio id nisi consequatur, expedita, exercitationem natus! Laudantium similique, fugit cumque ea excepturi quae molestias vel molestiae cupiditate, provident ab saepe voluptatem dolorem possimus ipsum quia nostrum facere hic exercitationem labore modi aspernatur itaque et? Quia officiis praesentium dolor voluptatibus pariatur. Cumque dolorem fugit alias.</p>
        </div>
        {/* Використовуємо імпортоване зображення */}
        <img src={aboutImage} alt="About Us" />
      </section>
      <Footer />
    </>
  );
};

export default About;
