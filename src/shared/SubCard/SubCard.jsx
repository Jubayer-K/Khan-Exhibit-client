import { Link } from "react-router-dom";

const SubCard = ({ subcategory }) => {
  const {
    _id,
    itemName,
    image,
    subcategoryName,
    description,
    price,
    rating,
    customization,
    time,
    stock,
  } = subcategory;
  return <div>

<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
          <img className="p-8 rounded-t-lg" src={image} alt="product image" />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
              {itemName}
            </h5>
          </a>
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
            <span className="text-3xl font-bold text-green-700 ">${price}</span>
            <Link
              to={`/subcategory/details/${_id}`}
              className="btn glass bg-gray-500 hover:bg-gray-800 hover:text-white m-2"
            >
              {" "}
              View Details
            </Link>
          </div>

        </div>
      </div>

  </div>;
};

export default SubCard;
