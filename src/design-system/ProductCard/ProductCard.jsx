import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';

const stockClassName = (stockStatus) =>
  `ds-stock ds-stock--${stockStatus.toLowerCase().replace(/\s+/g, '-')}`;

export const ProductCard = ({
  title,
  category,
  price,
  image,
  rating = 4.8,
  stockStatus = 'In stock',
  featured = false,
  onAddToCart,
}) => (
  <article className={featured ? 'ds-product-card ds-product-card--featured' : 'ds-product-card'}>
    <div className="ds-product-card__media">
      <img src={image} alt={title} />
    </div>
    <div className="ds-product-card__body">
      <div>
        <p className="ds-product-card__category">{category}</p>
        <h3>{title}</h3>
      </div>
      <div className="ds-product-card__meta">
        <span className="ds-product-card__price">${price.toFixed(2)}</span>
        <span className="ds-product-card__rating">{rating.toFixed(1)} rating</span>
      </div>
      <div className="ds-product-card__footer">
        <span className={stockClassName(stockStatus)}>{stockStatus}</span>
        <Button size="sm" disabled={stockStatus === 'Sold out'} onClick={onAddToCart}>
          Add
        </Button>
      </div>
    </div>
  </article>
);

ProductCard.propTypes = {
  category: PropTypes.string.isRequired,
  featured: PropTypes.bool,
  image: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number,
  stockStatus: PropTypes.oneOf(['In stock', 'Low stock', 'Sold out']),
  title: PropTypes.string.isRequired,
};
