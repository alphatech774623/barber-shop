import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
    useEffect(()=>{
        try {
            const getAllBookings = async ()=>{
                const result = await axios.get("http://localhost:5000/api/auth/getAllBookings");
                setBookings(result?.data?.bookings)
                console.log(result?.data?.bookings)
            }

            getAllBookings()
        } catch (error) {
            console.log(error.message)
        }
    },[])

    // const [dummy, setDummy] = useState(null);


  const [bookings, setBookings] = useState([]);



  const updateStatus = async (id, newStatus) => {
    // const updated = bookings.map((item) =>
    //   item._id === id ? { ...item, status: newStatus } : item
    // );
    try {
        const result = await axios.post("http://localhost:5000/api/auth/updateBookingStatus", {id, newStatus});
        setBookings(result?.data?.bookings);
    } catch (error) {
        console.log(error.message)
    }

    // setBookings(updated);
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Admin Booking Dashboard</h2>

      {/* ✅ Pending Section */}
      <div className="mb-4">
        <h4 className="bg-warning text-white p-2 rounded">Pending Bookings</h4>

      <div className="row">
          {bookings?.filter((b) => b.status === "pending")
            .map((b) => (
              <div className="col-md-4 mb-3" key={b._id}>
                <div className="card shadow">
                  <div className="card-body">
                    <p><b>Name:</b> {b.name}</p>
                    <p><b>Service:</b> {b.service}</p>
                    <p><b>Date:</b> {b.dateOfBooking}</p>
                    <p><b>Time:</b> {b.timeOfBooking}</p>

                    <button
                      className="btn btn-success me-2"
                      onClick={() => updateStatus(b._id, "upcoming")}
                    >
                      Confirm
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={() => updateStatus(b._id, "cancelled")}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div> 
      </div>

      {/* ✅ Upcoming Section */}
      <div className="mb-4">
        <h4 className="bg-primary text-white p-2 rounded">Upcoming Bookings</h4>

       <div className="row">
          {bookings?.filter((b) => b.status === "upcoming")
            .map((b) => (
              <div className="col-md-4 mb-3" key={b._id}>
                <div className="card shadow">
                  <div className="card-body">
                    <p><b>Name:</b> {b.name}</p>
                    <p><b>Service:</b> {b.service}</p>
                    <p><b>Date:</b> {b.date}</p>
                    <p><b>Time:</b> {b.time}</p>

                    <button
                      className="btn btn-success"
                      onClick={() => updateStatus(b._id, "completed")}
                    >
                      Mark Completed
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div> 
      </div>

      {/* ✅ Completed Section */}
      <div className="mb-4">
        <h4 className="bg-success text-white p-2 rounded">Completed Bookings</h4>

       <div className="row">
          {bookings?.filter((b) => b.status === "completed")
            .map((b) => (
              <div className="col-md-4 mb-3" key={b._id}>
                <div className="card shadow border-success">
                  <div className="card-body">
                    <p><b>Name:</b> {b.name}</p>
                    <p><b>Service:</b> {b.service}</p>
                    <p><b>Date:</b> {b.date}</p>
                    <p><b>Time:</b> {b.time}</p>

                    <span className="badge bg-success">Completed</span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;