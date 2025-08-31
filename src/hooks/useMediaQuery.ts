import { useState, useEffect } from 'react';

// Custom hook for responsive design
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Update the state initially
    setMatches(media.matches);
    
    // Define callback for media query changes
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };
    
    // Add the callback as a listener
    media.addEventListener('change', listener);
    
    // Remove the listener when component unmounts
    return () => {
      media.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
};
export default useMediaQuery;