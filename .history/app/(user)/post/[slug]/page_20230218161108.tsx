import React from "react";
import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../../lib/urlFor";
import PortableText from "react-portable-text";
// import { PortableText } from "@portabletext/react";
// import PortableText from "react-portable-text";
import { RichTextComponents } from "../../../../Components/RichTextComponents";
import Link from "next/link";
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
        <section className="space-y-2 border-red-400 text-white">
          <div className=" min-h-56 flex flex-col md:flex-row justify-between">
            <div className="  p-10">
              <img
                className=" w-[640px]  h-[400px] object-cover  mx-auto lg:object-center"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className=" flex flex-col mx-auto line-clamp-1  items-center">
              <h1 className="text-2xl  text-slate-200  ">{post.title} </h1>

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
              className="max-w-xl px-2 tracking-tighter md:max-w-2xl "
              serializers={{
                normal: ({ children }: any) => (
                  <p className="text-base text-white/75 my-1 text-justify tracking-tight  break-inside-auto  ">
                    {children}
                  </p>
                ),
                h1: ({ children }: any) => (
                  <h1 className="text-2xl md:text-4xl whitespace-nowrap overflow-hidden py-5 md:py-8 font-medium">
                    {children}
                  </h1>
                ),

                h2: ({ children }: any) => (
                  <h2 className="text-xl md:text-3xl whitespace-nowrap md:py-8 py-5 font-medium">
                    {children}
                  </h2>
                ),

                h3: ({ children }: any) => (
                  <h3 className="text-base md:text-text-2xl whitespace-normal md:py-8 py-5 font-medium">
                    {children}
                  </h3>
                ),

                h4: ({ children }: any) => (
                  <h4 className="text-xl py-5 font-medium md:py-8 whitespace-nowrap ">
                    {children}
                  </h4>
                ),

                blockquote: ({ children }: any) => (
                  <blockquote className="border-l-[#ed00eb] border-l-4 pl-5 py-5 my-5">
                    {children}
                  </blockquote>
                ),

                bullet: ({ children }: any) => (
                  <ul className="ml-10 text-white/75 py-5 text-justify list-disc space-y-5">
                    {children}
                  </ul>
                ),

                number: ({ children }: any) => (
                  <ol className="mt-lg text-white/75 text-justify list-decimal">
                    {children}
                  </ol>
                ),
                list: {
                  // Ex. 1: customizing common list types
                  bullet: ({ children }: any) => (
                    <ul className="ml-10 text-white/75 py-5 text-justify list-disc space-y-5">
                      {children}
                    </ul>
                  ),
                  number: ({ children }: any) => (
                    <ol className="mt-lg">{children}</ol>
                  ),

                  // Ex. 2: rendering custom lists
                  checkmarks: ({ children }: any) => (
                    <ol className="m-auto text-lg">{children}</ol>
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
