import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Providers/AuthProviders";
import "./navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const logOutToast = () => toast("User Logged out Successfully");
  const handleLogOut = () => {
    logOut()
      .then(() => {
        logOutToast();
      })
      .catch();
  };

  const navLinks = (
    <>
      <NavLink to="/" >
        <li id="nav-link" className="btn bg-transparent shadow-none border-none rounded-3xl hover:bg-transparent hover:text-white">
          Home
        </li>
      </NavLink>

      <NavLink to={"/all-art"}>
        <li
          id="nav-link"
          className="btn bg-transparent border-none shadow-none rounded-3xl hover:bg-transparent hover:text-white"
        >
          All Art & craft Items
        </li>
      </NavLink>
      <NavLink to={"/add-craft"}>
        <li
          id="nav-link"
          className="btn bg-transparent border-none shadow-none rounded-3xl hover:bg-transparent hover:text-white"
        >
          Add Craft Item
        </li>
      </NavLink>
      <NavLink to={"/my-art"}>
        <li
          id="nav-link"
          className="btn bg-transparent border-none shadow-none rounded-3xl hover:bg-transparent hover:text-white"
        >
          My Art&Craft List
        </li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar font-nunito z-10 backdrop-blur-xl bg-black/10 sticky top-0">
      <div className="navbar-start ">
        <div className="dropdown ">
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
            className="menu menu-sm dropdown-content mt-3 z-[100] px-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={"/"}>
          <img className="w-40 hover:invert" src="/navlogo.png" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" glass rounded-3xl gap-4 menu-horizontal px-1 font-normal text-lg">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end lg:flex gap-4 ">
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn glass hover:bg-red-950 hover:text-red-100 text-black rounded-3xl"
          >
            Log Out
          </button>
        ) : (
          <Link
            to={"/register"}
            className="md:btn sm:btn-sm md:glass hover:bg-gray-700 p-1 hover:text-white text-black md:rounded-3xl rounded-xl content-center"
          >
            Register
          </Link>
        )}

        {user ? (
          <div
            className="avatar p-4 tooltip tooltip-left"
            data-tip={user.displayName}
          >
            <div className="md:w-12 w-8 rounded-full">
              <img src={user.photoURL} />
            </div>
          </div>
        ) : (
          <Link
            to={"/login"}
            className="md:btn sm:btn-sm md:glass hover:bg-gray-700 p-1 hover:text-white text-black md:rounded-3xl rounded-xl content-center"
          >
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
