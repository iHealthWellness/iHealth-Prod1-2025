import { useEffect } from 'react';

// Saved position to restore after unlocking scroll
let savedScrollY = 0;
export default function useLockBodyScroll(active) {

  useEffect(() => {



    if (active) {
      // Save the current scroll position
      savedScrollY = window.scrollY;
        // Apply styles to prevent body scrolling
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${savedScrollY}px`;
        document.body.style.width = '100vw';
        // Disable smooth scrolling temporarily
        document.documentElement.style.scrollBehavior = 'auto';
    } else{
       // Remove styles to unlock body scrolling
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      // Restore the scroll position.
      window.scrollTo(0, savedScrollY);

      // Delay re-enabling of smooth scroll to ensure it does not affect scroll restoration.
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = '';
      }, 10); // Slight delay
    }
  }, [active]); // Only re-run the effect if activeModal changes
}