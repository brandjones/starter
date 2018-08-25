// Requires the path module from the Node.js runtime (it is included with webpack). So, I am allowed
// to use those modules to configure webpack the way I need to.
const path = require('path');
const webpack = require('webpack');
// 'HtmlWebpackPlugin' is used to append a new script tag when a new javascript file is bundled. Because there
// is code splitting (separate output files) it causes an error which does not notice both js files. This module
// ensures an accurate script tag is input into the index.html file.
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Web-pack does not automatically export CSS to a separate file. Instead it breaks conventions
// by allowing the bundled css to be injected into the DOM using style tags (not typicall approach).
// By using this module webpack will take the text that is generated and start a separate file
// to include each CSS declaration, that way we have a stand alone CSS file.
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// **** 'modules' are read from right to left and not the reverse  ****

// 'config' is the default configuration object that is exported from the file. In order for webpack to run
// properly it must be passed two properties (an entry point, an output point).

// 'loaders' contain some amount of code configuration to perform before the file is output into
// the build directory. Common loaders are babel-loader, babel-core, babel-preset-env.
// 'loaders' & 'use' statements are relatively the same (depends on the version of webpack && tooling of plugin and/or module).

// 'plugins' contain some set of rules that allows data to not be included in the output or bundle.js file. Catches before final
// output and then incorporates it into another file.

// 'test' defines a regex so webpack knows which file to run the module on.

// 'babel-loader' Teachers babel how to work with webpack.
// 'babel-core' Knows how to take in code, parse it, and generate some amount of output files.
// 'babel-preset-env' Ruleset for telling babel exactly what peices of ES2015/6/7 syntax to look for, and how to turn it into ES5 code.
// '.babelrc' directory lists a bunch of presets to use on the project.
// 'entry' is the relative path from the file we are located in.
// 'output' is the absolute path on my machine's local env.
// 'css-loader' knows how to deal with css imports.
// 'style-loader' takes CSS imports and add them to the HTML document.
// 'url-loader' loads images with url prepended + output path name.
// 'file-loader' loads files in local directory.
// 'limit' specifies where to save image based on the bytes.
// 'publicPath' specfics where any plugins get outputted to.
// 'exclude' don't include any files into the build folder.
// 'webpackDefinePlugin' whenever react runs it looks for the environment the application is running in
// this plugin is used to set the environment in to production || development.

// 'code splitting' is maintaining a list of third party vendors vs. own code base.
// Each one will be outputted to a separate vendor file
// to help load times when a user visits our website for the 1st time. They aren't
// updated as often as our own code base so code splitting will be used to separate
// them.

// 'filename' is important because the browser looks at the file to determine if it has been downloaded by the
// user already. We use interpolation to get the chuckhash which is sort of like a unique identifier. This allows
// the browser to determine if the new version needs to be downloaded.

// 'CommonsChunkPlugin' is used to ensure modules are only downloaded once. One for bundle.js
// or one for vendor.js but not both.
// 'rimraf' compatibility module for windows vs. UNIX system to ensure same commands operate alike on systems.

const config = {
	devServer: {
		index: 'index.html',
		contentBase: path.join(__dirname, 'dist'),
		historyApiFallback: true,
		compress: true,
		port: 9000,
		proxy: {
			'*': 'http://localhost:9001'
		}
	},
	mode: 'development',
	devtool: 'inline-source-map',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				use: ['style-loader', 'css-loader', 'sass-loader'],
				test: /\.scss$/
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader', 'url-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]
};

module.exports = config;
