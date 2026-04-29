import React from 'react';

export const CategoryCard = (props) => {
  const { category, isActive, onClick } = props;

  return (
    <div
      className={`category-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
      style={{ 
        backgroundImage: category.image ? `url(${category.image})` : 'none' 
      }}
    >
      <div className="card-overlay"></div>
      
      <div className="card-content">
        <img src={category.icon} alt={category.name} className="category-icon" />
        <h3 className="category-title">{category.name}</h3>
      </div>
    </div>
  );
};