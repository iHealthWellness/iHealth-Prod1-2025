import EducationPage from './pages/Education';
import NFSurveyPage from './pages/Survey';
import LivingWithNF from './pages/Living-with-NF';
import Research from './pages/Research';
export const routes = [
    {
        path: "/education",
        element: <EducationPage />,
    },
    {
        path: "/nf-survey",
        element: <NFSurveyPage />,
    },
    {
        path: "/livingwith-nf",
        element: <LivingWithNF />,
    },{
        path: "/research",
        element: <Research />,
    },
]