var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var path = require('path');
var less = require('gulp-less');
var nano = require('gulp-cssnano');
var autoprefixer = require('autoprefixer');
var px2rem = require('postcss-px2rem');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');

var option = {base: 'src'};
var dist =  __dirname + 'static';

gulp.task('build:style', function() {
    var processors = [px2rem({remUnit: 75})];
    gulp.src('src/less/*.less', option)
        .pipe(sourcemaps.init())
        .pipe(less().on('error'), function(e) {
            console.error(e.message);
            this.emit('end');
        })
        .pipe(postcss([autoprefixer, processors]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dist))
        .pipe(browserSync.reload({stream: true}))
        .pipe(nano())
        .pipe(rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest(dist));
});

gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
    });
    gulp.watch('src/less/*.less', ['build:style']);
    gulp.watch('*.html').on('change', reload);
    gulp.watch('static/css/*.css').on('change',  reload);
    gulp.watch('static/js/*.js').on('change',  reload);
    gulp.watch('static/img/*.{png, img}').on('change',  reload);
});

gulp.task('default', function () {
    gulp.start('watch');
});