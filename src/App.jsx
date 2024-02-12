import "./App.css";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter as Switch, Route } from "react-router-dom";

/**Pages*/
import Home from "./Pages/Home/index";
import Services from "./Pages/Services/index.jsx";
import Aboutus from "./Pages/About-us";
import Research from "./Pages/Research/index";
import Signin from "./Pages/Sigin-in/index";
import Signup from "./Pages/Sign-up/index";
import Donate from "./Pages/Donate/index";
import RootLayout from "./Pages/Root";
import Other from "./Pages/Other/index";
import Team from "./Pages/Our-Team";
import Termsofuse from "./Pages/Terms-of-use";
import Jobs from "./Pages/Jobs-opening/jobs.jsx";
import LivingwithNf from "./Pages/Living-with-NF/index"
// import Other from "./Pages/Other/index";
import Error from "./Pages/Error";
import StoreLayout from "./Pages/Store/Layout";
import Landing from "./Pages/Store/Landing";
import Products from "./Pages/Store/Products";
import SingleProduct from "./Pages/Store/SingleProduct";
import Cart from "./Pages/Store/Cart";


/**Components*/
import ErrorElement from "./Components/Store/ErrorElement";


//store loaders
import { loader as landingLoader } from "./Pages/Store/Landing";
import { loader as ProductLoader } from './pages/Store/Products'
import { loader as SingleProductLoader } from './pages/Store/SingleProduct'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement:<Error />,
      children: [
        { index: true, element: <Home /> },
        { path: "/services", element: <Services /> },
        { 
          path: "/store",
          element: <StoreLayout />,
          children:[
            {
              index:true,
              element:<Landing />,
              errorElement:<ErrorElement />,
              loader:landingLoader()
            },
            {
              path: 'products',
              element: <Products />,
              errorElement:<ErrorElement />,
              loader:ProductLoader()
            },
            {
              path:'products/:id',
              element:<SingleProduct />,
              errorElement:<ErrorElement />,
              loader:SingleProductLoader()
            },
            {
              path:'cart',
              element:<Cart/>
            },
            // {
            //   path: 'checkout',
            //   element: <Checkout />,
            // },
            // {
            //   path: 'orders',
            //   element: <Orders />,
            // },
          ]
        },
        { path: "/about-us", element: <Aboutus /> },
        { path: "/research", element: <Research /> },
        { path: "/sign-in", element: <Signin /> },
        { path: "/sign-up", element: <Signup /> },
        { path: "/donate", element: <Donate /> },
        { path: "/our-team", element: <Team /> },
        { path: "/other", element: <Other /> },
        { path: "/terms-of-use", element: <Termsofuse /> },
        { path: "/job-openings", element: <Jobs/>},
        { path: "/livingwith-nf", element: <LivingwithNf/>}
        // { path: "*", element: <Other /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />



      {/* https://stackoverflow.com/questions/74297769/how-to-navigate-to-sections-with-id-as-well-as-pages-in-react-router-dom */}


    </>
  );
}

export default App;
