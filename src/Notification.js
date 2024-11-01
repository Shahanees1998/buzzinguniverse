import React, { useState } from 'react';
function Notification() {

    const [activeTab, setActiveTab] = useState('Unread');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className='header-list-sec'>
                <p
                    className={activeTab === 'Unread' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Unread')}
                >
                    Unread
                </p>
                <p
                    className={activeTab === 'Read' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Read')}
                >
                    Read
                </p>
            </div>
            {/* Conditionally render the content based on the active tab */}
            <div className='tab-content'>
                {activeTab === 'Unread' && <div className='actity-tabs'>
                    <div className="no-members-container">
                        <div className="no-members-message">
                            <span className="no-members-icon">🔍</span> {/* Replace with an appropriate icon */}
                            <span>

                                You have no unread notifications.</span>
                        </div>
                    </div>
                </div>}
                {activeTab === 'Read' && <div className='actity-tabs'>
                    <div className="no-members-container">
                        <div className="no-members-message">
                            <span className="no-members-icon">🔍</span> {/* Replace with an appropriate icon */}
                            <span>

                                You have no unread notifications.
                            </span>
                        </div>
                    </div>
                </div>}
            </div>
        </>
    );
}

export default Notification;

