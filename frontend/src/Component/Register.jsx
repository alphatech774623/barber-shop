
import "../App.css"
import React, { useState } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import axios from "axios";
import {useDispatch} from 'react-redux'
import { setUserInfo } from "../redux/slices/counterSlice.js";
import {useNavigate} from 'react-router-dom'
const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


    const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:5000/api/auth/register", formData, {withCredentials : true});
    dispatch(setUserInfo(res?.data?.user));
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
    navigate("/")
    setFormData({ name: "", email: "", password: "" }); // reset form
  } catch (err) {
    alert(err.response?.data?.msg || "Registration failed");
  }
};
  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <AiOutlineCheckCircle className="success-icon" />
            <p>Your registration was successful!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register

