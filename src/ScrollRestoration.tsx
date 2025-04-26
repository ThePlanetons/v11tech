import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Paths where you want to always scroll to top
const alwaysScrollToTopPaths = ['/contact-us', '/book-a-demo'];

const scrollPositions = new Map<string, number>();

const ScrollRestoration: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const handleBeforeUnload = () => {
      scrollPositions.set(location.pathname, window.scrollY);
    };

    window.addEventListener('pagehide', handleBeforeUnload);

    return () => {
      scrollPositions.set(location.pathname, window.scrollY);
      window.removeEventListener('pagehide', handleBeforeUnload);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (alwaysScrollToTopPaths.includes(location.pathname)) {
      window.scrollTo(0, 0);
      return;
    }

    const savedScrollY = scrollPositions.get(location.pathname);

    if (savedScrollY !== undefined) {
      window.scrollTo(0, savedScrollY);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return null;
};

export default ScrollRestoration;
