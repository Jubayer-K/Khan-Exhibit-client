import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
// import ArtItems from "../../shared/ArtItems/ArtItems";

const AllArt = () => {
  const crafts = useLoaderData();

  return (
    <div className="font-nunito md:m-14 my-10 ">
      <Helmet>
        <title>Khan Exhibit | All Art & Craft</title>
      </Helmet>
      <h1 className="text-center md:text-5xl text-3xl font-bold my-4 ">
        All Art & Craft Items : {crafts.length}
      </h1>
      <p className="text-center mb-9 font-poppins">
        {" "}
        From luxurious villas to cozy apartments, these properties provide
        comfort, security, and a sense of community, making them ideal homes for
        families and individuals alike.
      </p>
      <hr />
      <div className="overflow-x-auto">
        <table className="table dark:bg-gray-800 dark:text-white">
          {/* head */}
          <thead className="text-3xl">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Subcategory</th>
              <th>Stock</th>
            </tr>
          </thead>
          {crafts.map((craft, index) => (
            <tbody key={craft._id}>
              <tr className="hover:bg-base-200">
                <th>{index + 1}</th>
                <td>{craft.itemName}</td>
                <td className="text-green-700">
                  ${craft.price} <span className="text-black">USD</span>
                </td>
                <td>{craft.subcategoryName}</td>
                <td>{craft.stock}</td>
                <th>
                  <Link to={`details/${craft._id}`}>
                    <button className="btn glass bg-gray-400 ">View Details</button>
                  </Link>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllArt;
