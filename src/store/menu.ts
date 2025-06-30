import { atom } from 'nanostores';

export const $menuOpen = atom(false);

export const toggleMenu = () => {
	$menuOpen.set(!$menuOpen.get());
};
