var assertDir = require('assert-dir-equal')
var cleanup = require('../')
var fs = require('fs')
var Metalsmith = require('metalsmith')
var path = require('path')

describe('metalsmith-cleanup', function(){

    it('should empty the build directory', function(done){
        fs.writeFile(path.resolve(__dirname, './fixtures/basic/build/a.js'), '', function(err){
            if (err) return done(err)
            Metalsmith('test/fixtures/basic')
                .use(cleanup())
                .build(function(err){
                    if (err) return done(err)
                    assertDir('test/fixtures/basic/expected', 'test/fixtures/basic/build')
                    return done(null)
            })
        })

    })

})
