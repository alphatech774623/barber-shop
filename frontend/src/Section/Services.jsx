import React from "react";
import "../App.css"
import { FaCut, FaUserTie, FaSpa, FaPumpSoap, FaChild } from "react-icons/fa";
import { GiBeard, GiComb } from "react-icons/gi";


const services = [
  { icon: <FaCut />, title: "Haircut & Styling" },
  { icon: <GiBeard />, title: "Beard Trimming" },
  { icon: <FaSpa />, title: "Head Massage" },
  { icon: <GiComb />, title: "Hair Coloring" },
  { icon: <FaPumpSoap />, title: "Facial & Skincare" },
  { icon: <FaUserTie />, title: "Grooming Package" },
  { icon: <FaChild />, title: "Kids Haircut" },
];

const Services = () =>{
    return (
        <section className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
    )
}

export default Services




