import React from 'react';

export const CategoryCard = (props) => {
  const { category, isActive, onClick } = props;

  return (
    <div
      className={`category-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div>
        <div className="category-icon">{category.icon}</div>
        <h3>{category.name}</h3>
      </div>
    </div>
  );
};