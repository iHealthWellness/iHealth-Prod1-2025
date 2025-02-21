import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import { useEffect, useState, useRef, useCallback } from "react";
import "./App.css";
import Home from "./0-Dev1-General/0-1-Landing-Page/pages/index";
import RootLayout from "./Pages/Root";
import { getAllRoutes } from "./modules/combinedRoutes";
import { useMediaQuery } from "@mui/material";
import Preloader from "./Components/Generic-Layout/preloader";
import LearnMore from "./0-Dev1-General/0-1-Landing-Page/pages/learnMore";

// ScrollRestoration Component
function ScrollRestoration() {
  const { pathname } = useLocation();
  const scrollPositions = useRef({});


  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const saveScrollPosition = () => {
      scrollPositions.current[pathname] = window.scrollY;
      sessionStorage.setItem(
        "scrollPositions",
        JSON.stringify(scrollPositions.current)
      );
    };

    const restoreScrollPosition = () => {
      const savedPositions = JSON.parse(
        sessionStorage.getItem("scrollPositions") || "{}"
      );
      const scrollY = savedPositions[pathname];
      if (scrollY) {
        window.scrollTo(0, scrollY);
      }
    };

    // Save on unload and restore on load
    window.addEventListener("beforeunload", saveScrollPosition);
    window.addEventListener("load", restoreScrollPosition);

    return () => {
      saveScrollPosition();
      window.removeEventListener("beforeunload", saveScrollPosition);
      window.removeEventListener("load", restoreScrollPosition);
    };
  }, [pathname]);

  useEffect(() => {
    const savedPositions = JSON.parse(
      sessionStorage.getItem("scrollPositions") || "{}"
    );
    if (savedPositions[pathname]) {
      window.scrollTo(0, savedPositions[pathname]);
    }
  }, [pathname]);

  return null;
}

// Hash Scroll Hook
const useHashScroll = () => {
  const location = useLocation();
  const lastHash = useRef("");
  const isMobile = useMediaQuery("(max-width: 760px)"); 

  const scrollToElement = useCallback((hash) => {
    const element = document.getElementById(hash);
    if (element) {
      
      const navbarHeight = isMobile ? (100) : (140); 
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.slice(1);
      lastHash.current = hash;

      const scrollInterval = setInterval(() => {
        scrollToElement(hash);
      }, 100);

      setTimeout(() => {
        clearInterval(scrollInterval);
      }, 800);
    }
  }, [location, scrollToElement]);
};

// Combined Wrapper Component
const ScrollWrapper = ({ children }) => {
  useHashScroll();
  return (
    <>
      <ScrollRestoration />
      {children}
    </>
  );
};

async function setupRouter() {
  const moduleRoutes = await getAllRoutes();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ScrollWrapper>
          <RootLayout />
        </ScrollWrapper>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "learnmore", element: <LearnMore /> },
        ...moduleRoutes,
      ],
    },
  ]);
  return router;
}

function App() {
  const [router, setRouter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRouter = async () => {
      const startTime = Date.now();
      const loadedRouter = await setupRouter();
      const elapsedTime = Date.now() - startTime;

      const remainingTime = Math.max(2000 - elapsedTime, 0);
      setTimeout(() => {
        setRouter(loadedRouter);
        setLoading(false);
      }, remainingTime);
    };

    loadRouter();
  }, []);


  if (!router) {
    return <div><Preloader/></div>;
  }

  return <RouterProvider router={router} />;
}

export default App;