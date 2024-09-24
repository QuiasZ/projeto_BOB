// gulpfile.js

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./public/css'));  // Atualizado para 'public'
}

function images() {
    return gulp.src('./src/images/*', { encoding: false })
        .pipe(imagemin())
        .pipe(gulp.dest('./public/images'));  // Atualizado para 'public'
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'));  // Atualizado para 'public'
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
};
