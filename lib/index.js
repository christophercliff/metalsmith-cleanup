var rimraf = require('rimraf')
var path = require('path')

module.exports = plugin

function plugin(options) {
    return function (files, metalsmith, done) {
        rimraf(metalsmith.join(metalsmith._dest), done)
    }
}
