import React, { useState } from "react";
import "../App.css"
import AdminDashboard from "./AdminDashboard";
import AdminCustomers from "./AdminCustomers";
import AdminContacts from "./AdminContacts";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { setUserInfo } from "../redux/slices/counterSlice";
const Admin = () => {
  const user = useSelector(state=> state.user)
  const dispatch = useDispatch();
  const handleLogout = async ()=>{
    try {
            const result = await axios.post("http://localhost:5000/api/auth/logout", {}, {withCredentials : true})
            dispatch(setUserInfo(null));
            alert(result?.data?.msg)
        } catch (error) {
            console.log(error.message)
        }
  }
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <AdminDashboard/>;
      case "customers":
        return <AdminCustomers/>;
      case "contacts":
        return <AdminContacts/>;
      default:
        return <h2>📊 Welcome Admin Dashboard</h2>;
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <h2 className="logo">Barber Admin</h2>
        <ul>
          <li
            className={activeTab === "dashboard" ? "active" : ""}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </li>
          <li
            className={activeTab === "customers" ? "active" : ""}
            onClick={() => setActiveTab("customers")}
          >
            Customers
          </li>
          <li
            className={activeTab === "contacts" ? "active" : ""}
            onClick={() => setActiveTab("contacts")}
          >
            Contacts
          </li>
          <li
            className="text-danger"
            onClick={handleLogout}
          >
            Logout
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header>
          <button
            className="menu-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
          <h1>Welcome, {user?.userInfo?.name || "Ashu Sharma"}</h1>
        </header>
        <div className="content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Admin;