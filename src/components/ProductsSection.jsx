import React from 'react';
import gridBg from '../assets/23a33d0555d52ab5cc796b84cfd9800aaa255109.jpg';
import ProductCard from './cards/ProductCard';
import SectionHeader from './common/SectionHeader';
import { PRODUCTS_DATA } from '../data/productsData';

export default function ProductsSection() {
  return (
    <section id="products" className="products-section position-relative overflow-hidden">
      <img src={gridBg} alt="Cyan Grid Background" className="products-bg-grid" />

      <div className="container position-relative z-2">
        <SectionHeader
          title="OUR"
          highlightedText="PRODUCTS"
          highlightClass="gold-text"
          className="products-header-title"
        />

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-md-4 justify-content-center">
          {PRODUCTS_DATA.map((product) => (
            <div key={product.id} className="col d-flex">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

