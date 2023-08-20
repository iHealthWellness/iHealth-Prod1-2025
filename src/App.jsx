import "./App.css";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import Home from "./Pages/Home/index";
import Services from "./Pages/Services/index.jsx";
import Aboutus from "./Pages/About-us";
import Research from "./Pages/Research/index";
import Signin from "./Pages/Sigin-in/index";
import Signup from "./Pages/Sign-up/index";
import Donate from "./Pages/Donate/index";
import RootLayout from "./Pages/Root";
import Termsofuse from "./Pages/Terms-of-use";
import Other from "./Pages/Other/index";
import Termsofuse from "./Pages/Terms-of-use";
import Team from "./Pages/Our-Team";
// import Other from "./Pages/Other/index";

// import Navbar from "./Components/Navbar/Navbar";

function App() {



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
        { path: "/our-team", element: <Team /> },
        // { path: "*", element: <Other /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />

      {/* <Router>
        <Switch>

          <Route path="/Our-Team" component={Team} />
        </Switch>
      </Router> */}

      {/* https://stackoverflow.com/questions/74297769/how-to-navigate-to-sections-with-id-as-well-as-pages-in-react-router-dom */}

      {/* <Footer/> */}
    </>
  );
}

export default App;
