import {
	vitePreprocess, 
} from '@astrojs/svelte';
// import { typescript, replace } from 'svelte-preprocess';

export default {
	preprocess: [vitePreprocess(
		{
			script: true, 
		},
	)], 
};
