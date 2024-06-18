import React from 'react';
import './GoodThings.css';
import img1 from '../assets/images/good1.png'; 
import img2 from '../assets/images/good2.png'; 
import img3 from '../assets/images/good3.png';

const GoodThings = () => {
  const goodThingsData = [
    {
      img: img1,
      title: 'Organize your daily job enhance your life performance',
      link: 'read more'
    },
    {
      img: img2,
      title: 'Mark one activity as done makes your brain understands the power of doing.',
      link: 'read more'
    },
    {
      img: img3,
      title: 'Careful with misunderstanding the difference between a list of things and a list of desires.',
      link: 'leia mais'
    }
  ];

  return (
    <section className="good-things-section">
      <h2 className="section-title">good things</h2>
      <div className="good-things-container">
        {goodThingsData.map((item, index) => (
          <div className="good-card" key={index}>
            <img src={item.img} alt={item.title} className="good-card-img" />
            <div className="good-card-content">
              <h3 className="good-card-title">{item.title}</h3>
              <a href="#" className="good-card-link">{item.link}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoodThings;
