import React, { useState } from 'react';
import { CategoryCard } from '../components/CategoryCard';
import { LibraryModal } from '../components/LibraryModal';
import '../App.css';

const CATEGORIES = [
  { id: 'outfit', name: 'Образ', icon: '👗' },
  { id: 'accessories', name: 'Аксессуары', icon: '💍' },
  { id: 'makeup', name: 'Уход', icon: '💄' },
];

export const MainScreen = (props) => {
  // eslint-disable-next-line
  const { state, assistant } = props;
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleCloseModal = () => {
    setSelectedCategory(null);
  };

  return (
    <main className="container">
      <div className="header">
        <h1>✨ SalutBeauty</h1>
        <p className="subtitle">Персональный ассистент красоты от Сбера</p>
        <p style={{ fontSize: '20px', marginTop: '10px', color: 'rgba(158, 121, 232, 0.6)' }}>
          Красотка, что наденем сегодня?
        </p>
      </div>

      <div className="categories-grid">
        {CATEGORIES.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            isActive={selectedCategory === category.id}
            onClick={() => handleCategoryClick(category.id)}
          />
        ))}
      </div>

      {selectedCategory && (
        <LibraryModal
          category={selectedCategory}
          onClose={handleCloseModal}
        />
      )}

    </main>
  );
};