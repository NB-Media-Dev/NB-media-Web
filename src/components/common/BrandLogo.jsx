import React from 'react';
import { motion } from 'framer-motion';
import logoImg from '../../assets/web_size_2.png';
import { COMPANY_INFO } from '../../data/companyData';

export default function BrandLogo({
  className = 'navbar-logo-img',
  layoutId = 'navbar-logo-shared',
  alt = COMPANY_INFO.name,
  style = {},
}) {
  return (
    <motion.div
      layoutId={layoutId}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      style={{ display: 'inline-block', ...style }}
    >
      <img src={logoImg} alt={alt} className={className} />
    </motion.div>
  );
}
