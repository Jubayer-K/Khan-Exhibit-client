import { Fade } from "react-awesome-reveal";
import Lottie from "lottie-react";

import animation from "../../assets/artanimation.json";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProviders";
import { useContext } from "react";

const AddCraft = () => {
  const { user } = useContext(AuthContext);
  const handleAddCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.user_name.value;
    const userEmail = form.user_email.value;
    const itemName = form.item_name.value;
    const image = form.image.value;
    const subcategoryName = form.subcategory_name.value;
    const description = form.short_description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const time = form.processing_time.value;
    const stock = form.stock_status.value;
    const email = user.email;

    const newCraft = {
      name,
      email,
      itemName,
      image,
      subcategoryName,
      description,
      price,
      rating,
      customization,
      time,
      stock,
      userEmail
    };

    fetch("https://khan-exhibit-server.vercel.app/add-craft", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Item Added Successfully");
        } else {
          toast.success("Item Added Unsuccessful");
        }
      });
  };
  return (
    <Fade direction="left">
      <Helmet>
        <title>Khan Exhibit | Add Craft</title>
      </Helmet>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center font-nunito">
        <div className="w-full">
          <div className=" mx-auto p-10 font-nunito">
            <h1 className="md:text-5xl text-3xl font-semibold mb-6 text-center">
              Add Craft Item
            </h1>
            <form className="md:max-w-lg mx-auto" onSubmit={handleAddCraft}>
              <div className="mb-4">
                <label htmlFor="user_name" className="block mb-2">
                  User Name:
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="user_email" className="block mb-2">
                  User Email:
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="item_name" className="block mb-2">
                  Item Name:
                </label>
                <input
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
                  <option value="Charcoal Sketching">Charcoal Sketching</option>
                  <option value="Cartoon Drawing">Cartoon Drawing</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="short_description" className="block mb-2">
                  Short Description:
                </label>
                <textarea
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
                Add Item
              </button>
            </form>
          </div>
        </div>
        <div className="w-full bg-[url('/addart.png')] lg:min-h-screen min-h-60 bg-contain bg-no-repeat bg-center">
          <Lottie animationData={animation} loop={true}></Lottie>
        </div>
      </div>
    </Fade>
  );
};

export default AddCraft;
