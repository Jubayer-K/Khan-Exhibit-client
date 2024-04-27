import Banner from "../../shared/Banner/Banner";
import FindUs from "../../shared/FindUs/FindUs";
import { Fade } from "react-awesome-reveal";
import SendFeedback from "../../shared/SendFeedback/SendFeedback";

const Home = () => {
  return (
    <div>
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
