import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../lib/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      res.status(405).end("Method not allowed");
      return;
    }

    const { db } = await connectToDatabase();
    const data = req.body.code;
    if (data) {
      const result = await db.collection("submissions").insertOne({
        code: data,
        createdAt: new Date(),
      });
      res.setHeader("Location", `/contests/1/submissions`);
      res.status(302).json(result);
    } else {
      res.status(400).end("Invalid request");
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default handler;
