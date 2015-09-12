var gulp = require("gulp"),
	browserify = require("browserify"),
	source = require("vinyl-source-stream"),
	babel = require("gulp-babel"),
	less = require("gulp-less"),
	watch = require("gulp-watch");

gulp.task("browserify", function () {
	return browserify("./public/js/app.js")
		.transform(require("babelify"))
		.bundle()
		.pipe(source("bundle.js"))
		.pipe(gulp.dest("./build/"));
});

gulp.task("less", function () {
	return gulp.src("public/less/app.less")
		.pipe(less())
		.pipe(gulp.dest("./build/"));
});

gulp.task("watch", function () {
	gulp.watch("public/js/*.js", ["browserify"]);
	gulp.watch("public/less/*.less", ["less"]);
});

gulp.task("default", ["browserify", "less"]);