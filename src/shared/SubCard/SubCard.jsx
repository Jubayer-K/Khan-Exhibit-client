import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SubCard = ({ subcategory }) => {
  const {
    _id,
    itemName,
    image,
    subcategoryName
  } = subcategory;
  return (
    <div>
      <div className="flex flex-col justify-center items-center max-w-sm mx-auto my-8">
        <div
          style={{ backgroundImage: `url('${image}')` }}
          className="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
        ></div>
        <div className="w-56 md:w-64 backdrop-blur-xl bg-black/10 -mt-10 shadow-lg rounded-lg overflow-hidden">
          <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-100">
            {subcategoryName}
          </div>
          <div className="flex items-center justify-between py-2 px-3 bg-gray-400">
            <h1 className="text-gray-800 font-bold ">{itemName}</h1>
            <Link to={`/subcategory/details/${_id}`}>
              <button className=" glass bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

SubCard.propTypes = {
  subcategory: PropTypes.object,
};

export default SubCard;
