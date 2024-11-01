import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginSection() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [blueKey, setBlueKey] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    setError("");
    e.preventDefault();

    try {
      const response = await fetch('https://social-network-backend.sharpbody-p.com/public/api/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: new FormData(e.target), // formdata from the form
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        
        // Store user data
        localStorage.setItem("username", JSON.stringify(data));
        localStorage.setItem("Logtoken", data.token);

        if (remember) {
          // If "Remember Me" is checked, persist login with localStorage
          localStorage.setItem("login", true);
        } else {
          // If "Remember Me" is not checked, store login in sessionStorage
          sessionStorage.setItem("login", true);
        }

        // Navigate to activity page
        navigate('/activity');
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleNavigateTo = (path) => {
    navigate(path);
  };

  return (
    <>
      <section className="login-section">
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="blue_key"
            placeholder="Blue Key"
            value={blueKey}
            onChange={(e) => setBlueKey(e.target.value)}
            required
          />
          <p style={{ color: "red", fontSize: "11px", paddingLeft: "10px" }}>{error}</p>
          <div className="login-options">
            <label>
              <Checkbox
                checked={remember}
                onChange={() => setRemember(!remember)}
                sx={{
                  color: "#c0c0c0",
                  '&.Mui-checked': {
                    color: "#c0c0c0",
                  },
                }}
              /> Remember
            </label>
            <p onClick={() => handleNavigateTo('forgot-password')}>Lost blue key?</p>
          </div>
          <button type="submit">Login</button>
          <p onClick={() => handleNavigateTo('register')} className="create-an-account">Create an account</p>
        </form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
      </section>
    </>
  );
}

export default LoginSection;
