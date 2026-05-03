import React from 'react';

export const CategoryCard = (props) => {
  const { category, onClick } = props;

  return (
    <div className="category-card" onClick={onClick}>
      <h3>{category.name}</h3>
    </div>
  );
};