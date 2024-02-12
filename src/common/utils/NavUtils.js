
export const isNavLinkActive = (currentPath, targetPath) => {
    if (currentPath === '/' && targetPath === '/') {
      return true; // Special case for home link
    }
    return currentPath.startsWith(targetPath);
  };
  