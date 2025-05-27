import 'astro/astro-jsx';

declare global {
	namespace JSX {
		// type Element = astroHTML.JSX.Element // We want to use this, but it is defined as any.
		type Element = HTMLElement;
	}

	declare module '*.png';
	declare module '*.jpg';
	declare module '*.jpeg';
	declare module '*.gif';
	declare module '*.svg';
	declare module '*.svelte';
	declare module '*.webp';
}
