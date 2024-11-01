import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function Sendsms() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [subject, setSubject] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch all users for the dropdown when the component mounts
    const fetchUsers = async () => {
      var bearertoken = localStorage.getItem("Logtoken")
      try {
        const response = await fetch('https://social-network-backend.sharpbody-p.com/public/api/get-all-users', {
          headers: {
            Authorization: `Bearer ` + bearertoken, // Replace with actual bearer token
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setUsers(data.data); // Assuming the data is an array of user objects
        } else {
          console.error('Failed to fetch users');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedUserId) {
      setError('Please select a user.');
      return;
    }

    const formData = new FormData();
    var bearertoken = localStorage.getItem("Logtoken")
    formData.append('reciever_id', selectedUserId); // Send the selected user ID
    formData.append('message', subject);
    formData.append('attachment', file || ''); // Add the file if available, or an empty string

    try {
      const response = await fetch('https://social-network-backend.sharpbody-p.com/public/api/chat', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ` + bearertoken, // Replace with actual bearer token
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        // alert('Message sent successfully!');
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
        console.log(data);
        setFile(null);
        setSelectedUserId('');
        setSubject('');
      } else {
        const errorData = await response.json();
        console.error('Failed to send message:', errorData);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        {/* <label htmlFor="users">Select User:</label> */}
        <select
          id="users"
          className='select-selected'
          value={selectedUserId}
          onChange={(e) => setSelectedUserId(e.target.value)}
          required
        >
          <option value="" disabled>Select user</option>

          {users && (
            users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))
          )}
        </select>

        <input
          type="text"
          placeholder="Message Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />

        <input type="file" onChange={handleFileChange} />

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button
          type="submit"
          style={{
            color: 'rgb(255, 255, 255)',
            backgroundColor: 'rgb(10, 41, 114)',
            width: '55%',
            display: 'block',
            margin: '0 auto',
            marginTop: '25px',
          }}
        >
          Send
        </button>

      </form>
      <ToastContainer />
    </>
  );
}

export default Sendsms;
