import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PromotionCard from '../components/PromotionCard'; // Імпортуємо компонент PromotionCard
// import '../styles/promotions.css'; // Можливо, вам знадобиться цей імпорт для стилів

const promotionsData = [
  {
    name: 'Loyalty Program',
    text: 'Shop more, save more! Earn points for every purchase and exchange them for exclusive discounts. The more you buy, the more rewards you unlock!',
    buttonText: 'Join Loyalty Program',
    buttonLink: '#', // Замініть на реальне посилання, якщо є
  },
  {
    name: 'Referral Program',
    text: 'Share the love! Invite your friends to shop with us, and both of you will receive a special discount on your next order. Win-win!',
    buttonText: 'Refer a Friend',
    buttonLink: '#', // Замініть на реальне посилання, якщо є
  },
  {
    name: 'Cashback on Next Purchase',
    text: 'Get rewarded for every purchase! Receive 5% cashback in bonus points, which you can use for future orders. The more you shop, the more you save!',
    buttonText: 'Check Your Rewards',
    buttonLink: '#', // Замініть на реальне посилання, якщо є
  },
];

const Promotions = () => {
  return (
    <>
      <Header />
      <section id="promotions">
        <h1>Special Programs & Bonuses</h1>
        <div className="promotions-cards">
          {promotionsData.map((promotion, index) => (
            <PromotionCard
              key={index} // Використовуйте унікальний ключ, наприклад, ID акції, якщо він є
              name={promotion.name}
              text={promotion.text}
              buttonText={promotion.buttonText}
              buttonLink={promotion.buttonLink}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Promotions;
