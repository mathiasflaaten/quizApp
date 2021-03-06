const path = require('path');

module.exports = {
    entry: './src/app.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, 
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.css'],       
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './public'
    }
};