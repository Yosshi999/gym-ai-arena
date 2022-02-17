import { NextApiRequest, NextApiResponse } from "next";
import { getContests } from "../../../lib/contest_data";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "GET") {
      res.setHeader("Allow", "GET");
      res.status(405).end("Method not allowed");
      return;
    }

    const id = parseInt(req.query.id as string, 10);
    const contests = getContests();
    if (!contests[id]) {
      res.status(404).json({ message: "Contest not found" });
      return;
    }
    const contest = contests[id];
    res.status(200).json({ contest });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default handler;

