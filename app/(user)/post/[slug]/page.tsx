import React from "react";
import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";

import urlFor from "../../../../lib/urlFor";
import PortableText from "react-portable-text";

import { Post } from "../../../../typing";

type Props = {
  params: {
    slug: string;
  };
};

async function Postpage({ params: { slug } }: Props) {
  const query = groq`
        *[_type=="post" && slug.current == $slug][0]{
            ...,
            author -> ,
            categories[] -> 
        }
    `;

  const post: Post = await client.fetch(query, { slug });
  //   console.log(post);
  return (
    <>
      <article className=" pb-28 flex flex-col justify-center items-center align-middle mx-auto max-w-3xl ">
        <section className="space-y-2  text-white/95">
          <div className=" min-h-56 flex flex-col md:flex-row justify-between">
            <div className="  p-10">
              <img
                className=" w-[640px] rounded-md  h-[200px] object-cover  mx-auto lg:object-center"
                src={urlFor(post.mainImage).url()}
                alt=""
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className=" max-w-xs md:max-w-2xl  ">
              <h1 className="text-xl  md:text-3xl text-center my-4 text-white  ">
                {post.title}{" "}
              </h1>

              {/* <p>
                {new Date(post._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p> */}
            </div>

            {/* Ignore TS */}
            <PortableText
              className="max-w-xs mx-auto -tracking-normal  md:-tracking-tight md:max-w-2xl "
              serializers={{
                normal: ({ children }: any) => (
                  <div className="text-base text-black/60 my-5 text-justify -tracking-tight   ">
                    {children}
                  </div>
                ),
                h1: ({ children }: any) => (
                  <h1 className="text-2xl md:text-4xl line-clamp-1  overflow-hidden md:py-4   font-medium">
                    {children}
                  </h1>
                ),

                h2: ({ children }: any) => (
                  <h2 className="text-xl my-2 md:my-0 md:text-3xl line-clamp-1  md:py-4  font-medium">
                    {children}
                  </h2>
                ),

                h3: ({ children }: any) => (
                  <h3 className="text-lg md:text-text-2xl line-clamp-1  md:py-4  font-medium">
                    {children}
                  </h3>
                ),

                h4: ({ children }: any) => (
                  <h4 className="text-md py-2 text-red-600 md:text-xl line-clamp-1 font-medium md:py-8  ">
                    {children}
                  </h4>
                ),

                blockquote: ({ children }: any) => (
                  <blockquote className="border-l-[#ed00eb] border-l-4 pl-5 py-5 my-5">
                    {children}
                  </blockquote>
                ),

                bullet: ({ children }: any) => (
                  <ul className="ml-10 text-black/60 py-5 text-justify list-disc space-y-5">
                    {children}
                  </ul>
                ),

                number: ({ children }: any) => (
                  <ol className="mt-lg text-black/60 text-justify list-decimal">
                    {children}
                  </ol>
                ),
                list: {
                  // Ex. 1: customizing common list types
                  bullet: ({ children }: any) => (
                    <ul className="ml-10 text-black/60 py-5 text-justify list-disc space-y-5">
                      {children}
                    </ul>
                  ),
                  number: ({ children }: any) => (
                    <ol className="mt-lg text-black/60">{children}</ol>
                  ),

                  // Ex. 2: rendering custom lists
                  checkmarks: ({ children }: any) => (
                    <ol className="mx-auto text-lg">{children}</ol>
                  ),
                  
                },
                // link: ({ children, href }: any) => {
                //   return (
                //     <Link
                //       className="underline  dedcoration-[#ed00eb] "
                //       href={href}
                //     >
                //       {children}
                //     </Link>
                //   );
                // },
              }}
              content={post.body}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            />
          </div>
        </section>
      </article>
    </>
  );
}

export default Postpage;
