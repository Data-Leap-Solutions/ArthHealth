import BookAppointment from "./components/BookAppointment";
import Contact from "./components/Contact";
import Home from "./components/Home";
import PhysicalTherapy from "./components/PhysicalTherapy";
import BalanceGaitRehabilitation from "./components/BalanceGaitRehabilitation";
import WorkersCompensation from "./components/WorkersCompensation";
import ManualTherapy from "./components/ManualTherapy";
import TMJRehabilitation from "./components/TmjRehabilitation";
import VestibularRehabilitation from "./components/VestibularRehabilitation";
import DirectAccess from "./components/DirectAccess";
import ComplimentaryScreenings from "./components/ComplimentaryScreenings";
import SportsRehabilitation from "./components/SportsRehabilitation";
import PatientInformation from "./components/PatientInformation";
import MeetOurTeam from "./components/MeetOurTeam";
import Insurance from "./components/Insurance";


const AppRoutes = [
    { index: true, element: <Home /> },

    // Services
    { path: '/services/balance-and-gait-rehabilitation', element: <BalanceGaitRehabilitation /> },
    { path: '/services/vestibular-rehabilitation', element: <VestibularRehabilitation /> },
    { path: '/services/tmj-rehabilitation', element: <TMJRehabilitation /> },
    { path: '/services/manual-therapy', element: <ManualTherapy /> },
    { path: '/services/workers-compensation', element: <WorkersCompensation /> },
    { path: '/services/physical-therapy', element: <PhysicalTherapy /> },
    { path: '/services/complimentary-screening', element: <ComplimentaryScreenings /> },
    { path: '/services/sports-rehabilitation', element: <SportsRehabilitation /> },
    
    //Insurance
    { path: '/insurance/insurance-verification', element: <Insurance /> },
    { path: '/insurance/in-network-insurance', element: <Insurance /> },
    { path: '/insurance/direct-access', element: <DirectAccess /> },

    // About
    { path: '/about/patient-forms', element: <PatientInformation /> },
    { path: '/about/meet-our-team', element: <MeetOurTeam /> },
    { path: '/book-appointment', element: <BookAppointment /> },

    //Contact
    { path: '/contact', element: <Contact /> }
];

export default AppRoutes;
