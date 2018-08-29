var gulp=require("gulp");
var sass=require("gulp-sass");
var livereload=require("gulp-livereload");
var babel=require("gulp-babel");
var uglify=require("gulp-uglify")



//默认程序
gulp.task("default",["compile"],function(){
	gulp.src("src/scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("css/"))
	.pipe(livereload())
})
//编译es6
gulp.task("compile",function(){
	gulp.src("src/js/*.js")
		.pipe(babel({
			presets:["es2015"]
		}))
		//.pipe(uglify({ mangle: false }))
		.pipe(gulp.dest("js/"))
})

  
  
gulp.watch(["src/scss/*.scss","src/js/*.js"],["default"])


