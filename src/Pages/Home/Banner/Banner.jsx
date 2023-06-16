import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="background md:w-[100vw] md:bg-cover">
        <button className="text-blue-900 px-4 py-2 rounded-xl bg-white ml-[30%] md:ml-[44%] mt-[70%] md:mt-[30%] hover:bg-slate-100 hover:text-blue-600 md:mb-24 mb-16">
          View All Packages
        </button>
      </div>
    </div>
  );
};

export default Banner;
