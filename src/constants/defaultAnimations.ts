import { animate } from 'motion';
//import type { Variants } from 'svelte-motion';
import { DEFAULT_LINK_COLOUR, HOVER_LINK_COLOUR } from './colors';

// TODO Lario remoove
// export const DEFAULT_ANIMATIONS: Variants = {
// 	hidden: {
// 		opacity: 0,
// 		y: 20,
// 	},
// 	visible: (delay = 0) => ({
// 		opacity: 1,
// 		y: 0,
// 		transition: {
// 			duration: 0.6,
// 			delay: delay,
// 			ease: 'easeOut',
// 		},
// 	}),
// };

export const DEFAULT_DELAY = 0;

export const APPEAR_STYLE_TRANISITIONS = {
	opacity: [
		0,
		1,
	],
	y: [
		20,
		0,
	],
};

export const LINK_HOVER_ON_TRANSITIONS = {
	scale: [
		1,
		1.05,
	],
	color: HOVER_LINK_COLOUR,
};

export const LINK_HOVER_OFF_TRANSITIONS = {
	scale: [
		1.05,
		1,
	],
	color: DEFAULT_LINK_COLOUR,
};

export const APPEAR_ANIMATION = (element: Element) => {
	animate(element, APPEAR_STYLE_TRANISITIONS, {
		duration: 0.2,
	});
};
