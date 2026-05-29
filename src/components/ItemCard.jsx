import React from 'react';

export const ItemCard = (props) => {
  const { item } = props;

  // Оставляем только обработку нажатия с пульта (Spatial Navigation)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      // Имитируем физический клик по ссылке при нажатии "ОК" на пульте
      e.currentTarget.click();
    }
  };

  return (
    <div className="item-card">
      <div className="item-image">
        <img src={item.image} alt={item.name} loading="lazy" />
      </div>
      <div className="item-info">
        <div className="item-name">{item.name}</div>
        <div className="item-description">{item.description}</div>
        
        <div className="marketplaces">
          {/* Главный маркетплейс */}
          <a 
            href={item.mainMarketplaceUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="main-marketplace sn-section-item"
            tabIndex={-1}
            onKeyDown={handleKeyDown}
            // onClick больше не нужен, браузер сам перейдет по href
          >
            {item.mainMarketplace}
          </a>
          
          {/* Партнерские маркетплейсы */}
          <div className="partner-marketplaces">
            {item.partnerMarketplaces.map(partner => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank" 
                rel="noopener noreferrer"
                className="partner-marketplace sn-section-item"
                tabIndex={-1}
                onKeyDown={handleKeyDown}
              >
                {partner.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};