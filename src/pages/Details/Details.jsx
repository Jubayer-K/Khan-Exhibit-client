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
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={image} alt={itemName} className="w-full" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{itemName}</h1>
            <p className="text-gray-600 text-lg mb-4">{description}</p>
            <p className="text-gray-800 text-lg mb-4">
              Subcategory: {subcategoryName}
            </p>
            <p className="text-gray-800 text-lg mb-4">Price: ${price} USD</p>
            <p className="text-gray-800 text-lg mb-4">Rating: {rating}/5</p>
            <p className="text-gray-800 text-lg mb-4">
              Customization: {customization}
            </p>
            <p className="text-gray-800 text-lg mb-4">
              Processing Time: {time}
            </p>
            <p className="text-gray-800 text-lg mb-4">Stock: {stock}</p>
            <p className="text-gray-800 text-lg mb-4">Published By : {email}</p>
            <div className="flex gap-5">
              <button className="btn glass bg-gray-500 hover:bg-gray-800 hover:text-white">Buy Now</button>
              <button className="btn glass bg-blue-950 text-white hover:text-black">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
