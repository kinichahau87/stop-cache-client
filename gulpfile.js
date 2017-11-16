
var watch = require("gulp-watch");
var beautify = require("gulp-beautify");
var eslint = require('gulp-eslint');

gulp.task("lint", function(){
  return gulp.src("src/*.js")
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(beautify({indent_size:4, indent_with_tabs:true}))
    .pipe(gulp.dest('./src/'));
});

gulp.task("spec-lint", function(){
  return gulp.src("test/*.js")
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(beautify({indent_size:4, indent_with_tabs:true}))
    .pipe(gulp.dest('./test/'));
});

gulp.task("pretty-code", function(){
	return gulp.src("src/*.js")
		.pipe(beautify({indent_size:4, indent_with_tabs:true}))
		.pipe(gulp.dest("./src/"));
});

gulp.task("pretty-test", function(){
	return gulp.src("test/*.js")
		.pipe(beautify({indent_size:4, indent_with_tabs:true}))
		.pipe(gulp.dest("./test/"));
});

gulp.task("lint-easy", function(){
  return gulp.src("src/*.js")
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task("watch", function(){
  return gulp.watch("lib/*.js", {ignoreInitial: false}, ["lint-easy"]);
});
