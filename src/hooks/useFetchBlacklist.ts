import { useState } from "react";
import axios from "axios";

export const useFetchBlacklist = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<any>(null);
	const [error, setError] = useState<string | null>(null);
	const [timeTaken, setTimeTaken] = useState<number | null>(null);

	const fetchBlacklistData = async (phones: string[]) => {
		setLoading(true);
		setError(null);

		try {
			const response = await axios.post("/api/blacklistCheck", { phones });
			console.log("API response:", response.data);
			setData(response.data.data);
			setTimeTaken(response.data.timeTaken);
		} catch (err) {
			setError("An error occurred while fetching data.");
		} finally {
			setLoading(false);
		}
	};

	return { loading, data, error, timeTaken, fetchBlacklistData };
};
