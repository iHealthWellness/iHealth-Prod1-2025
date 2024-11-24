import AboutUs from './Pages/About-us/index';
import OurTeam from './Pages/Our-Team/index';
import Termsofuse from "./Pages/Terms-of-use";
import Jobs from "./Pages/Job-Openings/Jobs";
export const routes = [
  {
    path: '/about-us',
    element: <AboutUs />,
  },
  {
    path: '/our-team',
    element: <OurTeam />,
  },
  { path: "/terms-of-use", element: <Termsofuse /> },
  { path: "/job-openings", element: <Jobs/>},
];