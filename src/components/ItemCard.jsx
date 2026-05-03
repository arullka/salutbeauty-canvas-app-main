import React from 'react';

export const ItemCard = (props) => {
  const { item } = props;

  return (
    <div className="item-card">
      <div className="item-image">
        <img src={item.image} alt={item.name} loading="lazy" />
      </div>
      <div className="item-info">
        <div className="item-name">{item.name}</div>
        <div className="item-description">{item.description}</div>
        
        <div className="marketplaces">
          <a 
            href={item.mainMarketplaceUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="main-marketplace"
          >
            {item.mainMarketplace}
          </a>
          
          <div className="partner-marketplaces">
            {item.partnerMarketplaces.map(partner => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partner-marketplace"
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