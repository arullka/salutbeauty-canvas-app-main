import React from 'react';
import { ItemCard } from './ItemCard';
import { ITEMS_DATABASE } from '../data/items';

export const CapsuleView = (props) => {
  const { capsule, category, onBack } = props;

  const getItems = () => {
    return ITEMS_DATABASE.filter(
      item => item.type === 'item' && 
               item.capsule === capsule.id &&
               item.category === category
    );
  };

  return (
    <div className="capsule-view">
      <h2>{capsule.name}</h2>
      <div className="items-grid">
        {getItems().map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};