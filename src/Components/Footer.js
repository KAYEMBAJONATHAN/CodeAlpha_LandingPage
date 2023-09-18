import React from 'react';
import '../Style/footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section contact-info">
          <h4>Contact Information</h4>
          <p>kayembejonathan5@gmail.com</p>
          <p>Phone: +27 (74) 6480168</p>
          <p>Address: 152 Troye St, City: Pretoria, Country: South Africa</p>
        </div>
        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://github.com/KAYEMBAJONATHAN" target="_blank" rel="noopener noreferrer">Github</a></li>
            <li><a href="https://www.linkedin.com/in/cimena-kayemba/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-section copyright">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
