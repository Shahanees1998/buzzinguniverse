import React, { useState, useEffect } from 'react';
import Sendsms from './components/Sendsms';
import axios from 'axios';

function Messages() {
    const [activeTab, setActiveTab] = useState('Inbox');
    const [allInbox, setAllInbox] = useState([]);
    const [allStarred, setAllStarred] = useState([]); // Track Starred conversations
    const [activeConversation, setActiveConversation] = useState(''); // Track active conversation
    const [messages, setMessages] = useState([]); // Track conversation messages in Starred
    const [messageInput, setMessageInput] = useState(''); // Track input for new messages

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    // Fetch inbox conversations
    const handleInbox = async () => {
        const bearertoken = localStorage.getItem('Logtoken');
        try {
            const response = await axios.get(
                'https://social-network-backend.sharpbody-p.com/public/api/get-user-converstaions-list',
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${bearertoken}`,
                    },
                }
            );
            setAllInbox(response.data);
        } catch (error) {
            console.error('Error fetching inbox:', error);
        }
    };

    // Fetch starred conversations (this is similar to inbox, customize if necessary)
    const handleStarred = async () => {
        const bearertoken = localStorage.getItem('Logtoken');
        try {
            const response = await axios.get(
                'https://social-network-backend.sharpbody-p.com/public/api/get-user-converstaions-list', // Replace if needed
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${bearertoken}`,
                    },
                }
            );
            console.log(response.data); // Assuming same structure as inbox
            setAllStarred(response.data); // Assuming same structure as inbox
        } catch (error) {
            console.error('Error fetching starred:', error);
        }
    };

    // Fetch conversation with a specific user in Starred
    const fetchConversation = async (reciever_id) => {
        const bearertoken = localStorage.getItem('Logtoken');
        try {
            const response = await axios.get(
                `https://social-network-backend.sharpbody-p.com/public/api/get-all-conversation?reciever_id=${reciever_id}`,
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${bearertoken}`,
                    },
                }
            );
            console.log(response.data)
            setMessages(response.data.data);
            setActiveConversation(reciever_id);
        } catch (error) {
            console.error('Error fetching conversation:', error);
        }
    };

    // Send a message in Starred conversation
    const sendMessage = async () => {
        const bearertoken = localStorage.getItem('Logtoken');
        if (!messageInput) return; // Don't send if input is empty

        try {
            const response = await axios.post(
                'https://social-network-backend.sharpbody-p.com/public/api/chat',
                {
                    reciever_id: activeConversation,
                    message: messageInput,
                },
                {
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${bearertoken}`,
                    },
                }
            );

            // Add the sent message to the messages list
            setMessages((prevMessages) => [...prevMessages, response.data]);
            setMessageInput(''); // Clear input after sending
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    useEffect(() => {
        handleInbox();
        handleStarred();
    }, []);

    return (
        <>
            <div className='header-list-sec'>
                <p
                    className={activeTab === 'Inbox' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Inbox')}
                >
                    Inbox
                </p>
                <p
                    className={activeTab === 'Starred' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Starred')}
                >
                    Starred
                </p>
                <p
                    className={activeTab === 'Compose' ? 'active_profile_act' : ''}
                    onClick={() => handleTabClick('Compose')}
                >
                    Compose
                </p>
            </div>

            <div className='tab-content'>
                {/* Inbox Tab */}
                {activeTab === 'Inbox' && (
                    <div className='actity-tabs'>
                        {allInbox.length < 1 ? (
                            <div className='no-members-message'>
                                <span className='no-members-icon'>🔍</span>
                                <span>You have no outstanding group invites.</span>
                            </div>
                        ) : (
                            <div style={{ width: '100%' }}>
                                <div className='user-list'>
                                    {allInbox.map((user) => (
                                        <div key={user.id} className='user-item'>
                                            <div className='userList'>
                                                <img
                                                    src={
                                                        user?.user?.profile_image ||
                                                        'https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png'
                                                    }
                                                    alt={user?.user?.username || 'User'}
                                                    className='user-image'
                                                />
                                                <div className='inbox-message'>
                                                    <p>{user?.user?.username}</p>
                                                    <p
                                                        style={{
                                                            fontSize: '12px',
                                                            color: 'gray',
                                                            paddingLeft: '19%',
                                                            paddingTop: '2px',
                                                        }}
                                                    >
                                                        {user?.last_message}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Starred Tab */}
                {activeTab === 'Starred' && (
                    <div className='actity-tabs'>
                        {activeConversation ? (
                            <div className='conversation'>
                                <h3>Conversation</h3>
                                <div className='messages-list'>
                                    {messages.length < 1 ? (
                                        <div>No messages yet</div>
                                    ) : (
                                        messages.map((msg, index) => (
                                            <div key={index} className='message-item'>
                                                <p>
                                                    <strong>{msg?.reciever?.name}:</strong>
                                                    {/* {msg?.message} */}
                                                    {msg.message.map(mss => (
                                                        <span>{mss.message}</span>
                                                    ))}
                                                </p>
                                            </div>
                                        ))
                                    )}
                                </div>

                                {/* Input to send a message */}
                                <div className='send-message'>
                                    <input
                                        type='text'
                                        value={messageInput}
                                        onChange={(e) => setMessageInput(e.target.value)}
                                        placeholder='Type a message...'
                                    />
                                    <button onClick={sendMessage}>Send</button>
                                </div>
                            </div>
                        ) : (
                            <div style={{ width: '100%' }}>
                                <div className='user-list'>
                                    {allStarred.map((user) => (
                                        <div key={user.user.id} className='user-item'>
                                            <div className='userList'>
                                                <img
                                                    src={
                                                        user?.user?.profile_image ||
                                                        'https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-200.png'
                                                    }
                                                    alt={user?.user?.username || 'User'}
                                                    className='user-image'
                                                />
                                                <div className='inbox-message'>
                                                    <p>{user?.user?.username}</p>
                                                    <p
                                                        style={{
                                                            fontSize: '12px',
                                                            color: 'gray',
                                                            paddingLeft: '19%',
                                                            paddingTop: '2px',
                                                        }}
                                                    >
                                                        {user?.last_message}
                                                    </p>
                                                </div>
                                            </div>
                                            <button onClick={() => fetchConversation(user?.user?.id)}>
                                                View
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Compose Tab */}
                {activeTab === 'Compose' && (
                    <div className='actity-tabs'>
                        <Sendsms />
                    </div>
                )}
            </div>
        </>
    );
}

export default Messages;
