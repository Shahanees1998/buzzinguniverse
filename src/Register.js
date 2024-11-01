// App.js
import React, { useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  // const notify = () => toast("Wow so easy!");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    blueKey: '',
  });

  const [open, setOpen] = React.useState(false);

  const [passwordStrength, setPasswordStrength] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const generateBlueKey = () => {
    const newKey = Math.random().toString(36).slice(-12);
    setFormData({
      ...formData,
      blueKey: newKey,
    });
    setPasswordStrength('Strong'); // Optional: Add strength validation
  };

  const handleNavigateTo = (data) => {
    navigate(data);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('username', formData.username);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('blue_key', formData.blueKey);

    try {
      const response = await fetch('https://social-network-backend.sharpbody-p.com/public/api/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formDataToSubmit, // Sending as form-data
      });

      const data = await response.json();

      if (response.ok) {
        console.log('User registered successfully:', data);
        toast.success(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        const timeout = setTimeout(() => {
          handleNavigateTo("/")
        }, 1500); 
        // Handle success, e.g., show a success message or redirect
      } else {
        console.log('Registration failed:', data);
        toast.error(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // Handle errors, e.g., show an error message
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };



  return (
    <>
      <div className="container">
        <h1>Create an Account</h1>

        <div className="no-members-container">
          <div className="no-members-message">
            <span className="no-members-icon">🔍</span> {/* Replace with an appropriate icon */}
            <span>
              Registering is easy. Fill in the fields below, and we’ll create a new account for you.
            </span>
          </div>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <small>This field may be seen by: Everyone</small>
            </div>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group blue-key-group">
              <button className="blueKey" type="button" onClick={generateBlueKey}>
                Generate blue key
              </button>

              <label htmlFor="blueKey">Enter or generate a blue key</label>
              <input
                type="text"
                id="blueKey"
                name="blueKey"
                placeholder="Blue Key"
                value={formData.blueKey}
                onChange={handleInputChange}
                required
              />

              {formData.blueKey && <small>{passwordStrength}</small>}
            </div>

            <button className="submit-btn" type="submit">
              Complete Sign Up
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Register;
