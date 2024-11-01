import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';

function Addgroup() {
  const [groupData, setGroupData] = useState({
    name: '',
    description: '',
    image: null,
    cover_image: null,
    privacy: 'public',
    invitation: 'admin',
    album: "admin",
    forum: 0,
    members: [] // This will hold selected user ids
  });

  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]); // To store fetched users
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch all users when the component mounts
    const fetchUsers = async () => {
      setIsLoading(true);
      const token = localStorage.getItem("Logtoken");
      try {
        const response = await axios.get(
          'https://social-network-backend.sharpbody-p.com/public/api/get-all-users',
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        // Map the fetched users to format suitable for react-select
        const userOptions = response.data.data.map(user => ({
          value: user.id,
          label: user.email
        }));
        setUsers(userOptions);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setGroupData((prevData) => ({
        ...prevData,
        [name]: files[0]
      }));
    } else {
      setGroupData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSelectChange = (selectedOptions) => {
    const selectedUserIds = selectedOptions ? selectedOptions.map(option => option.value) : [];
    setGroupData((prevData) => ({
      ...prevData,
      members: selectedUserIds
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bearertoken = localStorage.getItem("Logtoken");
    const formData = new FormData();

    formData.append('name', groupData.name);
    formData.append('description', groupData.description);
    formData.append('image', groupData.image);
    formData.append('cover_image', groupData.cover_image);
    formData.append('privacy', groupData.privacy);
    formData.append('invitation', groupData.invitation);
    formData.append('album', groupData.album);
    formData.append('forum', groupData.forum);

    // Append selected members' ids
    groupData.members.forEach((memberId, index) => {
      formData.append(`members[${index}]`, memberId);
    });

    try {
      const response = await axios.post(
        'https://social-network-backend.sharpbody-p.com/public/api/create-group',
        formData,
        {
          headers: {
            Authorization: `Bearer ` + bearertoken,
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      // setMessage('Group created successfully!');
      console.log(response)
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
      setGroupData({
        name: '',
        description: '',
        image: null,
        cover_image: null,
        privacy: 'public',
        invitation: 'open',
        album: true,
        forum: 0,
        members: [] // This will hold selected user ids
      })
    } catch (error) {
      // setMessage('Error creating group.');
      console.log(error)
      toast.error("Error creating group", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="custom-group-form-container">
      <form onSubmit={handleSubmit} className="custom-group-form">
        <div className="custom-group-form-group">
          <label htmlFor="name" className="custom-group-form-label">Group Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={groupData.name}
            onChange={handleChange}
            placeholder="Enter group name"
            className="custom-group-form-input"
          />
        </div>

        <div className="custom-group-form-group">
          <label htmlFor="description" className="custom-group-form-label">Description</label>
          <textarea
            id="description"
            name="description"
            value={groupData.description}
            onChange={handleChange}
            placeholder="Enter group description"
            className="custom-group-form-textarea"
          />
        </div>

        <div className="custom-group-form-group">
          <label htmlFor="image" className="custom-group-form-label">Group Image</label>
          <input style={{
            border: "none",
            marginTop: "15px"
          }}
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            className="custom-group-form-input"
          />
        </div>

        <div className="custom-group-form-group">
          <label htmlFor="cover_image" className="custom-group-form-label">Cover Image</label>
          <input style={{
            border: "none",
            marginTop: "15px"
          }}
            type="file"
            id="cover_image"
            name="cover_image"
            onChange={handleChange}
            className="custom-group-form-input"
          />
        </div>

        <div className="custom-group-form-group">
          <label htmlFor="privacy" className="custom-group-form-label">Privacy</label>
          <select
            id="privacy"
            name="privacy"
            value={groupData.privacy}
            onChange={handleChange}
            className="custom-group-form-select"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
            <option value="hidden">hidden</option>
          </select>
        </div>

        <div className="custom-group-form-group">
          <label htmlFor="invitation" className="custom-group-form-label">Invitation</label>
          <select
            id="invitation"
            name="invitation"
            value={groupData.invitation}
            onChange={handleChange}
            className="custom-group-form-select"
          >
            {/* <option value="all">All</option> */}
            <option value="admin">Admin</option>
            <option value="admin & mod">Admin & Mod</option>
          </select>
        </div>

        {/* <div className="custom-group-form-group">
          <label htmlFor="album" className="custom-group-form-label">Enable Album</label>
          <input
            type="checkbox"
            id="album"
            name="album"
            checked={groupData.album}
            onChange={(e) => setGroupData({ ...groupData, album: e.target.checked })}
            className="custom-group-form-checkbox"
          />
        </div> */}

        <div className="custom-group-form-group">
          <label htmlFor="invitation" className="custom-group-form-label">Album</label>
          <select
            id="album"
            name="album"
            value={groupData.album}
            onChange={handleChange}
            className="custom-group-form-select"
          >
            {/* <option value="all">All</option> */}
            <option value="admin">Admin</option>
            <option value="admin & mod">Admin & Mod</option>
          </select>
        </div>

        <div className="custom-group-form-group">
          <label htmlFor="forum" className="custom-group-form-label">Enable Forum</label>
          <input
            type="checkbox"
            id="forum"
            name="forum"
            checked={groupData.forum}
            onChange={(e) => setGroupData({ ...groupData, forum: (e.target.checked ? 1 : 0) })}
            className="custom-group-form-checkbox"
          />
        </div>

        {/* Multi-Select Members Field */}
        <div className="custom-group-form-group">
          <label htmlFor="members" className="custom-group-form-label">Members</label>
          <Select styles={{ border: "none" }}
            id="members"
            name="members"
            options={users}
            isMulti
            isLoading={isLoading}
            onChange={handleSelectChange}
            placeholder="Search and select members"
            className="custom-group-form-select"
          />
        </div>

        <button type="submit" className="custom-group-form-submit">Create Group</button>
      </form>

      {message && <p className="custom-group-form-message">{message}</p>}
      <ToastContainer />
    </div>
  );
}

export default Addgroup;
