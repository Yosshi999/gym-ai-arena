import { NextApiRequest, NextApiResponse } from "next";
import { getContests } from "../../lib/contest_data";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "GET") {
      res.setHeader("Allow", "GET");
      res.status(405).end("Method not allowed");
      return;
    }

    const info = Object.values(getContests());
    info.sort((a, b) => a.startUnixTime - b.startUnixTime);
    res.status(200).json({ contests: info });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default handler;
