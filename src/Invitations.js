import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
function Invitations() {

    const [activeTab, setActiveTab] = useState('Send Invites');
    const [email, setEmail] = useState('');
    const [invites, setInvites] = useState([]);
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    const handleSendInvite = async () => {
        var bearertoken = localStorage.getItem("Logtoken")
        console.log(bearertoken)

        const formData = new FormData();
        formData.append('email', email);

        try {
            const response = await axios.post(
                'https://social-network-backend.sharpbody-p.com/public/api/send-invitation',
                formData,
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + bearertoken, // Replace with your actual token
                    },
                }
            );

            console.log('Post created:', response.data);
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
            console.error('Error creating post:', error);
            toast.error("The selected email is invalid.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    const handleInvite = async () => {
        var bearertoken = localStorage.getItem("Logtoken")
        console.log(bearertoken)

        try {
            const response = await axios.get(
                'https://social-network-backend.sharpbody-p.com/public/api/get-my-invitations',
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + bearertoken, // Replace with your actual token
                    },
                }
            );

            console.log('get invites    ', response.data.data);
            setInvites(response.data.data);

        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    useEffect(() => {
        handleInvite()
    }, []);

    return (
        <>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://buzzinguniverse.iqspark.org/css_file/invite.css"
                />
            </Helmet>
            <div className='header-list-sec'>
                <p
                    className={activeTab === 'Send Invites' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Send Invites')}
                >
                    Send Invites
                </p>
                <p
                    className={activeTab === 'Pending Invites' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Pending Invites')}
                >
                    Pending Invites
                </p>
            </div>
            {/* Conditionally render the content based on the active tab */}
            <div className='tab-content'>
                {activeTab === 'Send Invites' && <div className='actity-tabs'>
                    <div className="no-members-container">
                        <div className="no-members-message">
                            <span className="no-members-icon">🔍</span>
                            <span>
                                Fill out the form below to invite a new user to join this site. Upon submission of the form, an email will be sent to the invitee containing a link to accept your invitation. You may also add a custom message to the email.</span>
                        </div>
                    </div>
                    <div className="login-form">
                        <input type="text" style={{ borderRadius: "95px", padding: "16px" }} value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                        {/* <textarea type="text" placeholder="Add a personalized message to the invitation (optional)" /> */}
                        <button onClick={() => { handleSendInvite() }} style={{
                            width: "30%",
                            display: "block",
                            margin: "0 auto",
                            marginTop: "5%"
                        }}>Send</button>
                    </div>
                </div>}
                {activeTab === 'Pending Invites' &&
                    <div>
                        <div className="profile-col-main" style={{ width: "70%", marginLeft: "3%", marginTop: "5%" }}>

                            <h2 className="bp-screen-reader-text">
                                Invitations	</h2>
                            <form action="" method="post" id="invitations-bulk-management" className="standard-form">
                                <table className="invitations" style={{ marginLeft: "30px", marginTop: "30px" }}>
                                    <thead>
                                        <tr>

                                            <th className="title">Invitee</th>
                                            <th className="content">Message</th>
                                            <th className="sent">Sent</th>
                                            <th className="accepted">Accepted</th>
                                            <th className="date">Date Modified</th>
                                            <th className="actions">Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {invites.map(user => (
                                            <tr>
                                                <td className="invitation-invitee">{user?.email}</td>
                                                <td className="invitation-content">working</td>
                                                <td className="invitation-sent">Yes</td>
                                                <td className="invitation-accepted">{user?.status == "Pending" ? "No" : "Yes"}</td>
                                                <td className="invitation-date-modified">{user?.created_at}</td>
                                                <td className="invitation-actions" style={{cursor:"pointer"}} onClick={() => handleTabClick('Send Invites')}>Resend</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>



                            </form>

                        </div>
                    </div>
                }
            </div >
            <ToastContainer />
        </>
    );
}

export default Invitations;

