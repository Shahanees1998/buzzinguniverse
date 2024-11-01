import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Box, Menu, MenuItem, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProfileActivity from './components/profileactivity';
import Profilee from "./components/profile";
import Friends from "./Friends";
import Group from "./Group";
import Adverts from "./Adverts";
import Forums from "./Forums";
import Media from "./Media";
import Invitations from "./Invitations";
import Notification from "./Notification";
import Messages from "./Messages";
import Settings from "./Settings";

function Profile() {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('Activity');
    const [newMembersAnchorEl, setNewMembersAnchorEl] = useState(null);
    const [groupslength, setGroupslength] = useState([]);
    const [friendslength, setFriendslength] = useState([]);
    const [medias, setmedias] = useState([]);
    const [info, setInfo] = useState([]);

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
            setmedias(data123.images);  // Assuming the API response is in a valid format for groups
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    };

    useEffect(() => {
        // Fetch groups from the API

        fetchGroups();
        fetchFriends();
    }, []);

    const renderContent = () => {
        switch (activeTab) {
            case 'Activity':
                return <ProfileActivity />;
            case 'Profile':
                return <Profilee />;
            case 'Friends':
                return <Friends />;
            case 'Groups':
                return <Group />;
            case 'Adverts':
                return <Adverts />;
            case 'Forums':
                return <Forums />;
            case 'Media':
                return <Media />;
            case 'Invitations':
                return <Invitations />;
            case 'Notification':
                return <Notification />;
            case 'Messages':
                return <Messages />;
            case 'Settings':
                return <Settings />;

            default:
                return <ProfileActivity />;
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('Logtoken');
        localStorage.removeItem('username');
        sessionStorage.removeItem('login');
        navigate('/')
    };

    useEffect(() => {
        var localinfo1 = localStorage.getItem("username");
        var localinfo = JSON.parse(localinfo1);
        console.log("this is user info", localinfo);
        setInfo(localinfo);
        fetchAllphotos(localinfo);
    }, []);

    return (
        <>

            <div className='profile-header'>
                <div className='profile-header-div'>
                    <img src='https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png' alt='wait' />
                    <p>@{info?.data?.name}</p>

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
                    }} onClick={handleLogout}>Logout</p>
                </div>
            </div>
            <div>
                {/* <div className='banner'>
                    <div className='sb-banner'>
                        <div className='Image-profile'>
                            {info.data ?
                                <img style={{    width: "100%"}} src={info?.data?.user_information?.profile_image} alt='wait' />
                                : <img style={{    width: "100%"}} src='https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png' alt='wait' />}
                            <div>
                                <AddAPhotoIcon sx={{ width: "19px" }} />
                            </div>
                            <h2>{info?.data?.username}</h2>
                        </div>
                    </div>
                    <div className='sub-banner'>
                        <h2 className='profile-banner-name'>@{info?.data?.username}
                            <span> Active</span></h2>
                        <div className='profile-upload-btns'>
                            <button>
                                <EditIcon sx={{ width: "20px" }} />
                            </button>
                            <button>
                                <CloudUploadIcon sx={{ width: "23px" }} />
                            </button>
                        </div>
                    </div>
                </div> */}
                <div
                    className='banner'
                    style={{
                        backgroundImage: `radial-gradient(circle, transparent 0%, rgba(0, 0, 0, 0.15) 58%, rgba(0, 0, 0, 0.3) 100%), url(${info?.data?.user_information?.cover_image || ''})`,
                        backgroundSize: '100% 100%', // Ensure the background covers the entire div
                        backgroundPosition: 'center' // Center the background image
                    }}
                >
                    <div className='sb-banner'>
                        <div className='Image-profile'>
                            {info?.data?.user_information?.profile_image ? (
                                <img style={{ width: "100%" }} src={info?.data?.user_information?.profile_image} alt='wait' />
                            ) : (
                                <img style={{ width: "100%" }} src='https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png' alt='wait' />
                            )}
                            <div>
                                <AddAPhotoIcon style={{ cursor: "pointer" }} onClick={() => { handleTabClick1('Profile') }} sx={{ width: "19px" }} />
                            </div>
                            <h2>{info?.data?.username}</h2>
                            <p>{info?.data?.is_online ? <span style={{ color: "green", fontWeight: "bold" }}>Online</span> : <span style={{ color: "red", fontWeight: "bold" }}>Offline</span>}</p>
                        </div>
                    </div>
                    <div className='sub-banner'>
                        <h2 className='profile-banner-name'>@{info?.data?.username}
                            <span>{info?.data?.is_online ? " Active " : " InActive "}</span></h2>
                        <div className='profile-upload-btns'>
                            <button>
                                <EditIcon onClick={() => { handleTabClick1('Profile') }} style={{ cursor: "pointer" }} sx={{ width: "20px" }} />
                            </button>
                            <button>
                                <CloudUploadIcon onClick={() => { handleTabClick1('Profile') }} style={{ cursor: "pointer" }} sx={{ width: "23px" }} />
                            </button>
                        </div>
                    </div>
                    <div onClick={() => { navigate('/Questions') }} className='Profile-nav-styl'></div>
                </div>


                <div className='header-list full-screen'>
                    <p onClick={() => handleTabClick('Activity')}>Activity</p>
                    <p onClick={() => handleTabClick('Profile')}>Profile</p>
                    <p onClick={() => handleTabClick('Friends')}>Friends</p>
                    <p onClick={() => handleTabClick('Groups')}>Groups</p>
                    <p onClick={() => handleTabClick('Adverts')}>Adverts</p>
                    <p onClick={() => handleTabClick('Forums')}>Forums</p>

                    <Box>
                        <Button
                            variant="outlined"
                            size="small"
                            sx={{ border: "none", color: "#000" }}
                            onClick={handleNewMembersClick}
                        >
                            More
                        </Button>
                        <Menu
                            anchorEl={newMembersAnchorEl}
                            open={Boolean(newMembersAnchorEl)}
                            onClose={handleNewMembersClose}
                        >
                            <MenuItem onClick={() => { handleTabClick('Media'); handleNewMembersClose() }}>Media</MenuItem>
                            <MenuItem onClick={() => { handleTabClick('Invitations'); handleNewMembersClose() }}>Invitations</MenuItem>
                            <MenuItem onClick={() => { handleTabClick('Notification'); handleNewMembersClose() }}>Notification</MenuItem>
                            <MenuItem onClick={() => { handleTabClick('Messages'); handleNewMembersClose() }}>Messages</MenuItem>
                            <MenuItem onClick={() => { handleTabClick('Settings'); handleNewMembersClose() }}>Settings</MenuItem>
                        </Menu>
                    </Box>
                </div>

                <div className='header-list small-screen'>
                    <Box>
                        <Button
                            variant="outlined"
                            size="small"
                            sx={{ border: "none", color: "#000" }}
                            onClick={handleNewMembersClick1}
                        >
                            More
                        </Button>
                        <Menu
                            anchorEl={newMembersAnchorEl1}
                            open={Boolean(newMembersAnchorEl1)}
                            onClose={handleNewMembersClose1}
                        >
                            <MenuItem onClick={() => { handleTabClick1('Media'); handleNewMembersClose1() }}>Media</MenuItem>
                            <MenuItem onClick={() => { handleTabClick1('Activity'); handleNewMembersClose1() }}>Activity</MenuItem>
                            <MenuItem onClick={() => { handleTabClick1('Profile'); handleNewMembersClose1() }}>Profile</MenuItem>
                            <MenuItem onClick={() => { handleTabClick1('Friends'); handleNewMembersClose1() }}>Friends</MenuItem>
                            <MenuItem onClick={() => { handleTabClick1('Groups'); handleNewMembersClose1() }}>Groups</MenuItem>
                            <MenuItem onClick={() => { handleTabClick1('Adverts'); handleNewMembersClose1() }}>Adverts</MenuItem>
                            <MenuItem onClick={() => { handleTabClick1('Forums'); handleNewMembersClose1() }}>Forums</MenuItem>
                            <MenuItem onClick={() => { handleTabClick1('Invitations'); handleNewMembersClose1() }}>Invitations</MenuItem>
                            <MenuItem onClick={() => { handleTabClick1('Notification'); handleNewMembersClose1() }}>Notification</MenuItem>
                            <MenuItem onClick={() => { handleTabClick1('Messages'); handleNewMembersClose1() }}>Messages</MenuItem>
                            <MenuItem onClick={() => { handleTabClick1('Settings'); handleNewMembersClose1() }}>Settings</MenuItem>
                        </Menu>
                    </Box>
                </div>

            </div>

            <div className='main-sub-section'>
                <div className='frd-grp1'>
                    <div className='frd-grp'>
                        <div><span>{friendslength.length}</span> <br />Friends</div>
                        <div><span>{groupslength.length}</span> <br />Groups</div>
                    </div>
                    <div style={{ marginLeft: "-40px" }}>
                        <p style={{
                            position: "relative",
                            fontSize: "1rem",
                            fontWeight: "700",
                            color: "#4f515b",
                            lineHeight: "1.2",
                            marginBottom: "25px"
                        }}>My photos</p>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            {medias.map(user => (<div>
                                <img style={{
                                    width: "65px",
                                    borderRadius: "10px",
                                    boxShadow: "rgb(0, 0, 0) 0px 0px 6px -3px",
                                    height: "65px",
                                    marginRight: "10px"
                                }} src={user} alt='wait' />
                            </div>))}
                        </div>
                    </div>
                </div>
                <div className='frd-grp-1'>
                    {renderContent()}
                </div>
            </div>
        </>
    );
}

export default Profile;
