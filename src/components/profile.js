import React, { useState, useEffect } from 'react';
import ProfileForm from "./ProfileForm";
import Changeprofilephoto from "./changeprofilephoto";
import ChangeCoverImage from "./ChangeCoverImage"
function Profile() {

    const [activeTab, setActiveTab] = useState('View');
    const [info, setInfo] = useState([]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    useEffect(() => {
       var localinfo = JSON.parse(localStorage.getItem("username") || "");
       console.log(localinfo);
       setInfo(localinfo)
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
                <p
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
                </p>
            </div>
            {/* Conditionally render the content based on the active tab */}
            <div className='tab-content'>
                {activeTab === 'View' && <div className='actity-tabs'>
                    <p className='view-h2'>View Profile</p>
                    <p className='view-h2'>Base</p>

                    <div className='viewe-info'>
                        <p>Name</p>
                        <p>{info?.data?.name}</p>
                    </div>
                    <div className='viewe-info'>
                        <p>Username</p>
                        <p>{info?.data?.username}</p>
                    </div>
                    <div className='viewe-info'>
                        <p>Email</p>
                        <p>{info?.data?.email}</p>
                    </div>
                </div>}
                {activeTab === 'Edit' && <div className='actity-tabs'>
                    <ProfileForm />
                </div>}
                {activeTab === 'Change Profile Photo' && <div className='actity-tabs'>
                    <Changeprofilephoto />
                </div>}
                {activeTab === 'Change Cover Image' && <div className='actity-tabs'>
                    <ChangeCoverImage />
                </div>}
            </div>
        </>
    );
}

export default Profile;

