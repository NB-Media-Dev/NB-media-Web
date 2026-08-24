import React from 'react';
import gridBg from '../assets/23a33d0555d52ab5cc796b84cfd9800aaa255109.jpg';
import ProductCard from './cards/ProductCard';
import SectionHeader from './common/SectionHeader';
import { PRODUCTS_DATA } from '../data/productsData';
import '../App.css';

export default function ProductsSection() {
  return (
    <section id="products" className="products-section">
      <img src={gridBg} alt="Cyan Grid Background" className="products-bg-grid" />

      <div className="max-container">
        <SectionHeader
          title="OUR"
          highlightedText="PRODUCTS"
          highlightClass="gold-text"
          className="products-header-title"
        />

        <div className="products-cards-grid">
          {PRODUCTS_DATA.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
