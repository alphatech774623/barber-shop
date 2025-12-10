import React from "react";
import { Link } from "react-router-dom";

const NoBookings = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="text-center p-4 border rounded shadow-sm" style={{ maxWidth: "420px" }}>
        
        <img
          src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
          alt="No Bookings"
          className="img-fluid mb-3"
          style={{ width: "140px" }}
        />

        <h3 className="fw-bold">No Bookings Found</h3>
        <p className="text-muted mb-4">
          You haven't made any bookings yet.  
        </p>

        <Link to="/" className="btn btn-primary px-4">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NoBookings;
