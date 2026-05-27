import React from 'react';

export const CategoryCard = (props) => {
  const { category, onClick } = props;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div className="category-card sn-section-item" tabIndex={-1} onClick={onClick} onKeyDown={handleKeyDown}>
      <div className="category-icon-wrapper">
        <img src={category.icon} alt={category.name} className="category-icon" />
      </div>
      <h3 className="category-title">{category.name}</h3>
    </div>
  );
};