'use strict';

var gulp = require('gulp');
var electron = require('electron-connect').server.create({
	stopOnClose: true
});
var watch = require('gulp-watch');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');
var bowerFiles = require('main-bower-files')

var targetPaths = {
	javascript:[
		"./public/app/**/*.js",
		],
	css:["./public/app/**/*.css", "./public/*.css"],
	html:["./public/**/*.html", "!./public/index.html"]
}

var callback = function(electronProcState) {
  console.log('electron process state: ' + electronProcState);
  if (electronProcState == 'stopped') {
    process.exit();
  }
};

function forEachIn(fn, array){
	var output = [];
	for(var i = 0; i < array.length; i++){
		var item = array[i];
		output.push(fn(item));
	}
	return output;
}

function compileAllTogether(arrayOfArays){
	var output = [];
	
	forEachIn(forEachArray, arrayOfArays)

	function forEachArray(arr){
		forEachIn(eachString, arr);
	}

	function eachString(str){
		output.push(str);
	}

	return output;
}

gulp.task('default', function () {

	electron.start(callback);

	var changeTargets = compileAllTogether([targetPaths.javascript, targetPaths.css, targetPaths.html]);
	var restartTargets = ["./main.js"]

	watch(changeTargets, createIndex(reloadElectron))

	watch(restartTargets, createIndex(restartElectron))

});

function reloadElectron(){
	console.log("Refreshing Electron.");
	electron.reload(callback);
}
function restartElectron(){
	console.log("Restarting Electron.");
	electron.restart(callback);
}

function createIndex(andThen){
	console.log("Compiling index.html")
	return function(){
		return gulp.src('./public/index.html')
		.pipe(inject(gulp.src(targetPaths.css, {read: false}), {relative: true}))
		.pipe(gulp.dest('./public'))
		.pipe(inject(gulp.src(targetPaths.javascript).pipe(angularFilesort()), {relative: true}))
		.pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower', relative:true}))
		.pipe(gulp.dest('./public'))
		.on("end", function(){
			// console.log("Calling callback");
			andThen();
		})
	}
}