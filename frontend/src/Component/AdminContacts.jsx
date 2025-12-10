import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminContacts = () => {
  const [messages, setMessages] = useState([]);
  useEffect(()=>{
    try {
        const getAllContacts = async ()=>{
            const result = await axios.get("http://localhost:5000/api/auth/contact");
            setMessages(result?.data?.contacts)
        }

        getAllContacts()
    } catch (error) {
        console.log(error.message)
    }
  },[])

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Contact Messages</h2>

      {/* ✅ Table View */}
      <div className="table-responsive mb-4">
        <table className="table table-bordered table-hover text-center">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {messages?.map((m, index) => (
              <tr key={m._id}>
                <td>{index + 1}</td>
                <td>{m.name}</td>
                <td>{m.email}</td>
                <td>{m.phone}</td>
                <td>{m.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Card View (Mobile Responsive) */}
      <div className="row">
        {messages?.map((m) => (
          <div className="col-md-4 mb-3" key={m._id}>
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">{m.name}</h5>
                <p><b>Email:</b> {m.email}</p>
                <p><b>Phone:</b> {m.phone}</p>
                <p><b>Message:</b> {m.message}</p>

                <button className="btn btn-outline-success btn-sm w-100">
                  Mark as Read
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AdminContacts;