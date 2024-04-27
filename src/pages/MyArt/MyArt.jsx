import { Link } from "react-router-dom";


const MyArt = () => {
    return (
        <div>
            <Link to={'/update'}>
            <button className="btn glass bg-gray-500 hover:bg-gray-800">Update</button>
            </Link>
        </div>
    );
};

export default MyArt;