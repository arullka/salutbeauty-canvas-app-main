import React, { useEffect } from 'react';
import { ItemCard } from './ItemCard';
import { ITEMS_DATABASE } from '../data/items';
import { useSection, spatnavInstance } from '@salutejs/spatial';

export const CapsuleView = (props) => {
  const { capsule, category, onBack } = props;
  const [capsuleSectionProps] = useSection('capsuleView');

  useEffect(() => {
    const timer = setTimeout(() => spatnavInstance.focus('capsuleView'), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const restoreFocus = (e) => {
      const isArrow = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key);
      if (isArrow && document.activeElement === document.body) {
        spatnavInstance.focus('capsuleView');
      }
    };
    window.addEventListener('keydown', restoreFocus);
    return () => window.removeEventListener('keydown', restoreFocus);
  }, []);

  const getItems = () => {
    return ITEMS_DATABASE.filter(
      item => item.type === 'item' && item.capsule === capsule.id && item.category === category
    );
  };

  return (
    <div {...capsuleSectionProps}>
      <div className="capsule-view">
        <button className="back-btn-capsule sn-section-item" tabIndex={-1} onClick={onBack}>
          ← Назад к капсулам
        </button>
        <div className="items-grid">
          {getItems().map(item => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};