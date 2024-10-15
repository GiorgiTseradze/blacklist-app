import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

if (!process.env.API_URL) {
	throw new Error("API_URL environment variable is not defined");
}

const API_URL = process.env.API_URL;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		const { phones } = req.body;

		if (!phones || phones.length === 0) {
			return res.status(400).json({ error: "No phone numbers provided" });
		}

		try {
			const startTime = Date.now();
			const response = await axios.post(
				API_URL,
				{ phones },
				{
					headers: {
						accept: "application/json",
						"content-type": "application/json",
					},
				}
			);

			const endTime = Date.now();
			const timeTaken = endTime - startTime;
			return res.status(200).json({ data: response.data, timeTaken });
		} catch (error) {
			return res.status(500).json({ error: "Failed to fetch data from API" });
		}
	} else {
		return res.status(405).json({ error: "Method Not Allowed" });
	}
}
