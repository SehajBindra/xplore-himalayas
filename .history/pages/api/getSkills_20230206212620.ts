import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../lib/sanity.client";
import { groq } from "next-sanity";
import { Skill } from "../../typing";

const query = groq`
*[_type == "skill"]
`;

type Data = {
  skills: Skill[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const skills: Skill[] = await client.fetch(query);

  res.status(200).json({ skills });
}
