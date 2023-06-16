import { BsCheckCircleFill } from "react-icons/Bs";
const Offer = () => {
  return (
    <div className="md:w-[95%] md:ml-12 md:mb-12">
      <div className="text-center mb-12">
        <h1 className="font-bold text-3xl text-blue-900 mt-8 mb-8">
          Why Chose Dhaka Resort?
        </h1>
        <p>
          Dhaka resort is a place where modern Amenities <br /> Maintain strong
          rapport with nature
        </p>
      </div>
      <div className="md:grid grid-cols-2 ml-4">
        <div className="md:grid grid-cols-2 gap-8">
          <div>
            <div className="card  w-56 md:mt-16 mt-8  bg-base-100  md:ml-16">
              <figure className="rounded-t-xl">
                <img
                  src="https://img.freepik.com/free-photo/large-pool-with-umbrellas-hammocks_1203-182.jpg?size=626&ext=jpg&uid=R106205364&ga=GA1.2.1794174872.1675619682&semt=ais"
                  alt=""
                />
              </figure>
            </div>
            <div className="card card-compact w-80 md:w-full md:h-72  bg-base-100  mt-8">
              <figure className="rounded-t-xl">
                <img
                  src="https://images.pexels.com/photos/2964163/pexels-photo-2964163.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </figure>
            </div>
          </div>
          <div>
            <div className="card card-compact  bg-base-100  w-80 h-80 mb-8 mt-4">
              <figure className="rounded-t-xl">
                <img
                  src="https://img.freepik.com/free-photo/outdoor-swimming-pool_74190-6578.jpg?size=626&ext=jpg&uid=R106205364&ga=GA1.2.1794174872.1675619682&semt=ais"
                  alt=""
                />
              </figure>
            </div>
            <div className="card card-compact rounded-xl w-64 h-80 bg-base-100 ">
              <figure className="rounded-t-xl">
                <img
                  src="https://images.pexels.com/photos/16144274/pexels-photo-16144274/free-photo-of-a-swimming-pool-at-a-resort.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
        <div className="md:ml-20 mt-12 ml-2">
          <p>
            We offer organic food production In our own yard. We also Feel
            Honored to host your Events like wedding, Anniversary, Birthday
            party and many more, for our corporate clients we are ready to
            shoulder the responsibility of arranging AGM, corporate day out,
            corporate picnic and so many
          </p>
          <div className="mt-16 flex">
            <div className="mt-1 text-blue-800">
              <BsCheckCircleFill />
            </div>
            <div className="pl-2">
              <p>Different Type of cottage</p>
            </div>
          </div>
          <div className="mt-2 flex">
            <div className="mt-1 text-blue-800">
              <BsCheckCircleFill />
            </div>
            <div className="pl-2">
              <p>Family Picnic Zone</p>
            </div>
          </div>
          <div className="flex mt-2">
            <div className="mt-1 text-blue-800">
              <BsCheckCircleFill />
            </div>
            <div className="pl-2">
              <p>Swimming pool</p>
            </div>
          </div>
          <div className="flex mt-2">
            <div className="mt-1 text-blue-800">
              <BsCheckCircleFill />
            </div>
            <div className="pl-2">
              <p>Shooting Zone</p>
            </div>
          </div>
          <div className="flex mt-2">
            <div className="mt-1 text-blue-800">
              <BsCheckCircleFill />
            </div>
            <div className="pl-2">
              <p>Kids Playground</p>
            </div>
          </div>
          <div className="flex mt-2">
            <div className="mt-1 text-blue-800">
              <BsCheckCircleFill />
            </div>
            <div className="pl-2">
              <p>ECO Park</p>
            </div>
          </div>
          <button className="bg-blue-900 px-4 py-2 rounded-xl text-white md:mt-36 mt-16 md:mb-24 mb-16 hover:bg-blue-700">
            Discover Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
