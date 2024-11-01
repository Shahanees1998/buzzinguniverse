import React, { useState, useEffect } from 'react';
import ProfileForm from "./ProfileForm";
import Changeprofilephoto from "./changeprofilephoto";
import ChangeCoverImage from "./ChangeCoverImage"
function Profilee1({id}) {

    const [activeTab, setActiveTab] = useState('View');
    const [info, setInfo] = useState([]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const fetchProfile = async () => {
        var bearertoken = localStorage.getItem("Logtoken")
        try {
            const response = await fetch('https://social-network-backend.sharpbody-p.com/public/api/get-user-detail/'+id, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + bearertoken, // Add your actual bearer token here
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data.data)
            // fetchFriends(data.data);
            // fetchGroups(data.data);
            setInfo(data.data);
            // setFriendslength(data.data);  // Assuming the API response is in a valid format for groups
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    };
    useEffect(() => {
        fetchProfile()
    }, []);

    return (
        <>
            <div className='header-list-sec'>
                <p
                    className={activeTab === 'View' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('View')}
                >
                    View
                </p>
                {/* <p
                    className={activeTab === 'Edit' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Edit')}
                >
                    Edit
                </p>
                <p
                    className={activeTab === 'Change Profile Photo' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Change Profile Photo')}
                >
                    Change Profile Photo
                </p>
                <p
                    className={activeTab === 'Change Cover Image' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Change Cover Image')}
                >
                    Change Cover Image
                </p> */}
            </div>
            {/* Conditionally render the content based on the active tab */}
            <div className='tab-content'>
                {activeTab === 'View' && <div className='actity-tabs'>
                    <p className='view-h2'>View Profile</p>
                    <p className='view-h2'>Base</p>

                    <div className='viewe-info'>
                        <p>Name</p>
                        <p>{info?.name}</p>
                    </div>
                    <div className='viewe-info'>
                        <p>Username</p>
                        <p>{info?.username}</p>
                    </div>
                    <div className='viewe-info'>
                        <p>Email</p>
                        <p>{info?.email}</p>
                    </div>
                </div>}
                {/* {activeTab === 'Edit' && <div className='actity-tabs'>
                    <ProfileForm />
                </div>}
                {activeTab === 'Change Profile Photo' && <div className='actity-tabs'>
                    <Changeprofilephoto />
                </div>}
                {activeTab === 'Change Cover Image' && <div className='actity-tabs'>
                    <ChangeCoverImage />
                </div>} */}
            </div>
        </>
    );
}

export default Profilee1;

