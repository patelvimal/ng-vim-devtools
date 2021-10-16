const { src, dest, series, task } = require('gulp');

task('copy-template-files', function () {
    return src('src/ng-add/**/files/**/*', { dot: true }).pipe(dest('./dist/ng-add/'));
});

task('copy-files', function () {
    return src(['src/**/*.json', 'collection.json', 'package.json']).pipe(dest('./dist'));
});

exports.copyFiles = series(['copy-files', 'copy-template-files']);
