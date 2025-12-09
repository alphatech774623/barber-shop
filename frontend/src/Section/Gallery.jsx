import React from "react";
import '../App.css'


const Gallery = () =>{
    return (
        <section className="gallery-section">
      {/* Left side - Working Hours */}
      <div className="working-hours">
        <h2>Working Hours</h2>
        <ul>
          <li><b>Monday- Friday</b>  : 9:00 AM - 8:00 PM</li>
          <li><b>Saturday</b> : 9:00 AM - 6:00 PM</li>
          <li><b>Sunday</b> : 7:00 AM - 10 PM</li>
        </ul>
      </div>

      {/* Right side - Gallery */}
      <div className="gallery">
        <h2>Our Gallery</h2>
        <div className="gallery-grid">
          <img src="/gly1.jpg" alt="Gallery 1" />
          <img src="/gly2.jpg" alt="Gallery 2" />
          <img src="/gly3.jpg" alt="Gallery 3" />
          <img src="/gly4.jpg" alt="Gallery 4" />
        </div>
      </div>
    </section>
    )
}

export default Gallery
