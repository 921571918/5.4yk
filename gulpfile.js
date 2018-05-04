var gulp = require("gulp");

var url = require("url");

var server = require("gulp-webserver");

var json = require("./src/data/data.json");

gulp.task('default', function() {
    gulp.src('src')
        .pipe(server({
            port: 1111,
            open: true,
            livereload: true,
            middleware: function(req, res, next) {

                next()
            }
        }))
})