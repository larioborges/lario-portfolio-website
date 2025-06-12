import {
	vitePreprocess,
} from '@astrojs/svelte';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import postcssNested from 'postcss-nested'
// import { typescript, replace } from 'svelte-preprocess';

export default {
	preprocess: [vitePreprocess()],
	postprocess: {
		plugins: [postcssNested(), postcss(), autoprefixer()],
	},
};
