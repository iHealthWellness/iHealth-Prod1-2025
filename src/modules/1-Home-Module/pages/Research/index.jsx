import { useState, useEffect } from "react";
import ResearchPageDesktop from "src/modules/1-Home-Module/components/Research-page/ResearchPageDesktop/ResearchPageDesktop";
import ResearchPageMobile from "src/modules/1-Home-Module/components/Research-page/ResearchPageMobile/ResearchPageMobile";

function index() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 480);

  // Check if the screen is desktop or mobile
  useEffect(() => {
    const handleResize = () => {
      setDesktop(window.innerWidth > 480);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Render conditionally based on screen size
  return <>{isDesktop ? <ResearchPageDesktop /> : <ResearchPageMobile />}</>;
}

export default index;
