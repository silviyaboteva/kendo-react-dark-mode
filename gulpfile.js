const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss')
const debug = require('gulp-debug')
const autoprefixer = require('autoprefixer')
const calc = require("postcss-calc");
const Fiber = require('fibers');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
  const sassOptions = {
    precision: 10,
    outputStyle: 'expanded',
    fiber: Fiber
  };

  const plugins = [
    calc({
        precision: 10
    }),
    autoprefixer({
        overrideBrowserslist: [ '> 10%' ]
    })
  ]
  return gulp
    .src('src/sass/*-theme.scss')
    .pipe(debug({title: 'Sass files:'}))
    .pipe(sass.sync(sassOptions).on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./public'))
})