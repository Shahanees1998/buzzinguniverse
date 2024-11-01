import React, { useState } from 'react';
import NoMembersFound from './components/NoMembersFound';
function Forums() {

    const [activeTab, setActiveTab] = useState('Topics Started');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className='header-list-sec'>
                <p
                    className={activeTab === 'Topics Started' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Topics Started')}
                >
                    Topics Started
                </p>
                <p
                    className={activeTab === 'Replies Created' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Replies Created')}
                >
                    Replies Created
                </p>
                <p
                    className={activeTab === 'Engagements' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Engagements')}
                >
                    Engagements
                </p>
                <p
                    className={activeTab === 'Favorites' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Favorites')}
                >
                    Favorites
                </p>
                <p
                    className={activeTab === 'Subscriptions' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Subscriptions')}
                >
                    Subscriptions
                </p>
            </div>
            {/* Conditionally render the content based on the active tab */}
            <div className='tab-content'>
                {activeTab === 'Topics Started' && <div className='actity-tabs'>
                    <NoMembersFound />
                </div>}
                {activeTab === 'Replies Created' && <div className='actity-tabs'>
                     <NoMembersFound />   
                </div>}
                {activeTab === 'Engagements' && <div className='actity-tabs'>
                     <NoMembersFound />   
                </div>}
                {activeTab === 'Favorites' && <div className='actity-tabs'>
                     <NoMembersFound />   
                </div>}
                {activeTab === 'Subscriptions' && <div className='actity-tabs'>
                     <NoMembersFound />   
                </div>}
            </div>
        </>
    );
}

export default Forums;

