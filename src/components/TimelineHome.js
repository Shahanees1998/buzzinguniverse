import React, { useState, useEffect } from 'react';
import { Card, CardContent, Avatar, TextField, Tabs, Tab, Typography, Box, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Timeline from "./timeline";
import axios from 'axios'; // Add Axios for API calls
import closeimg from "../assets/close1437.jpg";
import MyGroupstimeline from "./MyGroupstimeline";

const TimelineHome = ({ datainfoo }) => {
    // console.log(datainfoo);
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [showPop, SetShowPop1] = useState(false);
    const [dataPop1, SetDataPop1] = useState(null);
    const [posts, setPosts] = useState([]);
    const [postCreate, SetpostCreate] = useState(false);
    const [newMembersAnchorEl, setNewMembersAnchorEl] = useState(null);
    // const [newMembersAnchorEl1, setNewMembersAnchorEl1] = useState(null);
    const [description, setDescription] = useState(''); // State for post description
    const [selectedFiles, setSelectedFiles] = useState([]); // State for selected files
    const [isSubmitting, setIsSubmitting] = useState(false); // For loading state during post submission
    const [comment_com, SetComment_com] = useState("");
    const [newMembersAnchorEl1, setNewMembersAnchorEl1] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState('Status');
    const [info, setInfo] = useState([]);
    const [getalldata, setGetalldata] = useState([]);


    const SetShowPop = () => {
        SetShowPop1(!showPop);
    }
    const handleNavigateTo = (data) => {
        if (!data.startsWith('/')) {
            data = `/${data}`;
        }
        navigate(data);
    };

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleNewMembersClick = (event) => {
        setNewMembersAnchorEl(event.currentTarget);
    };

    const handleNewMembersClose = () => {
        setNewMembersAnchorEl(null);
    };

    // const handleNewMembersClick1 = (event) => {
    //   setNewMembersAnchorEl1(event.currentTarget);
    // };

    // const handleNewMembersClose1 = () => {
    //   setNewMembersAnchorEl1(null);
    // };

    const handleFileChange = (event) => {
        setSelectedFiles(event.target.files); // Store selected files in state
    };

    const handleNewMembersClick1 = (event) => {
        setNewMembersAnchorEl1(event.currentTarget);
    };

    const handleNewMembersClose1 = () => {
        setNewMembersAnchorEl1(null);
    };

    const handleStatusSelect = (status) => {
        setSelectedStatus(status); // Update the selected status
        handleNewMembersClose1(); // Close the menu
    };

    const handleSubmitPost = async () => {
        var bearertoken = localStorage.getItem("Logtoken")
        console.log(bearertoken)
        if (!description && selectedFiles.length === 0) {
            alert('Please add a description or select media');
            return;
        }

        setIsSubmitting(true);
        var selectedStatuss = selectedStatus == "Status" ? "Public" : selectedStatus;
        const formData = new FormData();
        formData.append('description', description);
        formData.append('type', selectedStatuss);
        formData.append('group_id', datainfoo.id);

        // Append each selected file to the formData
        Array.from(selectedFiles).forEach((file) => {
            formData.append('image[]', file);
        });

        try {
            const response = await axios.post(
                'https://social-network-backend.sharpbody-p.com/public/api/create-post',
                formData,
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + bearertoken, // Replace with your actual token
                    },
                }
            );

            console.log('Post created:', response.data);
            SetpostCreate(false);
            setDescription('');
            setSelectedFiles([]);
            handleSubmitGet();
        } catch (error) {
            console.error('Error creating post:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSubmitGet = async () => {
        var bearertoken = localStorage.getItem("Logtoken")
        console.log(bearertoken)

        try {
            const response = await axios.get(
                'https://social-network-backend.sharpbody-p.com/public/api/get-posts-according-to-group?group_id=' + datainfoo.id,
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + bearertoken, // Replace with your actual token
                    },
                }
            );

            console.log('get post', response.data);
            // setPosts(response.data.data);

        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    const fetchAllGroupPost = async () => {
        console.log(datainfoo?.id)
        try {
            const response = await fetch('https://social-network-backend.sharpbody-p.com/public/api/get-posts-according-to-group?group_id=' + datainfoo?.id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data123 = await response.json();
            console.log(data123.data); // Log the whole response
    
            // Wrap data123.data in an array
            setGetalldata([data123.data]); 
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    };
    

    useEffect(() => {
        // handleSubmitGet()\
        fetchAllGroupPost()
        // console.log(getalldat)
        // setGetalldata(getalldat)
        // var localinfo1 = localStorage.getItem("userinfo");
        // var localinfo = JSON.parse(localinfo1);
        // console.log(localinfo);
        setInfo(datainfoo);
        console.log(datainfoo);
    }, [datainfoo]);

    const refreshPost = () => {
        // handleSubmitGet()
        fetchAllGroupPost()
    }

    const SetDataPop = (data) => {
        console.log(data);
        SetDataPop1(data);
    }

    const handleSubmitCommit = async (data) => {
        var bearertoken = localStorage.getItem("Logtoken")
        console.log(bearertoken)

        const formData = new FormData();
        formData.append('post_id', data);
        formData.append('comment', comment_com);

        try {
            const response = await axios.post(
                'https://social-network-backend.sharpbody-p.com/public/api/add-post-comment',
                formData,
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + bearertoken, // Replace with your actual token
                    },
                }
            );

            console.log('Post created:', response.data);
            SetComment_com("")
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    const handleSubmitLike = async (data) => {
        var bearertoken = localStorage.getItem("Logtoken")
        console.log(bearertoken)

        const formData = new FormData();
        formData.append('post_id', data);
        formData.append('impression_type', 1);

        try {
            const response = await axios.post(
                'https://social-network-backend.sharpbody-p.com/public/api/post-likes-and-dislikes',
                formData,
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + bearertoken, // Replace with your actual token
                    },
                }
            );

            console.log('Post created:', response.data);
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <>
            <Box sx={{ maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#fff', borderRadius: '12px' }}>
                <Card className='search-box-main' sx={{ marginBottom: '20px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', borderRadius: '12px' }}>
                    <CardContent sx={{ display: 'flex', alignItems: 'center', padding: '12px 16px', alignItems: "flex-start" }}>
                        {info ? <img style={{
                            width: "35px",
                            borderRadius: "70px",
                            height: "35px",
                            marginRight: "10px"
                        }} src={info?.image} alt='wait' /> :
                            <Avatar onClick={() => { handleNavigateTo("profile") }} sx={{ marginRight: '12px' }} />}
                        {postCreate ? (
                            <div style={{ width: "90%" }}>
                                <textarea
                                    style={{ width: "90%", border: "none", paddingTop: "9px" }}
                                    rows={6}
                                    placeholder="What's new?"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)} // Update the description
                                />
                                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                                    <input
                                        type="file"
                                        accept="image/*,video/*"
                                        multiple
                                        style={{ display: 'none' }}
                                        id="file-input"
                                        onChange={handleFileChange} // Update the selected files
                                    />
                                    <label htmlFor="file-input">
                                        <Button variant="contained" component="span" style={{
                                            boxShadow: "none",
                                            fontSize: "11px",
                                            backgroundColor: "aliceblue",
                                            borderRadius: "1.25rem",
                                            padding: "0 1rem",
                                            color: "#0a2972",
                                            lineHeight: "30px",
                                        }}>
                                            Attach media
                                        </Button>
                                    </label>
                                    <p style={{ fontSize: "12px", opacity: "0.7" }}>Max. File Size: 512M</p>
                                    {/* <Box sx={{ textAlign: 'right', marginBottom: '20px' }}>
                                        <Button style={{
                                        border: "1px solid silver !important",
                                        color: "silver",
                                        width: "150px",
                                        marginTop: "19px"
                                        }} variant="outlined" size="small" sx={{ borderRadius: '20px', textTransform: 'none' }} onClick={handleNewMembersClick1}>
                                        Status
                                        </Button>
                                        <Menu anchorEl={newMembersAnchorEl1} open={Boolean(newMembersAnchorEl1)} onClose={handleNewMembersClose1}>
                                        <MenuItem onClick={handleNewMembersClick1}>Public</MenuItem>
                                        <MenuItem onClick={handleNewMembersClick1}>Private</MenuItem>
                                        <MenuItem onClick={handleNewMembersClick1}>Friend</MenuItem>
                                        </Menu>
                                    </Box> */}
                                    <Box sx={{ textAlign: 'right', marginBottom: '20px' }}>
                                        <Button
                                            style={{
                                                border: '1px solid silver !important',
                                                color: 'silver',
                                                width: '150px',
                                                marginTop: '19px',
                                            }}
                                            variant="outlined"
                                            size="small"
                                            sx={{ borderRadius: '20px', textTransform: 'none' }}
                                            onClick={handleNewMembersClick1}
                                        >
                                            {selectedStatus}
                                        </Button>
                                        <Menu
                                            anchorEl={newMembersAnchorEl1}
                                            open={Boolean(newMembersAnchorEl1)}
                                            onClose={handleNewMembersClose1}
                                        >
                                            <MenuItem onClick={() => handleStatusSelect('Public')}>Public</MenuItem>
                                            <MenuItem onClick={() => handleStatusSelect('Private')}>Private</MenuItem>
                                            <MenuItem onClick={() => handleStatusSelect('Friend')}>Friend</MenuItem>
                                        </Menu>
                                    </Box>
                                </div>
                                <div className='main-btns-public'>
                                    <button className='main-btns-public-1' onClick={() => SetpostCreate(false)}>Cancel</button>
                                    <button
                                        className='main-btns-public-2'
                                        onClick={handleSubmitPost} // Handle form submission
                                        disabled={isSubmitting} // Disable button while submitting
                                    >
                                        {isSubmitting ? 'Posting...' : 'Post Update'}
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <TextField
                                fullWidth
                                onClick={() => { SetpostCreate(!postCreate) }}
                                placeholder="What's new?"
                                variant="outlined"
                                size="small"
                                InputProps={{
                                    sx: { borderRadius: '50px', fontSize: "12px" },
                                }}
                            />
                        )}
                    </CardContent>
                </Card>

                <Tabs value={activeTab} onChange={handleTabChange} indicatorColor="primary" textColor="primary" sx={{ marginBottom: '16px' }}>
                    <Tab label="All Posts" sx={{ textTransform: 'none', fontWeight: 600, minWidth: '30%' }} />
                    {/* <Tab label="My Groups" sx={{ textTransform: 'none', fontWeight: 600, minWidth: '30%' }} />
          <Tab label="Mentions" sx={{ textTransform: 'none', fontWeight: 600, minWidth: '30%' }} /> */}
                </Tabs>

                <Box sx={{ textAlign: 'right', marginBottom: '60px' }}>
                    {/* <Button style={{
                        border: '1px solid silver !important',
                        color: 'silver',
                        width: '200px',
                        marginTop: '19px',
                    }} variant="outlined" size="small" sx={{ borderRadius: '20px', textTransform: 'none' }} onClick={handleNewMembersClick}>
                        -Everything-
                    </Button>
                    <Menu anchorEl={newMembersAnchorEl} open={Boolean(newMembersAnchorEl)} onClose={handleNewMembersClose}>
                        <MenuItem onClick={handleNewMembersClose}>Everything</MenuItem>
                    </Menu> */}
                </Box>
                {/* MyGroupstimeline */}
                <div className='tags_landing'>
                    {activeTab === 0 ?
                        <>
                            {
                                getalldata.length > 0 ? <Timeline posts={getalldata} refreshPost={refreshPost} SetShowPop={SetShowPop} SetDataPop={SetDataPop} /> :
                                    <Card sx={{ boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                                        <Typography variant="body1" color="textSecondary" style={{ fontWeight: "bold" }}>
                                            Sorry, there was no post found.
                                        </Typography>
                                    </Card>
                            }</>
                        :
                        activeTab === 1 ?
                            <MyGroupstimeline />
                            : (
                                <Card sx={{ boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                                    <Typography variant="body1" color="textSecondary">
                                        Sorry, there was no activity found. Please try a different filter.
                                    </Typography>
                                </Card>
                            )}
                </div>
            </Box>
            {
                showPop && <div className='postpopup'>
                    <div style={{
                        display: "flex",
                        width: "76%",
                        marginLeft: "12%",
                        height: "85%",
                        marginTop: "3%"
                    }}>
                        <div className='postpopup-div-1'>
                            <img src={dataPop1.images[0].image} alt='wait' />
                        </div>
                        <div className='postpopup-div-2'>
                            <img style={{
                                width: "22px",
                                float: "right",
                                padding: "4px",
                                cursor: "pointer"
                            }} onClick={() => { SetShowPop1(false) }} src={closeimg} alt='wait' />
                            <Box sx={{ padding: '12px' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar sx={{ width: '40px', height: '40px', marginRight: '10px' }} />
                                    <div className='popup-title-head'>
                                        <p className='comment-text-title' style={{
                                            lineHeight: "1.5",
                                            fontSize: "15px"
                                        }}>{dataPop1.title}</p>
                                        <p className='comment-text-title' style={{
                                            color: "#bbbbdc",
                                            fontSize: "80%",
                                            lineHeight: "1.5",
                                            fontWeight: "400"
                                        }}>{dataPop1?.created_at}</p>
                                    </div>
                                </Box>
                                <p style={{ fontSize: "12px" }}>{dataPop1.description}</p>
                                <Button size="small" style={{ marginTop: "10px" }} sx={{ color: '#007bff', textTransform: 'none' }} onClick={() => { handleSubmitLike(dataPop1.id) }}>Like {dataPop1.likes_count > 0 && dataPop1.likes_count}</Button>
                            </Box >
                            {dataPop1?.comments.length < 1 && <p className='popup-comment-msg'>There are no comments on this media yet.</p>}
                            {dataPop1?.comments && <>{dataPop1?.comments.map((com, index) => (<Box sx={{ padding: '12px' }}>
                                <Box style={{
                                    background: "#f8f9fb",
                                    color: "#626c89",
                                    padding: ".75rem",
                                    borderRadius: "12px",
                                    marginBottom: "1px"
                                }} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Avatar sx={{ width: '30px', height: '30px', marginRight: '10px' }} />
                                    <div className='popup-title-head' >
                                        <p className='comment-text-title' style={{
                                            lineHeight: "1.5",
                                            fontSize: "15px",
                                            color: "#29292d",
                                            fontWeight: "400"
                                        }}>{com.user?.username} <span style={{
                                            color: "#bbbbdc",
                                            fontSize: "80%"
                                        }}>{com?.created_at}</span></p>
                                        <p className='comment-text-title' style={{
                                            color: "#626c89",
                                            fontWeight: "100",
                                            fontSize: "12px"
                                        }}>{com.comment}</p>
                                    </div>
                                </Box>
                            </Box >))}</>}
                            <div className='comment-section-bottom'>
                                <textarea onChange={(e) => { SetComment_com(e.target.value) }} placeholder='Type Comment' rows={4} className='text-popup-bottom'>
                                </textarea>
                                <button className='send-popup-cmt' onClick={() => { handleSubmitCommit(dataPop1.id) }}>Send</button>
                            </div>
                        </div>
                    </div>
                </div >
            }
        </>
    );
};

export default TimelineHome;