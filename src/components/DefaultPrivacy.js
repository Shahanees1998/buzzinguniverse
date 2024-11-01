import React, { useState } from 'react';

const DefaultPrivacy = () => {
  const [privacy, setPrivacy] = useState('Private');

  return (
    <div>
      <h3>Default Privacy</h3>
      <div style={{ borderBottom: '2px solid navy', width: '100px', marginBottom: '15px' }}></div>
      
      <div style={{ marginBottom: '10px' }}>
        <input 
          type="radio" 
          id="private" 
          name="privacy" 
          value="Private" 
          checked={privacy === 'Private'} 
          onChange={(e) => setPrivacy(e.target.value)} 
        />
        <label htmlFor="private" style={{ marginLeft: '8px' }}>
          Private - Visible only to the user
        </label>
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <input 
          type="radio" 
          id="friends" 
          name="privacy" 
          value="Friends" 
          checked={privacy === 'Friends'} 
          onChange={(e) => setPrivacy(e.target.value)} 
        />
        <label htmlFor="friends" style={{ marginLeft: '8px' }}>
          Friends - Visible to user's friends
        </label>
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <input 
          type="radio" 
          id="loggedInUsers" 
          name="privacy" 
          value="Logged in Users" 
          checked={privacy === 'Logged in Users'} 
          onChange={(e) => setPrivacy(e.target.value)} 
        />
        <label htmlFor="loggedInUsers" style={{ marginLeft: '8px' }}>
          Logged in Users - Visible to registered users
        </label>
      </div>
    </div>
  );
};

export default DefaultPrivacy;
