import React, { useState } from 'react';
import Reqts from "./components/Reqts";
import SendReqt from "./components/SendReqt";
import AllFriendsgroup from "./components/AllFriendsgroup";
function Friendsgroup({datainfo}) {

    const [activeTab, setActiveTab] = useState('Friendships');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className='header-list-sec'>
                <p
                    className={activeTab === 'Friendships' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Friendships')}
                >
                    Friendships
                </p>
                {/* <p
                    className={activeTab === 'Requests' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Requests')}
                >
                    Requests
                </p>
                <p
                    className={activeTab === 'SendRequests' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('SendRequests')}
                >
                    Send Request
                </p> */}
            </div>

            {/* Conditionally render the content based on the active tab */}
            <div className='tab-content'>
                {activeTab === 'Friendships' && <div className='actity-tabs'>
                    <AllFriendsgroup id={datainfo}/>
                </div>}

                {/* {activeTab === 'Requests' && <div className='actity-tabs'> 
                     <Reqts />
                </div>}
                {activeTab === 'SendRequests' && <div className='actity-tabs'>
                     <SendReqt />   
                </div>} */}
            </div>
        </>
    );
}

export default Friendsgroup;

