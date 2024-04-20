import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(
          () => element.scrollIntoView({ behavior: "smooth", block: "start" }),
          300
        );
      }
    }
  }, [location]);
}

export default useScrollToAnchor;
