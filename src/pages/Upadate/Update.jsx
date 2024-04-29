import { Fade } from "react-awesome-reveal";
import Lottie from "lottie-react";

import animation from "../../assets/updateanimation.json";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const Update = () => {

  const craft = useLoaderData();
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

  const handleUpdateCraft = e => {
    e.preventDefault();
    const form = e.target;
    const itemName = form.item_name.value;
    const image = form.image.value;
    const subcategoryName = form.subcategory_name.value;
    const description = form.short_description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const time = form.processing_time.value;
    const stock = form.stock_status.value;

    const updatedCraft = {
      itemName,
      image,
      subcategoryName,
      description,
      price,
      rating,
      customization,
      time,
      stock,
    };

    fetch(`http://localhost:5000/add-craft/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Item Updated Successfully");
        } else {
          toast.success("Item Update Unsuccessful");
        }
      });
  };



  return (
    <Fade direction="left">
      <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-center font-nunito">
        <div className="w-full">
          <div className=" mx-auto p-10 font-nunito">
            <h1 className="md:text-5xl text-3xl font-semibold mb-6 text-center">
              Update Item : {itemName}
            </h1>
            <form className="md:max-w-lg mx-auto" onSubmit={handleUpdateCraft}>
              <div className="mb-4">
                <label htmlFor="item_name" className="block mb-2">
                  Item Name:
                </label>
                <input
                  defaultValue={itemName}
                  type="text"
                  id="item_name"
                  name="item_name"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="image" className="block mb-2">
                  Image URL:
                </label>
                <input
                  defaultValue={image}
                  type="text"
                  id="image"
                  name="image"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="customization" className="block mb-2">
                  Subcategory Name:
                </label>
                <select
                  defaultValue={subcategoryName}
                  id="subcategory_name"
                  name="subcategory_name"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                >
                  <option value="">Select</option>
                  <option value="Landscape Painting">Landscape Painting</option>
                  <option value=" Portrait Drawing"> Portrait Drawing</option>
                  <option value="Watercolour Painting">
                    Watercolour Painting
                  </option>
                  <option value="Oil Painting">Oil Painting</option>
                  <option value="Charcoal Sketching"> Portrait Drawing</option>
                  <option value="Cartoon Drawing"> Cartoon Drawing</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="short_description" className="block mb-2">
                  Short Description:
                </label>
                <textarea
                  defaultValue={description}
                  id="short_description"
                  name="short_description"
                  rows="3"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="price" className="block mb-2">
                  Price:
                </label>
                <input
                  defaultValue={price}
                  type="text"
                  id="price"
                  name="price"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="rating" className="block mb-2">
                  Rating:
                </label>
                <input
                  defaultValue={rating}
                  type="number"
                  id="rating"
                  name="rating"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="customization" className="block mb-2">
                  Customization (yes/no):
                </label>
                <select
                  defaultValue={customization}
                  id="customization"
                  name="customization"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="processing_time" className="block mb-2">
                  Processing Time:
                </label>
                <input
                  defaultValue={time}
                  type="text"
                  id="processing_time"
                  name="processing_time"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="stock_status" className="block mb-2">
                  Stock Status:
                </label>
                <select
                  defaultValue={stock}
                  id="stock_status"
                  name="stock_status"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                >
                  <option value="">Select</option>
                  <option value="In stock">In stock</option>
                  <option value="Made to Order">Made to Order</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-gray-500 text-white btn glass rounded-3xl hover:bg-gray-800"
              >
                Update
              </button>
            </form>
          </div>
        </div>
        <div
          className="w-full lg:min-h-screen min-h-60 bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        >
          <Lottie animationData={animation} loop={false}></Lottie>
        </div>
      </div>
    </Fade>
  );
};

export default Update;
