import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Dashboard from "../Layout/Dashboard/Dashboard";
import UpcomingProjectsTRY from "../Layout/Pages/UpcomingProjectsTRY/UpcomingProjectsTRY";
import OnGoingProjectsTRY from "../Layout/Pages/OnGoingProjectsTRY/OnGoingProjectsTRY";
import ProjectsPanel from "../Layout/Pages/ProjectsPanel/ProjectsPanel";


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
                path: '/upcomingprojects',
                element: <UpcomingProjectsTRY/>
            },
            {
                path: '/ongoingProjects',
                element: <OnGoingProjectsTRY/>
            }
        ]
    }
])