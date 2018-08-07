var gulp=require("gulp");
var sass=require("gulp-sass");
var livereload=require("gulp-livereload");
var babel=require("gulp-babel");
var uglify=require("gulp-uglify")



//默认程序
gulp.task("default",/*["compile"],*/function(){
	gulp.src("src/scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("css/"))
	.pipe(livereload())
})
/*//编译es6
gulp.task("compile",function(){
	gulp.src("src/script/*.js")
		.pipe(babel({
			presets:["es2015"]
		}))
		//.pipe(uglify({ mangle: false }))
		.pipe(gulp.dest("clubcmsscript/script"))
})
*/
  
  
gulp.watch(["src/scss/*.scss",/*"src/script/*.js"*/],["default"])


