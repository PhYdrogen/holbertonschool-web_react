const path = require('path');

module.exports = {
    entry: '../src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // other options for different image formats can be added here
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        contentBase: '../src/',
        port: 8564,
        hot: true,
      },
};
