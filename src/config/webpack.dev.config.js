let webpack = require('webpack');
let path = require('path');
// webpackStats = require 'stats-webpack-plugin'
console.log(path.resolve('../client/index.coffee'),'11')
module.exports = {
    devtool: '#source-map',
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        path.resolve('src/client/index.js')
    ],
    output: {
        path: path.resolve('output'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/scripts/'
    },
    module: {
        preLoaders: [
            // {
            //     test: /\.coffee$/,
            //     loader: 'coffeelint'
            // }
        ],
        loaders: [
        //     {
        //         test: /\.coffee$/,
        //         loader: 'coffee'
        //     }   
        // ,
        //     {
        //         test: /\.styl$/,
        //         loader: 'style!css!stylus'
        //     }
        ]
    },
    resolve:{
        root: process.cwd(),
        modulesDirectories: [
            'bower_components',
            'node_modules'
        ],
        extensions: [
            '',
            '.js',
            '.coffee',
            '.styl'
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
        // new webpack.ResolverPlugin new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin 'bower.json', ['main']
        // new webpackStats 'webpack.json'
    ]
    // ,
    // target: 'web'
}