import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;  // Skip scroll on first load
      return;
    }

    window.scrollTo(0, 0);  // Scroll to top on navigation
  }, [pathname]);

  return null;
}

export default ScrollToTop