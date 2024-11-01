import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';


const ProfileForm = () => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');  // Changed to a single text input field
  const [gender, setGender] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');  // Changed to a single text input field
  const [about, setAbout] = useState('');
  const [links, setLinks] = useState(['', '']);

  const handleLinkChange = (index, value) => {
    const newLinks = [...links];
    newLinks[index] = value;
    setLinks(newLinks);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    var bearertoken = localStorage.getItem("Logtoken")
    console.log(bearertoken)

    const formData = new FormData();
    formData.append('dob', dateOfBirth);
    formData.append('dob_visibility', 'everyone');
    formData.append('gender', gender);
    formData.append('gender_visibility', 'everyone');
    formData.append('city', city);
    formData.append('city_visibility', 'everyone');
    formData.append('country', country);
    formData.append('country_visibility', 'everyone');
    formData.append('about', about);
    formData.append('about_visibility', 'everyone');
    formData.append('link1', links[0]);
    formData.append('link1_visibility', 'everyone');
    formData.append('link2', links[1]);
    formData.append('link2_visibility', 'everyone');
    formData.append('name', name);

    try {
      const response = await fetch('https://social-network-backend.sharpbody-p.com/public/api/edit-profile', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer '+bearertoken, // Replace 'Token' with your actual token
          Accept: 'application/json',
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const data = await response.json();
      console.log('Profile updated successfully', data);
      setName("")
      setDateOfBirth("")
      setGender("")
      setCity("")
      setCountry("")
      setAbout("")
      setLinks(['', '']);
      toast.success("Profile Update Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      localStorage.setItem("userinfo",JSON.stringify(data))
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };

  useEffect(() => {
   
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p className='view-h2'>Edit Profile</p>
        <p className='view-h2'>Editing "Base" Profile Group</p>
        <div style={{ maxWidth: '400px', margin: '0 auto', fontFamily: 'Arial, sans-serif', marginTop: "50px" }}>
          {/* Name */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontWeight: 'bold' }}>Name</label>
            <input
              type="text"
              value={name}
              className='profile-input-in'
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              style={inputStyle}
            />
            {/* <div style={hintStyle}>This field may be seen by: Everyone</div> */}
          </div>

          {/* Date of Birth */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontWeight: 'bold' }}>Date of Birth</label>
            <input
              type="text"
              value={dateOfBirth}
              className='profile-input-in'
              onChange={(e) => setDateOfBirth(e.target.value)}
              placeholder="DD-MM-YYYY"  // You can change the format as per your requirement
              style={inputStyle}
            />
            {/* <div style={hintStyle}>This field may be seen by: Everyone</div> */}
          </div>

          {/* Gender */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontWeight: 'bold' }}>Gender</label>
            <div style={{ marginTop: '5px' }}>
              <label style={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className='profile-input-in'
                  checked={gender === 'Male'}
                  onChange={(e) => setGender(e.target.value)}
                  style={{ marginRight: '8px' }}
                />
                Male
              </label>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className='profile-input-in'
                  checked={gender === 'Female'}
                  onChange={(e) => setGender(e.target.value)}
                  style={{ marginRight: '8px' }}
                />
                Female
              </label>
            </div>
            {/* <div style={hintStyle}>This field may be seen by: Everyone</div> */}
          </div>
        </div>

        <div style={{ maxWidth: '400px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
          {/* City */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontWeight: 'bold' }}>City</label>
            <input
              type="text"
              value={city}
              className='profile-input-in'
              onChange={(e) => setCity(e.target.value)}
              style={inputStyle}
            />
            {/* <div style={hintStyle}>This field may be seen by: Everyone</div> */}
          </div>

          {/* Country */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontWeight: 'bold' }}>Country</label>
            <input
              type="text"
              value={country}
              className='profile-input-in'
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
              style={inputStyle}
            />
            {/* <div style={hintStyle}>This field may be seen by: Everyone</div> */}
          </div>

          {/* About */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontWeight: 'bold' }}>About</label>
            <textarea
              value={about}
              className='profile-input-in'
              onChange={(e) => setAbout(e.target.value)}
              rows={8}
              style={textareaStyle}
            />
            <div style={hintStyle}>300 more words</div>
          </div>

          {/* Links */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontWeight: 'bold' }}>Links</label>
            {links.map((link, index) => (
              <input
                key={index}
                type="text"
                value={link}
                className='profile-input-in'
                onChange={(e) => handleLinkChange(index, e.target.value)}
                style={inputStyle}
              />
            ))}
            {/* {links.map(() => (
              <div style={hintStyle}>This field may be seen by: Everyone</div>
            ))} */}
          </div>

          {/* Save Changes Button */}
          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              style={buttonStyle}
            >
              Save Changes
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  marginTop: '5px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxSizing: 'border-box',
};

const textareaStyle = {
  width: '100%',
  height: '5.5rem',
  padding: '8px',
  marginTop: '5px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxSizing: 'border-box',
  resize: 'none',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#ccc',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
  fontSize: '16px',
};

const hintStyle = {
  fontSize: '12px',
  color: '#777',
  marginTop: '3px',
};

export default ProfileForm;
