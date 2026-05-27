import React, { useState, useEffect } from 'react';
import { useSection, spatnavInstance } from '@salutejs/spatial';
import { CategoryCard } from '../components/CategoryCard';
import { ThemeView } from '../components/ThemeView';
import '../App.css';

const CATEGORIES = [
  { id: 'outfit', name: 'Образ', icon: '/images/icons/dress.png'},
  { id: 'accessories', name: 'Аксессуары', icon: '/images/icons/woman-bag.png'},
  { id: 'care', name: 'Макияж', icon: '/images/icons/lips.png'},
];

const THEMES = [
  { id: 'study', name: 'Учёба' },
  { id: 'work', name: 'Работа' },
  { id: 'party', name: 'Вечеринка' },
  { id: 'date', name: 'Свидание' },
  { id: 'sport', name: 'Спорт' },
];

const CategoriesSection = ({ onSelectCategory }) => {
  const [mainSectionProps] = useSection('mainCategories');

  return (
    <div {...mainSectionProps}>
      <div className="main-categories">
        {CATEGORIES.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={() => onSelectCategory(category.id)} 
          />
        ))}
      </div>
    </div>
  );
};

export const MainScreen = (props) => {
  const { state } = props;
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (!selectedCategory) {
      const timer = setTimeout(() => {
        spatnavInstance.focus('mainCategories');
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [selectedCategory]);

  useEffect(() => {
    const handlePopState = (event) => {
      if (!event.state || !event.state.category) {
        setSelectedCategory(null);
      } else {
        setSelectedCategory(event.state.category);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    window.history.pushState({ category: categoryId }, '');
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <main className="container">
      <div className="header">
        <h1>SmartBeauty</h1>
        <h3>Персональный ассистент красоты от Сбера</h3>
        <div className="subtitle">
          <h2>Красотка, что наденем сегодня?</h2>
        </div>
      </div>

      {}
      {!selectedCategory ? (
        <CategoriesSection onSelectCategory={handleCategorySelect} />
      ) : (
        <ThemeView
          category={selectedCategory}
          themes={THEMES}
          onBack={handleBack}
        />
      )}
    </main>
  );
};