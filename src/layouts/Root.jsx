import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Root = () => {
    return (
        <div className="font-poppins">
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Root;