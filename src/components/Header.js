import React, { useEffect, useState } from 'react';
import LoginSection from './LoginSection';
import logo from "../assets/09890-300x300.png";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [username, setUsername] = useState([]);
  const [login, setLogin] = useState(false);

  const handleNavigateTo = (data) => {
    navigate(data);
  };

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUsername(JSON.parse(localStorage.getItem("username")));
      console.log(JSON.parse(localStorage.getItem("username")));
      setLogin(true);
    }
  }, []);
  return (
    <header className="header">
      <div>
        <img style={{ width: "300px", height: "300px" }} src={logo} alt="Logo" className="logo" />
      </div>
      <div className='login-box'>
        <h1>Welcome, <span>{username?.data?.name ? username?.data?.name : "everyone!"}</span></h1>

        {!login ? <><div className='login-section-div'>
          <LoginSection />
        </div>
          <div className="login-footer">
            <p>My Lobby</p>
            <p onClick={() => { handleNavigateTo("terms-of-service") }}>Terms of Service</p>
            <p onClick={() => { handleNavigateTo("privacy-policy") }}>Privacy Policy</p>
            <p onClick={() => { handleNavigateTo("about-us") }}>About Us</p>
          </div></>:<><div className='login-section-div'>
          {/* <LoginSection /> */}
        </div>
          <div className="login-footer">
            <p onClick={() => { handleNavigateTo("activity") }}>Activity</p>
            <p onClick={() => { handleNavigateTo("terms-of-service") }}>Terms of Service</p>
            <p onClick={() => { handleNavigateTo("privacy-policy") }}>Privacy Policy</p>
            <p onClick={() => { handleNavigateTo("about-us") }}>About Us</p>
          </div></>}
      </div>
    </header>
  );
}

export default Header;
