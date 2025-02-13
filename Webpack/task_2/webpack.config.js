const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './js/dashboard_main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i, // Match CSS files
                use: [
                    'style-loader', // Inject CSS into DOM
                    'css-loader', // Resolves CSS imports
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // Match image files
                use: [
                    {
                        loader: 'file-loader', // Use file-loader for images
                        options: {
                            name: '[name].[hash].[ext]', // Output file naming convention
                            outputPath: 'images', // Output directory for images
                        },
                    },
                ],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin()],
    resolve: {
        extensions: ['.js'],
    },
};