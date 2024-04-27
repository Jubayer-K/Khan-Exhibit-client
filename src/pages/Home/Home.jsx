import Banner from "../../shared/Banner/Banner";
import FindUs from "../../shared/FindUs/FindUs";
import { Fade } from "react-awesome-reveal";
import SendFeedback from "../../shared/SendFeedback/SendFeedback";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Khan Exhibit | Home</title>
      </Helmet>
      <Banner></Banner>
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
