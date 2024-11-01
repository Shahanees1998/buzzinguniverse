import React, { useState, useEffect } from 'react';
import { Card, CardContent, Avatar, TextField, Tabs, Tab, Typography, Box, IconButton, Menu, MenuItem, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UilThumbsUp } from '@iconscout/react-unicons';
const MyGroupstimeline = () => {
    const navigate = useNavigate();
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        // Fetch groups from the API
        const fetchGroups = async () => {
            var bearertoken = localStorage.getItem("Logtoken");
            try {
                const response = await fetch('https://social-network-backend.sharpbody-p.com/public/api/get-my-groups', {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + bearertoken, // Add your actual bearer token here
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                setGroups(data.data);  // Assuming the API response is in a valid format for groups
                console.log(data);
            } catch (error) {
                console.error('Error fetching groups:', error);
            }
        };

        fetchGroups();
    }, []);
    const handleNavigateTo = (data) => {
        navigate('/groupProfile', { state: { data } });
    };
    return (
        <>
            <div className='div-box'>
                {groups.length > 0 ? (
                    groups.map((group) => (
                        <div key={group.id} className='post-mainbox' style={{ width: "100%" }}>
                            <Box sx={{ padding: '12px' }}>
                                <div className='av-Box'>
                                    {/* Dynamic background for av-sub-box */}
                                    <div
                                        className='av-sub-box'
                                        style={{
                                            background: group.cover_image
                                                ? `url(${group.cover_image}) no-repeat center/cover`
                                                : '#f5f5f5' // Default background color if no image
                                        }}
                                    ></div>

                                    <div className='Ava-flex'>
                                        {/* Dynamic Avatar */}
                                        <Avatar
                                            className='Ava-av-sx'
                                            sx={{ width: '100px', height: '100px', marginRight: '16px' }}
                                            src={group.image ? group.image : null}
                                        >
                                            {/* Show initials if no avatar */}
                                            {!group.image && group.name ? group.name[0] : "A"}
                                        </Avatar>
                                        <Box className="Ava-av-sxx">
                                            <Typography style={{ cursor: "pointer" }} onClick={() => { handleNavigateTo(group) }} variant="h6">{group.name || "Abrar"}</Typography>
                                            <Typography variant="body2" color="textSecondary">@{group.owner.name || "Admin"}</Typography>
                                        </Box>
                                    </div>
                                </div>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '16px', padding: '8px 0', borderTop: '1px solid #e0e0e0' }}>
                                <Button size="small" sx={{ color: '#007bff', textTransform: 'none' }}><UilThumbsUp size="18" style={{ marginRight: "5px", position: "relative", top: "-3px" }} color="#000" /> Like</Button>
                                <Button size="small" sx={{ color: '#007bff', textTransform: 'none' }}>Comment <span style={{
                                    background: "transparent",
                                    border: "1px solid #e7edf2",
                                    borderRadius: "50px",
                                    display: "inline",
                                    fontSize: "85%",
                                    textAlign: "center",
                                    lineHeight: "1",
                                    height: "13px",
                                    width: "18px",
                                    paddingTop: "4px",
                                    marginLeft: "8px",
                                    position: "relative",
                                    top: "-1px"
                                }}>0</span></Button>
                                <Button size="small" sx={{ color: '#007bff', textTransform: 'none' }}>Share +</Button>
                            </Box>
                        </div>
                    ))
                ) : (
                    <p>No groups found</p>
                )}
            </div>
        </>
    );
};

export default MyGroupstimeline;
