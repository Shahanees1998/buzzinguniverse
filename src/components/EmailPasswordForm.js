import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const EmailPasswordForm = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newcurrentPassword, setNewcurrentPassword] = useState('');
  const [accountEmail, setAccountEmail] = useState('');
  const [generatedPassword, setGeneratedPassword] = useState('');

  const handlePasswordChange = () => {
    // Logic for generating and setting a new password
    const newPassword = 'newGeneratedPassword123'; // Example password generation logic
    setGeneratedPassword(newPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to save changes
  };


  const ChangePass = async () => {
    var bearertoken = localStorage.getItem("Logtoken")
    console.log(bearertoken)

    var userInfo;
    var userdata = localStorage.getItem("username")
    // console.log(userdata)
    if (userdata) {
      userInfo = JSON.parse(userdata)
    }
    console.log(userInfo.data.id);
    const formData = new FormData();
    formData.append('current_blue_key', currentPassword);
    formData.append('blue_key', newcurrentPassword);

    try {
      const response = await axios.post(
        'https://social-network-backend.sharpbody-p.com/public/api/update-password',
        formData,
        {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + bearertoken, // Replace with your actual token
          },
        }
      );

      console.log('fav data:', response.data);
      setNewcurrentPassword("")
      setCurrentPassword("")
      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // refreshPost(true);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  useEffect(() => {
    var localinfo1 = localStorage.getItem("username");
    var localinfo = JSON.parse(localinfo1);
    console.log(localinfo);
    setAccountEmail(localinfo.data.email)
  }, []);


  const handlegenChange = () => {
    // Logic for generating and setting a new password
    const generatePassword = () => {
      const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
      let password = '';
      for (let i = 0; i < 12; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
      }
      return password;
    };
  
    const newPassword = generatePassword();
    // setGeneratedPassword(newPassword);
    setNewcurrentPassword(newPassword); // Automatically set it as the new current password
  };
  
  return (
    <>
      <div style={formStyles}>
        <h2 style={headerStyles}>Email & Password</h2>
        <p>Update your password.</p>

        <div style={inputGroupStyles}>
          <label htmlFor="currentPassword">Current Password (required to change current password)</label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            style={inputStyles}
            required
          />
        </div>

        {/* <div style={linkStyles}>
        <a href="/">Lost your password?</a>
      </div> */}

        <div style={inputGroupStyles}>
          <label htmlFor="accountEmail">Account Email</label>
          <input
            type="email"
            id="accountEmail"
            value={accountEmail}
            disabled
            onChange={(e) => setAccountEmail(e.target.value)}
            style={inputStyles}
            required
          />
        </div>

        <div style={messageBoxStyles}>
          <p>🔐 Click on the "Generate Password" button to change your password.</p>
        </div>

        <button type="button" onClick={handlegenChange} style={buttonStyles}>
          Generate Password
        </button>
        <input
            type="text"
            id="newcurrentPassword"
            value={newcurrentPassword}
            onChange={(e) => setNewcurrentPassword(e.target.value)}
            style={{ ...inputStyles, marginBottom: '30px' }}
            required
          />
        <br />
        <button onClick={()=>{ChangePass()}} style={submitButtonStyles}>
          Save Changes
        </button>
      </div>
      <ToastContainer />
    </>
  );
};

// Styles (inline for simplicity)
const formStyles = {
  // maxWidth: '400px',
  margin: 'auto',
  padding: '20px',
  borderRadius: '8px',
  // boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
};

const headerStyles = {
  marginBottom: '20px',
};

const inputGroupStyles = {
  marginBottom: '20px',
};

const inputStyles = {
  width: '95%',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const linkStyles = {
  marginBottom: '20px',
  textAlign: 'right',
};

const messageBoxStyles = {
  padding: '15px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  backgroundColor: '#f9f9f9',
  marginBottom: '20px',
};

const buttonStyles = {
  padding: '10px 20px',
  borderRadius: '4px',
  border: '2px solid #1a73e8',
  backgroundColor: '#fff',
  color: '#1a73e8',
  cursor: 'pointer',
  marginBottom: '10px',
};

const submitButtonStyles = {
  padding: '10px 20px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#6c757d',
  color: '#fff',
  cursor: 'pointer',
};

export default EmailPasswordForm;
