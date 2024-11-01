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
import TimelineHome from "../components/TimelineHome";
function ProfileActivityGroup({datainfo}) {
    // console.log(getalldataa)
    const [posts, setPosts] = useState([]);
    const [favPosts, setfavPosts] = useState([]);
    const [activeTab, setActiveTab] = useState('Personal');
    console.log(datainfo)
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

            console.log('get data', response.data.data);
            const allPosts = response.data.data.map(item => item.post);
            setfavPosts(allPosts);

        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    useEffect(() => {
        // handleSubmitFav()
        // handleSubmitGet()
    }, []);


    return (
        <>
            {/* <div className='header-list-sec'>
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
            </div> */}
            {/* Conditionally render the content based on the active tab */}
            <div className='tab-content'>
                <TimelineHome datainfoo={datainfo}/>
            </div>
        </>
    );
}

export default ProfileActivityGroup;

