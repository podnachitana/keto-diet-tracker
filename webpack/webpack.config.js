const path = require ('path');

const loaders = require('./loaders.js');
const plugins = require('./plugins.js');


module.exports = {
	entry: ['./src/index.js'],
	devServer: {
		port: 8888,
		historyApiFallback: true,
		watchContentBase: true,
		watchOptions: {
			poll: true
		},
		contentBase: './dist',
		publicPath: '/',
	},
	module: {
		rules: [
			loaders.JSLoader,
			loaders.CSSLoader,
			loaders.FileLoader,
			loaders.FontLoader,
		]
	},
	resolve: {
		extensions: ['.js']
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'js/[name].bundle.js',
		publicPath: '/',
	},
	plugins: [
		plugins.CleanWebpackPlugin,
		plugins.MiniCssExtractPlugin,
		plugins.HtmlWebPackPlugin
	]
};
