function splitArrayTraditional<T>(arr: T[], chunkSize = 20) {
	const result = [];
	for (let i = 0; i < arr.length; i += chunkSize) {
		const chunk = arr.slice(
			i,
			i + chunkSize,
		);
		result.push(chunk);
	}
	return result;
}

// TODO Lario chunked shiz
export async function PromiseAllChunked<T>(arr: Promise<T>[], chunkSize:number) {
	splitArrayTraditional(
		arr,
		chunkSize,
	);
};
