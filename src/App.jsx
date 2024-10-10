import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./0-Dev1-General/0-1-Landing-Page/pages/index";
import RootLayout from "./Pages/Root";
import { getAllRoutes } from "./modules/combinedRoutes";
import { useEffect, useState } from "react";

async function setupRouter() {
  const moduleRoutes = await getAllRoutes();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [{ index: true, element: <Home /> }, ...moduleRoutes],
    },
  ]);
  return router;
}

function App() {
  const [router, setRouter] = useState(null);

  useEffect(() => {
    setupRouter().then(setRouter);
  }, []);

  return router ? <RouterProvider router={router} /> : <div>Loading...</div>;
}

export default App;
