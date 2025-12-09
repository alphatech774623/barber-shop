import React from "react";
import "../App.css"
import { Link } from "react-router-dom";

const Hero = () =>{
    return (
        <section className="hero">
      <div className="overlay">
        <h1>Look Smart, Feel Confident</h1>
        <p>Professional Grooming & Salon Services</p>
        {/* <button>Book Now</button> */}
        <nav>
         <Link to="/booking"><button className="btn register">Book now</button></Link>
         </nav>
      </div>
    </section>
    )
}

export default Hero
