import gulp from 'gulp';
import sass from 'gulp-sass';
import { uglify } from 'gulp-uglify';
import imagemin from 'gulp-imagemin';

const sassOptions = {
  outputStyle: 'compressed'
};

function styles() {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass(sassOptions))
    .pipe(gulp.dest('./public/css'));
}

function images() {
  return gulp.src('./src/images/*', { encoding: false })
    .pipe(imagemin())
    .pipe(gulp.dest('./public/images'));
}

function scripts() {
  return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function() {
  gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
  gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
};
