import { Link } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import { MdMessage } from "react-icons/Md";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-blue-900 text-neutral-content grid grid-cols-3">
        <div className="mx-auto">
          <img
            width={100}
            src="https://i.ibb.co/T0fpj2h/1589136458508.jpg"
            alt="1589136458508"
          />
          <span className="footer-title">Services</span>
          <Link className="link link-hover">
            Location: bandhabari,
            <br /> kaliyakoir,
            <br /> Gazipur
          </Link>
          <div className="">
            <div className="flex mr-8 mb-4">
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
        <div className="mx-auto">
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </div>
        <div className="mx-auto">
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
        <div>
          <h2 className="font-bold text-lg">DON'T MISS A THING</h2>
          <p>Get update a special deals and exclusive offer.</p>
          <div>
            <div className="join">
              <input
                className="input input-bordered join-item"
                placeholder="Email"
              />
              <button className="btn join-item rounded-r-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-blue-900 text-neutral-content">
        <div>
          <p>Copyright © 2023 - All right reserved by Dhaka Resort Ltd</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
