import React from "react";
import { Link, Navigate } from "react-router-dom";

const About = () => {
  return (
    <section className="container-fluid py-5 bg-dark text-white">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Image (SMALLER NOW) */}
          <div className="col-lg-5 mb-4 mb-lg-0 text-center">
            <img
              src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186"
              className="img-fluid rounded-4 shadow-lg"
              alt="Barber"
              style={{ maxHeight: "350px", objectFit: "cover" }}
            />
          </div>

          {/* Right Text (MORE CONTENT NOW) */}
          <div className="col-lg-7 text-center text-lg-start">
            <h2 className="fw-bold mb-3">Why Choose Our Barber Salon?</h2>

            <p className="text-secondary">
              We are not just a barber shop — we are a complete grooming
              destination. Our professional barbers are trained in modern and
              classic styling techniques to give you the best look every time.
            </p>

            <p className="text-secondary">
              Hygiene, customer satisfaction, and premium service quality are
              our top priorities. We use only high-quality products to ensure
              safety and comfort for every client.
            </p>

            <p className="text-secondary">
              Whether it's a regular haircut, beard styling, facial, or special
              occasion grooming — we handle everything with perfection.
            </p>

            {/* Stats */}
            <div className="row mt-4">
              <div className="col-6 col-md-3">
                <h5 className="text-warning fw-bold">10+</h5>
                <p className="small">Years Experience</p>
              </div>

              <div className="col-6 col-md-3">
                <h5 className="text-warning fw-bold">5000+</h5>
                <p className="small">Happy Clients</p>
              </div>

              <div className="col-6 col-md-3 mt-3 mt-md-0">
                <h5 className="text-warning fw-bold">15+</h5>
                <p className="small">Expert Barbers</p>
              </div>

              <div className="col-6 col-md-3 mt-3 mt-md-0">
                <h5 className="text-warning fw-bold">100%</h5>
                <p className="small">Hygiene</p>
              </div>
            </div>

            <Link to="/booking"><button className="btn btn-warning mt-4 px-4">
              Book Appointment
            </button></Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;