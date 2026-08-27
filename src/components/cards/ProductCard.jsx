import React from 'react';
export default function ProductCard({ product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="product-card-container w-100 d-flex flex-column text-decoration-none"
      style={{ cursor: 'pointer' }}
      title={`Visit ${product.line1} ${product.line2}`}
    >
      <div className="product-arch-header">
        <img
          src={product.image}
          alt={`${product.line1} ${product.line2}`}
          className="product-asset-img"
        />
      </div>
      <div className="product-title-card flex-grow-1">
        <div>{product.line1}</div>
        <div>{product.line2}</div>
      </div>
    </a>
  );
}

