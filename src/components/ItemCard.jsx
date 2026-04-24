import React from 'react';

export const ItemCard = (props) => {
  const { item } = props;

  const handleMarketplaceClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="item-card">
      <div className="item-image">
        {item.image || ''}
      </div>
      <div className="item-info">
        <div className="item-name">{item.name}</div>
        <div className="item-description">{item.description}</div>
        <div className="item-price">{item.price} ₽</div>
        <div className="item-marketplaces">
          {item.links.map(link => (
            <button
              key={link.marketplace}
              className="marketplace-link"
              onClick={() => handleMarketplaceClick(link.url)}
              title={`Открыть в ${link.marketplace}`}
            >
              {link.marketplace}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};