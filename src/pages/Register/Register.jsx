import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const successToast = () => toast.success("User created Successfully");
  const errorToast = () => toast.error("User creation Unsuccessful !");
  const passErrorToast = (toastText) => toast.error(toastText);
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photoURL = form.get("photoURL");
    setRegisterError("");
    setSuccess("");
    if (password.length < 6) {
      passErrorToast("Length must be at least 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      passErrorToast("Must have an Uppercase letter in the password");
      return;
    } else if (!/[a-z]/.test(password)) {
      passErrorToast("Must have a Lowercase letter in the password");
      return;
    }

    createUser(email, password, name, photoURL)
      .then(() => {
        setSuccess("User created Successfully");
        successToast();
      })
      .catch((error) => {
        setRegisterError(error.message);
        errorToast("User creation Unsuccessful !");
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-200 max-w-screen-xl mx-auto rounded-3xl animate__animated animate__zoomInDown">
      <Helmet>
        <title>Khan Estate | Register</title>
      </Helmet>
      <div className="bg-white p-8 rounded-lg shadow-md md:w-2/3 w-96">
        <h2 className="text-2xl font-semibold mb-4">Create an Account</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              required
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="photoURL"
              className="block text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              required
              type="text"
              id="photoURL"
              name="photoURL"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              required
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
            <span
              className="cursor-pointer text-2xl absolute right-5 bottom-0 "
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaRegEyeSlash></FaRegEyeSlash>
              ) : (
                <FaRegEye></FaRegEye>
              )}
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-800 text-white py-2 px-4 rounded-md "
          >
            Register
          </button>
        </form>
        {registerError && (
          <p className="my-2 text-sm text-red-800">{registerError}</p>
        )}
        {success && <p className="my-2 text-sm text-green-700">{success}</p>}
        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to={"/login"} className="text-orange-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
