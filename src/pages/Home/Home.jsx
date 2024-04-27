import Banner from "../../shared/Banner/Banner";
import FindUs from "../../shared/FindUs/FindUs";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Fade direction="up">
        <FindUs></FindUs>
      </Fade>
    </div>
  );
};

export default Home;
