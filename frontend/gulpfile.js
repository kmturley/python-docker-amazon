var gulp = require('gulp');

global.paths = {
    src: 'src',
    static: '../mysite/static',
    static2: '../static',
    templates: '../mysite/templates',
    js: '/**/*.{js,tpl}',
    html: '/**/*.html'
};

gulp.task('html', function () {
    'use strict';
    return gulp.src(global.paths.src + global.paths.html)
        .pipe(gulp.dest(global.paths.templates))
        .on('error', function (error) {
           console.error('html error: ' + error);
        });
});

gulp.task('js', function () {
    'use strict';
    return gulp.src([global.paths.src + global.paths.js])
        .pipe(gulp.dest(global.paths.static))
        .pipe(gulp.dest(global.paths.static2))
        .on('error', function (error) {
            console.error('js error: ' + error);
        });
});

gulp.task('build', ['html', 'js']);
gulp.task('default', ['build', 'watch']);
gulp.task('watch', function () {
    'use strict';
    gulp.watch([global.paths.src + global.paths.html], ['html']);
    gulp.watch([global.paths.src + global.paths.js], ['js']);
});
