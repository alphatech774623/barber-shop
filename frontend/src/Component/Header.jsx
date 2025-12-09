import React, { useState } from "react";
import "../App.css"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import Account from "./Account";
const Header = () =>{
    const user = useSelector((state)=>state.user)
    console.log(user);
    const isUser = Boolean(user?.userInfo?.name)
    console.log(isUser)
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccount = ()=>{
      setIsOpen(!isOpen)
    }

    return(
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src="/barberlogo.png" alt="Logo" />
      </div>

      {/* Navbar Links (Desktop) */}
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About us</Link>

          {!isUser ?(<>
        <Link to="/booking"><button className="register">Book now</button></Link>
            <Link to="/register"><button className="register">Register</button></Link>
          <Link to="/login"><button className="login">Login</button></Link>
          </>) : (<>
            <div className="account-container">
              <span onClick={toggleAccount}><FaUserCircle size={20}/></span>
              {isOpen && <Account/>}
            </div>
          </>)}
       
        
         
          

      </nav>

    
    </header>
    )
    
}
export default Header






