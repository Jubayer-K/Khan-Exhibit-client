import Banner from "../../shared/Banner/Banner";
import FindUs from "../../shared/FindUs/FindUs";
import { Fade } from "react-awesome-reveal";
import SendFeedback from "../../shared/SendFeedback/SendFeedback";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import SubCard from "../../shared/SubCard/SubCard";

const Home = () => {
  const subcategories = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Khan Exhibit | Home</title>
      </Helmet>
      <Banner></Banner>
        <h1 className="text-center text-5xl">Craft Items</h1>
      <div className="grid grid-cols-5">
        {
          subcategories.map((subcategory)=><SubCard key={subcategory._id} subcategory={subcategory}></SubCard>)
        }
      </div>
      <Fade direction="up">
        <FindUs></FindUs>
      </Fade>
      <Fade direction="up">
       <SendFeedback></SendFeedback>
      </Fade>
    </div>
  );
};

export default Home;
