var gulp = require('gulp')
var sass = require('gulp-sass')
var ts = require('gulp-typescript')
var tsProject = ts.createProject('tsconfig.json')

function typey(){
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('app/js/typescripted'))
}

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
exports.typey = typey