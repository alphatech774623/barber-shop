import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "../App.css"

const Footer = () =>{
    return (
         <footer className="footer">
      <div className="footer-container">
        
        {/* About */}
        <div className="footer-section">
          <h2 className="logo">BarberX</h2>
          <p>Style that defines you. Your trusted grooming partner.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
          <p>Sat - Sun: 10:00 AM - 6:00 PM</p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 123 Uttar Pradesh, Jaunpur</p>
          <p>📞 +91 9026100373</p>
          <p>✉️ ashusharma902610@gmail.com</p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="footer-bottom">
        <p>© 2025 BarberX | All Rights Reserved By-Ashu Sharma</p>
      </div>
    </footer>
    )
}

export default Footer