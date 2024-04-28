import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import MyArtItems from "../../shared/MyArtItems/MyArtItems";

const MyArt = () => {

  const crafts = useLoaderData();

  return (
    <div className="font-nunito md:m-14 my-10">
      <Helmet>
        <title>Khan Exhibit | My Art & Craft</title>
      </Helmet>
      <h1 className="text-center md:text-5xl text-3xl font-bold my-4">My Art & Craft Items : {crafts.length}</h1>
      <p className="text-center mb-9 font-poppins"> From luxurious villas to cozy apartments, these properties provide comfort, security, and a sense of community, making them ideal homes for families and individuals alike.</p>
      <hr />
      <div className="grid lg:grid-cols-3 gap-6 p-6">
        {
          crafts.map(craft => <MyArtItems key={craft._id} craft={craft}></MyArtItems>)
        }
      </div>
    </div>
  );
};

export default MyArt;
