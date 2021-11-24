// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {  EventType, getEvents } from "../../../../server/pages";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EventType[] | { error: string }>
) {
  if (req.method === "GET") {
    const { id } = req.query;
    if (typeof id !== "string") return error(res);
    const events = await getEvents(id);
    if (events) {
      res.status(200).json(events);
    } else {
      return error(res);
    }
  }
}

function error(res: NextApiResponse<EventType[] | { error: string }>) {
  res.status(404).json({
    error: "Events not found",
  });
}
