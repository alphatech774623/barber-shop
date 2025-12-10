
import "../App.css"
import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/slices/counterSlice.js";
import { useNavigate } from "react-router-dom";
import { setBookingInfo } from "../redux/slices/bookingSlice.js";
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    
 const handleSubmit = async (e) => {
   e.preventDefault();

   if (!formData.email || !formData.password) {
     alert("Please fill all fields!");
     return;
   }

   try {
     // Backend API call
     const res = await axios.post("http://localhost:5000/api/auth/login", formData, {withCredentials : true});
      dispatch(setUserInfo(res?.data?.user));
      dispatch(setBookingInfo(res?.data?.bookings))
      setShowPopup(true); 
    setTimeout(() => setShowPopup(false), 2000);
    navigate("/")
    setFormData({ email: "", password: "" });   } catch (err) {
     alert(err.response?.data?.msg || "Login failed!");
   }
 };



  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Login</h2>

        <div className="input-group">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <FaLock className="input-icon" />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn-submit">
          Login
        </button>

        {/* Register link */}
        <p className="redirect-text">
          Don’t have an account? <a href="/register">Register here</a>
        </p>
      </form>

      {/* Success Popup */}
      {showPopup && (
        <div className="popup">
          <MdCheckCircle className="popup-icon" />
          <p>Login Successful!</p>
        </div>
      )}
    </div>
  );
};

export default Login;

