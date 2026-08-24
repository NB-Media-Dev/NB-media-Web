import React from 'react';

export default function SectionHeader({
  title,
  highlightedText,
  highlightClass = 'gold-text',
  className = '',
  as: Component = 'h2',
  children,
}) {
  if (children) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component className={className}>
      {title}{' '}
      {highlightedText && (
        <span className={highlightClass}>{highlightedText}</span>
      )}
    </Component>
  );
}
