type PhoneResultsTableProps = {
	data: {
		phones: string[];
		supression: string[];
		wireless: string[];
		count: number;
		numbers: number;
	};
	timeTaken: number | null;
};

const PhoneResultsTable: React.FC<PhoneResultsTableProps> = ({
	data,
	timeTaken,
}) => {
	if (!data) {
		return <p>No data available</p>;
	}

	const keys = Object.keys(data) as (keyof typeof data)[];

	const maxLength = Math.max(
		data.phones.length,
		data.supression.length,
		data.wireless.length
	);

	return (
		<div>
			<h3>Phone Results</h3>
			<h4>Time taken: {timeTaken}ms</h4>
			<table>
				<thead>
					<tr>
						<th>#</th>
						{keys.map((key, index) => (
							<th key={index}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{Array.from({ length: maxLength }).map((_, rowIndex) => (
						<tr key={rowIndex}>
							<td>{rowIndex + 1 + ")"}</td>
							{keys.map((key) => {
								if (Array.isArray(data[key])) {
									return <td key={key}>{data[key][rowIndex] || ""}</td>;
								} else {
									return rowIndex === 0 ? (
										<td key={key}>{data[key]}</td>
									) : (
										<td key={key}></td>
									);
								}
							})}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PhoneResultsTable;
