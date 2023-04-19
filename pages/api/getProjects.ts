import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../lib/sanity.client";
import { groq } from "next-sanity";
import { Project } from "../../typing";

const query = groq`
*[_type == "projects"]{
  ...,

  technologies[]->,
}
`;

type Data = {
  Projects: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const Projects: Project[] = await client.fetch(query);

  res.status(200).json({ Projects });
}
