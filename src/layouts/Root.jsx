import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../shared/Navbar/Navbar";

const Root = () => {
    return (
        <div className="font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;