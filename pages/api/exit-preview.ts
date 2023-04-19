import type { NextApiRequest, NextApiResponse } from "next";
// import { client } from "../../lib/sanity.client";

export default function exit(req: NextApiRequest, res: NextApiResponse) {
  res.clearPreviewData({});
  res.writeHead(307, { Location: "/" });
  res.end();
}
