/**
 * Scrolls smoothly to a target section by element ID.
 * @param {string} sectionId - The ID of the target HTML section element (with or without '#').
 */
export const scrollToSection = (sectionId) => {
  if (!sectionId) return;
  const targetId = sectionId.startsWith('#') ? sectionId : `#${sectionId}`;
  const elem = document.querySelector(targetId);
  if (elem) {
    elem.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Shared link click handler for hash-based navigation across pages.
 * @param {Event} e - Click event.
 * @param {string} path - Target path (e.g., '/', '/#about', '/services').
 * @param {string} currentPath - Current location pathname.
 * @param {Function} navigate - React Router navigate function.
 */
export const handleHashNavigation = (e, path, currentPath, navigate) => {
  if (path === '/') {
    if (currentPath === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return;
  }

  if (path.startsWith('/#')) {
    e.preventDefault();
    const hash = path.replace('/', '');
    if (currentPath !== '/') {
      navigate('/' + hash);
    } else {
      scrollToSection(hash);
    }
  }
};
