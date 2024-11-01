import React from 'react';


const NoMembersFound = () => {
    return (
        <div className="no-members-container">
            <div className="no-members-message">
                <span className="no-members-icon">🔍</span> {/* Replace with an appropriate icon */}
                <span>Sorry, no data found.</span>
            </div>
        </div>
    );
};

export default NoMembersFound;
