const Reserve = () => {
  return (
    <div className="bg-[#341f97] pb-8">
      <div className="uppercase text-center md:font-extrabold md:text-4xl text-2xl font-semibold pt-8 text-white">
        <h1>Reserve your stay</h1>
      </div>
      <div className="flex md:ml-[10%] mt-20 mb-12 ml-6">
        <div className="form-control md:w-56 w-20">
          <select className="select select-bordered">
            <option disabled selected>
              Packages
            </option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
        </div>

        <div className="form-control md:w-56 w-24 ml-5">
          <select className="select select-bordered">
            <option disabled selected>
              Date
            </option>
          </select>
        </div>
        <div className="form-control md:w-56 w-24  ml-5">
          <select className="select select-bordered">
            <option disabled selected>
              Guest
            </option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
        </div>
        <div className="form-control md:w-56 w-24  ml-5 hidden md:block">
          <select className="select select-bordered">
            <option disabled selected>
              Book Now
            </option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
