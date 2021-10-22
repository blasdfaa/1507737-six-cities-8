import React from 'react';

type AnyEventType = {
  target: MouseEvent | TouchEvent | EventTarget | null;
};

function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  handler: (e: AnyEventType) => void,
): void {
  React.useEffect(() => {
    const listener = (e: AnyEventType) => {
      const element = ref?.current;

      if (!element || element.contains(e.target as Node)) {
        return;
      }

      handler(e);
    };

    document.addEventListener('click', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('click', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export default useClickOutside;
