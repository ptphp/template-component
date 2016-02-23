/*
* @Author: dmyang
* @Date:   2015-06-16 15:19:59
* @Last Modified by:   dmyang
* @Last Modified time: 2016-02-23 16:59:38
*/

'use strict';

let gulp = require('gulp')
let webpack = require('webpack')

let gutil = require('gulp-util')

let assets = process.cwd() + '/dist'
let exampleAssets = process.cwd() + '/examples/dist'

// js check
gulp.task('hint', () => {
    let jshint = require('gulp-jshint')
    let stylish = require('jshint-stylish')

    return gulp.src(['/src/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
})

// clean assets
gulp.task('clean', ['hint'], () => {
    let rimraf = require('gulp-rimraf')

    return gulp.src([assets, exampleAssets], {read: false}).pipe(rimraf({ force: true }))
})

// run example webpack pack
gulp.task('pack-example', ['clean'], (done) => {
    let webpackConf = require('./webpack.examples')

    webpack(webpackConf, (err, stats) => {
        if(err) throw new gutil.PluginError('webpack', err)
        gutil.log('[webpack example]', stats.toString({colors: true}))
        done()
    })
})

// build component
gulp.task('pack-component', ['clean'], (done) => {
    let webpackConf = require('./webpack.config')

    webpack(webpackConf, (err, stats) => {
        if(err) throw new gutil.PluginError('webpack', err)
        gutil.log('[webpack component]', stats.toString({colors: true}))
        done()
    })
})

// compass js files
gulp.task('default', ['pack-component', 'pack-example'], () => {
    let uglify = require('gulp-uglify')
    let rename = require('gulp-rename')

    return gulp
        .src(assets + '/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(assets))
})
