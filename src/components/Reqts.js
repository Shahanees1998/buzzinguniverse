import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Axios for API requests
import { ToastContainer, toast } from 'react-toastify';
import NoMembersFound from './NoMembersFound';
function Reqts() {
    const [activeTab, setActiveTab] = useState('Friendships');
    const [users, setUsers] = useState([]); // State to store users
    const [loading, setLoading] = useState(true); // State to show loading indicator


    const fetchUsers = async () => {
        var bearertoken = localStorage.getItem("Logtoken")
        try {
            const response = await axios.get('https://social-network-backend.sharpbody-p.com/public/api/get-my-friend-requests', {
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

    useEffect(() => {
        // Fetch users when the component is mounted
        fetchUsers();
    }, []);

    const sendFriendRequest = async (user, id) => {
        const formData = new FormData();
        formData.append('friendRequestId', id);
        formData.append('status', user);
        var bearertoken = localStorage.getItem("Logtoken")
        try {
            const response = await axios.post(`https://social-network-backend.sharpbody-p.com/public/api/respond-friend-request`, formData, {
                headers: {
                    Authorization: 'Bearer ' + bearertoken, // Replace with your token
                }
            });
            console.log(response);
            fetchUsers()
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
            {/* {users.length > 0 && <p className='Reqt-title'>All Users</p>} */}
            <div className="user-list">
                {users.map(user => (
                    // <div key={user.sender.id} className="user-item">
                    //     <div className='userList'>
                    //         {user?.sender?.user_information?.profile_image ? <img src={user?.sender?.user_information?.profile_image} alt={user.name} className="user-image" /> :
                    //             <img src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png" alt="plz wait" className="user-image" />}
                    //         <p>{user.sender.name}</p>
                    //     </div>
                    //     <div className='userList'>
                    //         <button onClick={() => sendFriendRequest("accepted",user.id)}>
                    //             Accept Request
                    //         </button>
                    //         <button className='user-itembutton1' onClick={() => sendFriendRequest("declined",user.id)}>
                    //             Reject Request
                    //         </button>
                    //     </div>
                    // </div>
                    <div className="card" key={user.sender.id}>
                        <div className="card-image">
                            <div className="image-placeholder" style={{
                                backgroundImage: `url(${user?.sender?.image || 'https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png'})`, backgroundSize: "100% 100%",
                                borderRadius: "50%",
                                width: "95px",
                                height: "85px",
                                display: "block",
                                margin: "0 auto"
                            }}>
                                {/* Placeholder div if image is not available */}

                            </div>
                            {user?.sender?.image && (
                                <img className='Group_img' src={user?.sender?.image} alt={user.sender.name} />
                            )}
                        </div>
                        <div className="card-body">
                            <h3 className="card-title">{user.sender.name}</h3>
                            <p className="card-subtitle">{user.sender.is_online == "1" ? "Active" : "Inactive"}</p>
                            <div className="card-status">
                                <span>{user.sender.email}</span>
                            </div>
                            <button className="view-group-button" onClick={() => sendFriendRequest("accepted", user.id)}>Accept Request</button>
                            <button className="view-group-button" style={{ backgroundColor: "red", color: "white" }} onClick={() => sendFriendRequest("declined", user.id)}> Reject Request</button>
                        </div>
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

export default Reqts;