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
      {/* <p className="mb-10 " /> */}
      <h2 className="text-slate-200 text-4xl text-center my-8">Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-8 gap-y-16 pb-24">
        {posts?.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className="flex flex-col group overflow-hidden cursor-pointer">
              <div className="h-80  relative px-10 my-8   drop-shadow-xl group-hover:scale-105 transition-transform duration-200  ease-out  w-full">
                <Image
                  className="opacity-80 rounded-md  object-cover  lg:object-center"
                  fill
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                />

                {/* <div className="absolute bottom-0">
                  <div>
                    <h1 className="text-white line-clamp-1">{post.title}</h1>
                  </div>

                  <p>
                    {new Date(post._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div> */}
              </div>
              <div className="my-8 flex-1 ">
                <p className=" my-2 text-slate-200 line-clamp-1 text-lg font-bold">
                  {post.title}
                </p>
                <p className="line-clamp-2 text-white/75">{post.description}</p>
              </div>

              <div className="mt-2 flex flex-row justify-between items-center">
                <div>
                  {post.categories.map((category) => (
                    <div key={category._id}>
                      <p className="  text-[#ed00eb] transition-all duration-150 ease-in  cursor-pointer">
                        {category.title}
                      </p>
                    </div>
                  ))}
                </div>
                <div className=" flex flex-row items-center">
                  <p className="text-white/75  whitespace-nowrap text-[16px]  ">
                    Read more
                  </p>
                  <ArrowUpRightIcon className="h-4 w-4 ml-2" />
                </div>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
