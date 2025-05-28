import 'astro/astro-jsx';

declare global {
	namespace JSX {
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
