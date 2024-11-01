import React, { useState } from 'react';

function Adverts() {

    const [activeTab, setActiveTab] = useState('Manage Ads');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className='header-list-sec'>
                <p
                    className={activeTab === 'Manage Ads' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Manage Ads')}
                >
                    Manage Ads
                </p>
            </div>
            {/* Conditionally render the content based on the active tab */}
            <div className='tab-content'>
                {activeTab === 'Manage Ads' && <div className='actity-tabs'>
                    <p className='itleic-text'>You do not have any Ads posted yet.</p>
                </div>}
            </div>
        </>
    );
}

export default Adverts;

