import React from 'react';
import gridBg from '../assets/23a33d0555d52ab5cc796b84cfd9800aaa255109.jpg';
import product1Img from '../assets/vidhvaa-class-img.png';
import product2Img from '../assets/d5ed3e55d68d3c437221dc974bc560a166eea7b1.png';
import product3Img from '../assets/660d8185ca35f1a9dc08035a48b97c76c85477c2.png';
import '../App.css';

export default function ProductsSection({ searchQuery = '' }) {
  const products = [
    {
      id: 'vidhvaa-classmate',
      line1: 'The Vidhvaa',
      line2: 'Classmate',
      image: product1Img,
      url: 'https://vidhvaa.com/classmate/class_home',
    },
    {
      id: 'vidhvaa-careermate',
      line1: 'The Vidhvaa',
      line2: 'Careermate',
      image: product2Img,
      url: 'https://vidhvaa.com/careermate/career_home',
    },
    {
      id: 'jesus-the-messenger',
      line1: 'Jesus the',
      line2: 'Messenger',
      image: product3Img,
      url: 'https://jesusthemessenger.com/',
    },
  ];

  const filteredProducts = products.filter((p) =>
    `${p.line1} ${p.line2}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="products" className="products-section">
      <img src={gridBg} alt="Cyan Grid Background" className="products-bg-grid" />

      <div className="max-container">
        <h2 className="products-header-title">
          OUR <span className="gold-text">PRODUCTS</span>
        </h2>

        <div className="products-cards-grid">
          {filteredProducts.map((product) => (
            <a
              key={product.id}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="product-card-container"
              style={{ textDecoration: 'none', cursor: 'pointer' }}
              title={`Visit ${product.line1} ${product.line2}`}
            >
              <div className="product-arch-header">
                <img
                  src={product.image}
                  alt={`${product.line1} ${product.line2}`}
                  className="product-asset-img"
                />
              </div>
              <div className="product-title-card">
                <div>{product.line1}</div>
                <div>{product.line2}</div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

