import React from 'react';

export const CategoryCard = (props) => {
  const { category, onClick } = props;

  return (
    <div className="category-card" onClick={onClick}>
      <div className="category-icon-wrapper">
        <img src={category.icon} alt={category.name} className="category-icon" />
      </div>
      <h3 className="category-title">{category.name}</h3>
    </div>
  );
};