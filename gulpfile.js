var gulp = require('gulp'),
    concat = require('gulp-concat'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    cleancss = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    flatten = require('gulp-flatten');

gulp.task('all', function () {
    // build all JS
    gulp.src([
        'js/vendor/jquery-1.12.2.js',
            'js/vendor/parallax.min.js',
                'js/vendor/slick.min.js',
                    'js/main.js'])
    .pipe(concat('a.js')).pipe(uglify()).pipe(gulp.dest('build/assets/'));

    // build all CSS
    gulp.src(['css/pure/base-min.css',
        'css/pure/grids-min.css',
            'css/pure/grids-responsive-min.css',
                'fonts/*/*.css',
                    'css/slick/slick.css',
                        'css/slick/slick-theme.css',
                            'css/main.css'])
        .pipe(concat('a.css'))
        .pipe(prefixer({ browsers: '> 1%', cascade: false }))
        .pipe(cleancss({keepSpecialComments : 0}))
        .pipe(gulp.dest('build/assets/'));

    // build all images
    gulp.src(['img/*', 'img/*/*.*']).pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        })).pipe(gulp.dest('build/img/'));

    // build all fonts
    gulp.src(['fonts/*/*.{woff,eot,svg,ttf}']).pipe(flatten()).pipe(gulp.dest('build/assets/'));
});