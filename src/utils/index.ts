import {
	clsx, type ClassValue,
} from 'clsx';
import {
	twMerge,
} from 'tailwind-merge';

export {
	default as InitTheme,
} from './InitTheme';

// TODO Lario: consider remove clsx
export function cn(
	...inputs: ClassValue[]
) {
	return twMerge(
		clsx(
			inputs,
		),
	);
}
