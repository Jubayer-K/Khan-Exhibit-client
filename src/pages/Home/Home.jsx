import Banner from "../../shared/Banner/Banner";
import FindUs from "../../shared/FindUs/FindUs";
import SendFeedback from "../../shared/SendFeedback/SendFeedback";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import SubCard from "../../shared/SubCard/SubCard";
import { Typewriter } from "react-simple-typewriter";
import HomeArt from "../../shared/HomeArt/HomeArt";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const { subcategoryData, addCraftData } = useLoaderData();

  return (
    <Fade>
      <div className="dark:bg-gray-800 dark:text-white">
        <Helmet>
          <title>Khan Exhibit | Home</title>
        </Helmet>
        <Banner></Banner>
        <div className="my-10">
          <h1 className="text-center md:text-5xl text-3xl my-6">Craft Items</h1>
          <div className="my-6 md:w-2/3 mx-auto">
            <h1 className="text-center md:text-3xl text-xl my-3">
              Start Your Journey
            </h1>
            <h4 className="text-center md:text-xl text-base">
              Begin your journey of discovery today and find the art piece that
              reflects your unique style and personality. Whether you&apos;re a
              seasoned art collector or a first-time buyer, Khan Exhibit is your
              destination for quality art items that inspire and delight.
            </h4>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-6 p-6">
            {addCraftData.slice(0, 6).map((craft) => (
              <HomeArt key={craft._id} craft={craft}></HomeArt>
            ))}
          </div>
          <h1 className="md:text-5xl text-2xl text-center p-4">
            Art & Craft categories : &nbsp;
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
          <div className="my-6 md:w-2/3 mx-auto">
            <h1 className="text-center md:text-3xl text-xl my-3">
              Diverse Selection
            </h1>
            <h4 className="text-center md:text-xl text-base">
              Explore a diverse range of art items, carefully curated to suit
              different tastes and preferences. From stunning paintings to
              intricate sculptures, from modern abstract pieces to timeless
              classics, we have something to complement every style and
              aesthetic.
            </h4>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 p-6">
          {subcategoryData.map((subcategory) => (
            <SubCard key={subcategory._id} subcategory={subcategory}></SubCard>
          ))}
        </div>
        <FindUs></FindUs>
        <SendFeedback></SendFeedback>
      </div>
    </Fade>
  );
};

export default Home;
