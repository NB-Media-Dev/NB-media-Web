import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({
  value = '',
  onChange,
  onSearchSubmit,
  placeholder = 'Search',
  className = 'search-bar-wrapper',
}) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && onSearchSubmit) {
      onSearchSubmit();
    }
  };

  return (
    <div className={className}>
      <div className="search-box">
        <input
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="search-input-field"
        />
        <Search
          className="search-icon-btn"
          size={20}
          onClick={onSearchSubmit}
          style={{ cursor: 'pointer' }}
          title="Search"
        />
      </div>
    </div>
  );
}
