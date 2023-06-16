import { AiFillLinkedin } from "react-icons/Ai";
import { AiFillInstagram } from "react-icons/Ai";
import { BsFacebook } from "react-icons/Bs";
import { AiFillTwitterCircle } from "react-icons/Ai";
import { AiOutlineLock } from "react-icons/Ai";
import { IoMdCall } from "react-icons/io";
import { MdMessage } from "react-icons/Md";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="flex justify-around bg-[#686de0] py-1 text-white shadow-lg">
      <div className="hidden md:block">
        <div className="flex">
          <div className="flex mr-8">
            <div className="mt-1">
              <IoMdCall />
            </div>
            <p className="ml-2">+801762554444</p>
          </div>
          <div className="flex">
            <div className="mt-1">
              <MdMessage />
            </div>
            <p className="ml-2">dhakadreamlandpark@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="mt-1 mr-2">
          <BsFacebook />
        </div>
        <div className="mt-1 mr-2">
          <AiFillInstagram />
        </div>
        <div className="mt-1 mr-2">
          <AiFillLinkedin />
        </div>
        <div className="mt-1 mr-2">
          <AiFillTwitterCircle />
        </div>
        <Link className="bg-white text-blue-900 flex rounded-lg px-4 text-sm">
          <div className="py-1">
            <AiOutlineLock />
          </div>
          <div className="ml-2">
            <p>Login</p>
          </div>
        </Link>
        <Link className="bg-blue-800 text-white flex rounded-lg px-4 ml-4 text-sm">
          <div className="py-1">
            <AiOutlineLock />
          </div>
          <div className="ml-2">
            <p>Sign Up</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
