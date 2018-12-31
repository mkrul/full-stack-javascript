module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				query: {
					compact: false
				}
			},
			{
				type: "javascript/auto",
				test: /\.json$/,
				loader: "json-loader"
			}
		]
	}
};
