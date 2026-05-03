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
    <div className="theme-view">
      <button className="back-btn" onClick={onBack}>← Назад</button>
      <h2>{getCategoryName()}</h2>
      
      <div className="themes-grid">
        {themes.map(theme => (
          <button
            key={theme.id}
            className={`theme-btn ${selectedTheme === theme.id ? 'active' : ''}`}
            onClick={() => setSelectedTheme(theme.id)}
          >
            {theme.name}
          </button>
        ))}
      </div>

      <div className="capsules-section">
        <h3>{selectedTheme}</h3>
        <div className="capsules-grid">
          {getCapsules().map(capsule => (
            <div 
              key={capsule.id} 
              className="capsule-card"
              onClick={() => setSelectedCapsule(capsule)}
            >
              <img src={capsule.image} alt={capsule.name} />
              <h4>{capsule.name}</h4>
              <p>{capsule.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};