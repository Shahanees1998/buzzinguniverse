import React, { useState } from 'react';
import axios from 'axios';

const ProfileVisibilitySettings = () => {
  const [formData, setFormData] = useState({
    name: 'Muhammad987',
    dob: '09-Jan-2000',
    dob_visibility: 'me',
    gender: 'male',
    gender_visibility: 'everyone',
    city: 'Karachi',
    city_visibility: 'everyone',
    country: 'Pakistan',
    country_visibility: 'everyone',
    about: 'My Profile Page',
    about_visibility: 'everyone',
    link1: 'link1url',
    link1_visibility: 'everyone',
    link2: 'link2url',
    link2_visibility: 'everyone',
    group_invite: 'friends'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost/social-network/public/api/edit-profile', formData, {
        headers: {
          Authorization: `Bearer <Your_Token_Here>`,
          Accept: 'application/json'
        }
      });
      console.log('Profile updated successfully:', response.data);
    } catch (error) {
      console.error('There was an error updating the profile!', error);
    }
  };

  return (
    <div className="profile-visibility-settings">
      <h2>Profile Visibility Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} readOnly />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} />
          <select className='Select-end' name="dob_visibility" value={formData.dob_visibility} onChange={handleInputChange}>
            <option value="everyone">Everyone</option>
            <option value="all">All</option>
            <option value="friends">Friends</option>
            <option value="me">Me</option>
          </select>
        </div>

        <div className="form-group">
          <label>Gender</label>
          <input type="text" name="gender" value={formData.gender} onChange={handleInputChange} />
          <select className='Select-end' name="gender_visibility" value={formData.gender_visibility} onChange={handleInputChange}>
            <option value="everyone">Everyone</option>
            <option value="all">All</option>
            <option value="friends">Friends</option>
            <option value="me">Me</option>
          </select>
        </div>

        <div className="form-group">
          <label>City</label>
          <input type="text" name="city" value={formData.city} onChange={handleInputChange} />
          <select className='Select-end' name="city_visibility" value={formData.city_visibility} onChange={handleInputChange}>
            <option value="everyone">Everyone</option>
            <option value="all">All</option>
            <option value="friends">Friends</option>
            <option value="me">Me</option>
          </select>
        </div>

        <div className="form-group">
          <label>Country</label>
          <input type="text" name="country" value={formData.country} onChange={handleInputChange} />
          <select className='Select-end' name="country_visibility" value={formData.country_visibility} onChange={handleInputChange}>
            <option value="everyone">Everyone</option>
            <option value="all">All</option>
            <option value="friends">Friends</option>
            <option value="me">Me</option>
          </select>
        </div>

        <div className="form-group">
          <label>About</label>
          <input type="text" name="about" value={formData.about} onChange={handleInputChange} />
          <select className='Select-end' name="about_visibility" value={formData.about_visibility} onChange={handleInputChange}>
            <option value="everyone">Everyone</option>
            <option value="all">All</option>
            <option value="friends">Friends</option>
            <option value="me">Me</option>
          </select>
        </div>

        <div className="form-group">
          <label>Link 1</label>
          <input type="text" name="link1" value={formData.link1} onChange={handleInputChange} />
          <select className='Select-end' name="link1_visibility" value={formData.link1_visibility} onChange={handleInputChange}>
            <option value="everyone">Everyone</option>
            <option value="all">All</option>
            <option value="friends">Friends</option>
            <option value="me">Me</option>
          </select>
        </div>

        <div className="form-group">
          <label>Link 2</label>
          <input type="text" name="link2" value={formData.link2} onChange={handleInputChange} />
          <select className='Select-end' name="link2_visibility" value={formData.link2_visibility} onChange={handleInputChange}>
            <option value="everyone">Everyone</option>
            <option value="all">All</option>
            <option value="friends">Friends</option>
            <option value="me">Me</option>
          </select>
        </div>

        {/* Group Invite Section */}
        <div className="form-group">
          <label>Group Invite</label>
          <select className='Select-end' name="group_invite" value={formData.group_invite} onChange={handleInputChange}>
            <option value="friends">Friends</option>
            <option value="all">All</option>
          </select>
        </div>

        <button style={{
          backgroundColor: "#0a2972",
          color: "#fff",
          padding: "12px 22px",
          borderRadius: "21px"
        }} type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfileVisibilitySettings;
