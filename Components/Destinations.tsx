import { StarIcon } from "@heroicons/react/24/solid";
import { ArrowUpRightIcon, HeartIcon } from "@heroicons/react/24/outline";

const Countries = [
  {
    id: 1,
    name: "Manali",
    rating: "4.4",
    price: "10,000",
    Img: "https://images.unsplash.com/photo-1590667046100-2e0fd9a5b31b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 2,
    name: "Kasol",
    rating: "4.6",
    price: "7000",
    Img: "https://images.unsplash.com/photo-1568040386931-f8ecfa4e221e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=308&q=80",
  },
  {
    id: 3,
    name: "Shimla",
    rating: "4.8",
    price: "8000",
    Img: "https://images.unsplash.com/photo-1562649846-ab413ca01712?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 4,
    name: "Dalhousie",
    rating: "4.9",
    price: "9000",
    Img: "https://images.unsplash.com/photo-1615445969492-6894df4a5613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
  },
];

export default function Destinations() {
  return (
    <div className="max-w-7xl my-20 mx-auto">
      <div className="flex flex-col items-center  mx-auto">
        <h2 className="lg:text-[60px] text-[20px] capitalize text-center lg:leading-[5.3rem]">
          A Selection of Exceptional Destinations <br />
          offers will avail soon
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 my-8 mx-auto px-2">
        {Countries.map((c) => (
          <div
            key={c.id}
            className="col-span-1 cursor-pointer relative shadow-xl  p-3 rounded-xl  "
          >
            <img
              className="object-cover rounded-xl w-56 h-32"
              src={c.Img}
              alt={c.name}
            />

            <div className="absolue absolute top-4  right-0 h-16 w-14 ">
              <HeartIcon className="text-white/80 h-6 w-6" />
            </div>

            <div className="flex   my-4 px-2 items-center justify-between">
              <div className="flex-col ">
                <h2 className="text-[16px] max-w-xs text-ellipsis">{c.name}</h2>
                <p className="max-w-xs text-[13px]  text-black/70">
                  ₹ {c.price}
                </p>
              </div>
              <div className="flex-col">
                <div className="flex space-x-2  justify-end items-center">
                  <StarIcon className="h-4 w-4 text-yellow-500" />
                  <p className="text-[12px]   font-light">{c.rating}</p>
                </div>

                <div className="flex  mt-1  items-center">
                  <p className="text-[13px] max-w-[56px] line-clamp-1 text-black/60 ">
                    More{" "}
                  </p>
                  <ArrowUpRightIcon className="text-black/60 ml-2 h-3 w-3" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
