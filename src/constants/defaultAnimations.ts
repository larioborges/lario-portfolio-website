import { animate } from 'motion';
import type { Variants } from 'svelte-motion';

export const DEFAULT_ANIMATIONS: Variants = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: (delay = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			delay: delay,
			ease: 'easeOut',
		},
	}),
};

export const DEFAULT_DELAY = 0;

export const APPEAR_ANIMATION = (element: Element) => {
	animate(
		element,
		{
			opacity: [
				0,
				1,
			],
			y: [
				20,
				0,
			],
		},
		{
			duration: 0.2,
		},
	);
};
