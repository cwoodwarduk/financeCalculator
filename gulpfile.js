var gulp = require('gulp')
var sass = require('gulp-sass')
var ts = require('gulp-typescript')

function sassCompile(cb){
    return gulp.src('app/scss/styles.scss')
        .pipe(sass()) //convert sass to css with gulp sass
        .pipe(gulp.dest('app/css'))
    cb()
}

function watch(){
    gulp.watch('app/scss/**/*.scss', sassCompile)
    gulp.watch('app/ts/**/*.ts', typey)
}


exports.sass = sassCompile
exports.watch = watch