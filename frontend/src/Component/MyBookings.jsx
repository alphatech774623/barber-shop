import React from "react";
import { useSelector } from "react-redux";
import NoBookings from "./NoBookings";

const MyBookings = () => {
    const {bookingInfo} = useSelector(state=>state.booking);
  return (
    
    <>
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Bookings</h2>

     {bookingInfo ? (<div className="row">
        {bookingInfo?.map((booking) => (
          <div className="col-md-4 mb-4" key={booking._id}>
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title text-primary">
                  {booking.name}
                </h5>

                <p className="card-text">
                  <strong>Service:</strong> {booking.service}
                </p>

                <p className="card-text">
                  <strong>Date:</strong> {booking.dateOfBooking}
                </p>

                <p className="card-text">
                  <strong>Time:</strong> {booking.timeOfBooking}
                </p>

                <p
                  className={`badge ${
                    booking.status === "pending"
                      ? "bg-warning"
                      : booking.status === "confirmed"
                      ? "bg-primary"
                      : booking.status === "cancelled"
                      ? "bg-danger"
                      : "bg-success"
                  }`}
                >
                  {booking.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>) : <NoBookings/>}
    </div>
    </>
  );
};

export default MyBookings;