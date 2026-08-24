import React from 'react';
export default function CTAButton({
  children,
  onClick,
  href,
  type = 'button',
  className = 'enquire-now-btn',
  style = {},
  title = '',
}) {
  if (href) {
    return (
      <a href={href} onClick={onClick} className={className} style={style} title={title}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className} style={style} title={title}>
      {children}
    </button>
  );
}
