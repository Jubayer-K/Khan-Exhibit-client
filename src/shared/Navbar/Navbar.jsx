import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const logOutToast = () => toast("User Logged out Successfully");
  const handleLogOut = () => {
    logOut()
    .then(()=>{
      logOutToast();
    })
    .catch();
  };

  const navLinks = (
    <>
      <li id="nav-link">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li id="nav-link">
        <NavLink to={"/all-art"}> All Art & craft Items</NavLink>
      </li>
      <li id="nav-link">
        <NavLink to={"/add-craft"}>Add Craft Item</NavLink>
      </li>
      <li id="nav-link">
        <NavLink to={"/my-art"}>My Art&Craft List</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar font-nunito lg:mb-12 mb-6 bg-slate-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={"/"}>
          <button className="md:text-5xl font-bold text-nowrap p-4">
            <span className="text-orange-600">Khan</span> Exhibit
          </button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-normal text-lg">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end lg:flex gap-4 ">
        {user ? (
          <button
            onClick={handleLogOut}
            className="sm:btn-xs text-nowrap p-1  rounded-lg content-center text-xs md:btn bg-orange-600 hover:bg-orange-800 md:hover:text-white text-white"
          >
            Log Out
          </button>
        ) : (
          <Link
            to={"/register"}
            className="sm:btn-xs md:btn text-nowrap p-1  rounded-lg content-center text-xs bg-gray-600 hover:bg-black md:hover:text-white text-white"
          >
            Register
          </Link>
        )}

        {user ? (
          <div
            className="avatar p-4 tooltip tooltip-bottom"
            data-tip={user.displayName}
          >
            <div className="md:w-16 w-8 rounded-full">
              <img src={user.photoURL} />
            </div>
          </div>
        ) : (
          <Link
            to={"/login"}
            className="sm:btn-xs text-nowrap p-1  rounded-lg content-center text-xs md:btn bg-orange-600 hover:bg-orange-800 md:hover:text-white text-white"
          >
            Log In
          </Link>
        )}
      </div>
      
    </div>
  );
};

export default Navbar;