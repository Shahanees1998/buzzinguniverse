import React from 'react';
import image1 from "../assets/robot-h-576x1024.jpg"
function ExploreSection() {
  return (
    <section className="explore-section">
      <div>
        <p className='explore-p1'>Explore an online<br/> community</p>
        <h1 className='explore-h1'>Post ads!</h1>
        <p className='explore-p2'>Search for jobs</p>
      </div>
      <div>
        <img src={image1} alt='wait' />
      </div>
    </section>
  );
}

export default ExploreSection;
