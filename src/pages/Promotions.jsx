import React, { useState, useEffect } from 'react';
import { getActivePromotions } from '../services/productsService';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PromotionCard from '../components/PromotionCard';

const Promotions = () => {
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPromotions = async () => {
      try {
        const data = await getActivePromotions();
        setPromotions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    loadPromotions();
  }, []);

  if (loading) return <div>Loading promotions...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Header />
      <section id="promotions">
        <h1>Special Programs & Bonuses</h1>
        <div className="promotions-cards">
          {promotions.map((promotion) => (
            <PromotionCard
              key={promotion.id}
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