import React, { useState, useEffect } from 'react';
import { Card, CardContent, Avatar, TextField, Tabs, Tab, Typography, Box, IconButton, Menu, MenuItem, Button } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { json, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { UilThumbsUp } from '@iconscout/react-unicons';
const Timeline = ({ posts, refreshPost, SetShowPop, SetDataPop }) => {
  const [post, seetPosts] = useState([]);
  const [showComment, SetshowComment] = useState(false);
  // const [showPop, SetShowPop] = useState(false);
  // const [dataPop, SetDataPop] = useState([]);
  const [showCommentid, SetshowCommentid] = useState("");
  const [comment_com, SetComment_com] = useState("");
  const [comment_com1, SetComment_com1] = useState("");
  const [editcom, SetEditcom] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const [info, setInfo] = useState([]);
  const [dropdownItems, setDropdownItems] = useState([]);
  const [mention_email, setMention_email] = useState("");

  const [filteredItems, setFilteredItems] = useState(dropdownItems);


  const fetchUsers = async () => {
    var bearertoken = localStorage.getItem("Logtoken")
    try {
      const response = await axios.get('https://social-network-backend.sharpbody-p.com/public/api/get-all-users', {
        headers: {
          Authorization: 'Bearer ' + bearertoken, // Replace with your token
        }
      });
      console.log(response)
      console.log(response.data.data);
      setDropdownItems(response.data.data); // Assuming the users are in response.data.users

    } catch (error) {
      console.error('Error fetching users:', error);

    }
  };


  useEffect(() => {
    seetPosts(posts);
    fetchUsers();
    var localinfo1 = localStorage.getItem("userinfo");
    var localinfo = JSON.parse(localinfo1);
    console.log(localinfo);
    setInfo(localinfo);
  }, [posts]);

  // useEffect(() => {
  //   console.log(dataPop);
  // }, [dataPop]);

  const handleNavigateTo = (id) => {
    navigate(`/getProfile/${id}`);
  };
  const [activeTab, setActiveTab] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [newMembersAnchorEl, setNewMembersAnchorEl] = React.useState(null);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSubmitDelete1 = async (data) => {
    var bearertoken = localStorage.getItem("Logtoken")
    console.log(bearertoken)

    // const formData = new FormData();
    // formData.append('post_id', data);
    // formData.append('impression_type', 1);

    try {
      const response = await axios.delete(
        'https://social-network-backend.sharpbody-p.com/public/api/delete-post/' + data,
        // formData,
        {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + bearertoken, // Replace with your actual token
          },
        }
      );

      console.log('Post created:', response.data);
      refreshPost(true);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleSubmitfav = async (postid) => {
    var bearertoken = localStorage.getItem("Logtoken")
    console.log(bearertoken)

    var userInfo;
    var userdata = localStorage.getItem("username")
    // console.log(userdata)
    if (userdata) {
      userInfo = JSON.parse(userdata)
    }
    console.log(userInfo.data.id);
    const formData = new FormData();
    formData.append('user_id', userInfo.data.id);
    formData.append('post_id', postid);

    try {
      const response = await axios.post(
        'https://social-network-backend.sharpbody-p.com/public/api/create-remove-post-favourite',
        formData,
        {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + bearertoken, // Replace with your actual token
          },
        }
      );

      console.log('fav data:', response.data);
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
      refreshPost(true);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleMenuClose = (value, data) => {
    console.log('Menu item clicked:', value);
    if (value == "delete") {
      handleSubmitDelete1(data)
    } else if (value == "favourite") {
      handleSubmitfav(data)
    }
    setAnchorEl(null);
  };

  const handleNewMembersClick = (event) => {
    setNewMembersAnchorEl(event.currentTarget);
  };

  const handleNewMembersClose = () => {
    setNewMembersAnchorEl(null);
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
      refreshPost(true);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleSubmitUpdatecom = async (data) => {
    var bearertoken = localStorage.getItem("Logtoken")
    console.log(bearertoken)

    const formData = new FormData();
    formData.append('comment', comment_com1);

    try {
      const response = await axios.post(
        'https://social-network-backend.sharpbody-p.com/public/api/edit-post-comment/' + data,
        formData,
        {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + bearertoken, // Replace with your actual token
          },
        }
      );

      console.log('Post created:', response.data);
      refreshPost(true);
      SetEditcom(false);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleSubmitDelete = async (data) => {
    var bearertoken = localStorage.getItem("Logtoken")
    console.log(bearertoken)

    // const formData = new FormData();
    // formData.append('post_id', data);
    // formData.append('impression_type', 1);

    try {
      const response = await axios.delete(
        'https://social-network-backend.sharpbody-p.com/public/api/delete-post-comment/' + data,
        // formData,
        {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + bearertoken, // Replace with your actual token
          },
        }
      );

      console.log('Post created:', response.data);
      refreshPost(true);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleSubmitCommit = async (data) => {
    var bearertoken = localStorage.getItem("Logtoken")
    console.log(bearertoken)

    const formData = new FormData();
    formData.append('post_id', data);
    formData.append('comment', comment_com);
    formData.append('mention_email', mention_email);

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
      refreshPost(true);
      SetComment_com("")
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  // const selectItem =(data)=>{
  //   console.log(data);
  //   // comment_com
  //   setMention_email(data.email);
  //   SetComment_com((prev) => prev + data.username);
  //   setShowDropdown(false);
  // }

  const selectItem = (item) => {
    SetComment_com(prev => prev.replace(/@\w*$/, `@${item.username} `));
    setMention_email(item.email);
    setShowDropdown(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    SetComment_com(value);

    const atIndex = value.lastIndexOf("@");
    const hasSpace = value.includes(" ");

    if (atIndex !== -1 && !hasSpace) {
      // Get the text after the "@" character
      const searchText = value.slice(atIndex + 1);

      // Filter items based on the text after "@"
      const filtered = dropdownItems.filter((item) =>
        item.username.toLowerCase().startsWith(searchText.toLowerCase())
      );
      setFilteredItems(filtered);

      // Show dropdown only if we have search text and filtered items
      setShowDropdown(filtered.length > 0);
    } else {
      setShowDropdown(false); // Hide dropdown if no "@" or space encountered
    }
  };

  const handleSubmitShare = async (id) => {
    var bearertoken = localStorage.getItem("Logtoken");
    console.log(bearertoken)


    const formData = new FormData();
    // formData.append('description', description);
    // formData.append('type', selectedStatuss);

    try {
      const response = await axios.post(
        'https://social-network-backend.sharpbody-p.com/public/api/share-post/' + id,
        "",
        {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + bearertoken, // Replace with your actual token
          },
        }
      );

      console.log('Post created:', response.data);
      refreshPost(true);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };
  return (
    <>
      <div className='main-box-timeline'>
        {post.map((item, index) => (
          <div key={index} className='div-box'>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              {/* <Avatar sx={{ marginRight: '12px' }} /> */}
              {info ? <img style={{
                width: "35px",
                borderRadius: "70px",
                height: "35px",
                marginRight: "10px"
              }} src={info?.data?.user_information?.profile_image} alt='wait' /> :
                <Avatar sx={{ marginRight: '12px' }} />}
              <Box>
                <Typography variant="body1" style={{ cursor: "pointer" }} onClick={() => { handleNavigateTo(item.user.id) }} fontWeight="bold">{item?.title}</Typography>
                <Typography variant="caption" color="textSecondary">{item.created_at}</Typography>
              </Box>
              <Box sx={{ marginLeft: 'auto' }}>
                <IconButton onClick={handleMenuClick} size="small">
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={() => { handleMenuClose("", "") }}
                >
                  <MenuItem onClick={() => handleMenuClose('delete', item.id)}>Delete</MenuItem>
                  <MenuItem onClick={() => handleMenuClose('favourite', item.id)}>Favourite</MenuItem>
                </Menu>
              </Box>
            </Box>
            {item.original_post && <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px', marginLeft: "7%" }}>
              {/* <Avatar sx={{ marginRight: '12px' }} /> */}
              {item.original_post.user_information?.profile_image ? <img style={{
                width: "35px",
                borderRadius: "70px",
                height: "35px",
                marginRight: "10px"
              }} src={item.original_post.user_information?.profile_image} alt='wait' /> :
                <Avatar sx={{ marginRight: '12px' }} />}
              <Box>
                <Typography variant="body1" style={{ cursor: "pointer" }} onClick={() => { handleNavigateTo(item.original_post.id) }} fontWeight="bold">{item?.original_post.name}</Typography>
                <Typography variant="caption" color="textSecondary">{item.created_at}</Typography>
              </Box>
              <Box sx={{ marginLeft: 'auto' }}>

              </Box>
            </Box>}
            <div className='post-mainbox'>
              <Box sx={{ display: 'flex', alignItems: 'center', padding: '12px', }}>
                {/* <Avatar sx={{ width: '48px', height: '48px', marginRight: '16px' }} /> */}
                <Box>
                  {item?.images.length > 0 && <div className='av-Box-img' style={{ marginBottom: "15px" }}>
                    <img style={{ cursor: "pointer" }} onClick={() => { SetShowPop(true); SetDataPop(item) }} src={item?.images[0]?.image} alt='wait' />
                  </div>}
                  <Typography variant="body2" color="textSecondary">
                    {item.description}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '16px', padding: '8px 0', borderTop: '1px solid #e0e0e0', borderBottom: '1px solid #e0e0e0' }}>
                <Button size="small" sx={{ color: '#007bff', textTransform: 'none' }} onClick={() => { handleSubmitLike(item.id) }}><UilThumbsUp size="18" style={{ marginRight: "5px", position: "relative", top: "-3px" }} color="#000" /> Like {item.likes_count > 0 && item.likes_count}</Button>
                <Button size="small" sx={{ color: '#007bff', textTransform: 'none' }} onClick={() => { SetshowComment(!showComment); SetshowCommentid(item.id) }}>Comment <span style={{
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
                }}>{item.comments.length > 0 ? item.comments.length : "0"}</span></Button>
                <Button size="small" sx={{ color: '#007bff', textTransform: 'none' }} onClick={() => { handleSubmitShare(item.id) }}>Share +</Button>
              </Box>

              {(showComment && showCommentid == item.id) &&
                <>
                  {item.comments.map((com, index) => (
                    <>
                      <Box sx={{ padding: '12px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar sx={{ width: '30px', height: '30px', marginRight: '16px' }} />
                          <p className='comment-text-title'>{com.user.username} <span>commented {com.created_at}</span></p>
                        </Box>
                        <Box className="comment-text-main">
                          <Typography variant="body2" className='comment-text-box'>
                            {editcom ?
                              <>
                                <TextField
                                  fullWidth
                                  onChange={(e) => { SetComment_com1(e.target.value) }}
                                  variant="outlined"
                                  size="small"
                                  value={comment_com1}
                                  InputProps={{
                                    sx: {
                                      borderRadius: '50px',
                                      fontSize: "10px",
                                      width: "100%"
                                    },
                                  }}
                                />
                                <div style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "10px",
                                  justifyContent: "end"
                                }}><button onClick={() => { SetEditcom(false) }} style={{
                                  backgroundColor: "transparent",
                                  border: "solid 1px #000",
                                  fontSize: "12px",
                                  padding: "2px 10px",
                                  borderRadius: "10px",
                                  marginTop: "10px",
                                  display: "block",
                                  cursor: "pointer"
                                }}>Cancel</button>
                                  <button onClick={() => { handleSubmitUpdatecom(com.id) }} style={{
                                    backgroundColor: "transparent",
                                    border: "solid 1px #000",
                                    fontSize: "12px",
                                    padding: "2px 10px",
                                    borderRadius: "10px",
                                    marginTop: "10px",
                                    display: "block",
                                    cursor: "pointer"
                                  }}>Send</button></div>
                              </> : com.comment}
                          </Typography>
                        </Box>
                      </Box >
                      <div style={{ marginLeft: "40px", marginTop: "-12px" }}>
                        <Button size="small" sx={{ color: '#000', textTransform: 'none' }} onClick={() => { SetEditcom(!editcom); SetComment_com1(com.comment) }}>Edit</Button>
                        <Button size="small" sx={{ color: '#000', textTransform: 'none' }} onClick={() => { handleSubmitDelete(com.id) }}>Delete</Button>
                      </div>
                    </>
                  ))}
                  <CardContent sx={{ display: 'flex', alignItems: 'center', padding: '12px 16px', marginLeft: "5%" }}>
                    <Avatar sx={{ marginRight: '12px', height: "30px", width: "30px" }} />
                    {/* <TextField
                      fullWidth
                      value={comment_com}
                      onChange={(e) => {
                        console.log(e.target.value.includes("@") && !mention_email);
                        if (e.target.value.includes("@") && !mention_email) {
                          setShowDropdown(true);
                          SetComment_com(e.target.value);
                        } else {
                          setShowDropdown(false);
                          SetComment_com(e.target.value);
                        }
                      }}
                      variant="outlined"
                      size="small"
                      InputProps={{
                        sx: {
                          borderRadius: '50px',
                          fontSize: "10px",
                          width: "75%"
                        },
                      }}
                    />
                    {showDropdown && (
                      <div style={styles.dropdown}>
                        <ul style={styles.dropdownList}>
                          {dropdownItems.map((item, index) => (
                            <li
                              key={index}
                              onClick={() => selectItem(item)}
                              style={styles.dropdownItem}
                            >
                              {item.username}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )} */}
                    <TextField
                      fullWidth
                      value={comment_com}
                      onChange={handleInputChange}
                      variant="outlined"
                      size="small"
                      InputProps={{
                        sx: {
                          borderRadius: "50px",
                          fontSize: "10px",
                          width: "75%"
                        }
                      }}
                    />
                    {showDropdown && (
                      <div style={styles.dropdown}>
                        <ul style={styles.dropdownList}>
                          {filteredItems.map((item, index) => (
                            <li
                              key={index}
                              onClick={() => selectItem(item)}
                              style={styles.dropdownItem}
                            >
                              {item.username}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                  <div className='comment-btns'>
                    <button style={{ cursor: "pointer" }} onClick={() => { handleSubmitCommit(item.id) }}>
                      Post
                    </button>
                    <button style={{ cursor: "pointer" }} onClick={() => { SetshowComment(false) }}>
                      Cancel
                    </button>
                  </div>
                </>
              }
            </div>
          </div>))}

      </div>
      <ToastContainer />
    </>
  );
};
const styles = {
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "300px",
    border: "1px solid #ccc",
    backgroundColor: "white",
    zIndex: 1,
    marginTop: "-45px",
    marginLeft: "15%",
  },
  dropdownList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  dropdownItem: {
    padding: "10px",
    cursor: "pointer",
  },
  dropdownItemHover: {
    backgroundColor: "#f0f0f0",
  },
};
export default Timeline;
{/* <div className='div-box'>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <Avatar sx={{ marginRight: '12px' }} />
          <Box>
            <Typography variant="body1" fontWeight="bold">Abrar became a registered member</Typography>
            <Typography variant="caption" color="textSecondary">3 days, 5 hours ago</Typography>
          </Box>
          <Box sx={{ marginLeft: 'auto' }}>
            <IconButton onClick={handleMenuClick} size="small">
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Action 1</MenuItem>
              <MenuItem onClick={handleMenuClose}>Action 2</MenuItem>
            </Menu>
          </Box>
        </Box>
        <div className='post-mainbox'>
          <Box sx={{ padding: '12px', }}>
            <div className='av-Box'>
              <div className='av-sub-box'></div>
              <div className='Ava-flex'>
                <Avatar className='Ava-av-sx' sx={{ width: '100px', height: '100px', marginRight: '16px' }} />
                <Box className="Ava-av-sxx">
                  <Typography variant="h6">Abrar</Typography>
                  <Typography variant="body2" color="textSecondary">@ abrarahmed111</Typography>
                </Box>
              </div>
            </div>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '16px', padding: '8px 0', borderTop: '1px solid #e0e0e0' }}>
            <Button size="small" sx={{ color: '#007bff', textTransform: 'none' }}>Like</Button>
            <Button size="small" sx={{ color: '#007bff', textTransform: 'none' }}>Comment</Button>
            <Button size="small" sx={{ color: '#007bff', textTransform: 'none' }}>Share</Button>
          </Box>
        </div>
      </div>
      <div className='div-box'>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <Avatar sx={{ marginRight: '12px' }} />
          <Box>
            <Typography variant="body1" fontWeight="bold">Abrar became a registered member</Typography>
            <Typography variant="caption" color="textSecondary">3 days, 5 hours ago</Typography>
          </Box>
          <Box sx={{ marginLeft: 'auto' }}>
            <IconButton onClick={handleMenuClick} size="small">
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Action 1</MenuItem>
              <MenuItem onClick={handleMenuClose}>Action 2</MenuItem>
            </Menu>
          </Box>
        </Box>
        <div className='post-mainbox'>
          <Box sx={{ padding: '12px', }}>
            <div className='av-Box-img'>
              <img src='https://buzzinguniverse.com/wp-content/uploads/rtMedia/users/1326/2024/08/d788ec52-7337-42d5-b771-d1d8a286d999.jpeg' alt='wait' />
            </div>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '16px', padding: '8px 0', borderTop: '1px solid #e0e0e0' }}>
            <Button size="small" sx={{ color: '#007bff', textTransform: 'none' }}>Like</Button>
            <Button size="small" sx={{ color: '#007bff', textTransform: 'none' }}>Comment</Button>
            <Button size="small" sx={{ color: '#007bff', textTransform: 'none' }}>Share</Button>
          </Box>
        </div>
      </div> */}