import React, { useState } from 'react';
// import './BlueKeyForm.css'; // You can style this with CSS
import { useNavigate } from 'react-router-dom';

const BlueKeyForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const [error1, setError1] = useState('');
  const [token, setToken] = useState('');
  const [bluekey, setBluekey] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
    setIsButtonDisabled(e.target.value === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    console.log('Blue key link sent to:', email);
  };

  const handleForgot = async () => {
    const requestData = {
      email: email,
    };

    try {
      const response = await fetch('https://social-network-backend.sharpbody-p.com/public/api/forgot-password', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json', // Add this line
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setShow(true);
      } else {
        const data = await response.json();
        console.log(data);
        setError(data.message)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleReset = async () => {
    const requestData = {
      token: token,
      blue_key: bluekey
    };

    try {
      const response = await fetch('https://social-network-backend.sharpbody-p.com/public/api/reset-password', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json', // Add this line
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        handleNavigateTo();
      } else {
        const data = await response.json();
        console.log(data);
        setError1(data.message)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleNavigateTo = () => {
    navigate("/");
  };

  return (
    <>
      {!show ? <div className='blue-key-body'>
        <p>Lost your blue key? Please enter your registered email address. You will receive a link to create a new blue key via email.</p>
        <p>Username or email</p>
        <input type='text' onChange={handleChange} />
        <p style={{
          color: "red",
          fontSize: "12px",
          paddingLeft: "18px"
        }}>{error}</p>
        <button onClick={() => { handleForgot() }} class="bluekey-btn">Get a new blue key</button>
      </div> :
        <div style={{
          width: "50%",
          textAlign: "center",
          display: "block",
          margin: "0 auto",
          marginTop: "5%"
        }}>
          <p>Your blue key reset email has been sent successfully!</p>
          <p>Your blue key reset email has been sent to the email address on file for your account, but it may take a few minutes to arrive. Please check your inbox and spam folder. If you don't receive the email within 10 minutes, please contact our support team.</p>
          <div className='blue-key-body' style={{width:"50%"}}>
            <p style={{textAlign:"left",paddingLeft:"10px"}}>Token</p>
            <input type='number' onChange={(e)=>{setToken(e.target.value)}} />
            <p style={{textAlign:"left",paddingLeft:"10px"}}>Blue Key</p>
            <input type='text' onChange={(e)=>{setBluekey(e.target.value)}} />
            <p style={{
              color: "red",
              fontSize: "12px",
              paddingLeft: "18px"
            }}>{error1}</p>
            <button onClick={() => { handleReset() }} style={{width:"50%"}} class="bluekey-btn">Reset</button>
          </div>
        </div>}
    </>
  );
};

export default BlueKeyForm;
