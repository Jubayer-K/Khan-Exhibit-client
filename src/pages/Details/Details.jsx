import { Fade } from "react-awesome-reveal";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const craft = useLoaderData();
  const {
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
  } = craft;

  return (
    <div>
      <Fade>
        <div className="container mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src={image} alt={itemName} className="w-full" />
            </div>
            <div className="dark:text-white text-gray-800">
              <h1 className="text-3xl font-bold mb-4 text-center">
                {itemName}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
                {description}
              </p>
              <p className="text-lg mb-4">
                <span className="font-bold text-black dark:text-orange-200">Subcategory:</span> {subcategoryName}
              </p>
              <p className="text-lg mb-4">
                <span className="font-bold text-black dark:text-orange-200">Price:</span> ${price} USD
              </p>
              <p className="text-lg mb-4">
                <span className="font-bold text-black dark:text-orange-200">Rating:</span> {rating}/5
              </p>
              <p className="text-lg mb-4">
                <span className="font-bold text-black dark:text-orange-200">Customization:</span> {customization}
              </p>
              <p className="text-lg mb-4">
                <span className="font-bold text-black dark:text-orange-200">Processing Time:</span> {time}
              </p>
              <p className="text-lg mb-4">
                <span className="font-bold text-black dark:text-orange-200">Stock:</span> {stock}
              </p>
              <p className="text-lg mb-4">
                <span className="font-bold text-black dark:text-orange-200">Published By :</span> {email}
              </p>
              <div className="flex gap-5">
                <button className="btn glass bg-gray-500 hover:bg-gray-800 hover:text-white">
                  Buy Now
                </button>
                <button className="btn glass bg-blue-950 text-white hover:text-black">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Details;
