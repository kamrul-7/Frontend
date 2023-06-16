import NavBar from "../../Shared/NavBar/NavBar";
import Packages from "../../Shared/NavBar/Packages";
import Banner from "../Banner/Banner";
import ClientSays from "../ClientSays";
import Offer from "../Offer";
import Reserve from "../Reserve/Reserve";
import SpecialOffer from "../SpecialOffer";

const Home = () => {
  return (
    <div>
      <Banner />
      <Reserve />
      <Offer />
      <Packages />
      <ClientSays />
      <SpecialOffer />
    </div>
  );
};

export default Home;
