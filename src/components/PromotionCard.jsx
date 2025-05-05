import React, { useState } from 'react';


const PromotionCard = ({ name, text, buttonText, buttonLink }) => {
  // Стан для відстеження, чи текст акції видимий
  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleTextVisibility = (event) => {
    event.preventDefault(); 
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div className="promotion-card">
      <p className="promotion-name">{name}</p>
      <p
        className="promotion-text"
        style={{ display: isTextVisible ? 'block' : 'none' }} 
      >
        {text}
      </p>
      <a className="promotion-btn" href={buttonLink} onClick={toggleTextVisibility}>
        {buttonText}
      </a>
    </div>
  );
};

export default PromotionCard;
