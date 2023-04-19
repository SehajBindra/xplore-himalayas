import React from "react";
import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";

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
  return <div>Post : {slug}</div>;
}

export default Postpage;
