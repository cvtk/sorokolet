var gulp = require('gulp'),
    concat = require('gulp-concat'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    flatten = require('gulp-flatten');

gulp.task('all', function () {
    gulp.src(['js/vendor/*.js', 'slick/slick.min.js', 'js/main.js']).pipe(concat('a.js')).pipe(uglify()).pipe(gulp.dest('build/assets/'));

    gulp.src(['css/pure/base-min.css', 
        'css/pure/grids-min.css', 
            'css/pure/grids-responsive-min.css', 
                'fonts/*/*.css',
                    'slick/slick.css',
                        'slick/slick-theme.css',
                            'css/main.css']).pipe(concat('a.css')).pipe(prefixer()).pipe(cssmin()).pipe(gulp.dest('build/assets/'));

    gulp.src(['img/*', 'img/*/*.*', 'slick/ajax-loader.gif']).pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        })).pipe(gulp.dest('build/img/'));

    gulp.src(['fonts/*/*.{woff,eot,svg,ttf}', 'slick/fonts/*.*']).pipe(flatten()).pipe(gulp.dest('build/assets/'));
});