import React from "react";
import "../App.css"

const Whychoose = () =>{
    return (
         <section className="whychoose">
      <h2 className="title">Why Choose Us</h2>
      <div className="features">
        <div className="feature-card">
          <img src="/card1.jpg" alt="Quality Work" />
          <h3>Quality Work</h3>
          <p>We provide top-notch services with attention to detail.</p>
        </div>

        <div className="feature-card">
          <img src="/card2.jpg" alt="Expert Team" />
          <h3>Expert Team</h3>
          <p>Our team consists of skilled and experienced professionals.</p>
        </div>

        <div className="feature-card">
          <img src="/card5.jpg" alt="Affordable Price" />
          <h3>Affordable Price</h3>
          <p>We offer the best services at competitive prices.</p>
        </div>

        <div className="feature-card">
          <img src="/card6.jpg" alt="Customer Support" />
          <h3>24/7 Support</h3>
          <p>We are always here to assist you whenever you need.</p>
        </div>
      </div>
    </section>
    )
}

export default Whychoose








// import React from "react";
// import "./WhyChoose.css";

// function WhyChoose() {
//   return (
//     <section className="whychoose">
//       <h2 className="title">Why Choose Us</h2>
//       <div className="features">
//         <div className="feature-card">
//           <img src="/quality.png" alt="Quality Work" />
//           <h3>Quality Work</h3>
//           <p>We provide top-notch services with attention to detail.</p>
//         </div>

//         <div className="feature-card">
//           <img src="/team.png" alt="Expert Team" />
//           <h3>Expert Team</h3>
//           <p>Our team consists of skilled and experienced professionals.</p>
//         </div>

//         <div className="feature-card">
//           <img src="/price.png" alt="Affordable Price" />
//           <h3>Affordable Price</h3>
//           <p>We offer the best services at competitive prices.</p>
//         </div>

//         <div className="feature-card">
//           <img src="/support.png" alt="Customer Support" />
//           <h3>24/7 Support</h3>
//           <p>We are always here to assist you whenever you need.</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhyChoose;