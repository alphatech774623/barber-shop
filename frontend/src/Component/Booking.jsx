import "../App.css"
import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // yaha check karoge login hai ya nhi (abhi frontend me dummy check kar rhe)
    const isLoggedIn = false; // abhi ke liye
    if (!isLoggedIn) {
      alert("⚠️ You must be login first!");
      return;
    }
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="booking-container">
      <h2>Book Your Appointment</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <label>Time</label>
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <label>Service</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">-- Select a service --</option>
          <option value="Haircut">Haircut & Styling</option>
          <option value="Beard Trimming">Beard Trimming</option>
          <option value="Head massage">Head Massage</option>
          <option value="hair color">Hair Coloring</option>
          <option value="Facial">facial & Skincare</option>
          <option value="Grooming">Groomming Package</option>
          <option value="Kids haircut">Kids Haircut</option>
        </select>

        <button type="submit">Submit</button>

        <p className="login-text">
          Already have an account?{" "}
          <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default BookingForm;