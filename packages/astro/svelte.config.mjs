import { sveltePreprocess } from 'svelte-preprocess';

export default {
  preprocess: sveltePreprocess({typescript: true, sourceMap: true}),
};

// const sveltePreprocess = require('svelte-preprocess');

// module.exports = {
//   preprocess: sveltePreprocess()
// };
