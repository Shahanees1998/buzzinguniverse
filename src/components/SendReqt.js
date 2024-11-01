import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Axios for API requests
import { ToastContainer, toast } from 'react-toastify';
import NoMembersFound from './NoMembersFound';
function SendReqt() {
    const [activeTab, setActiveTab] = useState('Friendships');
    const [users, setUsers] = useState([]); // State to store users
    const [loading, setLoading] = useState(true); // State to show loading indicator

    useEffect(() => {
        // Fetch users when the component is mounted
        const fetchUsers = async () => {
            var bearertoken = localStorage.getItem("Logtoken")
            try {
                const response = await axios.get('https://social-network-backend.sharpbody-p.com/public/api/get-all-users', {
                    headers: {
                        Authorization: 'Bearer ' + bearertoken, // Replace with your token
                    }
                });
                console.log(response)
                setUsers(response.data.data); // Assuming the users are in response.data.users
                setLoading(false);
            } catch (error) {
                console.error('Error fetching users:', error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const sendFriendRequest = async (userId) => {
        const formData = new FormData();
        formData.append('reciever_id', userId);
        var bearertoken = localStorage.getItem("Logtoken")
        try {
            const response = await axios.post(`https://social-network-backend.sharpbody-p.com/public/api/send-friend-request`, formData, {
                headers: {
                    Authorization: 'Bearer ' + bearertoken, // Replace with your token
                }
            });
            console.log(response);
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
        } catch (error) {
            console.error('Error sending friend request:', error);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <p className='Reqt-title'>All Users</p>
            <div className="user-list">
                {users.map(user => (
                    <div key={user.id} className="user-item">
                        <div className='userList'>
                            {user?.user_information?.profile_image ? <img src={user?.user_information?.profile_image} alt={user.name} className="user-image" /> :
                                <img src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png" alt="plz wait" className="user-image" />}
                            <p>{user.name}</p>
                        </div>
                        <button onClick={() => sendFriendRequest(user.id)}>
                            Send Request
                        </button>
                    </div>
                ))}
            </div>
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
            {users.length < 1 && <NoMembersFound />}
        </>
    );
}

export default SendReqt;
