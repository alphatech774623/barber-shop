import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(()=>{
    try {
        const getAllUsers = async ()=>{
            const result = await axios.get("http://localhost:5000/api/auth/getAllUsers");
            setCustomers(result?.data?.users)
        }

        getAllUsers()
    } catch (error) {
        console.log(error.message)
    }
  },[])

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">All Customers</h2>

      {/* ✅ Table View */}
      <div className="table-responsive mb-4">
        <table className="table table-bordered table-hover text-center">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Joined Date</th>
            </tr>
          </thead>
          <tbody>
            {customers?.map((c, index) => (
              <tr key={c._id}>
                <td>{index + 1}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Card View (Mobile Friendly) */}
      <div className="row">
        {customers?.map((c) => (
          <div className="col-md-4 mb-3" key={c._id}>
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">{c.name}</h5>
                <p className="card-text"><b>Email:</b> {c.email}</p>
                <p className="card-text"><b>Joined:</b> {c.createdAt}</p>

                <button className="btn btn-outline-primary btn-sm w-100">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AdminCustomers;