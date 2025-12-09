import React, { useState } from "react";
import "../App.css"

const Admin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <h2>📊 Welcome Admin Dashboard</h2>;
      case "customers":
        return <h2>👥 Customers List</h2>;
      case "bookings":
        return <h2>📅 All Bookings</h2>;
      case "services":
        return <h2>💈 Manage Services</h2>;
      case "settings":
        return <h2>⚙️ Settings Section</h2>;
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
            className={activeTab === "bookings" ? "active" : ""}
            onClick={() => setActiveTab("bookings")}
          >
            Bookings
          </li>
          <li
            className={activeTab === "services" ? "active" : ""}
            onClick={() => setActiveTab("services")}
          >
            Services
          </li>
          <li
            className={activeTab === "settings" ? "active" : ""}
            onClick={() => setActiveTab("settings")}
          >
            Settings
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
          <h1>Admin Panel</h1>
        </header>
        <div className="content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Admin;