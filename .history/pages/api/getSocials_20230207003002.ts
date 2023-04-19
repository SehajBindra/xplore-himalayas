import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../lib/sanity.client";
import { groq } from "next-sanity";
import { Social } from "../../typing";

const query = groq`
*[_type == "social"]
`;

type Data = {
  socials: Social[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const socials: Social[] = await client.fetch(query);

  res.status(200).json({ pageInfo });
}
