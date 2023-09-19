import Image from "next/image";
import urlFor from "../lib/urlFor";
import { groq } from "next-sanity";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "./ClientSideRoute";
import { client } from "../lib/sanity.client";
import { Post } from "../typing";
// import React from "react";
type Props = {
  posts: Post[];
};

export const revalidate = 1;
export async function genrateStaticParams() {
  const query = groq`
    *[_type=="post"] {
      slug
    }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}
function BlogList({ posts }: Props) {
  // console.log(posts);
  return (
    <div>
      {/* Mobile */}
      <h2 className="text-black text-[20px] md:hidden text-center my-8">
        {" "}
        Travel Blogs Around Himachal
      </h2>
      <div className="md:hidden ">
        {posts?.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className="flex space-x-2 px-4 mt-8 items-center">
              <div className="h-20 flex-shrink-0 rounded-lg relative  my-4    group-hover:scale-105 transition-transform duration-200  ease-out  w-24">
                <Image
                  className="opacity-80 rounded-md  object-cover  lg:object-center"
                  fill
                  src={urlFor(post.mainImage).url()}
                  alt=""
                />
              </div>
              <div className=" ">
                <p className=" my-2 max-w-sm text-black line-clamp-1 text-[15px] font-bold">
                  {post.title}
                </p>
                <p className="line-clamp-3 max-w-xs text-justify text-[13px] -tracking-tighter text-black/60">
                  {post.description}
                </p>
              </div>

              {/* <div className="mt-2 flex flex-col ">
                <div>
                  {post.categories.map((category) => (
                    <div key={category._id}>
                      <p className="  line-clamp-1  text-[#ed00eb] transition-all duration-150 ease-in  cursor-pointer">
                        {category.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
            <div className="  justify-between   px-4 flex  items-center">
              <div className="flex items-center   ">
                <p className="text-black/60  whitespace-nowrap text-[14px]  ">
                  Read more
                </p>
                <ArrowUpRightIcon className="h-3 w-3 ml-2" />
              </div>

              <p className=" ml-auto text-black/60 text-[14px]">
                {new Date(post._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>

      {/* DESKTOP */}
      <div className="lg:py-8 py-4   lg:block  lg:max-w-7xl  mx-auto">
        <div className="hidden md:text-left text-center lg:justify-between lg:flex-row  items-center lg:flex gap-8">
          <h1 className="text-[20px] whitespace-nowrap lg:text-[60px] capitalize leading-[5.3rem]">
            Travel Blogs <br className="hidden lg:inline" /> Around Himachal
          </h1>

          <div className="max-w-lg">
            <p className=" max-w-[350px] text-justify text-[14px] -tracking-tight text-black/60 mx-auto md:max-w-md">
              This Blog features beautiful photographs and personal experiences
              providing insights into the local culture, history, and traditions
              and inspiring travel enthusiasts to expore this enchanting
              desitination.
            </p>

            <div className="md:inline-flex hidden justify-between md:px-0 px-8 lg:justify-start pt-4 items-center space-x-4">
              <p className="py-3 px-4 bg-black text-white text-[14px] rounded-lg">
                Reminder Me
              </p>

              <p className="py-3 px-4  border text-black text-[14px] rounded-lg">
                Learn More
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:inline-flex gap-6 mt-16">
          <div className="flex flex-1 flex-col">
            {posts?.slice(0, 1).map((post) => (
              <ClientSideRoute
                key={post._id}
                route={`/post/${post.slug.current}`}
              >
                <img
                  className="w-full h-[600px] rounded-lg object-cover"
                  src={urlFor(post.mainImage).url()}
                  alt=""
                />

                <div className="mt-4">
                  <p className="text-black/60 uppercase font-extralight text-lg">
                    Travel
                  </p>
                  <h2 className="text-4xl font-semibold">{post.title}</h2>

                  {/* <p className="text-black/60 mt-3 text-justify max-w-2xl">
            {post.description}
          </p> */}
                </div>
              </ClientSideRoute>
            ))}
          </div>

          <div className="flex flex-col max-w-xs space-y-3 ">
            {posts?.slice(1, 3).map((post, index) => (
              <ClientSideRoute
                key={post._id}
                route={`/post/${post.slug.current}`}
              >
                <img
                  className="w-[23rem] h-52 rounded-lg object-cover"
                  src={urlFor(post.mainImage).url()}
                  alt=""
                />

                <div className="mt-4">
                  <p className="text-black/60 uppercase font-extralight text-lg">
                    Travel
                  </p>
                  <h2 className="text-2xl line-clamp-2 font-semibold">
                    {post.title}
                  </h2>

                  {/* <p className="text-black/60 mt-3 text-justify max-w-2xl">
            {post.description}
          </p> */}
                </div>
              </ClientSideRoute>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
