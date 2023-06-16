// import icon from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  const navOptions = (
    <>
      <li className="list-none uppercase text-sm">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-red-500 
                ${isActive ? "text-red-700 " : ""}`
          }
        >
          <p>Home</p>
        </NavLink>
      </li>
      <li className="list-none uppercase text-sm">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-red-500 
                ${isActive ? "text-red-700 " : ""}`
          }
        >
          <p> About Us</p>
        </NavLink>
      </li>
      <li className="list-none uppercase text-sm">
        <NavLink
          to="/Packages"
          className={({ isActive }) =>
            `hover:text-red-500 
                ${isActive ? "text-red-700" : ""}`
          }
        >
          <p> Packages</p>
        </NavLink>
      </li>
      <li className="list-none uppercase text-sm">
        <NavLink
          to="/ Packadsdges"
          className={({ isActive }) =>
            `hover:text-red-500 
                ${isActive ? "text-red-700" : ""}`
          }
        >
          <p>Eco Park</p>
        </NavLink>
      </li>
      <li className="list-none uppercase text-sm">
        <NavLink
          to="/abodsut"
          className={({ isActive }) =>
            `hover:text-red-500 
                ${isActive ? "text-red-700" : ""}`
          }
        >
          <p> Cottage</p>
        </NavLink>
      </li>
      <li className="list-none uppercase text-sm">
        <NavLink
          to="/abdsout"
          className={({ isActive }) =>
            `hover:text-red-500 
                ${isActive ? "text-red-700" : ""}`
          }
        >
          <p>Our Resort</p>
        </NavLink>
      </li>
      <li className="list-none uppercase text-sm">
        <NavLink
          to="/abocfut"
          className={({ isActive }) =>
            `hover:text-red-500 
                ${isActive ? "text-red-700" : ""}`
          }
        >
          <p> Events</p>
        </NavLink>
      </li>
      <li className="list-none uppercase text-sm">
        <NavLink
          to="/footer"
          className={({ isActive }) =>
            `hover:text-red-500 
                ${isActive ? "text-red-700" : ""}`
          }
        >
          <p> Contact</p>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#341f97] text-white">
      <div className="navbar-start md:ml-32">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 w-56">
            <div className=" fixed w-32 py-4  bg-[#686de0] rounded-md text-slate-200 subTitle text-2xl">
              {navOptions}
            </div>
          </ul>
        </div>

        <img
          width={100}
          src="https://w7.pngwing.com/pngs/607/848/png-transparent-logo-novotel-suite-hotel-resort-hotel-blue-text-logo-thumbnail.png"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <NavLink className="menu-horizontal px-2 subTitle text-sm space-x-6">
          {navOptions}
        </NavLink>
      </div>

      <div className="navbar-end">
        <div className="flex-none">
          <div className="dropdown dropdown-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
