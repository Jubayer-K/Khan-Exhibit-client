import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Root = () => {
    return (
        <div className="font-poppins dark:bg-gray-800 dark:text-white">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;