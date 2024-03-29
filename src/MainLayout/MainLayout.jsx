import { Outlet } from "react-router-dom";
import Sidebar from "../Layout/Navigation/Sidebar";
import TopBanner from "../Layout/Navigation/TopBanner";
import ToTheTop from "../Layout/Shared/ToTheTop/ToTheTop";


const MainLayout = () => {
    return (
        <div className="relative">
            <div className="">
                <TopBanner></TopBanner>
            </div>
            <div className="flex  ">
                <div className="fixed">
                    <Sidebar></Sidebar>
                </div>
                <div className="pl-28 pr-10 mt-32 w-full ">
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="">
                <ToTheTop></ToTheTop>
            </div>
        </div>
    );
};

export default MainLayout;

