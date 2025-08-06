const advancedPreset = require('cssnano-preset-advanced');

module.exports = advancedPreset({
	discardComments: {
		remove: comment => comment[0] === '@',
	},
	'css-declaration-sorter': {
		exclude: true,
	},
	autoprefixer: {
		add: true,
	},
	'postcss-convert-values': {
		length: true,
		precision: 2,
	},
	'postcss-normalize-charset': {
		add: true,
	},
});
