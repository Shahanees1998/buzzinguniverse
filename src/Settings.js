import React, { useState } from 'react';
import EmailPasswordForm from "./components/EmailPasswordForm";
import EmailNotifications from "./components/EmailNotifications";
import ProfileVisibilitySettings from "./components/ProfileVisibilitySettings";
import DefaultPrivacy from "./components/DefaultPrivacy";
import ProfilegroupSetting from "./components/profilegroupinvite";
function Settings() {

    const [activeTab, setActiveTab] = useState('General');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className='header-list-sec'>
                <p
                    className={activeTab === 'General' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('General')}
                >
                    General
                </p>
                {/* <p
                    className={activeTab === 'Email' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Email')}
                >
                    Email
                </p> */}
                <p
                    className={activeTab === 'Profile Visibility' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Profile Visibility')}
                >
                    Profile Visibility
                </p>
                <p
                    className={activeTab === 'Group Invites' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Group Invites')}
                >
                    Group Invites
                </p>
                {/* <p
                    className={activeTab === 'Privacy' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Privacy')}
                >
                    Privacy
                </p> */}
            </div>
            {/* Conditionally render the content based on the active tab */}
            <div className='tab-content'>
                {activeTab === 'General' && <div className='actity-tabs'>
                    <EmailPasswordForm />
                </div>}
                {/* {activeTab === 'Email' && <div className='actity-tabs'>
                    <EmailNotifications />
                </div>} */}
                {activeTab === 'Profile Visibility' && <div className='actity-tabs'>
                    <ProfileVisibilitySettings />
                </div>}
                {activeTab === 'Group Invites' && <div className='actity-tabs'>
                    <h2>Group Invites</h2>
                    <ProfilegroupSetting />
                </div>}
                {/* {activeTab === 'Privacy' && <div className='actity-tabs'>
                    <DefaultPrivacy />
                </div>} */}
            </div>
        </>
    );
}

export default Settings;

