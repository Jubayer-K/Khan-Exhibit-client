import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";

const FilteredCard = ({ craft }) => {
    const { _id, itemName, image, price, rating, customization, stock } = craft;
  return (
    <Fade direction="left">
      <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div
            style={{ backgroundImage: `url('${image}')` }}
            className="h-64 w-full rounded-lg bg-cover bg-center"
          ></div>
          <div className="px-5 my-4 pb-5">
            <h5 className="text-xl font-semibold text-gray-900 ">
              {itemName}
            </h5>
            <div className="flex items-center justify-between mt-2.5 mb-5">
              <span>Customization : {customization}</span>
              <span className="bg-gray-100 text-gray-800 text-xs font-bold px-2.5 py-0.5 rounded ms-3">
                Rating : {rating}
              </span>
            </div>
            <h4 className="font-semibold text-gray-500">
              Stock : <span className="font-bold text-gray-800">{stock}</span>
            </h4>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-green-700 ">
                ${price}
              </span>
              <Link
                to={`details/${_id}`}
                className="btn glass bg-gray-500 hover:bg-gray-800 hover:text-white m-2"
              >
                {" "}
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

FilteredCard.propTypes = {
  craft: PropTypes.object,
};

export default FilteredCard;
