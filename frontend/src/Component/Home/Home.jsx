import React from "react";
import Header from "../Header";
import Hero from "../../Section/Hero";
import Whychoose from "../../Section/Whychoose";
import Pricing from "../../Section/Pricing";
import Services from "../../Section/Services";
import Gallery from "../../Section/Gallery";
import Testimonial from "../../Section/Testimonial";
// import Register from "../../Component/Register";
// import Login from "../../Component/Login";
import Admin from "../../Component/Admin";
import Contact from "../../Section/Contact";
import Footer from "../footer";

const Home = () => {
    return (
        <>
           


            <Hero />
            <Whychoose />
            <Pricing />
            <Services />
            <Gallery />
            <Testimonial />
            <Contact />
            {/* <Register/> */}
            {/* <Login/> */}
            {/* <Admin/> */}

 
        </>
    )
}

export default Home