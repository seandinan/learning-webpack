const webpack = require('webpack');

module.exports = {
	entry: {
		app: ['./src/app.js']
	},
	output: {
		publicPath: 'bin',
		filename: 'app.bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test:/\.scss$/,
				loaders: ['style', 'css', 'sass']
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
			},
			output: {
				comments: false,
			},
		}),
	]
};