import "./App.css";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home/index";
import Services from "./Pages/Services/index.jsx";
import Aboutus from "./Pages/About-us";
import Research from "./Pages/Research/index";
import Signin from "./Pages/Sigin-in/index";
import Signup from "./Pages/Sign-up/index";
import Donate from "./Pages/Donate/index";
import RootLayout from "./Pages/Root";
import Other from "./Pages/Other/index";

// import Navbar from "./Components/Navbar/Navbar";

function App() 
{



  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/services", element: <Services /> },
        { path: "/about-us", element: <Aboutus /> },
        { path: "/research", element: <Research /> },
        { path: "/sign-in", element: <Signin /> },
        { path: "/sign-up", element: <Signup /> },
        { path: "/donate", element: <Donate /> },
        // { path: "*", element: <Other /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />

      {/* <Footer/> */}
    </>
  );
}

export default App;
