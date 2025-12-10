import React, { useState } from "react";
import "../App.css";
import axios from "axios";

const Contact = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:5000/api/auth/contact", formdata);
      alert(result?.data?.msg)
      setFormdata({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <section className="contact-section">
      {/* Left side - Map */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1023.4336564573842!2d82.65574941230904!3d25.45653373970445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fd8b7cb9d0403%3A0xe2fb8cfab93baeb8!2z4KS14KS_4KS24KS-4KSyIOCkruCli-CkrOCkvuCkh-CksiDgpI_gpLXgpIIg4KSH4KSy4KWH4KSV4KWN4KSf4KWN4KSw4KS-4KSo4KS_4KSVIOCktuClieCkqg!5e0!3m2!1sen!2sin!4v1756475988767!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="lazy"
          title="Barber Shop Location"
        ></iframe>
      </div>

      {/* Right side - Contact Form */}
      <div className="form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formdata.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formdata.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formdata.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formdata.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
