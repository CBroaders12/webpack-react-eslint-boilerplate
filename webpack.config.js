const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist',
  },
  resolve: {
    extensions: ['.js', 'jsx'],
  },
  devServer: {
		static: {
			directory: path.join(__dirname, 'public/'),
		},
		port: 3000
	},
}