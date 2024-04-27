import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub, FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Fade } from "react-awesome-reveal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const successToast = () => toast.success("User Logged In Successfully");
  const errorToast = () => toast.error("User log in Unsuccessful !");
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const passErrorToast = (toastText) => toast.error(toastText);
  const { logIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
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
    logIn(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/login");
        setSuccess("User Logged in Successfully");
        successToast();
      })
      .catch((error) => {
        setRegisterError(error.message);
        errorToast("User Login Unsuccessful !");
      });
  };
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    setRegisterError("");
    setSuccess("");
    signInWithPopup(auth, provider)
      .then(() => {
        successToast();
        setSuccess("User created Successfully");
      })
      .catch((error) => {
        setRegisterError(error.message);
        errorToast("User Login Unsuccessful !");
      });
  };
  const handleGithubSignIn = () => {
    setRegisterError("");
    setSuccess("");
    signInWithPopup(auth, gitProvider)
      .then(() => {
        successToast();
        setSuccess("User created Successfully");
      })
      .catch((error) => {
        setRegisterError(error.message);
        errorToast("User Login Unsuccessful !");
      });
  };

  return (
    <Fade direction="left">
      <div className="min-h-screen flex justify-center items-center bg-gray-100 max-w-screen-xl mx-auto rounded-3xl animate__animated animate__zoomInUp">
        <Helmet>
          <title>Khan Exhibit | Login</title>
        </Helmet>
        <div className="bg-white p-8 rounded-lg shadow-md md:w-2/3 w-96">
          <h2 className="text-2xl font-semibold mb-4">Log in</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
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
              className="w-full bg-orange-600 hover:bg-orange-800 text-white py-2 px-4 rounded-md"
            >
              Login
            </button>
            <div className="flex justify-center gap-4 my-2">
              <button
                onClick={handleGoogleSignIn}
                type="button"
                className=" btn text-red-800 text-xl py-2 px-4 rounded-md"
              >
                <FaGoogle></FaGoogle>
              </button>
              <button
                onClick={handleGithubSignIn}
                type="button"
                className=" btn text-black text-xl py-2 px-4 rounded-md"
              >
                <FaGithub></FaGithub>
              </button>
            </div>
            {registerError && (
              <p className="my-2 text-sm text-red-800">{registerError}</p>
            )}
            {success && (
              <p className="my-2 text-sm text-green-700">{success}</p>
            )}
            <p className="mt-4 text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                to={"/register"}
                className="text-orange-500 hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Fade>
  );
};

export default Login;
