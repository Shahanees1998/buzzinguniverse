import React from 'react';
// import './Footer.css';

function Footer() {
  return (
    <footer className="nutrition-footer">
    <div className="nutrition-comment-section">
      <h3>1 Comment</h3>
      <div className="nutrition-comment">
        <p><strong>Shanti</strong> - November 14, 2023 at 10:40 am</p>
        <p>The article emphasizes the significance of nutrition in maintaining good health.</p>
      </div>
      <div className="nutrition-leave-reply">
        <h4>Leave a Reply</h4>
        <p>You must be logged in to post a comment.</p>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
