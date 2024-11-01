import React, { useState,useEffect } from 'react';
import NoMembersFound from './components/NoMembersFound';
function Media() {

    const [activeTab, setActiveTab] = useState('All');
    const [allphotos, setAllphotos] = useState([]);
    const [allvideos, setAllVideos] = useState([]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const fetchAllphotos = async (data) => {
        console.log(data)
        try {
            const response = await fetch('https://social-network-backend.sharpbody-p.com/public/api/user/' + data?.data?.id + '/media?type=images', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + data?.token, // Add your actual bearer token here
                    'Content-Type': 'application/json'
                }
            });
            const data123 = await response.json();
            console.log(data123);
            setAllphotos(data123.images);  // Assuming the API response is in a valid format for groups
            fetchAllVideos(data)
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    };
    const fetchAllVideos = async (data) => {
        console.log(data)
        try {
            const response = await fetch('https://social-network-backend.sharpbody-p.com/public/api/user/' + data?.data?.id + '/media?type=videos', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + data?.token, // Add your actual bearer token here
                    'Content-Type': 'application/json'
                }
            });
            const data123 = await response.json();
            console.log(data123);
            setAllVideos(data123.videos);  // Assuming the API response is in a valid format for groups
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    };
    useEffect(() => {
        var localinfo1 = localStorage.getItem("username");
        var localinfo = JSON.parse(localinfo1);
        console.log("this is user info", localinfo);
        fetchAllphotos(localinfo)
    }, []);

    return (
        <>
            <div className='header-list-sec'>
                <p
                    className={activeTab === 'All' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('All')}
                >
                    All <span className='media-span'>{allphotos.length}</span>
                </p>
                <p
                    className={activeTab === 'Photos' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Photos')}
                >
                    Photos <span className='media-span'>{allphotos.length}</span>
                </p>
                {/* <p
                    className={activeTab === 'Videos' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Videos')}
                >
                    Videos <span className='media-span'>0</span>
                </p> */}
            </div>
            {/* Conditionally render the content based on the active tab */}
            <div className='tab-content'>
                {activeTab === 'All' && <div className='actity-tabs'>
                    {/* <p className='media-gallery-media-title'>Media Gallery</p>
                    <p className='media-txt-2'>Sorry !! There's no media found for the request !! </p> */}
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px"
                    }}>
                        {allphotos.map(user => (<div>
                            <img style={{ width: "230px" }} src={user} alt='wait' />
                        </div>))}
                    </div>
                </div>}
                {activeTab === 'Photos' && <div className='actity-tabs'>
                    {/* <p className='media-gallery-media-title'>Photos Gallery</p>
                    <p className='media-txt-2'>Sorry !! There's no media found for the request !! </p> */}
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px"
                    }}>
                        {allphotos.map(user => (<div>
                            <img style={{ width: "230px" }} src={user} alt='wait' />
                        </div>))}
                    </div>
                </div>}
                {/* {activeTab === 'Videos' && <div className='actity-tabs'>
                    <p className='media-gallery-media-title'>Videos Gallery</p>
                    <p className='media-txt-2'>Sorry !! There's no media found for the request !! </p>
                </div>} */}
            </div>
        </>
    );
}

export default Media;

