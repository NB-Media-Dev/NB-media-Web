import React from 'react';

/**
 * Standard page wrapper component providing consistent layout spacing.
 */
export default function PageLayout({ children, paddingTop = '60px' }) {
  return <div style={{ paddingTop }}>{children}</div>;
}
