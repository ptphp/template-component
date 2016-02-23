/*
 * @Author: dmyang
 * @Date:   2015-11-10 10:42:22
 * @Last Modified by:   dmyang
 * @Last Modified time: 2016-02-23 17:23:16
 */

'use strict';

let path = require('path')

let glob = require('glob')
let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin

let src = path.resolve(process.cwd(), 'examples/src')
let assets = path.resolve(process.cwd(), 'examples/dist')
let nodeModPath = path.resolve(__dirname, 'node_modules')
let pathMap = {
    'react': path.join(nodeModPath, '/react/dist/react.js'),
    'react-with-addons': path.join(nodeModPath, '/react/dist/react-with-addons.js'),
    'react-dom': path.join(nodeModPath, '/react-dom/dist/react-dom.js')
}

let entries = (() => {
    let entryFiles = glob.sync(src + '/*.{js,jsx}')
    let map = {}

    entryFiles.forEach((filePath) => {
        let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
        map[filename] = filePath
    })

    return map
}())

let output = {
    path: path.resolve(__dirname, assets),
    filename: '[name].js',
    publicPath: ''
}

// generate entry html files
let plugins = (() => {
    let r = []
    let entryHtml = glob.sync(src + '/*.html')

    entryHtml.forEach(function(filePath) {
        let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
        let conf = {
            template: filePath,
            filename: filename + '.html'
        }

        if(filename in entries) {
            conf.inject = 'body'
            conf.chunks = ['vender', filename]
        }

        r.push(new HtmlWebpackPlugin(conf))
    })

    return r
}())

plugins.push(
    new CommonsChunkPlugin({
        name: 'vender',
        chunks: Object.keys(entries)
    })
)

let config = {
    entry: Object.assign(entries, {
        vender: ['react', 'react-dom']
    }),

    output: output,

    resolve: {
        modulesDirectories: ['node_modules', src],
        extensions: ['', '.js', '.jsx', '.css', '.scss', '.less', '.png', '.jpg'],
        alias: pathMap
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel?presets[]=react,presets[]=es2015'
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192&prefix=img/'
            }
        ]
    },

    plugins: plugins,

    devServer: {
        hot: true,
        noInfo: false,
        inline: true,
        publicPath: output.publicPath,
        stats: {
            cached: false,
            colors: true
        }
    }
}

module.exports = config
