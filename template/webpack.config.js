/*
 * @Author: dmyang
 * @Date:   2015-11-10 10:42:22
 * @Last Modified by:   dmyang
 * @Last Modified time: 2016-02-23 17:33:30
 */

'use strict';

let path = require('path')
let fs = require('fs')

let webpack = require('webpack')

let pkg = require('./package.json')

let entry = {}

entry[pkg.name] = pkg.main || './index.js'

let config = {
    entry: entry,

    output: {
        filename: 'dist/[name].js',
        library: 'Foo',
        libraryTarget: 'umd', // 兼容各种模块化写法
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss', '.less', '.png', '.jpg']
    },

    externals: {
        'react': {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
    },

    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
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
    }
}

module.exports = config
