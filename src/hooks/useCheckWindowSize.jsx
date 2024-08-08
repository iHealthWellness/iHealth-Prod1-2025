import { useEffect, useState } from "react";

function useCheckWindowSize(size) {
  const [isBiggerThan, setIsBiggerThan] = useState(window.innerWidth > size);

  useEffect(() => {
    const handleResize = () => {
      setIsBiggerThan(window.innerWidth > size);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isBiggerThan;
}

export default useCheckWindowSize;
