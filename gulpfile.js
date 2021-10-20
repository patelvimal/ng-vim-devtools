const { src, dest, series, task } = require('gulp');

task('copy-files', function () {
    return src(['src/**/files/**/*', 'src/**/*.json'], { dot: true }).pipe(
        dest('./dist')
    );
});

// task('copy-files', function () {
//     return src(['src/**/*.json', 'collection.json', 'package.json']).pipe(dest('./dist'));
// });

exports.copyFiles = series(['copy-files']);
