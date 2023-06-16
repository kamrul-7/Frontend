import img from "../../assets/cot.png";
import img1 from "../../assets/cot - Copy.png";
const ClientSays = () => {
  return (
    <div className="md:ml-20 ml-8 md:mt-32 -mt-32 md:flex justify-around mb-8">
      <div className="mb-12">
        <div className="card w-72 bg-white shadow-xl">
          <figure></figure>
          <div className="card-body">
            <div className="flex">
              <div>
                <img className="" width={100} src={img1} alt="" />
              </div>
              <div>
                <p className="pl-2">
                  Of course I've been willing to talk to you, but when I got a
                  client says she wants to keep things to herself... If a client
                  says you smell or you're dirty, If my client says this is what
                  happened I'm certain it must've happened.
                </p>
              </div>
              <div>
                <img className="mt-48" width={100} src={img} alt="" />
              </div>
            </div>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <figcaption className="flex space-x-3">
          <img
            class="rounded-full w-9 h-9"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
            alt="profile picture"
          />
          <div className="space-y-0.5 dark:text-white text-left">
            <div>
              <p>
                {" "}
                <b>Joseph McFall</b>
              </p>
            </div>
            <div classNAme=" text-gray-500 dark:text-gray-400">
              <small>CTO at Google</small>
            </div>
          </div>
        </figcaption>
      </div>
      <div className="mb-8">
        <div className="card w-72 bg-white shadow-xl">
          <figure></figure>
          <div className="card-body">
            <div className="flex">
              <div>
                <img className="" width={100} src={img1} alt="" />
              </div>
              <div>
                <p className="pl-2">
                  I started to use TextRanch when I began to learn English. It
                  has been an awesome way to improve my English skills.If a
                  client says you smell or you're dirty, If my client says this
                  is what happened I'm certain
                </p>
              </div>
              <div>
                <img className="mt-48" width={100} src={img} alt="" />
              </div>
            </div>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <figcaption className="flex space-x-3">
          <img
            class="rounded-full w-9 h-9"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5yQMQPSLJASKj3EEYW8a4VlEOcciZxsM4TA&usqp=CAU"
            alt="profile picture"
          />
          <div className="space-y-0.5 dark:text-white text-left">
            <div>
              <p>
                {" "}
                <b>Joseph McFall</b>
              </p>
            </div>
            <div classNAme=" text-gray-500 dark:text-gray-400">
              <small>CTO at Google</small>
            </div>
          </div>
        </figcaption>
      </div>
      <div className="mb-8">
        <div className="card w-72 bg-white shadow-xl">
          <figure></figure>
          <div className="card-body">
            <div className="flex">
              <div>
                <img className="" width={100} src={img1} alt="" />
              </div>
              <div>
                <p className="pl-2">
                  I love that TextRanch editors are real people who revise the
                  text and provide feedback – it makes it so personal. If a dog
                  chews shoes whose shoes does he choose? I love that TextRanch
                  editors are real people
                </p>
              </div>
              <div>
                <img className="mt-48" width={100} src={img} alt="" />
              </div>
            </div>

            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <figcaption className="flex space-x-3">
          <img
            class="rounded-full w-9 h-9"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
            alt="profile picture"
          />
          <div className="space-y-0.5 dark:text-white text-left">
            <div>
              <p>
                {" "}
                <b>Joseph McFall</b>
              </p>
            </div>
            <div classNAme=" text-gray-500 dark:text-gray-400">
              <small>CTO at Google</small>
            </div>
          </div>
        </figcaption>
      </div>
    </div>
  );
};

export default ClientSays;
