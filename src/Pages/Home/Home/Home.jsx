import NavBar from "../../Shared/NavBar/NavBar";
import Banner from "../Banner/Banner";
import Offer from "../Offer";
import Reserve from "../Reserve/Reserve";

const Home = () => {
  return (
    <div>
      <Banner />
      <Reserve />
      <Offer />
    </div>
  );
};

export default Home;
