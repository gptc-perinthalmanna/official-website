// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { CampusPageType, getCampus } from "../../../../server/pages";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CampusPageType | { error: string }>
) {
  if (req.method === "GET") {
    const { id } = req.query;
    if (typeof id !== "string") return error(res);
    const campusPage = await getCampus(id);
    if (campusPage) {
      res.status(200).json(campusPage);
    } else {
      return error(res);
    }
  }
}

function error(res: NextApiResponse<CampusPageType | { error: string }>) {
  res.status(404).json({
    error: "Campus not found",
  });
}
