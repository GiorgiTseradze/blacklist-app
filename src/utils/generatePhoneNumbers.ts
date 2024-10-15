export const generateRandomPhoneNumbers = (
	min: number = 900,
	max: number = 1200
): string[] => {
	const phoneNumbers: string[] = [];
	const numberOfPhones = Math.floor(Math.random() * (max - min + 1)) + min;

	for (let i = 0; i < numberOfPhones; i++) {
		const randomPhone = Math.floor(
			1000000000 + Math.random() * 9000000000
		).toString();
		phoneNumbers.push(randomPhone);
	}

	return phoneNumbers;
};
