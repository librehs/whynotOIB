const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('default', () =>
    gulp.src('whynotoib.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(concat('whynotoib.min.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
);
