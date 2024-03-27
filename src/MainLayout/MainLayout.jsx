import { Outlet } from "react-router-dom";
import Sidebar from "../Layout/Navigation/Sidebar";
import TopBanner from "../Layout/Navigation/TopBanner";


const MainLayout = () => {
    return (
        <div>
            <div className="">
                <TopBanner></TopBanner>
            </div>
            <div className="flex  ">
                <div className="fixed">
                    <Sidebar></Sidebar>
                </div>
                <div className="px-20 mt-32 flex-1 ">
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default MainLayout;

