import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const BestSellers = [
  {
    categoryName: "Himalayas Exploration",
    books: [
      {
        id: 1,
        name: "Majestic Peaks",
        price: 150,
        image: "/4.jpg",
      },
      {
        id: 2,
        name: "Himalayan Wisdom",
        price: 300,
        image: "/5.jpg",
      },
      {
        id: 3,
        name: "Journey to Everest",
        price: 500,
        image: "/1.png",
      },
      {
        id: 4,
        name: "Mindfulness in the Mountains",
        price: 450,
        image: "/5.jpg",
      },
      {
        id: 5,
        name: "Majestic Peaks",
        price: 150,
        image: "/4.jpg",
      },
      {
        id: 6,
        name: "Majestic Peaks",
        price: 150,
        image: "/4.jpg",
      },
    ],
  },
  {
    categoryName: "Himalayan Retreats",
    books: [
      {
        id: 7,
        name: "The Summit Chronicles",
        price: 150,
        image: "/5.jpg",
      },
      {
        id: 8,
        name: "Majestic Peaks",
        price: 150,
        image: "/3.jpg",
      },
      {
        id: 9,
        name: "Mindful Money in the Mountains",
        price: 150,
        image: "/2.jpg",
      },
      {
        id: 10,
        name: "Journey to Everest",
        price: 150,
        image: "/1.png",
      },
      {
        id: 11,
        name: "Himalayan Wisdom",
        price: 150,
        image: "/5.jpg",
      },
      {
        id: 12,
        name: "Mindfulness in the Mountains",
        price: 150,
        image: "/4.jpg",
      },
    ],
  },
];

function FeaturedTrips() {
  return (
    <div className="pb-5 my-16 pl-6 md:pl-2  max-w-7xl  mx-auto">
      {BestSellers.map((category) => (
        <>
          <div className="flex my-8 ">
            <h2 className="text-3xl flex-1 gradientText   font-bold">
              {category.categoryName}
            </h2>

            <p className="text-black text-lg mr-2">View all</p>
          </div>

          <div className="flex  my-16 overflow-x-scroll scrollbar-none space-x-10 mt-6">
            {category.books.map((book) => (
              <div
                key={book.id}
                className="flex flex-col items-center w-full  "
              >
                <div className="flex justify-start relative h-[210px] w-[160px] md:w-[200px] md:h-[200px]  object-cover  shadow-xl hover:shadow-2xl cursor-pointer rounded-xl flex-col ">
                  <Image
                    fill
                    //   width={150}
                    //   height={200}
                    className=" rounded-xl  "
                    alt="image"
                    src={book.image}
                  />

                  {/* <div className="absolute top-0 right-0 p-1">
                    <Button variant={"outline"} size={"sm"}>
                      <BadgePlus size={16} />
                    </Button>
                  </div> */}
                </div>

                <div className="flex  flex-col mt-5 w-full space-x-2">
                  <p className="font-semibold line-clamp-1 text-left text-[16px] lg:text-xl">
                    {book.name}
                  </p>{" "}
                  <div className="flex items-center space-x-3 mt-3">
                    <p className="line-through">
                      {" "}
                      ₹ <span className="text-[16px]">{book.price}</span>
                      {/* <hr className=" rotate-90 border-l border-gray-300" /> */}
                    </p>
                    <p>
                      ₹ <span className="text-[16px]"> 400 </span>
                    </p>
                  </div>
                  <div className=" mt-3">
                    <Button
                      className="w-full"
                      variant={"secondary"}
                      size={"sm"}
                    >
                      Book now
                      {/* <MoveUpRight className="ml-2" size={16} /> */}
                    </Button>
                  </div>
                </div>

                {/* <Button variant={"default"}>Purchase Now</Button> */}
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}

export default FeaturedTrips;
