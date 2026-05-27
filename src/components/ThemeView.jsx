import React, { useState, useEffect } from 'react';
import { CapsuleView } from './CapsuleView';
import { ITEMS_DATABASE } from '../data/items';
import { useSection, spatnavInstance } from '@salutejs/spatial';

const ThemeSelectionSection = ({ themes, selectedTheme, setSelectedTheme, getCapsules, setSelectedCapsule, onBack }) => {
  const [themeSectionProps] = useSection('themeView');

  return (
    <div {...themeSectionProps}>
      <div className="theme-selection">
        <div className="theme-header">
          <button className="back-btn sn-section-item" tabIndex={-1} onClick={onBack}>← Назад</button>
          
          <div className="themes-grid">
            {themes.map((theme) => (
              <button 
                key={theme.id} 
                className={`theme-btn sn-section-item ${selectedTheme === theme.id ? 'active' : ''}`} 
                tabIndex={-1} 
                onClick={() => setSelectedTheme(theme.id)}
              >
                {theme.name}
              </button>
            ))}
          </div>
        </div>

        <div className="theme-content">
          <div className="capsules-grid">
            {getCapsules().map((capsule) => (
              <div
                key={capsule.id}
                className="capsule-card sn-section-item"
                tabIndex={-1}
                onClick={() => setSelectedCapsule(capsule)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.keyCode === 13) {
                    e.preventDefault();
                    setSelectedCapsule(capsule);
                  }
                }}
              >
                <h4>{capsule.name}</h4>
                <p>{capsule.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ThemeView = (props) => {
  const { category, themes, onBack } = props;
  const [selectedTheme, setSelectedTheme] = useState('study');
  const [selectedCapsule, setSelectedCapsule] = useState(null);

  useEffect(() => {
    const handlePopState = (event) => {
      if (!event.state || !event.state.capsule) {
        setSelectedCapsule(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Backspace' || e.keyCode === 27 || e.keyCode === 8) {
        e.preventDefault(); 
        e.stopPropagation();
        window.history.back();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCapsuleOpen = (capsule) => {
    window.history.pushState({ category: category, capsule: capsule.id }, '');
    setSelectedCapsule(capsule);
  };

  const getCapsules = () => {
    return ITEMS_DATABASE.filter(
      item => item.type === 'capsule' && item.category === category && item.theme === selectedTheme
    );
  };

  if (selectedCapsule) {
    return (
      <CapsuleView
        capsule={selectedCapsule}
        category={category}
        onBack={() => window.history.back()}
      />
    );
  }

  return (
    <ThemeSelectionSection
      themes={themes}
      selectedTheme={selectedTheme}
      setSelectedTheme={setSelectedTheme}
      getCapsules={getCapsules}
      setSelectedCapsule={handleCapsuleOpen}
      onBack={onBack}
    />
  );
};