import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { MdDeleteSweep ,MdBrowserUpdated } from "react-icons/md";

const MyArtItems = ({ craft, crafts, setCrafts }) => {
  const { _id, itemName, image, price, rating, customization, stock } = craft;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#707684",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/add-craft/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Item has been deleted.",
                icon: "success",
              });
            }
            const remaining = crafts.filter((craft) => craft._id !== _id);
            setCrafts(remaining);
          });
      }
    });
  };
  return (
    <div>

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
              to={`details/${_id}`}
              className="btn glass bg-gray-500 hover:bg-gray-800 hover:text-white m-2"
            >
              {" "}
              View Details
            </Link>
          </div>
          <div className="flex items-center justify-around gap-2">
          <Link to={`update/${_id}`}>
            <button className="btn btn-circle bg-gray-500 hover:bg-gray-800 hover:text-white">
              <MdBrowserUpdated></MdBrowserUpdated>
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle glass bg-red-600 hover:bg-red-800 hover:text-white"
          >
          <MdDeleteSweep></MdDeleteSweep>
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

MyArtItems.propTypes = {
  craft: PropTypes.object,
  crafts: PropTypes.object,
  setCrafts: PropTypes.object,
};

export default MyArtItems;
