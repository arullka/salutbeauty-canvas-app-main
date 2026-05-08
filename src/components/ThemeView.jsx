import React, { useState} from 'react';
import { CapsuleView } from './CapsuleView';
import { ITEMS_DATABASE } from '../data/items';

export const ThemeView = (props) => {
  const { category, themes, onBack } = props;
  const [selectedTheme, setSelectedTheme] = useState('study');
  const [selectedCapsule, setSelectedCapsule] = useState(null);

  const getCapsules = () => {
    return ITEMS_DATABASE.filter(
      item => item.type === 'capsule' && 
               item.category === category && 
               item.theme === selectedTheme
    );
  };

  const getCategoryName = () => {
    const names = { outfit: 'Образы', accessories: 'Аксессуары', care: 'Макияж' };
    return names[category];
  };

  if (selectedCapsule) {
    return (
      <CapsuleView
        capsule={selectedCapsule}
        category={category}
        onBack={() => setSelectedCapsule(null)}
      />
    );
  }

  return (
  <div className="theme-selection">
    <h2>Образы</h2>
    
    <div className="bottom-row">
      <button className="back-btn" onClick={onBack}>← Назад</button>

      <div className="themes-grid">
        <button className="theme-btn">Учеба</button>
        <button className="theme-btn">Работа</button>
        <button className="theme-btn">Вечеринка</button>
        <button className="theme-btn">Свидание</button>
        <button className="theme-btn">Спорт</button>
      </div>
    </div>
  </div>
  );
};