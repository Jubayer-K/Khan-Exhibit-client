import { useLoaderData } from "react-router-dom";
import ArtItems from "../../shared/ArtItems/ArtItems";

const AllArt = () => {

  const crafts = useLoaderData();

  return (
    <div className="font-nunito md:m-14 my-10">
      <h1 className="text-center md:text-5xl text-3xl font-bold my-4">All Art & Craft Items : {crafts.length}</h1>
      <p className="text-center mb-9 font-poppins"> From luxurious villas to cozy apartments, these properties provide comfort, security, and a sense of community, making them ideal homes for families and individuals alike.</p>
      <hr />
      <div className="grid lg:grid-cols-3 gap-6 p-6">
        {
          crafts.map(craft => <ArtItems key={craft._id} craft = {craft}></ArtItems>)
        }
      </div>
    </div>
  );
};

export default AllArt;
