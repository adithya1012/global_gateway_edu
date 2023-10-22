import React from 'react';
import { SocialIcon } from 'react-social-icons';
import '../styles/footer.css'

function Footer() {
  return (
    <div className="footer-container">
      <div className="column">
        <h3>Follow Us On</h3>
        <ul className="social-icons">
          <li className="social-icon">
            <SocialIcon url="https://www.youtube.com/"/>
          </li>
          <li className="social-icon">
            <SocialIcon url="https://www.instagram.com/"/>
          </li>
          <li className="social-icon">
            <SocialIcon url="https://www.facebook.com/"/>
          </li>
          <li className="social-icon">
            <SocialIcon url="https://www.linkedin.com/"/>
          </li>
        </ul>
      </div>
      <div className="column">
        <h3>More Information</h3>
        <ul className="info-links">
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="column">
        <h3>Copyrights @ 2023 GGE</h3>
        <ul className="info-links">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of use</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
    </div>
  );
}


export default Footer;