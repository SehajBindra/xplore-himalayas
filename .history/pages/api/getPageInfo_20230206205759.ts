import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../lib/sanity.client";
import { groq } from "next-sanity";
import { PageInfo } from "../../typing";

const query = groq`
*[_type == "pageInfo"]
`;

type Data = {
  pageInfo: PageInfo[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pageInfo: PageInfo[] = await client.fetch(query);

  res.status(200).json({ pageInfo });
}
