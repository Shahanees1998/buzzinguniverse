import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Box, Menu, MenuItem, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProfileActivityGroup from './components/ProfileActivityGroup';
import Profilee from "./components/profile";
import Friendsgroup from "./Friendsgroup";
import Group from "./Group";
import Adverts from "./Adverts";
import Forums from "./Forums";
import Media from "./Media";
import Invitations from "./Invitations";
import Notification from "./Notification";
import Messages from "./Messages";
import Settings from "./Settings";
import { useLocation } from 'react-router-dom';
function GroupProfile() {
    const navigate = useNavigate();
    const location = useLocation();
    const { data } = location.state || {};
    console.log(data)
    const [activeTab, setActiveTab] = useState('Activity');
    const [newMembersAnchorEl, setNewMembersAnchorEl] = useState(null);
    const [groupslength, setGroupslength] = useState([]);
    const [friendslength, setFriendslength] = useState([]);
    const [medias, setmedias] = useState([]);
    const [getalldata, setGetalldata] = useState([]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const handleNewMembersClick = (event) => {
        setNewMembersAnchorEl(event.currentTarget);
    };

    const handleNewMembersClose = () => {
        setNewMembersAnchorEl(null);
    };

    const [newMembersAnchorEl1, setNewMembersAnchorEl1] = useState(null);

    const handleTabClick1 = (tabName) => {
        setActiveTab(tabName);
    };

    const handleNewMembersClick1 = (event) => {
        setNewMembersAnchorEl1(event.currentTarget);
    };

    const handleNewMembersClose1 = () => {
        setNewMembersAnchorEl1(null);
    };

    const fetchGroups = async () => {
        var bearertoken = localStorage.getItem("Logtoken")
        try {
            const response = await fetch('https://social-network-backend.sharpbody-p.com/public/api/get-my-groups', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + bearertoken, // Add your actual bearer token here
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setGroupslength(data.data);  // Assuming the API response is in a valid format for groups
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    };

    const fetchFriends = async () => {
        var bearertoken = localStorage.getItem("Logtoken")
        try {
            const response = await fetch('https://social-network-backend.sharpbody-p.com/public/api/get-my-friends', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + bearertoken, // Add your actual bearer token here
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setFriendslength(data.data);  // Assuming the API response is in a valid format for groups
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    };

    

    const renderContent = () => {
        switch (activeTab) {
            case 'Activity':
                return <ProfileActivityGroup datainfo={data}/>;
            case 'Friends':
                return <Friendsgroup datainfo={data}/>;
            default:
                return <ProfileActivityGroup datainfo={data}/>;
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('Logtoken');
        localStorage.removeItem('username');
        sessionStorage.removeItem('login');
        navigate(`/`);
    };

    // useEffect(() => {
    //     fetchAllGroupPost();
    // }, [data]);

    const handleNavigateTo = () => {
        // navigate(`/getProfile/${id}`);
    };
    return (
        <>

            <div className='profile-header'>
                <div className='profile-header-div'>
                    <img src='https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png' alt='wait' />
                    <p>@{data?.name}</p>

                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    width: "25%",
                    marginRight: "3%"
                }}>
                    <input className='profile-search' type='text' placeholder='Search...' />
                    <p style={{
                        fontSize: "12px",
                        fontWeight: "bold",
                        border: "1px solid silver",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        color: "silver"
                    }} onClick={()=>{handleLogout()}}>Logout</p>
                </div>
            </div>
            <div>
                <div
                    className='banner'
                    style={{
                        backgroundImage: `radial-gradient(circle, transparent 0%, rgba(0, 0, 0, 0.15) 58%, rgba(0, 0, 0, 0.3) 100%), url(${data?.cover_image || ''})`,
                        backgroundSize: '100% 100%', // Ensure the background covers the entire div
                        backgroundPosition: 'center' // Center the background image
                    }}
                >
                    <div className='sb-banner'>
                        <div className='Image-profile'>
                            {data?.image ? (
                                <img style={{ width: "100%" }} src={data?.image} alt='wait' />
                            ) : (
                                <img style={{ width: "100%" }} src='https://buzzinguniverse.com/wp-content/plugins/buddypress/bp-core/images/mystery-group.png' alt='wait' />
                            )}
                            <h2>{data?.name}</h2>
                            <p>{data?.privacy}</p>
                        </div>
                    </div>
                    <div className='sub-banner'>
                        <h2 className='profile-banner-name'>Group is
                            <span>{data?.owner?.is_online == "1" ? " Active " : " InActive "}</span></h2>
                    </div>
                    <div onClick={() => { handleNavigateTo() }} className='Profile-nav-styl'></div>
                </div>


                <div className='header-list full-screen'>
                    <p onClick={() => handleTabClick('Activity')}>Activity</p>
                    <p onClick={() => handleTabClick('Friends')}>Members</p>
                    <p></p>
                    <p></p>

                    <Box>
                        <Button
                            variant="outlined"
                            size="small"
                            sx={{ border: "none", color: "#000" }}
                        >
                        </Button>

                    </Box>
                </div>

            </div>

            <div className='main-sub-section'>
                <div className='frd-grp1'>
                    <div className='frd-grp'>
                        <div><h3>About Group</h3> <br />Required</div>
                        {/* <div><span>{groupslength.length}</span> <br />Groups</div> */}
                    </div>
                    <div className='frd-grp' style={{justifyContent: "center"}}>
                        <div><h3>Members</h3> <br />{data?.members?.length}</div>
                        {/* <div><span>{groupslength.length}</span> <br />Groups</div> */}
                    </div>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        {medias.map(user => (<div>
                            <img style={{ width: "50px" }} src={user} alt='wait' />
                        </div>))}
                    </div>
                </div>
                <div className='frd-grp-1' style={{paddingLeft: "5%",paddingLeft: "5%",width: "50%",marginTop: "3%"}}>
                    {renderContent()}
                </div>
            </div>
        </>
    );
}

export default GroupProfile;
