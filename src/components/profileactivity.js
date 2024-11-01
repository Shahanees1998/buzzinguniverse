import React, { useState, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Card, CardContent, Avatar, TextField, Tabs, Tab, Typography, Box, IconButton, Menu, MenuItem, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Timeline from './timeline'
import axios from 'axios'; // Add Axios for API calls
import MyGroups from "./MyGroups";
import AllFriends from "./AllFriends";

function ProfileActivity() {
    const [posts, setPosts] = useState([]);
    const [favPosts, setfavPosts] = useState([]);
    const [menPosts, setMenPosts] = useState([]);
    const [frndPosts, setFrndPosts] = useState([]);
    const [groupPosts, setGroupPosts] = useState([]);
    const [activeTab, setActiveTab] = useState('Personal');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const handleSubmitGet = async () => {
        var bearertoken = localStorage.getItem("Logtoken")
        console.log(bearertoken)

        try {
            const response = await axios.get(
                'https://social-network-backend.sharpbody-p.com/public/api/get-my-posts',
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + bearertoken, // Replace with your actual token
                    },
                }
            );

            console.log('get post', response.data);
            setPosts(response.data.data);

        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    const handleMyMentions = async () => {
        var bearertoken = localStorage.getItem("Logtoken");
        var da = JSON.parse(localStorage.getItem("username"));
        console.log(da)
        console.log(bearertoken)

        try {
            const response = await axios.get(
                'https://social-network-backend.sharpbody-p.com/public/api/get-my-mentioned-posts/'+da.data.id,
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + bearertoken, // Replace with your actual token
                    },
                }
            );

            console.log('get post', response.data);
            setMenPosts(response.data.data);

        } catch (error) {
            console.error('Error creating post:', error);
        }
    };
    const handleFriendspost = async () => {
        var bearertoken = localStorage.getItem("Logtoken");
        var da = JSON.parse(localStorage.getItem("username"));
        console.log(da)
        console.log(bearertoken)

        try {
            const response = await axios.get(
                'https://social-network-backend.sharpbody-p.com/public/api/get-my-friends-posts/'+da.data.id,
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + bearertoken, // Replace with your actual token
                    },
                }
            );

            console.log('get post', response.data);
            setFrndPosts(response.data.data);

        } catch (error) {
            console.error('Error creating post:', error);
        }
    };
    const handleGroupspost = async () => {
        var bearertoken = localStorage.getItem("Logtoken");
        var da = JSON.parse(localStorage.getItem("username"));
        console.log(da)
        console.log(bearertoken)

        try {
            const response = await axios.get(
                'https://social-network-backend.sharpbody-p.com/public/api/get-user-group-posts/'+da.data.id,
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + bearertoken, // Replace with your actual token
                    },
                }
            );

            console.log('get post', response.data);
            setGroupPosts(response.data.data);

        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    // setGroupPostss

    const handleSubmitFav = async () => {
        var bearertoken = localStorage.getItem("Logtoken")
        console.log(bearertoken)

        try {
            const response = await axios.get(
                'https://social-network-backend.sharpbody-p.com/public/api/get-my-favourite-post',
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + bearertoken, // Replace with your actual token
                    },
                }
            );

           
            const allPosts = response.data.data
            .filter(item => item.post !== null) // filter out items where post is null
            .map(item => item.post);
            
            setfavPosts(allPosts);

        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    useEffect(() => {
        handleFriendspost()
        handleGroupspost()
        handleSubmitFav()
        handleMyMentions()
        handleSubmitGet()
      }, []);
    

    return (
        <>
            <div className='header-list-sec'>
                <p
                    className={activeTab === 'Personal' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Personal')}
                >
                    Personal
                </p>
                <p
                    className={activeTab === 'Mentions' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Mentions')}
                >
                    Mentions
                </p>
                <p
                    className={activeTab === 'Favorites' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Favorites')}
                >
                    Favorites
                </p>
                <p
                    className={activeTab === 'Friends' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Friends')}
                >
                    Friends
                </p>
                <p
                    className={activeTab === 'Groups' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Groups')}
                >
                    Groups
                </p>
            </div>
            {/* Conditionally render the content based on the active tab */}
            <div className='tab-content'>
                {activeTab === 'Personal' && <div className='actity-tabs'>
                    <Timeline posts={posts} />
                </div>}
                {activeTab === 'Mentions' && <div className='actity-tabs'>
                    {/* <Card sx={{ boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                        <Typography variant="body1" color="textSecondary">
                            Sorry, there was no activity found. Please try a different filter.
                        </Typography>
                    </Card> */}
                    {<Timeline posts={menPosts} />}
                </div>}
                {activeTab === 'Favorites' && <div className='actity-tabs'>
                    {/* <Card sx={{ boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                        <Typography variant="body1" color="textSecondary">
                            Sorry, there was no activity found. Please try a different filter.
                        </Typography>
                    </Card> */}
                    {<Timeline posts={favPosts} />}
                </div>}
                {activeTab === 'Friends' && <div className='actity-tabs'>
                    {/* <Card sx={{ boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                        <Typography variant="body1" color="textSecondary">
                            Sorry, there was no activity found. Please try a different filter.
                        </Typography>
                    </Card> */}
                    {/* <AllFriends /> */}
                    {<Timeline posts={frndPosts} />}
                </div>}
                {activeTab === 'Groups' && <div className='actity-tabs'>
                    {/* <Card sx={{ boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                        <Typography variant="body1" color="textSecondary">
                            Sorry, there was no activity found. Please try a different filter.
                        </Typography>
                    </Card> */}
                    {/* <MyGroups />  */}
                    {<Timeline posts={groupPosts} />}
                </div>}
            </div>
        </>
    );
}

export default ProfileActivity;

