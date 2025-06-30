import { persistentAtom } from '@nanostores/persistent';
import { DARK_THEME, DEFAULT_THEME, LIGHT_THEME } from '@/constants';

export const $theme = persistentAtom(DEFAULT_THEME);

export const toggleTheme = () => {
	const newTheme = $theme.get() === DARK_THEME ? LIGHT_THEME : DARK_THEME;
	if ($theme.get() !== newTheme) {
		document.documentElement.classList.toggle(DARK_THEME);
		$theme.set(newTheme);
	}
};

export const isDarkTheme = () => $theme.get() === DARK_THEME;
