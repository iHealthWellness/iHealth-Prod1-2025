import { useEffect } from "react";

const useSlideInAnimationRight = (slideInTextClass, activeClass) => {
  useEffect(() => {
    const textElements = document.querySelectorAll(`.${slideInTextClass}`);

    const handleScroll = () => {
      textElements.forEach((element) => {
        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top;
        const elementBottom = elementRect.bottom;

        // Check if any part of the element is within the viewport
        const isElementVisible =
          elementBottom > 0 && elementTop < window.innerHeight;

        if (isElementVisible) {
          element.classList.add(activeClass);
        } else {
          element.classList.remove(activeClass);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slideInTextClass, activeClass]);
};

export default useSlideInAnimationRight;
