import React, { useState } from 'react';

const EmailNotifications = () => {
  // State to track the selection for each notification
  const [notifications, setNotifications] = useState({
    mention: 'yes',
    reply: 'yes',
  });

  // Handler for changing the radio button selection
  const handleOptionChange = (event) => {
    const { name, value } = event.target;
    setNotifications({
      ...notifications,
      [name]: value,
    });
  };

  return (
    <div style={containerStyles}>
      <h2 style={headerStyles}>Email Notifications</h2>
      <p>Set your email notification preferences.</p>

      <table style={tableStyles}>
        <thead>
          <tr>
            <th style={activityHeaderStyles}>Activity</th>
            <th style={headerStyles}>Yes</th>
            <th style={headerStyles}>No</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={activityStyles}>A member mentions you in an update using "@shazzy"</td>
            <td style={radioCellStyles}>
              <input
                type="radio"
                name="mention"
                value="yes"
                checked={notifications.mention === 'yes'}
                onChange={handleOptionChange}
              />
            </td>
            <td style={radioCellStyles}>
              <input
                type="radio"
                name="mention"
                value="no"
                checked={notifications.mention === 'no'}
                onChange={handleOptionChange}
              />
            </td>
          </tr>
          <tr>
            <td style={activityStyles}>A member replies to an update or comment you've posted</td>
            <td style={radioCellStyles}>
              <input
                type="radio"
                name="reply"
                value="yes"
                checked={notifications.reply === 'yes'}
                onChange={handleOptionChange}
              />
            </td>
            <td style={radioCellStyles}>
              <input
                type="radio"
                name="reply"
                value="no"
                checked={notifications.reply === 'no'}
                onChange={handleOptionChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Styles (inline for simplicity)
const containerStyles = {
  maxWidth: '600px',
  margin: 'auto',
  padding: '20px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
};

const headerStyles = {
  textAlign: 'left',
  marginBottom: '20px',
  fontWeight: 'bold',
};

const tableStyles = {
  width: '100%',
  borderCollapse: 'collapse',
};

const activityHeaderStyles = {
  textAlign: 'left',
  paddingBottom: '10px',
};

const activityStyles = {
  padding: '10px 0',
};

const radioCellStyles = {
  textAlign: 'center',
};

export default EmailNotifications;
