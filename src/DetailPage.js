import React, { useState } from 'react';
import LoginSection from './components/LoginSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const DetailPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className="nutrition-container">
        <h1 className="nutrition-heading">The Role of Nutrition: How to Stay Healthy</h1>
        <p className="nutrition-date">📅 November 14, 2023</p>
        <img
          className="nutrition-image"
          src="https://via.placeholder.com/800x400" // Replace with your image path or URL
          alt="Nutrition"
        />
        <div className="nutrition-social-buttons">
          <button className="nutrition-twitter">Twitter</button>
          <button className="nutrition-linkedin">LinkedIn</button>
          <button className="nutrition-reddit">Reddit</button>
        </div>
        <p className="nutrition-paragraph">
          Protein, minerals, fats, vitamins, fiber, carbohydrates, and water are all essential nutrients for humans.
          Typically, these nutrients serve a specific purpose in the body’s metabolic functions. Are you curious
          about the role of nutrition in health maintenance? Continue reading for a more in-depth explanation of
          the subject at hand.
        </p>
        <h2 className="nutrition-subheading">Why Do We Need a Nutritious Diet?</h2>
        <p className="nutrition-paragraph">
          Adequate nutrition is essential for long-term growth at all stages of life. Nutrition’s role begins during
          the embryonic stage when cellular formation occurs. This is why doctors advise pregnant women to eat
          fresh fruits and vegetables high in micronutrients. Furthermore, a poor diet can cause functional
          changes such as mental imbalance, stress, poor eyesight, infectious diseases, and a shorter lifespan.
          Selecting the appropriate food in the proper proportion becomes critical; here is an explanation of the
          significance of nutrition in health maintenance.
        </p>

      </div>
      <div className="comment-section">
        <h3 className="comment-title">1 Comment</h3>
        <div className="comment-wrapper">
          <div className="comment-author">
            <img
              src="https://via.placeholder.com/50"
              alt="Author"
              className="author-image"
            />
            <div className="author-info">
              <span className="author-name">Shanti</span>
              <span className="comment-date">November 14, 2023 at 10:40 am</span>
            </div>
          </div>
          <p className="comment-text">
            The article emphasizes the significance of nutrition in maintaining good health.
          </p>
          <a href="#login" className="reply-link" onClick={toggleModal}>Log in to Reply</a>
        </div>
        <div className="reply-section">
          <h3 className="reply-title width-reply-txt">Leave a Reply</h3>
          <p className="login-prompt">You must be <span onClick={toggleModal}>logged in</span> to post a comment.</p>
        </div>
      </div>
      
      {isModalOpen && (
        <>
          <FontAwesomeIcon
            icon={faTimes}
            className="close-icon-main"
            onClick={toggleModal}
          />
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>access cube</h2>
              <LoginSection />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailPage;
