import { generateRandomPhoneNumbers } from "../utils/generatePhoneNumbers";
import { useFetchBlacklist } from "../hooks/useFetchBlacklist";
import PhoneResultsTable from "../components/PhoneResultsTable/PhoneResultsTable";

const Home = () => {
	const { loading, data, error, timeTaken, fetchBlacklistData } =
		useFetchBlacklist();

	const handleGeneratePhones = () => {
		const randomPhones = generateRandomPhoneNumbers();
		fetchBlacklistData(randomPhones);
	};

	return (
		<div>
			<h1>Blacklist Checker</h1>
			<button onClick={handleGeneratePhones}>
				Generate Phones and Check Blacklist
			</button>
			{loading && <p>Loading...</p>}
			{error && <p>{error}</p>}
			{data && (
				<div>
					<PhoneResultsTable data={data} timeTaken={timeTaken} />
				</div>
			)}
		</div>
	);
};

export default Home;
