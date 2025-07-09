import { persistentAtom } from '@nanostores/persistent';
import { DARK_THEME, DEFAULT_THEME, LIGHT_THEME } from '@/constants';

export const $theme = persistentAtom(DEFAULT_THEME);

const setTheme = (newTheme: string) => {
	if ($theme.get() !== newTheme) {
		document.documentElement.classList.toggle(DARK_THEME);
		$theme.set(newTheme);
	}
};

export const applyCurrentTheme = () => {
	setTheme($theme.get() === DARK_THEME ? DARK_THEME : LIGHT_THEME);
};

export const toggleTheme = () => {
	const newTheme = $theme.get() === DARK_THEME ? LIGHT_THEME : DARK_THEME;
	setTheme(newTheme);
};

export const isDarkTheme = () => $theme.get() === DARK_THEME;
