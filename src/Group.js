import React, { useState } from 'react';
import NoMembersFound from './components/NoMembersFound';
import Addgroup from "./components/Addgroup";
import MyGroups from "./components/MyGroups";
function Group() {

    const [activeTab, setActiveTab] = useState('MyGroups');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className='header-list-sec'>
                {/* <p
                    className={activeTab === 'Memberships' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Memberships')}
                >
                    Memberships
                </p>
                <p
                    className={activeTab === 'Invitations' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Invitations')}
                >
                    Invitations
                </p> */}
                <p
                    className={activeTab === 'MyGroups' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('MyGroups')}
                >
                    Memberships
                </p>
                {/* <p
                    className={activeTab === 'AddGroup' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('AddGroup')}
                >
                    Create Group
                </p> */}
            </div>
            {/* Conditionally render the content based on the active tab */}
            <div className='tab-content'>
                {activeTab === 'Memberships' && <div className='actity-tabs'>
                    <NoMembersFound />
                </div>}
                {activeTab === 'Invitations' && <div className='actity-tabs'>
                     <NoMembersFound />   
                </div>}
                {activeTab === 'MyGroups' && <div className='actity-tabs'>
                     <MyGroups /> 
                </div>}
                {activeTab === 'AddGroup' && <div className='actity-tabs'>
                     <Addgroup /> 
                </div>}
            </div>
        </>
    );
}

export default Group;

