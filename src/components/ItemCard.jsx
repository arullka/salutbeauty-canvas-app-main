import React from 'react';

export const ItemCard = (props) => {
  const { item } = props;

  const handleOpenLink = (url, e) => {
    if (e.type === 'keydown' && e.key !== 'Enter' && e.keyCode !== 13) {
      return;
    }
    e.preventDefault();
    window.location.href = url;
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
          {}
          <a 
            href={item.mainMarketplaceUrl} 
            className="main-marketplace sn-section-item"
            tabIndex={-1}
            onClick={(e) => handleOpenLink(item.mainMarketplaceUrl, e)}
            onKeyDown={(e) => handleOpenLink(item.mainMarketplaceUrl, e)}
          >
            {item.mainMarketplace}
          </a>
          
          {}
          <div className="partner-marketplaces">
            {item.partnerMarketplaces.map(partner => (
              <a
                key={partner.name}
                href={partner.url}
                className="partner-marketplace sn-section-item"
                tabIndex={-1}
                onClick={(e) => handleOpenLink(partner.url, e)}
                onKeyDown={(e) => handleOpenLink(partner.url, e)}
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