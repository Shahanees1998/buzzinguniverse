import React from 'react';
import image1 from "../assets/image1.png";
import { useNavigate } from 'react-router-dom';

const articles = [
  { title: "The Role of Nutrition: How to Stay Healthy", date: "November 14, 2023", image:image1},
  { title: "NFTs in Reshaping Business Strategies", date: "November 14, 2023", image:"https://buzzinguniverse.com/wp-content/uploads/2023/11/08909-300x154.png" },
  { title: "The Art of Building a Strong Brand and Attracting Customers", date: "November 14, 2023",image:"https://buzzinguniverse.com/wp-content/uploads/2023/11/098090-300x154.png" },
  { title: "How to Start and Grow a Successful Online Store", date: "December 1, 2023", image:"https://buzzinguniverse.com/wp-content/uploads/2023/12/How-to-Start-and-Grow-a-Successful-Online-Store-300x167.png" },
  { title: "5 Desserts Your Guests Will Love at a Holiday Dinner", date: "December 15, 2023", image:"https://buzzinguniverse.com/wp-content/uploads/2023/12/5-Desserts-Your-Guests-Will-Love-At-a-Holiday-Dinner-300x200.jpg" },
];

function Articles() {
  const navigate = useNavigate();

  const handleNavigateTo = (data) => {
    navigate(data);
  };
  return (
    <section className="articles">
      {articles.map((article, index) => (
        <div onClick={()=>{handleNavigateTo("details")}} key={index} className="article">
          <img src={article.image} alt='wait' />
          <h2>{article.title}</h2>
          <div className='articles-div'>
            <p>{article.date}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Articles;
