import React, { useState } from 'react';

const Search = () => {
  const [whatsNew, setWhatsNew] = useState('');
  const [privacy, setPrivacy] = useState('0');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log({ whatsNew, privacy });
  };

  return (
    <div id="bp-nouveau-activity-form" className="activity-update-form">
      <form name="whats-new-form" method="post" id="whats-new-form" className="activity-form" onSubmit={handleSubmit}>
        <div id="whats-new-avatar">
          <a href="/members/shazzy/">
            <img
              src="https://buzzinguniverse.com/wp-content/uploads/avatar-privacy/cache/custom/1/131ecfcd673b203978922cbf323f9085bbba409c1277a70d6a489fffb7a202f4-50.png"
              className="avatar user-1398-avatar avatar-50 photo"
              width="50"
              height="50"
              alt="Profile photo of Shazzy"
            />
          </a>
        </div>
        <div id="whats-new-content">
          <div id="whats-new-textarea" style={{ position: 'relative' }}>
            <textarea
              name="whats-new"
              cols="50"
              rows="4"
              placeholder="What's new, Shazzy?"
              aria-label="Post what's new"
              id="whats-new"
              className="bp-suggestions"
              style={{ resize: 'none', height: '50px', backgroundColor: '#156e81', color: 'white' }}
              value={whatsNew}
              onChange={(e) => setWhatsNew(e.target.value)}
            />
          </div>
        </div>
        <div className="rtmedia-container rtmedia-uploader-div" style={{ opacity: 1, display: 'none', visibility: 'visible' }}>
          <div className="rtmedia-uploader no-js">
            <div id="rtmedia-uploader-form">
              <div className="rtm-tab-content-wrapper">
                <div id="rtm-file_upload-ui" className="rtm-tab-content">
                  <div className="rtmedia-plupload-container rtmedia-container clearfix">
                    <div id="rtmedia-action-update" className="clearfix">
                      <div className="rtm-upload-button-wrapper">
                        <div id="rtmedia-whts-new-upload-container" style={{ position: 'relative' }}>
                          <input
                            type="file"
                            multiple
                            accept="image/jpeg,.jpg,.jpeg,image/png,.png,image/gif,.gif,video/mp4,.mp4,audio/mpeg,.mp3"
                            style={{ position: 'absolute', top: '0px', left: '0px', width: '100%', height: '100%' }}
                          />
                        </div>
                        <button type="button" className="rtmedia-add-media-button" title="Attach Media" style={{ position: 'relative', zIndex: 1 }}>
                          <span className="dashicons dashicons-admin-media"></span>
                          <span className="button-text">Attach media</span>
                        </button>
                      </div>
                      <span style={{ fontSize: '12px', opacity: 0.7 }}>Max. File Size: 512M</span>
                    </div>
                    <select
                      id="rtSelectPrivacy"
                      name="privacy"
                      className="rtm-form-select privacy"
                      value={privacy}
                      onChange={(e) => setPrivacy(e.target.value)}
                      style={{ backgroundColor: '#fff', border: '1px solid silver', marginBottom: '10px' }}
                    >
                      <option value="60">Private</option>
                      <option value="40">Friends</option>
                      <option value="20">Logged in Users</option>
                      <option value="0">Public</option>
                    </select>
                  </div>
                </div>
              </div>
              <input type="submit" id="rtMedia-start-upload" name="rtmedia-upload" value="Upload" style={{ display: 'none' }} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
