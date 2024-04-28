import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const MyArtItems = ({ craft }) => {
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
  } = craft;

  const handleDelete = (id) => {
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
        fetch(`http://localhost:5000/add-craft/${id}`,{
            method : 'DELETE'
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
          });
      }
    });
  };
  return (
    <div>
      <div className="card card-compact bg-base-100 hover:border-gray-400 hover:scale-105 hover:shadow-lg transition-transform">
        <div className="m-6 border rounded-2xl">
          <figure className="relative">
            <img
              className="max-w-80 max-h-52 rounded-2xl "
              src={image}
              alt="estate image"
            />
            <div className=" absolute rounded-xl text-slate-200 bg-orange-600 p-2 text-sm font-bold flex items-center gap-1 m-2">
              <span></span> Stock : {stock}
            </div>
          </figure>
        </div>

        <div
          className="card-body "
          data-aos="fade-up"
          data-aos-duration="400"
          data-aos-delay="100"
        >
          <h2 className="card-title">{itemName}</h2>
          <div className="items-center gap-4">
            <span className="flex flex-col text-base text-orange-600">
              {customization}
            </span>
          </div>
          <p className="font-medium text-base text-[#131313CC]">
            Subcategory : {subcategoryName}
          </p>
          <p className="font-medium text-base text-[#131313CC]">
            Rating : {rating}
          </p>
          <hr className="border-dashed" />
          <h3 className="flex justify-between font-medium text-base text-[#131313CC]">
            <span>{time}</span>
            <span className="flex items-center gap-2 text-green-600 text-2xl">
              {price}
            </span>
          </h3>
        </div>
        <p className="font-medium text-sm text-gray-500 p-2 text-center">
          {description}
        </p>
        <Link
          to={`/craft/${_id}`}
          className="btn glass bg-gray-500 hover:bg-gray-800 hover:text-white m-2"
        >
          {" "}
          View Details
        </Link>
        <div className="flex items-center justify-center gap-2">
          <Link to={`update/${_id}`}>
          <button className="btn glass bg-gray-500 hover:bg-gray-800 hover:text-white">
            Update
          </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn glass bg-red-500 hover:bg-red-800 hover:text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

MyArtItems.propTypes = {
  craft: PropTypes.object,
};

export default MyArtItems;
