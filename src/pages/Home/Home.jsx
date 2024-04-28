import Banner from "../../shared/Banner/Banner";
import FindUs from "../../shared/FindUs/FindUs";
import { Fade } from "react-awesome-reveal";
import SendFeedback from "../../shared/SendFeedback/SendFeedback";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import SubCard from "../../shared/SubCard/SubCard";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const subcategories = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Khan Exhibit | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="my-10">
        <h1 className="text-center text-5xl">Craft Items</h1>
        <h1 className="text-5xl text-center p-4">
          Art categories : &nbsp;
          <span className="text-gray-500">
            <Typewriter
              words={[
                "Landscape Painting",
                " Portrait Drawing",
                " Watercolor Painting",
                "Oil Painting",
                "Charcoal Sketching",
                "Cartoon Drawing",
              ]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
      <Fade direction="down">
        <div className="grid lg:grid-cols-3 gap-6 p-6">
          {subcategories.map((subcategory) => (
            <SubCard key={subcategory._id} subcategory={subcategory}></SubCard>
          ))}
        </div>
      </Fade>
      <Fade direction="left">
        <FindUs></FindUs>
      </Fade>
      <Fade direction="right">
        <SendFeedback></SendFeedback>
      </Fade>
    </div>
  );
};

export default Home;
