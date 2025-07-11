import { useEffect, useRef } from 'react';

// Hook for useRef to understand when the user clicks outside something
const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // If ref.current(e.g. <div id="1"></div>) and the place
    // where the user clicks aren't the same
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref]);

  return ref;
};

export default useOutsideClick;
