import React from 'react';

export default function PageLayout({ children, paddingTop = '60px' }) {
  return <div style={{ paddingTop }}>{children}</div>;
}
