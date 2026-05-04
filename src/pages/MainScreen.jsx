import React, { useState, useEffect } from 'react';
import { CategoryCard } from '../components/CategoryCard';
import { ThemeView } from '../components/ThemeView';
import '../App.css';

const CATEGORIES = [
  { id: 'outfit', name: 'Образ', icon: '/images/icons/dress.png'},
  { id: 'accessories', name: 'Аксессуары', icon: '/images/icons/woman-bag.png'},
  { id: 'care', name: 'Макияж', icon: '/images/icons/lips.png'},
];

const THEMES = [
  { id: 'study', name: 'Учеба' },
  { id: 'work', name: 'Работа' },
  { id: 'party', name: 'Вечеринка' },
  { id: 'date', name: 'Свидание' },
  { id: 'sport', name: 'Спорт' },
];

export const MainScreen = (props) => {
  const { state } = props;
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (state?.selectedCategory) {
      setSelectedCategory(state.selectedCategory);
    }
  }, [state?.selectedCategory]);

  const handleBack = () => {
    setSelectedCategory(null);
  };

  return (
    <main className="container">
    <div class="header">
      <h1>SalutBeauty</h1>
      <h3>Персональный ассистент красоты от Сбера</h3>
      <div class="subtitle">
        <h2>Красотка, что наденем сегодня?</h2>
      </div>
    </div>

      {!selectedCategory && (
        <div className="main-categories">
          {CATEGORIES.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => setSelectedCategory(category.id)}
            />
          ))}
        </div>
      )}

      {selectedCategory && (
        <ThemeView
          category={selectedCategory}
          themes={THEMES}
          onBack={handleBack}
        />
      )}
    </main>
  );
};