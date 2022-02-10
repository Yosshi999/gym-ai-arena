import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "GET") {
      res.setHeader("Allow", "GET");
      res.status(405).end("Method not allowed");
      return;
    }

    const { db } = await connectToDatabase();
    const result = await db.collection("submissions").find().toArray();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default handler;