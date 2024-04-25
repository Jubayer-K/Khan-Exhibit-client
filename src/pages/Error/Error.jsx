import { Link } from "react-router-dom";
import errorImg from "/error.jpg";
import { Helmet } from "react-helmet-async";
const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen font-workSans bg-cover bg-no-repeat" style={{
            backgroundImage: `url(${errorImg})`,
          }}>
            <Helmet>
                <title>Khan Exhibit | Error</title>
            </Helmet>
      <h1 className="text-4xl font-bold text-white font-nunito">404 - Page Not Found</h1>
      <p className="text-lg text-gray-200 mt-4 font-nunito">We&apos;re sorry, the page you are looking for cannot be found.</p>
      <Link to={'/'}><button className="btn bg-orange-600 text-white font-bold text-xl px-5 py-7 content-center border-none mt-10 font-nunito">Go Back to Home</button></Link>
    </div>
    );
};

export default Error;