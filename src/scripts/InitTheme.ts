import { DARK_THEME } from '@/constants';
import { isDarkTheme } from '@/store/theme';

export const InitTheme = () => {
	if (isDarkTheme()) {
		document.documentElement.classList.add(DARK_THEME);
	}
};

export default InitTheme;
