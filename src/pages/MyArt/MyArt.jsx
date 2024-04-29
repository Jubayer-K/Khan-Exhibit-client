import { Helmet } from "react-helmet-async";
// import { useLoaderData } from "react-router-dom";
import MyArtItems from "../../shared/MyArtItems/MyArtItems";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const MyArt = () => {
  const { user } = useContext(AuthContext);

  const [crafts, setCrafts] = useState([]);
  const [selectedCustomization, setSelectedCustomization] = useState('All');

  useEffect(() => {
    fetch(`http://localhost:5000/my-art/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCrafts(data);
      });
  }, [user]);

  const filterCrafts = (customization) => {
    if (customization === 'All') {
      return crafts;
    } else {
      return crafts.filter(craft => craft.customization === customization);
    }
  };

  // Handler function for dropdown change
  const handleCustomizationChange = (e) => {
    setSelectedCustomization(e.target.value);
  };

  return (
    <div className="font-nunito md:m-14 my-10">
      <Helmet>
        <title>Khan Exhibit | My Art & Craft</title>
      </Helmet>
      <h1 className="text-center md:text-5xl text-3xl font-bold my-4">
        My Art & Craft Items
      </h1>
      <h1 className="text-center md:text-3xl text-xl font-semibold my-4">
        Items Added by : {user.email}
      </h1>
      <div>
        <ul></ul>
      </div>

      <hr />
      <div className="flex justify-center my-5">
      <div className="text-center mb-4">
        <label htmlFor="customization">Filter by Customization:</label>
        <select
          id="customization"
          value={selectedCustomization}
          onChange={handleCustomizationChange}
          className="ml-2 p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-white"
        >
          <option value="All">All</option>
          <option value="yes">Customized</option>
          <option value="no">Non-Customized</option>
        </select>
      </div>
      </div>
      <div className="grid lg:grid-cols-5 gap-6 p-6">
        {filterCrafts(selectedCustomization).map((craft) => (
          <MyArtItems
            key={craft._id}
            craft={craft}
            crafts={crafts}
            setCrafts={setCrafts}
          ></MyArtItems>
        ))}
      </div>
    </div>
  );
};

export default MyArt;
