import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import '../styles/profile.css'; // Можливо, вам знадобиться цей імпорт для стилів

const Profile = () => {
  // Стан для полів форми
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  // Стан для списку коментарів
  const [comments, setComments] = useState([]);

  // Обробник зміни значень полів форми
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (id === 'name') {
      setName(value);
    } else if (id === 'email') {
      setEmail(value);
    } else if (id === 'comment') {
      setComment(value);
    }
  };

  // Обробник відправки форми
  const handleSubmit = (event) => {
    event.preventDefault(); // Зупиняємо стандартну відправку форми

    // Валідація полів
    if (name.trim() === '' || email.trim() === '' || comment.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    // Створюємо новий об'єкт коментаря
    const newComment = { name, comment };

    // Додаємо новий коментар до списку коментарів
    setComments([...comments, newComment]);

    // Очищаємо поля форми
    setName('');
    setEmail('');
    setComment('');
  };

  return (
    <>
      <Header />
      <section id="profile">
        <div className="personal-info">
          <p className="title">Personal Information</p>
          <p className="personal-text">Name: Andriana Mykolaievych</p>
          <p className="personal-text">Email: andriana@gmail.com</p>
          <p className="personal-text">Phone: +380 98 234 4123</p>
        </div>
        <div className="orders-info">
          <p className="title">My Orders</p>
          <p className="orders-text">View past purchases</p>
          <p className="orders-text">Order Tracking</p>
          <p className="orders-text">Reorder Feature</p>
        </div>
        <div className="bonus-info">
          <p className="title">Rewards & Bonuses</p>
          <p className="personal-text">Loyalty Points – You have 500 points! Redeem for a 10% discount.</p>
          <p className="personal-text">Cashback – $10 cashback available for next purchase!</p>
          <p className="personal-text">Referral Program – Refer a friend & get $15 off for both!</p>
        </div>
        <div className="wishlist-info">
          <p className="title">My Wishlist</p>
          <Link to="/wishlist">View my wishlist ({wishlist.length} items)</Link>
        </div>
      </section>
      <section id="feedback">
        <h2>Leave Your Comment</h2>
        {/* Додаємо обробник onSubmit до форми */}
        <form id="commentForm" onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            required
            value={name} // Прив'язуємо значення поля до стану
            onChange={handleInputChange} // Додаємо обробник зміни
          />
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            required
            value={email} // Прив'язуємо значення поля до стану
            onChange={handleInputChange} // Додаємо обробник зміни
          />
          <textarea
            id="comment"
            placeholder="Your Comment"
            required
            value={comment} // Прив'язуємо значення поля до стану
            onChange={handleInputChange} // Додаємо обробник зміни
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        <div id="commentsSection">
          <h3>Comments</h3>
          <ul id="commentsList">
            {/* Відображаємо коментарі зі стану */}
            {comments.map((item, index) => (
              <li key={index}>{item.name}: {item.comment}</li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Profile;
