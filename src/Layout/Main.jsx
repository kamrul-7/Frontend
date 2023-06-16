import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/NavBar/Header";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
