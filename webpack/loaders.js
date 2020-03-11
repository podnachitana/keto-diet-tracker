const devMode = process.env.NODE_ENV !== 'production';
const _MiniCssExtractPlugin = require('mini-css-extract-plugin');

const JSLoader = {
	test: /\.(js|jsx)$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader'
	}
};
const CSSLoader = {
	test: /\.(sa|sc|c)ss$/,
	use: [
		{
			loader: devMode ? 'style-loader' : _MiniCssExtractPlugin.loader,
		},
		{
			loader: 'css-loader',
			options: {
				importLoaders: 1,
				sourceMap: true,
				minimize: true,
			}
		},
		{
			loader: 'sass-loader'
		},
	]
};
const FileLoader = {
	test: /\.(svg|gif|png|jpg)$/,
	use: {
		loader: 'file-loader',
		options: {
			name: 'files/[name].[ext]',
		}
	},
};
const FontLoader = {
	test: /\.(woff(2)?|eot|ttf|otf)(\?.*$|$)/,
	use: [{
		loader: 'file-loader',
		options: {
			name: 'fonts/[name].[ext]',
		}
	}]
};


module.exports = {
	JSLoader,
	CSSLoader,
	FileLoader,
	FontLoader,
};
