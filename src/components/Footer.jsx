import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        <div className="footer-heading footer-1">
          <p>About Us</p>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/promotions">Promotions</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
        </div>
        <div className="footer-heading footer-2">
          <p>Contact Us</p>
          <a href="#">Jobs</a>
          <a href="#">Support</a>
          <a href="#">Contact</a>
          <a href="#">Sponsorships</a>
        </div>
        <div className="footer-heading footer-3">
          <p>Social Media</p>
          <a href="#">Instagram</a>
          <a href="#">FaceBook</a>
          <a href="#">Youtube</a>
          <a href="#">Twitter</a>
        </div>
        <div className="footer-email-form footer-heading">
          <p>Join our newsletter</p>
          <input type="email" placeholder="Enter your email address" id="footer-email" />
          <input type="submit" value="Sign Up" id="footer-email-btn" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
