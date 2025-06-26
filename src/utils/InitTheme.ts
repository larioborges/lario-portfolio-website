import {
	DARK_THEME,
	DEFAULT_THEME,
	THEME_STORAGE_KEY,
	THEMES_ARRAY,
} from '@/constants';

const storedThemeDefaulted = () =>
	localStorage.getItem(THEME_STORAGE_KEY)
		? localStorage.getItem(THEME_STORAGE_KEY)
		: DEFAULT_THEME;

export const InitTheme = () => {
	const currentTheme = storedThemeDefaulted() as string;
	const theme = THEMES_ARRAY.includes(currentTheme)
		? currentTheme
		: DEFAULT_THEME;

	localStorage.setItem(THEME_STORAGE_KEY, theme);

	if (theme === DARK_THEME) {
		document.documentElement.classList.add(DARK_THEME);
	}
};

export default InitTheme;
