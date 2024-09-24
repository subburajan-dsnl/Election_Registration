// import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar";
import Navbar from "../Navbar";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <>
            <div className="flex h-screen">

                {/* <div>Header</div> */}
                <Sidebar />
                <div className="flex flex-col w-full">
                    <Navbar />
                    <div className="flex-grow overflow-auto p-4">
                        {children}
                    </div>

                </div>
                {/* <Outlet /> */}

            </div>
        </>
    );
}
export default DashboardLayout;