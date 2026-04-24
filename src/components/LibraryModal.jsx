import React, { useState, useMemo } from 'react';
import { ItemCard } from './ItemCard';
import { ITEMS_DATABASE } from '../data/items';

const THEMES = [
  { value: 'study', label: 'Учеба' },
  { value: 'work', label: 'Работа' },
  { value: 'party', label: 'Вечеринка' },
  { value: 'date', label: 'Свидание' },
  { value: 'sport', label: 'Спорт' },
];

export const LibraryModal = (props) => {
  const { category, onClose } = props;
  const [selectedTheme, setSelectedTheme] = useState('party');

  const getCategoryName = () => {
    const names = {
      outfit: 'Образ',
      accessories: 'Аксессуары',
      makeup: 'Уход',
    };
    return names[category] || category;
  };

  const filteredItems = useMemo(() => {
    return ITEMS_DATABASE.filter(item => {
      return (
        item.category === category &&
        item.theme === selectedTheme
      );
    });
  }, [category, selectedTheme]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{getCategoryName()}</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        <div className="filters">
          <div className="filter-group">
            <label>Тема мероприятия:</label>
            <select
              value={selectedTheme}
              onChange={(e) => setSelectedTheme(e.target.value)}
            >
              {THEMES.map(t => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <div className="items-grid">
            {filteredItems.map(item => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="icon">🔍</div>
            <p>К сожалению, товаров не найдено для этой темы</p>
          </div>
        )}
      </div>
    </div>
  );
};