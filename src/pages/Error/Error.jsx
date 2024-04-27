import { Link } from "react-router-dom";
import errorImg from "/error.jpg";
import { Helmet } from "react-helmet-async";
import Lottie from "lottie-react";
import animationData from "../../assets/erroranimation.json";
const Error = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen font-workSans bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${errorImg})`,
      }}
    >
      <Helmet>
        <title>Khan Exhibit | Error</title>
      </Helmet>
      <div className="w-96">
        <Lottie animationData={animationData}></Lottie>
      </div>
      <div className="text-center">
        <p className="text-3xl text-gray-200 mt-4 font-nunito">
          We&apos;re sorry, the page you are looking for cannot be found.
        </p>
        <Link to={"/"}>
          <button className="btn glass bg-transparent hover:bg-gray-800 text-white font-bold text-xl px-5 py-7 content-center border-none mt-10 font-nunito">
            Go Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
