import { useLoaderData } from "react-router-dom";

const Details = () => {
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



  return <div>
    <h1>{itemName}</h1>
    <img src={image}/>
  </div>;
};

export default Details;
