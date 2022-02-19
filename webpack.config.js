
const path = require('path');

module.exports = {
	mode : "development",
	// ROLE: entry point for webpack
    entry: path.resolve(__dirname, 'client/index.js'),
	// ROLE: webpack begins executing (creates folder dist with file bundl.js)
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { 
                test: /\.(sa|sc|c)ss$/, 
                use: ['css-loader', 'style-loader'],
            },
            { 
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            { 
				test: /\.s[ac]ss$/,
				use: ['sass-loader']
			},
        ],
        exclude: /node_modules/,
    }
}