/*
* @Author: dmyang
* @Date:   2015-11-26 11:33:58
* @Last Modified by:   dmyang
* @Last Modified time: 2016-02-23 15:39:45
*/

'use strict';

let fs = require('fs')

let render = require('koa-ejs')
let proxy = require('koa-proxy')

module.exports = function(router, app, staticDir) {
    render(app, {
        root: __dirname,
        layout: false,
        viewExt: 'html',
        cache: false,
        debug: true
    })

    router.get('/', function*() {
        let pages = fs.readdirSync(staticDir)

        pages = pages.filter(function(page) {
            return /\.html$/.test(page)
        })

        yield this.render('home', {pages: pages || []})
    })
}
