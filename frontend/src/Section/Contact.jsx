 import React from "react";
 import "../App.css"

const Contact = () =>{
    return (
        <section className="contact-section">
      {/* Left side - Map */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1023.4336564573842!2d82.65574941230904!3d25.45653373970445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fd8b7cb9d0403%3A0xe2fb8cfab93baeb8!2z4KS14KS_4KS24KS-4KSyIOCkruCli-CkrOCkvuCkh-CksiDgpI_gpLXgpIIg4KSH4KSy4KWH4KSV4KWN4KSf4KWN4KSw4KS-4KSo4KS_4KSVIOCktuClieCkqg!5e0!3m2!1sen!2sin!4v1756475988767!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          title="Barber Shop Location"
        ></iframe>
         
      </div>

      {/* Right side - Contact Form */}
      <div className="form-container">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
    )
 }

 export default Contact
