import "../App.css"
import React from "react";


const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left side image */}
        <div className="about-image">
          <img
            src="/ownerimg.jpeg" // Yaha apne papa ki photo lagana
            alt="Salon Owner"
          />
        </div>

        {/* Right side content */}
        <div className="about-content">
          <h2>About Our Salon</h2>
          <p>
            Welcome to our premium salon!  
            Our owner <strong>Mr. Rajman Sharma</strong>, with years of experience, 
            has built this salon with love, dedication, and a passion for grooming.  
            We believe in providing the best quality service to our clients, 
            making them feel confident, stylish, and refreshed.  
          </p>
          <p>
            Our mission is simple: <em>to bring out the best version of you!</em>  
            With expert staff, a friendly environment, and top-class products, 
            we ensure that every visit is a memorable one.
          </p>
          <button className="about-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About;