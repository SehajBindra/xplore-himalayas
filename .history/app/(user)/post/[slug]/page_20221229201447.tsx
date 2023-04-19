import React from "react";
import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../../lib/urlFor";
// import PortableText from "react-portable-text";
import { PortableText } from "@portabletext/react";
// import PortableText from "react-portable-text";
import { RichTextComponents } from "../../../../Components/RichTextComponents";

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
      <div>Post : {slug}</div>
      <article className="px-10 pb-28">
        <section className="space-y-2 border-red-400 text-white">
          <div className=" min-h-56 flex flex-col md:flex-row justify-between">
            <div className="  p-10">
              <Image
                className="  object-cover  mx-auto lg:object-center"
                width={400}
                height={100}
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
              />
            </div>
          </div>
        </section>
        <section>
          <div>
            <div>
              <h1>{post.title} </h1>

              <p>
                {new Date(post._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>

            <PortableText value={post.body} components={RichTextComponents} />
            {/* Ignore TS */}
            {/* <PortableText
              serializers={{
                h1: ({ children }: any) => (
                  <h1 className="text-5xl py-10 font-medium">{children}</h1>
                ),

                h2: ({ children }: any) => (
                  <h2 className="text-4xl py-10 font-medium">{children}</h2>
                ),

                h3: ({ children }: any) => (
                  <h3 className="text-3xl py-10 font-medium">{children}</h3>
                ),

                h4: ({ children }: any) => (
                  <h1 className="text-2xl py-10 font-medium">{children}</h1>
                ),

                blockquote: ({ children }: any) => (
                  <blockquote className="border-l-[#e23e47] border-l-4 pl-5 py-5 my-5">
                    {children}
                  </blockquote>
                ),
              }}
              content={post.body}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            /> */}
          </div>
        </section>
      </article>
    </>
  );
}

export default Postpage;
