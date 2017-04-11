var webpack = require('webpack');

module.exports = {
    entry: "./src/App.js",
    output: {
        path: __dirname + '/public/build',
        publicPath: 'build/',
        filename: 'bundle.js'
    }
};