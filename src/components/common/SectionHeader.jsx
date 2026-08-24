import React from 'react';

/**
 * Reusable section heading component with highlight/gold text support.
 * @param {string} title - Full heading text or regular text segment.
 * @param {string} highlightedText - Word/phrase to render with highlight styling.
 * @param {string} [highlightClass="gold-text"] - CSS class for highlight ('gold-text' or 'highlight-orange').
 * @param {string} [className="section-headline"] - Outer wrapper heading CSS class.
 * @param {string} [as="h2"] - Heading tag element (h1, h2, h3, etc.).
 */
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
