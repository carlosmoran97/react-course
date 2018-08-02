// webpack config file
const path = require('path');

const base = path.join(__dirname, 'public');

module.exports = {
    entry: './src/app.js',
    output: {
        path: base,
        filename: 'bundle.js'
    },
    module: {
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: base,
        allowedHosts:[
            'localhost',
            '127.0.0.1',
            '192.168.1.8'
        ]
    }
};