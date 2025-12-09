import React from "react";
import "../App.css"

const Pricing = () =>{
    return (
        <section className="pricing-section" id="pricing">
      <h2 className="pricing-title">Our Pricing</h2>

      <div className="pricing-container">
        {/* Item 1 */}
        <div className="pricing-item">
          <h3 className="service-name">Haircut & Styling</h3>
          <span className="price">$34</span>
          <hr />
        </div>

        {/* Item 2 */}
        <div className="pricing-item">
          <h3 className="service-name">Beard Trimming</h3>
          <span className="price">$27</span>
          <hr />
        </div>
        

         {/* Item 3 */}
        <div className="pricing-item">
          <h3 className="service-name">Head Massage</h3>
          <span className="price">$34</span>
          <hr />
        </div>

        {/* Item 4 */}
        <div className="pricing-item">
          <h3 className="service-name">Hair Coloring</h3>
          <span className="price">$27</span>
          <hr />
        </div>

      </div>
    

    <div className="pricing-container">
        {/* Item 5 */}
        <div className="pricing-item">
          <h3 className="service-name">Facial & Skincare</h3>
          <span className="price">$34</span>
          <hr />
        </div>

        {/* Item 6 */}
        <div className="pricing-item">
          <h3 className="service-name">Grooming Package</h3>
          <span className="price">$27</span>
          <hr />
        </div>
        

         {/* Item 7 */}
        <div className="pricing-item">
          <h3 className="service-name">Kids Haircut</h3>
          <span className="price">$34</span>
          <hr />
        </div>

        {/* Item 8 */}
        <div className="pricing-item">
          <h3 className="service-name">Royal Shave</h3>
          <span className="price">$27</span>
          <hr />
        </div>

      </div>




    </section>
    )
}

export default Pricing







// import React from "react";
// import "./Pricing.css";

// const Pricing = () => {
//   return (
//     <section className="pricing-section" id="pricing">
//       <h2 className="pricing-title">Our Pricing</h2>

//       <div className="pricing-container">
//         {/* Item 1 */}
//         <div className="pricing-item">
//           <h3 className="service-name">Regular Haircut</h3>
//           <span className="price">$34</span>
//           <hr />
//         </div>

//         {/* Item 2 */}
//         <div className="pricing-item">
//           <h3 className="service-name">Royal Shave</h3>
//           <span className="price">$27</span>
//           <hr />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;