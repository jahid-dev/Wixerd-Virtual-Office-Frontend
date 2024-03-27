import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Dashboard from "../Layout/Dashboard/Dashboard";
import UpcomingProjectsTRY from "../Layout/Pages/UpcomingProjectsTRY/UpcomingProjectsTRY";
import ProjectsPanel from "../Layout/Pages/ProjectsPanel/ProjectsPanel";
import OnGoingProjects from "../Layout/Pages/OnGoingProjects/OnGoingProjects";
import History from "../Layout/Pages/History/History";
import AssetSection from "../Layout/Pages/AssetSection/AssetSection";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <div>Found An Error</div>,

        children: [
            {
                path: '/',
                element: <Dashboard/>
            },
            {
                path: '/projectspanel',
                element: <ProjectsPanel/>
            },
            {
                path: '/ongoingProjects',
                element: <OnGoingProjects/>
            },
            {
                path: '/assetSection',
                element: <AssetSection/>
            },
            {
                path: '/upcomingprojects',
                element: <UpcomingProjectsTRY/>
            },
            {
                path: '/history',
                element: <History/>
            }
        ]
    }
])