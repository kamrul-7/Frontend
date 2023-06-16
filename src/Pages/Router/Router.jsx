import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../../Layout/Main";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";
import About from "../About";
import Packages from "../Shared/NavBar/Packages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/navbar",
        element: <NavBar />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Packages",
        element: <Packages />,
      },
    ],
  },
]);
