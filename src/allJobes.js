import React, { useState,useEffect } from 'react';
import Alljobs from "./components/alljobs";
import { useLocation } from 'react-router-dom';
import Submit from "./components/Submit";
import ManageJob from './components/manageJob';
const AllJobes = () => {
    const [activeTab, setActiveTab] = useState('All jobs');

    const location = useLocation();
    const { state } = location;

    console.log(state)
   
    useEffect(() => {
        if (state == "job") {
            setActiveTab('All jobs');
        } else if (state == "Categories") {
            setActiveTab('Categories');
        } else if (state == "manage") {
            setActiveTab('Manage');
        } else if (state == "Submit") {
            setActiveTab('Submit');
        }

      }, []);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className='header-list-sec' style={{justifyContent:"center",width: "90%"}}>
                <p
                    className={activeTab === 'All jobs' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('All jobs')}
                >
                    All jobs
                </p>
                <p
                    className={activeTab === 'Categories' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Categories')}
                >
                    Categories
                </p>
                <p
                    className={activeTab === 'Manage' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Manage')}
                >
                    Manage
                </p>
                <p
                    className={activeTab === 'Submit' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Submit')}
                >
                    Submit
                </p>
            </div>
            {/* Conditionally render the content based on the active tab */}
            <div className='tab-content'>
                {activeTab === 'All jobs' && <div style={{width:"90%"}} className='actity-tabs'>
                    <Alljobs />
                </div>}
                {activeTab === 'Categories' && <div style={{width:"90%"}} className='actity-tabs'>
                    <p style={{textAlign:"center"}}>No job categories found.</p>
                </div>}
                {activeTab === 'Manage' && <div style={{width:"90%"}} className='actity-tabs'>
                    <ManageJob />
                </div>}
                {activeTab === 'Submit' && <div style={{width:"90%"}} className='actity-tabs'>
                    <Submit />
                </div>}
            </div>
        </>
    );
};

export default AllJobes;
