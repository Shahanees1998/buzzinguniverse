import React from 'react';
// import './Content.css';

function Content() {
  return (
    <div className="nutrition-content">
      <img src="/path-to-your-image.jpg" alt="Healthy food" className="nutrition-main-image" />
      <div className="nutrition-social-share">
        <button>Twitter</button>
        <button>LinkedIn</button>
        <button>Reddit</button>
      </div>

      <div className="nutrition-article">
        <h2>Why Do We Need a Nutritious Diet?</h2>
        <p>
          Adequate nutrition is essential for long-term growth at all stages of life...
          [Include the content text here]
        </p>

        <h2>The Role of Nutrition on Human Health</h2>
        <h3>1. Protein</h3>
        <p>Proteins are small groups of molecules...</p>

        {/* Repeat for all sections */}
      </div>
    </div>
  );
}

export default Content;
