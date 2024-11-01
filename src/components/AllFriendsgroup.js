import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Axios for API requests
import { ToastContainer, toast } from 'react-toastify';
import NoMembersFound from './NoMembersFound';
function AllFriendsgroup({id}) {
    console.log(id)
    const [activeTab, setActiveTab] = useState('Friendships');
    const [users, setUsers] = useState([]); // State to store users
    const [loading, setLoading] = useState(true); // State to show loading indicatorsetGetalldata
    const [getalldata, setGetalldata] = useState([]); // State to show loading indicatorsetGetalldata

   
    // if (loading) {
    //     return <p>Loading...</p>;
    // }

    return (
        <>
            {users.length > 0 && <p className='Reqt-title'>My Friends</p>}
            <div className="user-list">
                {id?.members?.map(user => (
                    <div key={user.id} className="user-item">
                        <div className='userList'>
                            {user?.member?.profile_image ? <img src={user?.member?.profile_image} alt={user.name} className="user-image" /> :
                                <img src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png" alt="plz wait" className="user-image" />}
                            <p>{user?.member?.name}</p>
                        </div>
                        {/* <button onClick={() => sendFriendRequest("declined",user.id)}>
                            UnFriend
                        </button> */}
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
            {id.length < 1 && <NoMembersFound />}
        </>
    );
}

export default AllFriendsgroup;
