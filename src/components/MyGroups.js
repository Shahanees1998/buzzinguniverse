import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function MyGroups() {
    const navigate = useNavigate();
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch groups from the API
        const fetchGroups = async () => {
            var bearertoken = localStorage.getItem("Logtoken")
            try {
                const response = await fetch('https://social-network-backend.sharpbody-p.com/public/api/get-my-groups', {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer '+ bearertoken, // Add your actual bearer token here
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                setGroups(data.data);  // Assuming the API response is in a valid format for groups
                console.log(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching groups:', error);
                setLoading(false);
            }
        };

        fetchGroups();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    const handleNavigateTo = (data) => {
        navigate('/groupProfile', { state: { data } });
    };
    return (
        <>
            <div className="card-container">
                {groups.length > 0 ? (
                    groups.map((group) => (
                        <div className="card" key={group.id}>
                            <div className="card-image">
                                <div className="image-placeholder" style={{ backgroundImage: `url(${group.image || 'https://buzzinguniverse.com/wp-content/plugins/buddypress/bp-core/images/mystery-group.png'})`,backgroundSize: "100% 100%" }}>
                                    {/* Placeholder div if image is not available */}
                                    {!group.image && <div className="image-placeholder-content">No Image</div>}
                                </div>
                                {group.image && (
                                    <img className='Group_img' src={group.image} alt={group.name} />
                                )}
                            </div>
                            <div className="card-body">
                                <h3 className="card-title">{group.name}</h3>
                                <p className="card-subtitle">Active {group.last_active}</p>
                                <div className="card-status">
                                    <div className="status-icon">
                                        <img className='Group_img_1' src={group.status_icon || 'https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-35.png'} alt='group status' />
                                    </div>
                                    <span>{group.privacy} Group / {group.members.length} members</span>
                                </div>
                                <button className="view-group-button" onClick={()=>{handleNavigateTo(group)}}>Manage Group</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No groups found</p>
                )}
            </div>
        </>
    );
}

export default MyGroups;
