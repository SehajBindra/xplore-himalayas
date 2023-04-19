import React from "react";
import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../../lib/urlFor";

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
  console.log(post);
  return (
    <>
      <div>Post : {slug}</div>
      <article className="px-10 pb-28">
        <section className="space-y-2 border-red-400 text-white">
          <div className=" min-h-56 flex flex-col md:flex-row justify-between">
            <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
              <Image
                className="opacity-60  object-cover  mx-auto lg:object-center"
                width={400}
                height={200}
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
            </div>
          </div>
        </section>
      </article>
    </>
  );
}

export default Postpage;