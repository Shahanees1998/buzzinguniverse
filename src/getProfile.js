import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import axios from 'axios'; // Axios for API requests
import { Box, Menu, MenuItem, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProfileActivity1 from './components/profileactivity1';
import Profilee1 from "./components/Profilee1";
import Friends1 from "./Friends1";
import Group1 from "./Group1";
import Adverts from "./Adverts";
import Forums from "./Forums";
import Media from "./Media";
import Invitations from "./Invitations";
import Notification from "./Notification";
import Messages from "./Messages";
import Settings from "./Settings";
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
function GetProfile() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('Activity');
    const [newMembersAnchorEl, setNewMembersAnchorEl] = useState(null);
    const [groupslength, setGroupslength] = useState([]);
    const [friendslength, setFriendslength] = useState([]);
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

    const sendFriendRequest = async () => {
        const formData = new FormData();
        formData.append('reciever_id', id);
        var bearertoken = localStorage.getItem("Logtoken")
        try {
            const response = await axios.post(`https://social-network-backend.sharpbody-p.com/public/api/send-friend-request`, formData, {
                headers: {
                    Authorization: 'Bearer ' + bearertoken, // Replace with your token
                }
            });
            console.log(response);
            toast.success(response.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
        } catch (error) {
            console.error('Error sending friend request:', error);
        }
    };
    // AddfriendReq

    const fetchGroups = async (val) => {
        var bearertoken = localStorage.getItem("Logtoken")
        try {
            const response = await fetch('https://social-network-backend.sharpbody-p.com/public/api/get-user-groups/'+val?.id, {
                method: 'GET',
                headers: {
                    // 'Authorization': 'Bearer ' + bearertoken, // Add your actual bearer token here
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data.data);
            setGroupslength(data.data);  // Assuming the API response is in a valid format for groups
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    };

    const fetchFriends = async (val) => {
        var bearertoken = localStorage.getItem("Logtoken")
        try {
            const response = await fetch('https://social-network-backend.sharpbody-p.com/public/api/get-user-friends/'+val?.id, {
                method: 'GET',
                headers: {
                    // 'Authorization': 'Bearer ' + bearertoken, // Add your actual bearer token here
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data.data);
            setFriendslength(data.data);  // Assuming the API response is in a valid format for groups
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    };

    const fetchProfile = async () => {
        var bearertoken = localStorage.getItem("Logtoken")
        try {
            const response = await fetch('https://social-network-backend.sharpbody-p.com/public/api/get-user-detail/'+id, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + bearertoken, // Add your actual bearer token here
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            console.log(data.data)
            fetchFriends(data.data);
            fetchGroups(data.data);
            setInfo(data.data);
            // setFriendslength(data.data);  // Assuming the API response is in a valid format for groups
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    };
    useEffect(() => {
        fetchProfile()
    }, []);

    const renderContent = () => {
        switch (activeTab) {
            case 'Activity':
                return <ProfileActivity1 id={id}/>;
            case 'Profile':
                return <Profilee1 id={id}/>;
            case 'Friends':
                return <Friends1 id={id}/>;
            case 'Groups':
                return <Group1 id={id} />;
            default:
                return <ProfileActivity1 id={id}/>;
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('Logtoken');
        localStorage.removeItem('username');
        sessionStorage.removeItem('login');
    };



    useEffect(() => {
        // var localinfo1 = localStorage.getItem("username");
        // var localinfo = JSON.parse(localinfo1);
        // console.log("this is user info", localinfo);
        // setInfo(localinfo)
    }, []);

    return (
        <>

            <div className='profile-header'>
                <div className='profile-header-div'>
                    <img src='https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png' alt='wait' />
                    <p>@{info?.name}</p>

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
                            {info?.user_information?.profile_image ? (
                                <img style={{ width: "100%" }} src={info?.user_information?.profile_image} alt='wait' />
                            ) : (
                                <img style={{ width: "100%" }} src='https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png' alt='wait' />
                            )}
                            {/* <div>
                                <AddAPhotoIcon style={{ cursor: "pointer" }} onClick={() => { handleTabClick1('Profile') }} sx={{ width: "19px" }} />
                            </div> */}
                            <h2>{info?.username}</h2>
                            <p>{info?.is_online ? <span style={{ color: "green", fontWeight: "bold" }}>Online</span> : <span style={{ color: "red", fontWeight: "bold" }}>Offline</span>}</p>
                        </div>
                    </div>
                    <div className='sub-banner'>
                        <h2 className='profile-banner-name'>@{info?.username}
                            <span>{info?.is_online ? " Active " : " InActive "}</span></h2>
                        <div className='profile-upload-btns'>
                            <button>
                                <PersonAddIcon onClick={() => { sendFriendRequest() }} style={{ cursor: "pointer" }} sx={{ width: "20px" }} />
                            </button>
                            {/* <button>
                                <CloudUploadIcon onClick={() => { handleTabClick1('Profile') }} style={{ cursor: "pointer" }} sx={{ width: "23px" }} />
                            </button> */}
                        </div>
                    </div>
                    <div onClick={() => { navigate('/Questions') }} className='Profile-nav-styl'></div>
                </div>
                
                <div className='header-list full-screen'>
                    <p onClick={() => handleTabClick('Activity')}>Activity</p>
                    <p onClick={() => handleTabClick('Profile')}>Profile</p>
                    <p onClick={() => handleTabClick('Friends')}>Friends</p>
                    <p onClick={() => handleTabClick('Groups')}>Groups</p>
                </div>

            </div>

            <div className='main-sub-section'>
                <div className='frd-grp'>
                    <div><span>{friendslength.length}</span> <br />Friends</div>
                    <div><span>{groupslength.length}</span> <br />Groups</div>
                </div>
                <div className='frd-grp-1'>
                    {renderContent()}
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default GetProfile;
