import React from 'react';

export const ItemCard = (props) => {
  const { item } = props;

  return (
    <div className="item-card">
      <div className="item-image">
        <img 
          src={item.image} 
          alt={item.name}
          loading="lazy"
        />
      </div>
      <div className="item-info">
        <div className="item-name">{item.name}</div>
        <div className="item-description">{item.description}</div>
        <div className="item-price">{item.price} ₽</div>
        <div className="item-marketplaces">
          {item.links.map(link => (
            <a
              key={link.marketplace}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="marketplace-link"
              title={link.marketplace}
            >
              {link.marketplace}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};