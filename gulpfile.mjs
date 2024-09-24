import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';

const sass = gulpSass(dartSass);  // Corrigindo a configuração do gulp-sass

const sassOptions = {
  outputStyle: 'compressed'
};

function styles() {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass(sassOptions))
    .pipe(gulp.dest('./public/css'));  // Certifique-se que a pasta ./public existe
}

function images() {
  return gulp.src('./src/images/*', { encoding: false })
    .pipe(imagemin())
    .pipe(gulp.dest('./public/images'));  // Certifique-se que a pasta ./public/images existe
}

function scripts() {
  return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));  // Certifique-se que a pasta ./public/js existe
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function() {
  gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
  gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
};
