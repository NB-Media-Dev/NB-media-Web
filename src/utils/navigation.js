export const scrollToSection = (sectionId) => {
  if (!sectionId) return;
  const targetId = sectionId.startsWith('#') ? sectionId : `#${sectionId}`;
  const elem = document.querySelector(targetId);
  if (elem) {
    elem.scrollIntoView({ behavior: 'smooth' });
  }
};

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
