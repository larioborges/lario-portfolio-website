export default () => {
	const theme =
		(() =>
			localStorage.getItem(
				'theme',
			)
				? localStorage.getItem(
					'theme',
				)
				: 'dark')() == 'dark'
			? 'dark'
			: 'light';
	localStorage.setItem(
		'theme',
		theme,
	);
};
