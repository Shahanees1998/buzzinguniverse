import React, { useState,useEffect } from 'react';
import Alljobs from "./components/alljobs";
import { useLocation } from 'react-router-dom';
import Submit from "./components/Submit";
import Advsubmit from "./Advsubmit";
// import { Editor } from '@tinymce/tinymce-react';

const Alladverts = () => {
    // const [content, setContent] = useState('');

    // const handleEditorChange = (content) => {
    //     setContent(content);
    // };
    const [activeTab, setActiveTab] = useState('All Adverts');

    const location = useLocation();
    const { state } = location;

    console.log(state);

    useEffect(() => {
        if (state == "job") {
            setActiveTab('All Adverts');
        } else if (state == "Advert Categories") {
            setActiveTab('Advert Categories');
        } else if (state == "Submit Advert") {
            setActiveTab('Submit Advert');
        } else if (state == "manage") {
            setActiveTab('Manage');
        }
    }, []);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className='header-list-sec' style={{justifyContent:"center",width: "90%"}}>
                <p
                    className={activeTab === 'All Adverts' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('All Adverts')}
                >
                    All Adverts
                </p>
                <p
                    className={activeTab === 'Advert Categories' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Advert Categories')}
                >
                    Advert Categories
                </p>
                <p
                    className={activeTab === 'Manage' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Manage')}
                >
                    Manage
                </p>
                <p
                    className={activeTab === 'Submit Advert' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Submit Advert')}
                >
                    Submit Advert
                </p>
                
            </div>
            {/* Conditionally render the content based on the active tab */}
            <div className='tab-content'>
                {activeTab === 'All Adverts' && <div style={{width:"90%"}} className='actity-tabs'>
                    <p style={{textAlign:"center"}}>There are no ads matching your search criteria.</p>
                </div>}
                {activeTab === 'Advert Categories' && <div style={{width:"90%"}} className='actity-tabs'>
                    <p style={{textAlign:"center"}}>
                    Default (0)</p>
                </div>}
                {activeTab === 'Manage' && <div style={{width:"90%"}} className='actity-tabs'>
                    <p style={{textAlign:"center"}}>You do not have any Ads posted yet.</p>
                </div>}
                {activeTab === 'Submit Advert' && <div style={{width:"90%"}} className='actity-tabs'>
                    <Advsubmit />
                </div>}
            </div>
        </>
    );
};

export default Alladverts;
