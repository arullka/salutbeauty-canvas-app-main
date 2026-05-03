import React, { useState, useEffect } from 'react';
import { CategoryCard } from '../components/CategoryCard';
import { ThemeView } from '../components/ThemeView';
import '../App.css';

const CATEGORIES = [
  { id: 'outfit', name: 'Образ', icon: '/images/icons/dress.png', image:'/images/main/outfit.jpg'},
  { id: 'accessories', name: 'Аксессуары', icon: '/images/icons/woman-bag.png', image:'/images/main/bags.jpg'},
  { id: 'care', name: 'Макияж', icon: '/images/icons/lips.png', image:'/images/main/makeup.webp'},
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
      <div className="header">
        <h1>SalutBeauty</h1>
        <p className="subtitle">Персональный ассистент красоты от Сбера</p>
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